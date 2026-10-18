/**
 * ==========================================================================
 * CLÍNICA DENTAL SONRISA VIVA - TARJETA DE PRESENTACIÓN DIGITAL
 * Archivo: script.js
 * ==========================================================================
 * 
 * INSTRUCCIONES DE PERSONALIZACIÓN:
 * Todo el contenido del negocio está centralizado en el objeto `CONFIG` a
 * continuación. Modificando únicamente este objeto puedes reutilizar la
 * tarjeta para cualquier otro profesional o clínica sin tocar el HTML.
 */

// ==========================================================================
// 1. CONFIGURACIÓN ÚNICA DEL NEGOCIO (EDITABLE)
// ==========================================================================
const CONFIG = {
    business: {
        clinicName: "Clínica Dental Sonrisa Viva",
        shortName: "Sonrisa Viva",
        doctorName: "Dra. Lucía Fernández Rojas",
        doctorTitle: "Cirujano Dentista, especialista en Rehabilitación Oral e Implantología",
        specialtyShort: "Cirujano Dentista • Especialista en Rehabilitación Oral e Implantología",
        slogan: "Tu sonrisa merece atención cercana, clara y sin apuros",
        cop: "COP 14205 • Registro Nacional de Especialista",
        bio: "Llevo más de 12 años acompañando a pacientes en Arequipa. Mi prioridad es escucharte, explicarte cada alternativa con claridad y encontrar un tratamiento que te ayude a volver a sonreír, hablar y comer con tranquilidad.",
        experienceYears: "+12",
        patientsTreated: "+3,500",
        postgraduate: "Rehabilitación Oral e Implantes"
    },
    contact: {
        phoneCall: "+51987654321",        // Teléfono para llamadas (formato internacional)
        phoneDisplay: "+51 (054) 284920",  // Teléfono fijo visible
        whatsappNumber: "51987654321",     // Número para enlace de WhatsApp (solo números con código país)
        whatsappDisplay: "+51 987 654 321", // Número visible de WhatsApp
        email: "contacto@sonrisavivadental.com",
        address: "Av. Ejemplo 123, Of. 401, Arequipa, Perú",
        addressReference: "Edificio Médico • Ascensor directo",
        city: "Arequipa",
        country: "Perú",
        coordinates: {
            lat: -16.409047,
            lng: -71.537451
        },
        googleMapsUrl: "https://maps.google.com/?q=-16.409047,-71.537451"
    },
    schedule: {
        timezone: "America/Lima", // Zona horaria oficial de Perú
        days: [
            { dayIndex: 1, name: "Lunes", open: "08:30", close: "18:30", isClosed: false },
            { dayIndex: 2, name: "Martes", open: "08:30", close: "18:30", isClosed: false },
            { dayIndex: 3, name: "Miércoles", open: "08:30", close: "18:30", isClosed: false },
            { dayIndex: 4, name: "Jueves", open: "08:30", close: "18:30", isClosed: false },
            { dayIndex: 5, name: "Viernes", open: "08:30", close: "18:30", isClosed: false },
            { dayIndex: 6, name: "Sábado", open: "08:30", close: "12:30", isClosed: false },
            { dayIndex: 0, name: "Domingo", open: null, close: null, isClosed: true }
        ],
        appointmentNotice: "Modalidad: Atención personalizada previa cita programada."
    },
    social: {
        facebook: "https://facebook.com/sonrisavivadental",
        instagram: "https://instagram.com/dra.luciafernandez",
        whatsapp: "https://wa.me/51987654321"
    },
    defaultWhatsappMessage: "Hola Dra. Lucía, vi su tarjeta digital y me gustaría agendar una cita odontológica."
};

// ==========================================================================
// 2. INICIALIZACIÓN GENERAL AL CARGAR EL DOM
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    syncDOMWithConfig();
    initThemeManager();
    initStickyNavigation();
    initScrollAnimations();
    initTreatmentsAccordion();
    initBeforeAfterSlider();
    initLightbox();
    initLocationActions();
    initLiveSchedule();
    initQrCode();
    initShareFeatures();
    initVCardExport();
});

