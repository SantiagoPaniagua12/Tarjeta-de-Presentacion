# 🔌 Conectar la agenda de la tarjeta con el sistema del consultorio (Laravel + Inertia + React)

Con esta integración, la tarjeta deja de calcular las horas solo con el horario fijo. Le pregunta al sistema qué horas están **realmente libres** y guarda la cita en el sistema como **pendiente**. La recepción la confirma desde el panel (Inertia + React).

```
Tarjeta (Netlify)                         Sistema (Laravel)
─────────────────                         ─────────────────
Paciente elige fecha y motivo   ──GET──▶  /api/tarjeta/disponibilidad?fecha=2026-11-21&tratamiento=implantes
Muestra solo horas libres       ◀──────   { "fecha": "2026-11-21", "horas": ["09:00", "11:30"] }

Paciente pulsa "Reservar"       ──POST─▶  /api/tarjeta/citas  { nombre, telefono, tratamiento, fecha, hora, ... }
                                ◀──────   201 { "id": 1042, "estado": "pendiente" }
                                          409 { "message": "...", "horas": [...] }  ← alguien la tomó antes
Botón "Enviar por WhatsApp" con el código #1042
```

**Plan B automático:** si `CONFIG.bookingApi.url` está vacío, o el sistema no responde en 6 segundos o devuelve un error, la tarjeta vuelve sola al modo anterior: horario de `CONFIG.schedule` y solicitud por WhatsApp. El doctor nunca pierde pacientes porque el servidor se cayó.

---

## 1. Activar en la tarjeta

En `script.js`:

```js
bookingApi: {
    url: "https://sistema.sonrisavivadental.com/api/tarjeta",
    timeoutMs: 6000,
    cacheSeconds: 60
},
```

Solo eso. La tarjeta cambia el botón a **"Reservar mi cita"** y el texto de la sección. Envía los **identificadores** del tratamiento (`evaluacion`, `implantes`, `rehabilitacion`, `estetica`, `protesis`, `urgencia`), que son los `id` de `CONFIG.treatments` más `evaluacion` y `urgencia`.

---

## 2. Laravel (11 o 12)

### 2.1 Preparación

```bash
php artisan install:api          # crea routes/api.php (si aún no existe)
php artisan config:publish cors  # crea config/cors.php
```

En `.env`:

```env
APP_TIMEZONE=America/Lima
TARJETA_ORIGENES=https://tarjetasdepresentacion.netlify.app,https://www.sonrisavivadental.com
```

> Con `APP_TIMEZONE=America/Lima`, las horas se guardan y comparan en hora de Perú, igual que en la tarjeta.

### 2.2 `config/agenda.php`

Debe coincidir con `CONFIG.schedule` de la tarjeta. Si tu sistema ya guarda el horario en la base de datos, lee de ahí.

```php
<?php

return [
    'intervalo' => 30,             // cada cuántos minutos empieza un turno
    'anticipacion_minima' => 60,   // minutos mínimos para citas del mismo día
    'dias_maximos' => 60,          // hasta cuántos días adelante se puede reservar

    // Carbon: 0 = domingo … 6 = sábado. null = cerrado
    'horario' => [
        0 => null,
        1 => ['08:30', '18:30'],
        2 => ['08:30', '18:30'],
        3 => ['08:30', '18:30'],
        4 => ['08:30', '18:30'],
        5 => ['08:30', '18:30'],
        6 => ['08:30', '12:30'],
    ],

    // Duración en minutos según el motivo que envía la tarjeta
    'duraciones' => [
        'evaluacion'     => 30,
        'urgencia'       => 30,
        'implantes'      => 60,
        'rehabilitacion' => 60,
        'estetica'       => 60,
        'protesis'       => 45,
    ],
];
```

### 2.3 Migración

Si ya tienes una tabla de citas, solo agrégale lo que falte (`fin`, `estado`, `origen`). Para los bloqueos (vacaciones, almuerzo, congresos), crea una "cita" con `estado = 'bloqueo'`: ocupa el horario igual que una cita.

```php
Schema::create('citas', function (Blueprint $table) {
    $table->id();
    $table->string('nombre', 80);
    $table->string('telefono', 20);
    $table->string('tratamiento', 30);
    $table->dateTime('inicio');
    $table->dateTime('fin');
    $table->string('estado', 20)->default('pendiente'); // pendiente | confirmada | atendida | cancelada | bloqueo
    $table->string('origen', 20)->default('sistema');   // sistema | tarjeta
    $table->boolean('primera_visita')->default(false);
    $table->text('notas')->nullable();
    $table->timestamps();

    $table->index(['inicio', 'fin']);
    $table->index(['estado', 'origen']);
});
```

### 2.4 Modelo `app/Models/Cita.php`

```php
class Cita extends Model
{
    protected $fillable = [
        'nombre', 'telefono', 'tratamiento', 'inicio', 'fin',
        'estado', 'origen', 'primera_visita', 'notas',
    ];

    protected function casts(): array
    {
        return [
            'inicio' => 'datetime',
            'fin' => 'datetime',
            'primera_visita' => 'boolean',
        ];
    }

    /** Citas que ocupan horario (todo menos las canceladas). */
    public function scopeOcupan($query)
    {
        return $query->where('estado', '!=', 'cancelada');
    }
}
```

