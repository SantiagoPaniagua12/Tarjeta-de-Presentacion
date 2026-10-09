# 🪪 Tarjeta de Presentación Digital

Una tarjeta de presentación web moderna, interactiva y responsiva con estética de **Glassmorphism**, soporte para **Modo Oscuro / Modo Claro**, efecto **3D Tilt**, modal para **Código QR** y descarga automática de **vCard (.vcf)**.

---

## 📁 Estructura del Proyecto

```text
Tarjeta-de-Presentacion/
│
├── index.html            # Estructura semántica HTML5 de la tarjeta
├── css/
│   └── styles.css        # Estilos modernos, temas de color y animaciones
├── js/
│   └── script.js         # Efecto 3D Tilt, selector de temas, copiado y QR
├── assets/
│   └── avatar.jpg        # Foto de perfil / Avatar
└── README.md             # Documentación del proyecto
```

---

## ✨ Características y Funcionalidades

- **Diseño Glassmorphism Premium**: Efecto translúcido, bordes luminosos y sombras multicapa.
- **Efecto 3D Tilt Interactivo**: La tarjeta responde suavemente al movimiento del cursor en computadoras de escritorio.
- **Alternador de Tema (Dark / Light Mode)**: Detecta y guarda tu preferencia en `localStorage`.
- **Copiado al Portapapeles con un Clic**: Botones rápidos para copiar el correo electrónico y el número de teléfono con notificación flotante (Toast).
- **Código QR Integrado**: Modal con código QR listo para escanear desde cualquier smartphone.
- **Descarga de Contacto vCard (.vcf)**: Permite a los usuarios guardar tus datos directamente en los contactos de su teléfono con un clic.
- **Botón Directo a WhatsApp**: Enlace preconfigurado con mensaje personalizado.
- **Enlaces a Redes Sociales**: LinkedIn, GitHub, Instagram, X (Twitter) y Portafolio web con iconos oficiales.
- **100% Responsivo**: Adaptado para cualquier tamaño de pantalla (móviles, tablets y pantallas de escritorio).

---

## 🛠️ Cómo Personalizar Tus Datos

Abre el archivo [index.html](file:///c:/Users/Lenovo/OneDrive%20-%20Universidad%20Cat%C3%B3lica%20de%20Santa%20Mar%C3%ADa/Desktop/Tarjeta%20presentaci%C3%B3n/index.html):

1. **Foto de perfil**: Reemplaza la imagen en `assets/avatar.jpg` o cambia la etiqueta `src="assets/avatar.jpg"` en la línea del avatar.
2. **Nombre y Profesión**: Modifica `<h1>Santiago Paniagua</h1>` y `<p class="profile-role">...</p>`.
3. **Ubicación y Bio**: Actualiza el texto dentro de `.profile-location` y `.profile-bio`.
4. **Habilidades**: Agrega o cambia las etiquetas dentro de `.skills-list`.
5. **Teléfono y Correo**: Actualiza las direcciones en los enlaces `href="mailto:..."`, `href="tel:..."` y en los atributos `data-copy`.
6. **Redes Sociales**: Cambia los enlaces `href="https://..."` en la sección `.social-links`.

---

## 🚀 Cómo Abrir el Proyecto

Simplemente haz doble clic en el archivo [index.html](file:///c:/Users/Lenovo/OneDrive%20-%20Universidad%20Cat%C3%B3lica%20de%20Santa%20Mar%C3%ADa/Desktop/Tarjeta%20presentaci%C3%B3n/index.html) para abrirlo en cualquier navegador (Google Chrome, Edge, Firefox, Safari).