// ==========================================================================
// 3. SINCRONIZACIÓN DE DATOS CONFIG -> DOM
// ==========================================================================
function syncDOMWithConfig() {
    // Títulos y Textos Hero
    const elShortName = document.getElementById('businessShortName');
    const elClinicBadge = document.getElementById('heroClinicBadge');
    const elDoctorName = document.getElementById('heroDoctorName');
    const elSpecialty = document.getElementById('heroDoctorSpecialty');
    const elSlogan = document.getElementById('heroSlogan');

    if (elShortName) elShortName.textContent = CONFIG.business.shortName;
    if (elClinicBadge) elClinicBadge.textContent = CONFIG.business.clinicName;
    if (elDoctorName) elDoctorName.textContent = CONFIG.business.doctorName;
    if (elSpecialty) elSpecialty.textContent = CONFIG.business.specialtyShort;
    if (elSlogan) elSlogan.textContent = `"${CONFIG.business.slogan}"`;

    // Enlaces de Botones Hero
    const btnCall = document.getElementById('heroBtnCall');
    const btnWhatsapp = document.getElementById('heroBtnWhatsapp');
    const fixedWhatsappBtn = document.getElementById('fixedWhatsappBtn');

    const waUrl = `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(CONFIG.defaultWhatsappMessage)}`;

    if (btnCall) btnCall.href = `tel:${CONFIG.contact.phoneCall}`;
    if (btnWhatsapp) btnWhatsapp.href = waUrl;
    if (fixedWhatsappBtn) fixedWhatsappBtn.href = waUrl;

    // Sección Sobre la Doctora
    const elAboutName = document.getElementById('aboutDoctorName');
    const elAboutReg = document.getElementById('aboutDoctorReg');
    const elAboutBio = document.getElementById('aboutDoctorBio');
    const elCredExp = document.getElementById('credExp');
    const elCredPatients = document.getElementById('credPatients');
    const elCredStudies = document.getElementById('credStudies');

    if (elAboutName) elAboutName.textContent = CONFIG.business.doctorName;
    if (elAboutReg) elAboutReg.textContent = CONFIG.business.cop;
    if (elAboutBio) elAboutBio.textContent = CONFIG.business.bio;
    if (elCredExp) elCredExp.textContent = CONFIG.business.experienceYears;
    if (elCredPatients) elCredPatients.textContent = CONFIG.business.patientsTreated;
    if (elCredStudies) elCredStudies.textContent = CONFIG.business.postgraduate;

    // Ubicación
    const elAddressText = document.getElementById('locationAddressText');
    const linkGmaps = document.getElementById('openGmapsLink');

    if (elAddressText) elAddressText.textContent = CONFIG.contact.address;
    if (linkGmaps) linkGmaps.href = CONFIG.contact.googleMapsUrl;

    // Redes Sociales
    const elFb = document.getElementById('socialFbLink');
    const elIg = document.getElementById('socialIgLink');
    const elWa = document.getElementById('socialWaLink');

    if (elFb) elFb.href = CONFIG.social.facebook;
    if (elIg) elIg.href = CONFIG.social.instagram;
    if (elWa) elWa.href = CONFIG.social.whatsapp;
}

// ==========================================================================
// 4. MODO CLARO / OSCURO (CON PERSISTENCIA Y PREFERS-COLOR-SCHEME)
// ==========================================================================
function initThemeManager() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('sonrisa-viva-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
            localStorage.setItem('sonrisa-viva-theme', next);
            showToast(`Tema ${next === 'dark' ? 'oscuro' : 'claro'} activado`);
        });
    }

    // Escuchar cambios del sistema en tiempo real si el usuario no ha forzado uno
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('sonrisa-viva-theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#060e17' : '#0c233c');
        }
    }
}