### 2.5 Servicio `app/Services/Agenda.php`

Toda la lógica está aquí. **Úsalo también en el panel de recepción** al crear citas a mano: así ambos caminos respetan las mismas reglas y el mismo bloqueo.

```php
<?php

namespace App\Services;

use App\Models\Cita;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Cache;

class Agenda
{
    public function duracion(?string $tratamiento): int
    {
        return config("agenda.duraciones.$tratamiento", config('agenda.intervalo'));
    }

    public function fechaPermitida(CarbonImmutable $fecha): bool
    {
        $hoy = CarbonImmutable::today();

        return $fecha->betweenIncluded($hoy, $hoy->addDays(config('agenda.dias_maximos')));
    }

    /** @return string[] Horas libres en formato "HH:MM". */
    public function horasLibres(CarbonImmutable $fecha, int $duracion): array
    {
        $horario = config('agenda.horario')[$fecha->dayOfWeek] ?? null;
        if (! $horario || ! $this->fechaPermitida($fecha)) {
            return [];
        }

        [$abre, $cierra] = $horario;
        $inicioDia = $fecha->setTimeFromTimeString($abre);
        $finDia = $fecha->setTimeFromTimeString($cierra);
        $minimo = CarbonImmutable::now()->addMinutes(config('agenda.anticipacion_minima'));

        $ocupadas = Cita::ocupan()
            ->where('inicio', '<', $finDia)
            ->where('fin', '>', $inicioDia)
            ->get(['inicio', 'fin']);

        $libres = [];
        for ($t = $inicioDia; $t->addMinutes($duracion) <= $finDia; $t = $t->addMinutes(config('agenda.intervalo'))) {
            if ($t < $minimo) {
                continue;
            }
            $fin = $t->addMinutes($duracion);
            $choca = $ocupadas->contains(fn (Cita $c) => $c->inicio < $fin && $c->fin > $t);
            if (! $choca) {
                $libres[] = $t->format('H:i');
            }
        }

        return $libres;
    }

    /**
     * Reserva con bloqueo para que dos pacientes no tomen la misma hora a la vez.
     * Devuelve null si la hora ya no está libre.
     */
    public function reservar(array $datos, string $origen = 'tarjeta'): ?Cita
    {
        $fecha = CarbonImmutable::createFromFormat('Y-m-d', $datos['fecha'])->startOfDay();
        $inicio = CarbonImmutable::createFromFormat('Y-m-d H:i', "{$datos['fecha']} {$datos['hora']}");
        $duracion = $this->duracion($datos['tratamiento']);

        return Cache::lock('agenda:reservar', 10)->block(5, function () use ($datos, $fecha, $inicio, $duracion, $origen) {
            if (! in_array($datos['hora'], $this->horasLibres($fecha, $duracion), true)) {
                return null;
            }

            return Cita::create([
                'nombre' => $datos['nombre'],
                'telefono' => $datos['telefono'],
                'tratamiento' => $datos['tratamiento'],
                'inicio' => $inicio,
                'fin' => $inicio->addMinutes($duracion),
                'estado' => $origen === 'tarjeta' ? 'pendiente' : 'confirmada',
                'origen' => $origen,
                'primera_visita' => $datos['primera_visita'] ?? false,
                'notas' => $datos['notas'] ?? null,
            ]);
        });
    }
}
```

> `Cache::lock` necesita un driver de caché con bloqueos: `database` (el de Laravel 11 por defecto), `redis` o `file` si hay un solo servidor.

### 2.6 Controlador `app/Http/Controllers/Api/TarjetaCitaController.php`

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Agenda;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TarjetaCitaController extends Controller
{
    public function __construct(private Agenda $agenda) {}

    public function disponibilidad(Request $request)
    {
        $datos = $request->validate([
            'fecha' => ['required', 'date_format:Y-m-d'],
            'tratamiento' => ['nullable', Rule::in(array_keys(config('agenda.duraciones')))],
        ]);

        $fecha = CarbonImmutable::createFromFormat('Y-m-d', $datos['fecha'])->startOfDay();

        return response()->json([
            'fecha' => $fecha->toDateString(),
            'horas' => $this->agenda->horasLibres($fecha, $this->agenda->duracion($datos['tratamiento'] ?? null)),
        ]);
    }

    public function reservar(Request $request)
    {
        $datos = $request->validate([
            'nombre' => ['required', 'string', 'max:80'],
            'telefono' => ['required', 'string', 'regex:/^\+?[0-9\s()\-]{9,20}$/'],
            'tratamiento' => ['required', Rule::in(array_keys(config('agenda.duraciones')))],
            'fecha' => ['required', 'date_format:Y-m-d'],
            'hora' => ['required', 'date_format:H:i'],
            'primera_visita' => ['boolean'],
            'notas' => ['nullable', 'string', 'max:300'],
            'website' => ['prohibited'], // campo trampa: si viene lleno, es un bot
        ]);

        $cita = $this->agenda->reservar($datos);

        if (! $cita) {
            $fecha = CarbonImmutable::createFromFormat('Y-m-d', $datos['fecha'])->startOfDay();

            return response()->json([
                'message' => 'Ese horario ya no está disponible.',
                'horas' => $this->agenda->horasLibres($fecha, $this->agenda->duracion($datos['tratamiento'])),
            ], 409);
        }

        // Opcional: avisar a recepción (correo, notificación en el panel, etc.)
        // event(new CitaRecibidaDesdeTarjeta($cita));

        return response()->json(['id' => $cita->id, 'estado' => $cita->estado], 201);
    }
}
```

### 2.7 Rutas `routes/api.php`

```php
use App\Http\Controllers\Api\TarjetaCitaController;

