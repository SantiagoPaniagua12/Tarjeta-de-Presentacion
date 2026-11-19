# 🦷 Modelo 3: Tarjeta Digital PRO, "Web profesional + Google"

Es la versión mejorada del Modelo 2, pensada para venderse como paquete de **S/ 500**.

## ✅ Qué incluye el paquete

| Del paquete | Dónde está | Qué hace |
|---|---|---|
| Tarjeta con dominio propio (1 año) | `CONFIG.siteUrl` + `<head>` | El QR, la vCard y los enlaces para compartir usan el dominio del cliente |
| Agenda de citas por WhatsApp | Sección **Agendar** | Formulario con nombre, motivo, fecha y hora. Solo muestra los horarios reales de atención y bloquea domingos y horas pasadas. Abre WhatsApp con la cita ya escrita |
| Galería de 5 casos antes/después | Sección **Casos** | Pestañas, flechas, comparador deslizable y vista ampliada con botones Antes/Después |
| Reseñas de pacientes | Sección **Reseñas** + insignia en el inicio | Calificación de Google, tarjetas de reseñas y botones "Ver en Google" y "Dejar mi reseña" |
| Preguntas frecuentes | Sección **Preguntas** | 6 preguntas en acordeón, con enlace a WhatsApp para otras dudas |
| Versión en inglés | Botón **EN/ES** arriba | Traduce toda la página. El enlace `?lang=en` abre directo en inglés para pacientes extranjeros |
| Configuración de Google Maps | Servicio (ver guía abajo) | Perfil de Google Business conectado a la tarjeta |
| QR para imprimir | Sección **Compartir** | QR real y escaneable. Descarga un PNG de 1200×1500 con logo, nombre y dominio, listo para imprimir |
| Estadísticas de visitas | `CONFIG.analytics` | Google Analytics 4: visitas, clics a WhatsApp, llamadas, citas enviadas, casos vistos y más |
| 3 meses de cambios gratis | Servicio | Todo se edita en el objeto `CONFIG` de `script.js` |

**Mejoras técnicas frente al Modelo 2:**
- El QR del Modelo 2 era decorativo y no se podía escanear. Ahora es real y usa `js/qrcode.min.js` (incluido localmente, MIT).
- Las imágenes pasaron de unos 650 KB a unos 70 KB cada una, así que carga mucho más rápido con datos móviles.
- Se agregó compartir por WhatsApp, Facebook, X, Telegram y correo.
- El estado "Abierto/Cerrado" se actualiza cada minuto y muestra "abre hoy a las…".
- La barra inferior "Agendar mi cita" se oculta cuando el formulario está en pantalla.

---

## ⚙️ Cómo personalizar para un cliente

Todo está en el objeto `CONFIG` al inicio de `script.js`. Los textos que cambian con el idioma usan este formato:

```js
slogan: { es: "Texto en español", en: "Text in English" }
```

| Para cambiar… | Editar en `CONFIG` |
|---|---|
| Nombre, especialidad, biografía, COP | `business` |
| Teléfonos, WhatsApp, dirección, mapa | `contact` |
| Horarios (también controlan la agenda de citas) | `schedule.days` |
| Tratamientos (acordeón y lista del formulario) | `treatments` |
| Casos antes/después | `cases` + imágenes en `assets/casos/` |
| Reseñas y calificación | `reviews` y `google` |
| Preguntas frecuentes | `faq` |
| Mensajes de WhatsApp | `whatsappMessages` |

Los textos fijos del diseño (títulos de secciones, botones) están en español en `index.html`, y su traducción al inglés en el objeto `I18N_EN` de `script.js`.

> ⚠️ **Antes de entregar:** las reseñas, los casos y las fotos actuales son **de ejemplo**. Reemplázalos por reseñas reales copiadas de Google y por fotos reales de pacientes, con su autorización. Publicar reseñas o resultados inventados como reales puede traerle problemas legales al cliente.