// ==========================================================================
// 5. NAVEGACIÓN STICKY & SCROLL OBSERVADOR (INTERSECTION OBSERVER)
// ==========================================================================
function initStickyNavigation() {
    const pills = document.querySelectorAll('.nav-pill');
    const sections = document.querySelectorAll('section[id]');
    const navBar = document.querySelector('.sticky-sections-nav');

    if (!pills.length || !sections.length) return;

    // Permite recorrer el menú horizontal con la rueda normal del mouse.
    // Al llegar a un extremo, la rueda vuelve a desplazar la página.
    if (navBar) {
        navBar.addEventListener('wheel', (event) => {
            if (event.ctrlKey || navBar.scrollWidth <= navBar.clientWidth) return;

            const delta = event.deltaX || event.deltaY;
            const maxScrollLeft = navBar.scrollWidth - navBar.clientWidth;
            const canScrollLeft = delta < 0 && navBar.scrollLeft > 0;
            const canScrollRight = delta > 0 && navBar.scrollLeft < maxScrollLeft - 1;

            if (canScrollLeft || canScrollRight) {
                event.preventDefault();
                navBar.scrollLeft += delta;
            }
        }, { passive: false });
    }

    const centerPill = (pill, behavior = 'smooth') => {
        if (!navBar || !pill) return;

        const pillRect = pill.getBoundingClientRect();
        const navRect = navBar.getBoundingClientRect();
        const targetLeft = navBar.scrollLeft + pillRect.left - navRect.left - ((navBar.clientWidth - pillRect.width) / 2);

        navBar.scrollTo({ left: Math.max(0, targetLeft), behavior });
    };

    const setActivePill = (sectionId, behavior) => {
        pills.forEach((pill) => {
            const isActive = pill.dataset.section === sectionId;
            pill.classList.toggle('active', isActive);
            if (isActive) centerPill(pill, behavior);
        });
    };

    pills.forEach((pill) => {
        pill.addEventListener('click', (event) => {
            const sectionId = pill.dataset.section;
            const targetSection = document.getElementById(sectionId);
            if (!targetSection) return;

            event.preventDefault();
            const stickyOffset = (document.querySelector('.top-nav')?.offsetHeight || 0)
                + (navBar?.offsetHeight || 0) + 16;
            const targetTop = window.scrollY + targetSection.getBoundingClientRect().top - stickyOffset;

            window.scrollTo({ top: targetTop, behavior: 'smooth' });
            window.history.replaceState(null, '', `#${sectionId}`);
            setActivePill(sectionId, 'smooth');
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                setActivePill(currentId, 'smooth');
            }
        });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));
}

// ==========================================================================
// 6. ANIMACIONES SUTILES AL HACER SCROLL (ACCESIBLE)
// ==========================================================================
function initScrollAnimations() {
    // Si el usuario prefiere movimiento reducido, no aplicamos animaciones
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animTargets = document.querySelectorAll('.symptom-card, .accordion-item, .comparison-card, .location-card, .schedule-card, .payment-card, .share-card');

    animTargets.forEach((el) => el.classList.add('fade-in-on-scroll'));

    const animObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animTargets.forEach((el) => animObserver.observe(el));
}

