# 🦷 Tarjeta de Presentación Digital - Clínica Dental Sonrisa Viva

Tarjeta de presentación digital profesional, scrolleable, mobile-first y de alto rendimiento creada para la **Dra. Lucía Fernández Rojas** y la **Clínica Dental Sonrisa Viva**.

---

## 📁 Estructura de Archivos (Modelo 2)

```text
Modelo 2/
│
├── index.html            # Estructura semántica HTML5, Schema.org y SVG inline
├── styles.css            # Estilos CSS, variables de color, modo claro/oscuro y animaciones
├── script.js             # Objeto CONFIG centralizado, interactividad, QR JS puro y vCard
├── assets/
│   ├── doctora.jpg       # Fotografía profesional de la doctora
│   ├── before.jpg        # Caso clínico (Antes)
│   └── after.jpg         # Caso clínico (Después)
└── README.md             # Documentación de uso y publicación
```

---

## ⚙️ Cómo Cambiar los Datos del Negocio (Objeto `CONFIG`)

Todos los datos están centralizados en las primeras líneas de [script.js](file:///c:/Users/Lenovo/OneDrive%20-%20Universidad%20Cat%C3%B3lica%20de%20Santa%20Mar%C3%ADa/Desktop/Tarjeta%20presentaci%C3%B3n/Modelo%202/script.js). Para reutilizar o personalizar la tarjeta, solo abre `script.js` y edita el objeto:

```javascript
const CONFIG = {
    business: {
        clinicName: "Clínica Dental Sonrisa Viva",
        doctorName: "Dra. Lucía Fernández Rojas",
        doctorTitle: "Cirujano Dentista...",
        slogan: "Recuperamos tu sonrisa con tecnología y calidez humana",
        experienceYears: "+12",
        patientsTreated: "+3,500",
        // ...
    },
    contact: {
        phoneCall: "+51987654321",
        whatsappNumber: "51987654321",
        address: "Av. Ejemplo 123, Of. 401, Arequipa, Perú",
        googleMapsUrl: "https://maps.google.com/?q=-16.409047,-71.537451"
    },
    schedule: {
        timezone: "America/Lima",
        days: [ /* Horarios por día */ ]
    },
    social: {
        facebook: "https://facebook.com/...",
        instagram: "https://instagram.com/...",
        whatsapp: "https://wa.me/..."
    }
};
```
Cualquier cambio en este objeto se reflejará de forma automática en toda la página (textos, botones de llamada, enlaces de WhatsApp, estado de atención y descarga de vCard).

---

## 🌐 Cómo Publicar Gratis

### Opción 1: GitHub Pages (Recomendado)
1. Sube tu proyecto a un repositorio en **GitHub**.
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Branch**, selecciona la rama `main` y guarda los cambios.
5. En pocos segundos, GitHub te proporcionará una URL pública gratuita (ejemplo: `https://tu-usuario.github.io/Tarjeta-de-Presentacion/Modelo 2/`).

### Opción 2: Netlify (En 1 minuto arrastrando la carpeta)
1. Ingresa a [Netlify](https://www.netlify.com/) y crea una cuenta gratuita.
2. Ve a la sección **Sites** y busca la opción **"Deploy manually"** (o arrastra y suelta).
3. Arrastra la carpeta `Modelo 2` directamente a la pantalla del navegador.
4. Netlify generará al instante un enlace web seguro (con HTTPS) y personalizable.