### Fotos de casos
- Usa `caso-N-antes.jpg` y `caso-N-despues.jpg` en `assets/casos/`.
- Proporción **4:3**, unos 960×720 px, con el mismo encuadre en el antes y el después.
- Comprímelas a menos de 150 KB (por ejemplo con [squoosh.app](https://squoosh.app)).

---

## 🌐 1. Dominio propio

1. Compra el dominio a nombre del cliente:
   - `.com`: Namecheap, Porkbun o Cloudflare (unos US$ 10–15 al año)
   - `.pe`: [punto.pe](https://punto.pe) (unos S/ 100–130 al año)
2. Publica la carpeta `Modelo 3` en **Netlify** (arrastrar y soltar) o en **GitHub Pages**.
3. Conecta el dominio:
   - **Netlify:** *Domain settings → Add custom domain* y sigue las instrucciones de DNS.
   - **GitHub Pages:** *Settings → Pages → Custom domain*. En el DNS crea un registro `CNAME www → tu-usuario.github.io` y 4 registros `A` a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`.
4. Pon el dominio en `CONFIG.siteUrl` (por ejemplo `"https://www.dentalpaniagua.com/"`).
5. Reemplaza `www.sonrisavivadental.com` en el `<head>` de `index.html` (canonical, og:url, og:image y JSON-LD).

## 📍 2. Perfil de Google Business (Google Maps)

1. Entra a [business.google.com](https://business.google.com) con la cuenta Gmail del cliente.
2. Crea o reclama el negocio con la categoría **Dentista**, la dirección exacta, el teléfono y el horario (el mismo de `CONFIG.schedule`).
3. En **Sitio web** pon el dominio de la tarjeta.
4. Sube al menos 10 fotos: fachada, consultorio, equipo y doctora.
5. Verifica el perfil (Google envía un código por video, SMS o correo).
6. Copia los enlaces a `CONFIG.google`:
   - `reviewsUrl`: botón **Compartir** del perfil en Google Maps.
   - `writeReviewUrl`: en el panel, **Pedir reseñas** y copiar el enlace.
   - `rating` y `reviewCount`: los números reales del perfil (actualízalos cada mes como parte del soporte).
7. Recomiéndale al doctor que envíe el enlace de reseña a cada paciente satisfecho.

## 📊 3. Estadísticas de visitas (Google Analytics 4)

1. Entra a [analytics.google.com](https://analytics.google.com) y crea una propiedad con un flujo de datos **Web** y el dominio de la tarjeta.
2. Copia el **ID de medición** (`G-XXXXXXXXXX`) en `CONFIG.analytics.ga4MeasurementId`.
3. Agrega al cliente como **Lector** de la propiedad para que vea sus números desde la app de Google Analytics.

Eventos que se registran automáticamente:

| Evento | Cuándo |
|---|---|
| `click_whatsapp`, `click_call`, `click_maps` | Clic en WhatsApp, llamar o mapa |
| `booking_submit` | Cita enviada desde el formulario (incluye el tratamiento) |
| `click_whatsapp_treatment` | Consulta por WhatsApp desde un tratamiento |
| `case_view` | Ve un caso antes/después |
| `faq_open` | Abre una pregunta frecuente |
| `click_reviews_google`, `click_write_review` | Clic en las reseñas |
| `share`, `qr_download`, `vcard_download` | Compartir, descargar el QR o guardar el contacto |
| `language_change` | Cambio a inglés o español |

Para medir un botón nuevo basta con agregarle el atributo `data-track="nombre_del_evento"`.

## 🖨️ 4. QR para imprimir

En la sección **Compartir**, el botón **"Descargar QR para imprimir"** genera un PNG de alta resolución. Hazlo **después** de configurar `CONFIG.siteUrl` para que el QR apunte al dominio final. Sirve para recepción, tarjetas físicas, volantes o stickers.

---

## 📁 Estructura

```text
Modelo 3/
├── index.html          # Estructura, SEO local (Schema.org) y textos en español
├── styles.css          # Estilos del Modelo 2 + componentes nuevos
├── script.js           # CONFIG, traducciones, agenda, galería, QR, estadísticas
├── js/qrcode.min.js    # Generador de QR (qrcode-generator 1.4.4, MIT)
└── assets/
    ├── doctora.jpg
    ├── og-image.jpg    # Imagen de vista previa al compartir (1200×630)
    └── casos/          # caso-1-antes.jpg … caso-5-despues.jpg
```