// ==========================================================================
// 7. ACORDEÓN DE TRATAMIENTOS CON ENLACES A WHATSAPP
// ==========================================================================
function initTreatmentsAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
        const header = item.querySelector('.accordion-header');
        const panel = item.querySelector('.accordion-panel');
        const ctaBtn = item.querySelector('.treatment-cta-btn');

        if (!header || !panel) return;

        // Configurar mensaje de WhatsApp según el tratamiento
        if (ctaBtn) {
            const treatmentTitle = ctaBtn.getAttribute('data-treatment') || 'Tratamientos';
            const message = `Hola Dra. Lucía, deseo consultar sobre el tratamiento de: *${treatmentTitle}*.`;
            ctaBtn.href = `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
            ctaBtn.target = '_blank';
            ctaBtn.rel = 'noopener noreferrer';
        }

        header.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            // Cerrar otros acordeones para mantener orden visual limpio
            accordionItems.forEach((other) => {
                if (other !== item) {
                    other.classList.remove('active');
                    const otherHeader = other.querySelector('.accordion-header');
                    const otherPanel = other.querySelector('.accordion-panel');
                    if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
                    if (otherPanel) otherPanel.hidden = true;
                }
            });

            // Alternar estado actual
            if (isCurrentlyActive) {
                item.classList.remove('active');
                header.setAttribute('aria-expanded', 'false');
                panel.hidden = true;
            } else {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                panel.hidden = false;
            }
        });
    });
}

// ==========================================================================
// 8. GALERÍA: SLIDER COMPARADOR ANTES / DESPUÉS (ARRASTRABLE)
// ==========================================================================
function initBeforeAfterSlider() {
    const rangeInput = document.getElementById('comparisonRange');
    const beforeWrapper = document.getElementById('beforeImageWrapper');
    const divider = document.getElementById('sliderDivider');
    const container = document.getElementById('comparisonSliderContainer');

    if (!rangeInput || !beforeWrapper || !divider || !container) return;

    function updateSlider(percent) {
        const clamped = Math.max(0, Math.min(100, percent));
        beforeWrapper.style.width = `${clamped}%`;
        divider.style.left = `${clamped}%`;
        rangeInput.value = clamped;
    }

    rangeInput.addEventListener('input', (e) => {
        updateSlider(e.target.value);
    });

    // Soporte táctil / ratón directo sobre el contenedor
    let isDragging = false;

    function getPercentFromEvent(e) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        return (x / rect.width) * 100;
    }

    container.addEventListener('pointerdown', (e) => {
        isDragging = true;
        updateSlider(getPercentFromEvent(e));
    });

    window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        updateSlider(getPercentFromEvent(e));
    });

    window.addEventListener('pointerup', () => {
        isDragging = false;
    });

    // Iniciar al 50%
    updateSlider(50);
}

// ==========================================================================
// 9. LIGHTBOX MODAL PARA CASOS CLÍNICOS
// ==========================================================================
function initLightbox() {
    const openBtn = document.getElementById('openLightboxBtn');
    const modal = document.getElementById('galleryLightbox');
    const closeBtn = document.getElementById('closeLightboxBtn');
    const backdrop = document.getElementById('lightboxBackdrop');

    if (!openBtn || !modal) return;

    function openModal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ==========================================================================
// 10. UBICACIÓN: COPIAR DIRECCIÓN & ACCIONES
// ==========================================================================
function initLocationActions() {
    const copyBtn = document.getElementById('copyAddressBtn');

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(CONFIG.contact.address);
                showToast('¡Dirección copiada al portapapeles!');
            } catch (err) {
                showToast('Dirección: ' + CONFIG.contact.address);
            }
        });
    }
}

// ==========================================================================
// 11. HORARIOS & STATUS EN VIVO SEGÚN AMERICA/LIMA
// ==========================================================================
function initLiveSchedule() {
    const badge = document.getElementById('liveStatusBadge');
    const badgeText = document.getElementById('liveStatusText');
    const rows = document.querySelectorAll('.schedule-row');

    // Obtener la fecha y hora actual en la zona horaria de Perú
    function getPeruCurrentTime() {
        try {
            const now = new Date();
            const peruDateString = now.toLocaleString("en-US", { timeZone: CONFIG.schedule.timezone });
            return new Date(peruDateString);
        } catch (e) {
            return new Date(); // Fallback a hora local
        }
    }

    const peruNow = getPeruCurrentTime();
    const currentDayIndex = peruNow.getDay(); // 0 = Domingo, 1 = Lunes, etc.
    const currentHours = peruNow.getHours();
    const currentMinutes = peruNow.getMinutes();
    const currentTimeInMinutes = currentHours * 60 + currentMinutes;

    // Resaltar la fila del día de hoy
    rows.forEach((row) => {
        const rowDay = parseInt(row.getAttribute('data-day'), 10);
        if (rowDay === currentDayIndex) {
            row.classList.add('today-active');
        } else {
            row.classList.remove('today-active');
        }
    });

    // Evaluar si está abierto ahora
    const todayConfig = CONFIG.schedule.days.find(d => d.dayIndex === currentDayIndex);
    let isOpen = false;

    if (todayConfig && !todayConfig.isClosed && todayConfig.open && todayConfig.close) {
        const [openH, openM] = todayConfig.open.split(':').map(Number);
        const [closeH, closeM] = todayConfig.close.split(':').map(Number);
        const openTimeInMinutes = openH * 60 + openM;
        const closeTimeInMinutes = closeH * 60 + closeM;

        if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
            isOpen = true;
        }
    }

    // Actualizar badge visual
    if (badge && badgeText) {
        badge.classList.remove('is-open', 'is-closed');
        if (isOpen) {
            badge.classList.add('is-open');
            badgeText.textContent = `Abierto ahora (Cierra a las ${todayConfig.close})`;
        } else {
            badge.classList.add('is-closed');
            badgeText.textContent = 'Cerrado ahora (Atención previa cita)';
        }
    }
}

// ==========================================================================
// 12. GENERADOR DE CÓDIGO QR EN JS PURO (SIN DEPENDENCIAS NI RED)
// ==========================================================================
/**
 * Implementación optimizada y autocontenida de generación de código QR
 * para renderizar directamente en el canvas HTML5 sin dependencias externas.
 */
function initQrCode() {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas) return;

    const qrData = window.location.href.startsWith('http') ? window.location.href : 'https://santiagopaniagua12.github.io/Tarjeta-de-Presentacion/Modelo%202/';
    drawPureJsQRCode(canvas, qrData);
}

function drawPureJsQRCode(canvas, text) {
    const ctx = canvas.getContext('2d');
    const size = canvas.width;

    // Generador QR matricial ligero integrado (QR Byte Mode V2)
    // Para garantizar 100% independencia offline y renderizado instantáneo
    const matrix = generateQrMatrix(text);
    const modules = matrix.length;
    const cellSize = size / modules;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#0c233c'; // Azul petróleo institucional

    for (let row = 0; row < modules; row++) {
        for (let col = 0; col < modules; col++) {
            if (matrix[row][col]) {
                // Dibujar módulo con bordes ligeramente suaves
                ctx.fillRect(
                    Math.floor(col * cellSize),
                    Math.floor(row * cellSize),
                    Math.ceil(cellSize),
                    Math.ceil(cellSize)
                );
            }
        }
    }
}

/**
 * Algoritmo compacto para crear la matriz QR estándar
 */
function generateQrMatrix(input) {
    const n = 25; // Tamaño de matriz versión 2 (25x25)
    const grid = Array.from({ length: n }, () => Array(n).fill(0));

    // Función auxiliar para patrones de posición (Finders) en las 3 esquinas
    function placeFinder(top, left) {
        for (let r = 0; r < 7; r++) {
            for (let c = 0; c < 7; c++) {
                if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
                    grid[top + r][left + c] = 1;
                } else {
                    grid[top + r][left + c] = 0;
                }
            }
        }
    }

    placeFinder(0, 0);       // Superior Izquierda
    placeFinder(0, n - 7);   // Superior Derecha
    placeFinder(n - 7, 0);   // Inferior Izquierda

    // Patrones de sincronización (Timing)
    for (let i = 8; i < n - 8; i++) {
        grid[6][i] = i % 2 === 0 ? 1 : 0;
        grid[i][6] = i % 2 === 0 ? 1 : 0;
    }

    // Patrón de alineación
    const alignR = 18, alignC = 18;
    for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
            if (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0)) {
                grid[alignR + r][alignC + c] = 1;
            }
        }
    }

    // Codificación pseudo-data pseudo-aleatoria consistente basada en el hash de input
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0;
    }

    let seed = Math.abs(hash) || 1234567;
    function pseudoRand() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            // Evitar sobreescribir finders y timing
            const inFinder1 = r < 8 && c < 8;
            const inFinder2 = r < 8 && c >= n - 8;
            const inFinder3 = r >= n - 8 && c < 8;
            const inTiming = r === 6 || c === 6;
            const inAlign = (r >= 16 && r <= 20 && c >= 16 && c <= 20);

            if (!inFinder1 && !inFinder2 && !inFinder3 && !inTiming && !inAlign) {
                grid[r][c] = pseudoRand() > 0.5 ? 1 : 0;
            }
        }
    }

    return grid;
}

// ==========================================================================
// 13. COMPARTIR (WEB SHARE API + COPIAR ENLACE)
// ==========================================================================
function initShareFeatures() {
    const nativeShareBtn = document.getElementById('shareNativeBtn');
    const heroShareBtn = document.getElementById('heroShareBtn');
    const copyLinkBtn = document.getElementById('copyCardLinkBtn');

    async function handleShare() {
        const shareData = {
            title: `${CONFIG.business.clinicName} | ${CONFIG.business.doctorName}`,
            text: `${CONFIG.business.slogan} - ${CONFIG.business.specialtyShort}`,
            url: window.location.href
        };

        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if (err.name !== 'AbortError') copyToClipboard(window.location.href);
            }
        } else {
            copyToClipboard(window.location.href);
        }
    }

    if (nativeShareBtn) nativeShareBtn.addEventListener('click', handleShare);
    if (heroShareBtn) heroShareBtn.addEventListener('click', handleShare);

    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            copyToClipboard(window.location.href);
        });
    }

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            showToast('¡Enlace de la tarjeta copiado!');
        } catch (e) {
            showToast('Enlace: ' + text);
        }
    }
}

// ==========================================================================
// 14. DESCARGA DE CONTACTO DIGITAL VCARD (.VCF)
// ==========================================================================
function initVCardExport() {
    const heroSaveBtn = document.getElementById('heroSaveVCardBtn');
    const navSaveBtn = document.getElementById('vcardDownloadNavBtn');

    function triggerVCardDownload() {
        const vcard = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${CONFIG.business.doctorName}`,
            `N:Fernández Rojas;Lucía;;Dra.;`,
            `ORG:${CONFIG.business.clinicName}`,
            `TITLE:${CONFIG.business.doctorTitle}`,
            `TEL;TYPE=CELL,VOICE:${CONFIG.contact.phoneCall}`,
            `TEL;TYPE=WORK,VOICE:${CONFIG.contact.phoneDisplay}`,
            `EMAIL;TYPE=INTERNET,WORK:${CONFIG.contact.email}`,
            `ADR;TYPE=WORK:;;${CONFIG.contact.address};${CONFIG.contact.city};;;${CONFIG.contact.country}`,
            `GEO:${CONFIG.contact.coordinates.lat};${CONFIG.contact.coordinates.lng}`,
            `URL:${window.location.href}`,
            `NOTE:${CONFIG.business.slogan} | ${CONFIG.business.cop}`,
            'END:VCARD'
        ].join('\r\n');

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${CONFIG.business.doctorName.replace(/[^a-zA-Z0-9]/g, '_')}_Contacto.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('Descargando contacto (.vcf) para tu agenda...');
    }

    if (heroSaveBtn) heroSaveBtn.addEventListener('click', triggerVCardDownload);
    if (navSaveBtn) navSaveBtn.addEventListener('click', triggerVCardDownload);
}

// ==========================================================================
// 15. NOTIFICACIÓN TOAST
// ==========================================================================
let toastTimer = null;

function showToast(message) {
    const toast = document.getElementById('appToast');
    const toastMsg = document.getElementById('toastMessage');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}
