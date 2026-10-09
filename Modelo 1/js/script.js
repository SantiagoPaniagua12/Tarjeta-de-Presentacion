/**
 * ==========================================================================
 * TARJETA DE PRESENTACIÓN DIGITAL - INTERACTIVIDAD
 * Funcionalidades: Efecto 3D Tilt, Tema Claro/Oscuro, Copiar al Portapapeles,
 * Modal de Código QR y Generador de vCard (.vcf)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    init3DTilt();
    initClipboardCopy();
    initQrModal();
    initVCardDownload();
});

/* --------------------------------------------------------------------------
   1. CONTROL DE TEMA CLARO / OSCURO (CON PERSISTENCIA EN LOCALSTORAGE)
   -------------------------------------------------------------------------- */
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    // Recuperar tema guardado o preferencia del sistema
    const savedTheme = localStorage.getItem('theme-preference');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');

    applyTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme-preference', newTheme);
        showToast(`Modo ${newTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`);
    });

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        if (theme === 'light') {
            themeIcon.className = 'fa-solid fa-sun';
            themeToggle.title = 'Cambiar a Modo Oscuro';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
            themeToggle.title = 'Cambiar a Modo Claro';
        }
    }
}

/* --------------------------------------------------------------------------
   2. EFECTO INTERACTIVO 3D TILT & BRILLO DE CURSOR
   -------------------------------------------------------------------------- */
function init3DTilt() {
    const card = document.getElementById('businessCard');
    const shine = document.getElementById('cardShine');

    if (!card) return;

    // Solo habilitar tilt en pantallas de escritorio con cursor preciso
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let isHovered = false;

    card.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    card.addEventListener('mousemove', (e) => {
        if (!isHovered) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Posición relativa de -1 a 1
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8; // Rotación máxima: 8 deg
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

        // Actualizar variables del brillo dinámico
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
        isHovered = false;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
}

/* --------------------------------------------------------------------------
   3. COPIAR AL PORTAPAPELES CON FEEDBACK Y TOAST
   -------------------------------------------------------------------------- */
function initClipboardCopy() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach((button) => {
        button.addEventListener('click', async () => {
            const textToCopy = button.getAttribute('data-copy');
            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);

                // Feedback visual en el botón
                const icon = button.querySelector('i');
                const originalClass = icon.className;
                icon.className = 'fa-solid fa-check';
                button.classList.add('copied');

                showToast(`¡Copiado: ${textToCopy}!`);

                setTimeout(() => {
                    icon.className = originalClass;
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Error al copiar:', err);
                showToast('No se pudo copiar automáticamente');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   4. MODAL DEL CÓDIGO QR
   -------------------------------------------------------------------------- */
function initQrModal() {
    const qrBtn = document.getElementById('qrBtn');
    const modal = document.getElementById('qrModal');
    const closeBtn = document.getElementById('closeQrModal');
    const copyLinkBtn = document.getElementById('copyCardLinkBtn');
    const qrImage = document.getElementById('qrCodeImage');

    if (!qrBtn || !modal) return;

    // Actualizar la URL del QR con la URL actual de la página
    const currentUrl = encodeURIComponent(window.location.href);
    if (qrImage) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${currentUrl}&color=0f172a&bgcolor=ffffff&margin=1`;
    }

    const openModal = () => {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    };

    qrBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Cerrar al dar click fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Copiar enlace desde el modal
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(window.location.href);
                showToast('¡Enlace de la tarjeta copiado!');
                closeModal();
            } catch (err) {
                showToast('No se pudo copiar el enlace');
            }
        });
    }
}

/* --------------------------------------------------------------------------
   5. DESCARGAR CONTACTO DIGITAL (VCARD .VCF)
   -------------------------------------------------------------------------- */
function initVCardDownload() {
    const saveContactBtn = document.getElementById('saveContactBtn');
    if (!saveContactBtn) return;

    saveContactBtn.addEventListener('click', () => {
        const contact = {
            fullName: 'Santiago Paniagua',
            title: 'Desarrollador Web & Diseñador UI/UX',
            email: 'santiago.contacto@ejemplo.com',
            phone: '+51987654321',
            location: 'Arequipa, Perú',
            url: window.location.href
        };

        const vCardContent = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${contact.fullName}`,
            `TITLE:${contact.title}`,
            `TEL;TYPE=CELL:${contact.phone}`,
            `EMAIL;TYPE=INTERNET:${contact.email}`,
            `ADR;TYPE=WORK:;;${contact.location};;;;`,
            `URL:${contact.url}`,
            'END:VCARD'
        ].join('\r\n');

        const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${contact.fullName.replace(/\s+/g, '_')}_contacto.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showToast('Descargando contacto (.vcf)...');
    });
}

/* --------------------------------------------------------------------------
   6. COMPONENTE DE NOTIFICACIÓN TOAST
   -------------------------------------------------------------------------- */
let toastTimeout;

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}