Route::prefix('tarjeta')->group(function () {
    Route::get('disponibilidad', [TarjetaCitaController::class, 'disponibilidad'])
        ->middleware('throttle:60,1');   // 60 consultas por minuto por IP
    Route::post('citas', [TarjetaCitaController::class, 'reservar'])
        ->middleware('throttle:5,1');    // 5 reservas por minuto por IP
});
```

### 2.8 CORS `config/cors.php`

```php
return [
    'paths' => ['api/tarjeta/*'],
    'allowed_methods' => ['GET', 'POST'],
    'allowed_origins' => array_filter(explode(',', env('TARJETA_ORIGENES', ''))),
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['Content-Type', 'Accept'],
    'exposed_headers' => [],
    'max_age' => 3600,
    'supports_credentials' => false,
];
```

Sin esto, el navegador bloquea las peticiones de la tarjeta (que está en otro dominio) aunque Laravel responda bien.

---

## 3. Panel de recepción (Inertia + React)

Las citas llegan con `estado = 'pendiente'` y `origen = 'tarjeta'`. Ejemplo mínimo para listarlas y confirmarlas:

```php
// routes/web.php (dentro de tu grupo con auth)
Route::get('/citas/pendientes', function () {
    return Inertia::render('Citas/Pendientes', [
        'citas' => Cita::where('estado', 'pendiente')->orderBy('inicio')->get(),
    ]);
})->name('citas.pendientes');

Route::patch('/citas/{cita}/estado', function (Request $request, Cita $cita) {
    $cita->update($request->validate(['estado' => ['required', Rule::in(['confirmada', 'cancelada'])]]));
    return back();
})->name('citas.estado');
```

```jsx
// resources/js/Pages/Citas/Pendientes.jsx
import { router } from '@inertiajs/react';

export default function Pendientes({ citas }) {
    const cambiar = (id, estado) => router.patch(route('citas.estado', id), { estado }, { preserveScroll: true });

    return (
        <ul>
            {citas.map((c) => (
                <li key={c.id}>
                    #{c.id} · {c.nombre} · {c.telefono} · {c.tratamiento} · {new Date(c.inicio).toLocaleString('es-PE')}
                    <button onClick={() => cambiar(c.id, 'confirmada')}>Confirmar</button>
                    <button onClick={() => cambiar(c.id, 'cancelada')}>Cancelar</button>
                    <a href={`https://wa.me/${c.telefono.replace(/\D/g, '')}`} target="_blank" rel="noopener">WhatsApp</a>
                </li>
            ))}
        </ul>
    );
}
```

Al cancelar, el horario vuelve a aparecer libre en la tarjeta (en menos de un minuto, por la caché de `cacheSeconds`).

---

## 4. Seguridad y buenas prácticas

- La API **solo devuelve horas libres**, nunca nombres ni datos de otros pacientes.
- **Throttle** por IP y **campo trampa** (`website`) contra bots. Si aun así llegan citas falsas, agrega [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) (es gratis).
- Las citas de la tarjeta entran como **pendientes**: nadie ocupa la agenda de forma definitiva sin que la recepción lo vea.
- El **bloqueo** (`Cache::lock`) y la doble comprobación al reservar evitan que dos pacientes tomen la misma hora a la vez.
- Usa **HTTPS** en el sistema. La tarjeta en Netlify es HTTPS y el navegador bloquea llamadas a un `http://`.

## 5. Probar rápido

```bash
curl "https://sistema.sonrisavivadental.com/api/tarjeta/disponibilidad?fecha=2026-11-23&tratamiento=evaluacion"

curl -X POST "https://sistema.sonrisavivadental.com/api/tarjeta/citas" \
  -H "Content-Type: application/json" -H "Accept: application/json" \
  -d '{"nombre":"Prueba","telefono":"987654321","tratamiento":"evaluacion","fecha":"2026-11-23","hora":"09:00","primera_visita":true}'
```

Luego, en la tarjeta: abre la consola del navegador. Si ves *"Agenda: el sistema del consultorio no respondió"*, revisa la URL, el CORS o el HTTPS.
