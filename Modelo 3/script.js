/**
 * ==========================================================================
 * CLÍNICA DENTAL SONRISA VIVA - TARJETA DIGITAL PRO (MODELO 3)
 * ==========================================================================
 *
 * PERSONALIZACIÓN:
 * Todo el contenido del negocio vive en el objeto `CONFIG`. Los textos que
 * cambian según el idioma usan el formato { es: "...", en: "..." }.
 * Los textos fijos del diseño están en el HTML (español) y su traducción al
 * inglés en el objeto `I18N_EN` más abajo.
 */

// ==========================================================================
// 1. CONFIGURACIÓN DEL NEGOCIO (EDITAR AQUÍ)
// ==========================================================================
const CONFIG = {
    // Dominio final de la tarjeta. Se usa en el QR, la vCard y al compartir.
    // Déjalo vacío ("") para usar automáticamente la dirección actual.
    siteUrl: "",
    fallbackUrl: "https://santiagopaniagua12.github.io/Tarjeta-de-Presentacion/Modelo%203/",

    business: {
        clinicName: "Clínica Dental Sonrisa Viva",
        shortName: "Sonrisa Viva",
        doctorName: "Dra. Lucía Fernández Rojas",
        doctorFirstName: "Dra. Lucía",
        vcardName: { family: "Fernández Rojas", given: "Lucía", prefix: "Dra." },
        doctorTitle: {
            es: "Cirujano Dentista, especialista en Rehabilitación Oral e Implantología",
            en: "Dental Surgeon, specialist in Oral Rehabilitation and Implantology"
        },
        specialtyShort: {
            es: "Cirujano Dentista • Especialista en Rehabilitación Oral e Implantología",
            en: "Dental Surgeon • Specialist in Oral Rehabilitation & Implantology"
        },
        slogan: {
            es: "Tu sonrisa merece atención cercana, clara y sin apuros",
            en: "Your smile deserves caring, clear and unhurried attention"
        },
        cop: {
            es: "COP 14205 • Registro Nacional de Especialista",
            en: "COP 14205 • National Specialist Registry (Peru)"
        },
        bio: {
            es: "Llevo más de 12 años acompañando a pacientes en Arequipa. Mi prioridad es escucharte, explicarte cada alternativa con claridad y encontrar un tratamiento que te ayude a volver a sonreír, hablar y comer con tranquilidad.",
            en: "For over 12 years I have been caring for patients in Arequipa. My priority is to listen to you, explain every option clearly and find a treatment that helps you smile, speak and eat comfortably again."
        },
        experienceYears: "+12",
        patientsTreated: "+3,500",
        postgraduate: {
            es: "Rehabilitación Oral e Implantes",
            en: "Oral Rehabilitation & Implants"
        }
    },

    contact: {
        phoneCall: "+51987654321",
        phoneLandline: "+5154284920",
        whatsappNumber: "51987654321",
        email: "contacto@sonrisavivadental.com",
        address: "Av. Ejemplo 123, Of. 401, Arequipa, Perú",
        addressReference: {
            es: "Edificio Médico • Ascensor directo",
            en: "Medical Building • Direct elevator access"
        },
        city: "Arequipa",
        country: "Perú",
        coordinates: { lat: -16.409047, lng: -71.537451 },
        googleMapsUrl: "https://maps.google.com/?q=-16.409047,-71.537451"
    },

    // Perfil de Google Business (Google Maps). Ver README para obtener los enlaces.
    google: {
        rating: 4.9,
        reviewCount: 127,
        reviewsUrl: "https://www.google.com/maps/search/?api=1&query=-16.409047,-71.537451",
        writeReviewUrl: "https://www.google.com/maps/search/?api=1&query=-16.409047,-71.537451"
    },

    // Estadísticas: pega aquí el ID de Google Analytics 4 (formato "G-XXXXXXXXXX").
    // Vacío = estadísticas desactivadas.
    analytics: {
        ga4MeasurementId: ""
    },

    schedule: {
        timezone: "America/Lima",
        slotMinutes: 30,          // Duración de cada turno en el formulario de citas
        minNoticeMinutes: 60,     // Anticipación mínima para citas del mismo día
        maxDaysAhead: 60,         // Hasta cuántos días adelante se puede agendar
        days: [
            { dayIndex: 1, open: "08:30", close: "18:30" },
            { dayIndex: 2, open: "08:30", close: "18:30" },
            { dayIndex: 3, open: "08:30", close: "18:30" },
            { dayIndex: 4, open: "08:30", close: "18:30" },
            { dayIndex: 5, open: "08:30", close: "18:30" },
            { dayIndex: 6, open: "08:30", close: "12:30" },
            { dayIndex: 0, open: null, close: null }
        ]
    },

    social: {
        facebook: "https://facebook.com/sonrisavivadental",
        instagram: "https://instagram.com/dra.luciafernandez",
        whatsapp: "https://wa.me/51987654321"
    },

    treatments: [
        {
            id: "implantes",
            title: { es: "Implantología Dental Avanzada", en: "Advanced Dental Implants" },
            desc: {
                es: "Una alternativa fija para reemplazar dientes ausentes y volver a comer, hablar y sonreír con seguridad. Evaluamos tu caso paso a paso para proponerte una solución estable y que se vea natural.",
                en: "A fixed solution to replace missing teeth so you can eat, speak and smile with confidence again. We assess your case step by step to offer a stable, natural-looking result."
            }
        },
        {
            id: "rehabilitacion",
            title: { es: "Rehabilitación Oral Integral", en: "Full Oral Rehabilitation" },
            desc: {
                es: "Recuperamos la función y el equilibrio de tu mordida cuando hay desgaste o varias piezas comprometidas. El plan se adapta a tus necesidades, tus tiempos y lo que buscas lograr.",
                en: "We restore the function and balance of your bite when there is wear or several damaged teeth. The plan adapts to your needs, your timing and your goals."
            }
        },
        {
            id: "estetica",
            title: { es: "Diseño de Sonrisa & Carillas", en: "Smile Design & Veneers" },
            desc: {
                es: "Mejoramos color, forma o pequeños espacios respetando tus rasgos y la naturalidad de tu sonrisa. Antes de empezar, revisamos juntos el resultado que esperas.",
                en: "We improve color, shape or small gaps while respecting your features and a natural look. Before starting, we review the expected result together."
            }
        },
        {
            id: "protesis",
            title: { es: "Prótesis Fijas sobre Implantes", en: "Fixed Implant-Supported Prosthetics" },
            desc: {
                es: "Una opción para recuperar estabilidad cuando una prótesis se mueve o incomoda. Buscamos que puedas disfrutar tus comidas y tu día a día con mayor tranquilidad.",
                en: "An option to regain stability when a denture moves or feels uncomfortable, so you can enjoy your meals and daily life with peace of mind."
            }
        }
    ],

    // Galería: reemplazar por fotos reales de pacientes (con su autorización).
    cases: [
        {
            before: "assets/casos/caso-1-antes.jpg",
            after: "assets/casos/caso-1-despues.jpg",
            title: { es: "Carillas cerámicas", en: "Ceramic veneers" },
            desc: { es: "Rehabilitación estética completa en 3 sesiones.", en: "Full aesthetic rehabilitation in 3 sessions." }
        },
        {
            before: "assets/casos/caso-2-antes.jpg",
            after: "assets/casos/caso-2-despues.jpg",
            title: { es: "Diseño de sonrisa", en: "Smile design" },
            desc: { es: "Armonía de forma y color con diseño digital previo.", en: "Shape and color harmony with prior digital design." }
        },
        {
            before: "assets/casos/caso-3-antes.jpg",
            after: "assets/casos/caso-3-despues.jpg",
            title: { es: "Blanqueamiento + resinas", en: "Whitening + bonding" },
            desc: { es: "Cierre de espacios y aclarado de varios tonos.", en: "Gap closure and several shades lighter." }
        },
        {
            before: "assets/casos/caso-4-antes.jpg",
            after: "assets/casos/caso-4-despues.jpg",
            title: { es: "Rehabilitación por desgaste", en: "Wear rehabilitation" },
            desc: { es: "Recuperación de altura y función en paciente con bruxismo.", en: "Restored height and function in a bruxism patient." }
        },
        {
            before: "assets/casos/caso-5-antes.jpg",
            after: "assets/casos/caso-5-despues.jpg",
            title: { es: "Coronas de zirconio", en: "Zirconia crowns" },
            desc: { es: "Resultado natural y resistente para el sector anterior.", en: "Natural, durable result for the front teeth." }
        }
    ],

    // Reseñas: copiar reseñas REALES del perfil de Google del cliente.
    reviews: [
        {
            name: "Carmen V.",
            rating: 5,
            date: { es: "hace 2 semanas", en: "2 weeks ago" },
            text: {
                es: "Me puse dos implantes y no sentí dolor en ningún momento. La doctora explica todo con paciencia y el resultado se ve totalmente natural.",
                en: "I had two implants and felt no pain at any moment. The doctor explains everything patiently and the result looks completely natural."
            }
        },
        {
            name: "Jorge M.",
            rating: 5,
            date: { es: "hace 1 mes", en: "1 month ago" },
            text: {
                es: "Mi prótesis se movía y ya no podía comer bien. Con las prótesis sobre implantes volví a comer de todo. Muy recomendada.",
                en: "My denture kept moving and I couldn't eat properly. With implant-supported prosthetics I can eat everything again. Highly recommended."
            }
        },
        {
            name: "Emily R.",
            rating: 5,
            date: { es: "hace 2 meses", en: "2 months ago" },
            text: {
                es: "Vine de Estados Unidos para hacerme carillas. Atención en inglés, puntual y un precio mucho más accesible que en mi país.",
                en: "I came from the US to get veneers. Service in English, punctual, and much more affordable than back home."
            }
        },
        {
            name: "Rosa Q.",
            rating: 5,
            date: { es: "hace 3 meses", en: "3 months ago" },
            text: {
                es: "Consultorio muy limpio y moderno. Agendé por WhatsApp y me atendieron el mismo día. Mi sonrisa cambió por completo.",
                en: "Very clean, modern office. I booked on WhatsApp and was seen the same day. My smile changed completely."
            }
        }
    ],

    faq: [
        {
            q: { es: "¿Duele colocarse un implante dental?", en: "Does getting a dental implant hurt?" },
            a: {
                es: "El procedimiento se realiza con anestesia local, por lo que no sientes dolor durante la cirugía. Después puede haber una molestia leve por 2 o 3 días, que se controla con analgésicos comunes.",
                en: "The procedure is done under local anesthesia, so you won't feel pain during surgery. Afterwards there may be mild discomfort for 2–3 days, easily managed with common painkillers."
            }
        },
        {
            q: { es: "¿Cuánto tiempo dura un tratamiento con implantes?", en: "How long does implant treatment take?" },
            a: {
                es: "Depende de cada caso. En general, entre 3 y 6 meses desde la colocación del implante hasta la corona final, porque el hueso necesita tiempo para integrarse. En la evaluación te damos un cronograma exacto.",
                en: "It depends on each case. Usually 3 to 6 months from implant placement to the final crown, since the bone needs time to integrate. We give you an exact timeline at your assessment."
            }
        },
        {
            q: { es: "¿Cuánto cuesta la primera consulta?", en: "How much is the first consultation?" },
            a: {
                es: "La evaluación inicial incluye revisión clínica y un plan de tratamiento con presupuesto detallado. Escríbenos por WhatsApp y te indicamos el costo vigente y las promociones del mes.",
                en: "The initial assessment includes a clinical exam and a treatment plan with a detailed quote. Message us on WhatsApp for current pricing and this month's offers."
            }
        },
        {
            q: { es: "¿Puedo pagar en cuotas?", en: "Can I pay in installments?" },
            a: {
                es: "Sí. Puedes pagar con tarjeta de crédito en cuotas, y para tratamientos largos coordinamos pagos por etapas según avanza el tratamiento.",
                en: "Yes. You can pay in installments with a credit card, and for longer treatments we arrange stage-based payments as the treatment progresses."
            }
        },
        {
            q: { es: "¿Cuánto duran las carillas?", en: "How long do veneers last?" },
            a: {
                es: "Las carillas cerámicas bien cuidadas duran entre 10 y 15 años o más. Te enseñamos cómo cuidarlas y hacemos controles periódicos.",
                en: "Well-maintained ceramic veneers last 10 to 15 years or more. We show you how to care for them and schedule regular check-ups."
            }
        },
        {
            q: { es: "¿Atienden a pacientes extranjeros o turistas?", en: "I'm visiting Arequipa. Do you treat foreign patients?" },
            a: {
                es: "Sí, atendemos pacientes extranjeros en inglés. Podemos planificar tu tratamiento según los días que estarás en la ciudad. Escríbenos antes de tu viaje.",
                en: "Yes! We treat international patients in English and can plan your treatment around the days you'll be in town. Message us before your trip."
            }
        }
    ],

    whatsappMessages: {
        general: {
            es: "Hola {doctor}, vi su tarjeta digital y me gustaría agendar una cita odontológica.",
            en: "Hello {doctor}, I saw your digital card and I'd like to book a dental appointment."
        },
        treatment: {
            es: "Hola {doctor}, deseo consultar sobre el tratamiento de: *{treatment}*.",
            en: "Hello {doctor}, I'd like to ask about the treatment: *{treatment}*."
        }
    }
};

// ==========================================================================
// 2. TRADUCCIONES
// ==========================================================================
// Inglés de los textos fijos del HTML (el español se lee del propio HTML).
const I18N_EN = {
    "aria.lang": "Cambiar a español",
    "aria.theme": "Toggle dark or light mode",
    "aria.vcard": "Save contact to phone",
    "aria.sections": "Section navigation",
    "aria.slider": "Compare before and after",
    "aria.prevCase": "Previous case",
    "aria.nextCase": "Next case",
    "aria.zoom": "Enlarge image",
    "aria.reviews": "Patient reviews",
    "aria.qr": "QR code for this card",
    "aria.close": "Close",
    "nav.home": "Home",
    "nav.doctor": "Doctor",
    "nav.treatments": "Treatments",
    "nav.cases": "Cases",
    "nav.book": "Book",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "nav.location": "Location",
    "nav.hours": "Hours",
    "nav.payments": "Payments",
    "nav.share": "Share",
    "hero.call": "Call Now",
    "hero.callSub": "Phone Support",
    "hero.waSub": "Instant Reply",
    "hero.book": "Book Visit",
    "hero.bookSub": "Pick day & time",
    "hero.save": "Save Contact",
    "hero.maps": "Directions",
    "about.tag": "Meet me",
    "about.title": "About the Doctor",
    "about.verified": "Licensed (COP)",
    "about.langs": "Care in Spanish and English",
    "about.years": "Years of Experience",
    "about.patients": "Smiles Restored",
    "about.specialty": "Specialty",
    "when.tag": "Early Diagnosis",
    "when.title": "When should you visit?",
    "when.sub": "If any of these sound familiar, let's talk. A timely assessment can make a big difference.",
    "when.s1t": "Missing Teeth",
    "when.s1d": "One or more missing teeth that make chewing harder or affect your confidence when speaking.",
    "when.s2t": "Loose Dentures",
    "when.s2d": "Discomfort or movement in removable dentures that need secure fixation with implants.",
    "when.s3t": "Smile Makeover",
    "when.s3d": "Stained, misaligned or chipped teeth you want to transform with veneers and digital smile design.",
    "when.s4t": "Severe Wear & Bruxism",
    "when.s4d": "Night-time clenching, jaw pain or worn-down teeth that need bite rehabilitation.",
    "treat.tag": "Dental Services",
    "treat.title": "Specialized Treatments",
    "treat.sub": "Every treatment is planned with you, with clear information and care for both your comfort and the result.",
    "gallery.tag": "Clinical Results",
    "gallery.title": "Clinical Cases",
    "gallery.sub": "Pick a case and drag the bar to compare before and after.",
    "gallery.after": "AFTER",
    "gallery.before": "BEFORE",
    "gallery.afterShort": "After",
    "gallery.beforeShort": "Before",
    "gallery.cta": "I want results like these: book an assessment",
    "book.tag": "Online Booking",
    "book.title": "Book Your Appointment",
    "book.sub": "Fill in your details and we'll take you straight to WhatsApp with your request ready. We confirm within minutes.",
    "book.name": "Full name",
    "book.namePh": "e.g. John Smith",
    "book.treatment": "Reason for visit",
    "book.date": "Date",
    "book.time": "Time",
    "book.notes": "Comments",
    "book.optional": "(optional)",
    "book.notesPh": "e.g. I've had a toothache for a week",
    "book.first": "This is my first visit",
    "book.submit": "Request appointment via WhatsApp",
    "book.note": "Free, no commitment. Your details are only used to arrange your visit.",
    "reviews.tag": "Testimonials",
    "reviews.title": "What our patients say",
    "reviews.google": "Google Rating",
    "reviews.all": "See all on Google",
    "reviews.write": "Write a review",
    "faq.tag": "We answer your questions",
    "faq.title": "Frequently Asked Questions",
    "faq.sub": "The most common questions before starting treatment.",
    "faq.more": "Have another question?",
    "faq.moreLink": "Message us on WhatsApp",
    "loc.tag": "Find us",
    "loc.title": "Office Location",
    "loc.sub": "A comfortable, easy-to-reach space so you can get here hassle-free.",
    "loc.mapTitle": "Office location map",
    "loc.address": "Address",
    "loc.copy": "Copy Address",
    "loc.open": "Open in Google Maps",
    "hours.tag": "Availability",
    "hours.title": "Opening Hours",
    "hours.tz": "Peru time (GMT-5)",
    "hours.note": "By appointment only, with personalized care.",
    "pay.tag": "Easy payments",
    "pay.title": "Payment Methods",
    "pay.sub": "Choose whichever option suits you best.",
    "pay.cash": "Cash",
    "pay.cashD": "Soles & US Dollars",
    "pay.walletD": "Mobile Wallets",
    "pay.transfer": "Bank Transfer",
    "pay.cards": "Cards",
    "pay.cardsD": "Credit & Debit",
    "share.tag": "Connect & Share",
    "share.title": "Share This Card",
    "share.sub": "Send it to someone who needs it, or scan the code to open it on another phone.",
    "share.qrCaption": "Scan it with your phone camera",
    "share.qrDownload": "Download QR for printing",
    "share.share": "Share",
    "share.copy": "Copy Link",
    "share.via": "Send via",
    "share.follow": "Follow us on social media",
    "footer.rights": "All rights reserved.",
    "fixed.cta": "Book my Appointment"
};

// Textos generados por JavaScript
const UI = {
    es: {
        pageTitle: "Clínica Dental Sonrisa Viva | Dra. Lucía Fernández Rojas",
        langSwitched: "Versión en español",
        themeDark: "Tema oscuro activado",
        themeLight: "Tema claro activado",
        reviews: "reseñas",
        reviewsVerified: "reseñas en Google",
        openNow: "Abierto ahora · cierra a las {time}",
        opensToday: "Cerrado · abre hoy a las {time}",
        closedNow: "Cerrado ahora · atención previa cita",
        today: "Hoy",
        closed: "Cerrado",
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        caseCounter: "Caso {n} de {total}",
        caseLabel: "Caso {n}",
        treatmentCta: "Consultar por WhatsApp",
        generalEval: "Evaluación general / no estoy seguro",
        emergency: "Dolor o urgencia",
        selectDateFirst: "Elige una fecha",
        selectTime: "Elige una hora",
        noSlots: "Sin horarios disponibles",
        errName: "Escribe tu nombre para continuar.",
        errDate: "Elige una fecha para tu cita.",
        errDateClosed: "Ese día no atendemos. Elige otra fecha.",
        errDatePast: "Elige una fecha a partir de hoy.",
        errTime: "Elige un horario disponible.",
        bookingOpened: "Abriendo WhatsApp con tu solicitud…",
        waBooking: "Hola {doctor} 👋, quisiera agendar una cita:",
        waName: "Nombre",
        waTreatment: "Motivo",
        waDate: "Fecha",
        waTime: "Hora",
        waFirst: "Primera visita",
        waNotes: "Comentario",
        yes: "Sí",
        no: "No",
        waFooter: "(Enviado desde la tarjeta digital)",
        addressCopied: "¡Dirección copiada!",
        linkCopied: "¡Enlace copiado!",
        vcardDownloading: "Descargando contacto para tu agenda…",
        qrDownloaded: "QR descargado en alta resolución",
        qrScanText: "Escanea para ver la tarjeta y agendar tu cita",
        shareText: "Te recomiendo a {doctor}, especialista en implantes y rehabilitación oral en Arequipa:",
        emailSubject: "Te recomiendo esta clínica dental"
    },
    en: {
        pageTitle: "Sonrisa Viva Dental Clinic | Dr. Lucía Fernández Rojas",
        langSwitched: "English version",
        themeDark: "Dark theme on",
        themeLight: "Light theme on",
        reviews: "reviews",
        reviewsVerified: "Google reviews",
        openNow: "Open now · closes at {time}",
        opensToday: "Closed · opens today at {time}",
        closedNow: "Closed now · by appointment",
        today: "Today",
        closed: "Closed",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        caseCounter: "Case {n} of {total}",
        caseLabel: "Case {n}",
        treatmentCta: "Ask on WhatsApp",
        generalEval: "General check-up / not sure",
        emergency: "Pain or emergency",
        selectDateFirst: "Pick a date first",
        selectTime: "Pick a time",
        noSlots: "No times available",
        errName: "Please enter your name.",
        errDate: "Please pick a date.",
        errDateClosed: "We're closed that day. Please pick another date.",
        errDatePast: "Please pick a date from today onward.",
        errTime: "Please pick an available time.",
        bookingOpened: "Opening WhatsApp with your request…",
        waBooking: "Hello {doctor} 👋, I'd like to book an appointment:",
        waName: "Name",
        waTreatment: "Reason",
        waDate: "Date",
        waTime: "Time",
        waFirst: "First visit",
        waNotes: "Comments",
        yes: "Yes",
        no: "No",
        waFooter: "(Sent from the digital card)",
        addressCopied: "Address copied!",
        linkCopied: "Link copied!",
        vcardDownloading: "Downloading contact…",
        qrDownloaded: "High-resolution QR downloaded",
        qrScanText: "Scan to view the card and book your visit",
        shareText: "I recommend {doctor}, an implant and oral rehabilitation specialist in Arequipa:",
        emailSubject: "A dental clinic I recommend"
    }
};

// ==========================================================================
// 3. ESTADO Y UTILIDADES
// ==========================================================================
const state = {
    lang: "es",
    caseIndex: 0
};

const I18N_ES = {}; // Se llena leyendo el HTML original

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** Devuelve el texto en el idioma activo de un campo {es, en} o un string simple. */
function tr(value) {
    if (value && typeof value === "object") return value[state.lang] || value.es || "";
    return value || "";
}

/** Texto de interfaz con reemplazo de {variables}. */
function ui(key, vars = {}) {
    const text = (UI[state.lang] && UI[state.lang][key]) ?? UI.es[key] ?? key;
    if (typeof text !== "string") return text;
    return text.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
}

function safeStorage(action, key, value) {
    try {
        if (action === "get") return localStorage.getItem(key);
        if (action === "set") localStorage.setItem(key, value);
    } catch (e) { /* modo privado o almacenamiento bloqueado */ }
    return null;
}

function getCardUrl() {
    if (CONFIG.siteUrl) return CONFIG.siteUrl;
    if (window.location.protocol.startsWith("http")) {
        return window.location.origin + window.location.pathname;
    }
    return CONFIG.fallbackUrl;
}

function waLink(message) {
    return `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function generalWaMessage() {
    return tr(CONFIG.whatsappMessages.general).replace("{doctor}", CONFIG.business.doctorFirstName);
}

/** Fecha/hora actual en la zona horaria del consultorio. */
function nowInClinicTz() {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: CONFIG.schedule.timezone,
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hourCycle: "h23", weekday: "short"
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type)?.value;
    const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
        isoDate: `${get("year")}-${get("month")}-${get("day")}`,
        day: weekdayMap[get("weekday")],
        minutes: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10)
    };
}

const toMinutes = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
};
const fromMinutes = (min) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;

function scheduleFor(dayIndex) {
    return CONFIG.schedule.days.find((d) => d.dayIndex === dayIndex);
}

function addDaysIso(iso, days) {
    const d = new Date(`${iso}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
}

function weekdayOfIso(iso) {
    return new Date(`${iso}T12:00:00Z`).getUTCDay();
}

function formatIsoDate(iso) {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString(state.lang === "en" ? "en-US" : "es-PE", {
        weekday: "long", day: "numeric", month: "long", timeZone: "UTC"
    });
}

function starsMarkup(rating) {
    const full = Math.round(rating);
    let html = "";
    for (let i = 1; i <= 5; i++) {
        html += `<svg class="star ${i <= full ? "is-on" : ""}" aria-hidden="true"><use href="#i-star"/></svg>`;
    }
    return html;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ==========================================================================
// 4. INICIALIZACIÓN
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    captureSpanishTexts();
    state.lang = detectInitialLanguage();

    initAnalytics();
    initThemeManager();
    initLanguageToggle();
    initCaseGallery();
    initBookingForm();
    initLocationActions();
    initShareFeatures();
    initVCardExport();
    initLightbox();

    applyLanguage(state.lang, { silent: true });

    initStickyNavigation();
    initScrollAnimations();
    initFixedBarVisibility();
    initLiveSchedule();
    setInterval(initLiveSchedule, 60 * 1000);
});

// ==========================================================================
// 5. IDIOMA (ES / EN)
// ==========================================================================
function captureSpanishTexts() {
    $$("[data-i18n]").forEach((el) => { I18N_ES[el.dataset.i18n] ??= el.textContent.trim(); });
    $$("[data-i18n-aria]").forEach((el) => { I18N_ES[el.dataset.i18nAria] ??= el.getAttribute("aria-label"); });
    $$("[data-i18n-ph]").forEach((el) => { I18N_ES[el.dataset.i18nPh] ??= el.getAttribute("placeholder"); });
    $$("[data-i18n-title]").forEach((el) => { I18N_ES[el.dataset.i18nTitle] ??= el.getAttribute("title"); });
    I18N_ES["aria.lang"] = "Switch to English";
}

function detectInitialLanguage() {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "es") return param;
    const saved = safeStorage("get", "sonrisa-viva-lang");
    if (saved === "en" || saved === "es") return saved;
    return (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";
}

function initLanguageToggle() {
    $("#langToggleBtn")?.addEventListener("click", () => {
        const next = state.lang === "es" ? "en" : "es";
        applyLanguage(next);
        safeStorage("set", "sonrisa-viva-lang", next);
        track("language_change", { language: next });
        showToast(ui("langSwitched"));
    });
}

function applyLanguage(lang, { silent = false } = {}) {
    state.lang = lang;
    const dict = lang === "en" ? I18N_EN : I18N_ES;

    document.documentElement.lang = lang;
    document.title = ui("pageTitle");
    $("#langToggleLabel").textContent = lang === "es" ? "EN" : "ES";

    $$("[data-i18n]").forEach((el) => { if (dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n]; });
    $$("[data-i18n-aria]").forEach((el) => { if (dict[el.dataset.i18nAria]) el.setAttribute("aria-label", dict[el.dataset.i18nAria]); });
    $$("[data-i18n-ph]").forEach((el) => { if (dict[el.dataset.i18nPh]) el.setAttribute("placeholder", dict[el.dataset.i18nPh]); });
    $$("[data-i18n-title]").forEach((el) => { if (dict[el.dataset.i18nTitle]) el.setAttribute("title", dict[el.dataset.i18nTitle]); });

    // Contenido dinámico que depende del idioma
    syncDOMWithConfig();
    renderTreatments();
    renderCaseTabs();
    showCase(state.caseIndex, { keepSlider: true });
    renderReviews();
    renderFaq();
    renderScheduleList();
    initLiveSchedule();
    populateTreatmentSelect();
    refreshTimeSlots();
    updateShareLinks();

    // Mantener ?lang=en en la barra para que se pueda compartir la versión en inglés
    if (!silent && window.history.replaceState && window.location.protocol.startsWith("http")) {
        const url = new URL(window.location.href);
        if (lang === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
        window.history.replaceState(null, "", url);
    }
}

// ==========================================================================
// 6. SINCRONIZACIÓN CONFIG → DOM
// ==========================================================================
function syncDOMWithConfig() {
    const b = CONFIG.business;
    const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };

    setText("businessShortName", b.shortName);
    setText("heroClinicBadge", b.clinicName);
    setText("heroDoctorName", b.doctorName);
    setText("heroDoctorSpecialty", tr(b.specialtyShort));
    setText("heroSlogan", `"${tr(b.slogan)}"`);
    setText("aboutDoctorName", b.doctorName);
    setText("aboutDoctorReg", tr(b.cop));
    setText("aboutDoctorBio", tr(b.bio));
    setText("credExp", b.experienceYears);
    setText("credPatients", b.patientsTreated);
    setText("credStudies", tr(b.postgraduate));
    setText("locationAddressText", CONFIG.contact.address);
    setText("locationAddressNote", tr(CONFIG.contact.addressReference));
    setText("footerClinic", b.clinicName);
    setText("footerYear", String(new Date().getFullYear()));
    setText("footerSub", `${CONFIG.contact.city}, ${CONFIG.contact.country} • ${b.doctorName}`);

    // Valoración de Google
    const g = CONFIG.google;
    const rating = g.rating.toFixed(1);
    setText("heroRatingScore", rating);
    setText("heroRatingCount", `${g.reviewCount} ${ui("reviews")}`);
    setText("reviewsScore", rating);
    setText("reviewsCount", `${g.reviewCount} ${ui("reviewsVerified")}`);
    $("#heroRatingStars").innerHTML = starsMarkup(g.rating);
    $("#reviewsStars").innerHTML = starsMarkup(g.rating);
    $("#heroRating").setAttribute("aria-label", `${rating} / 5 · ${g.reviewCount} ${ui("reviews")}`);

    // Enlaces
    const waUrl = waLink(generalWaMessage());
    $("#heroBtnCall").href = `tel:${CONFIG.contact.phoneCall}`;
    $("#heroBtnWhatsapp").href = waUrl;
    $("#faqWaLink").href = waUrl;
    $("#socialWaLink").href = waUrl;
    $("#socialFbLink").href = CONFIG.social.facebook;
    $("#socialIgLink").href = CONFIG.social.instagram;
    $("#openGmapsLink").href = CONFIG.contact.googleMapsUrl;
    $("#reviewsAllBtn").href = g.reviewsUrl;
    $("#reviewsWriteBtn").href = g.writeReviewUrl;
}

// ==========================================================================
// 7. TEMA CLARO / OSCURO
// ==========================================================================
function initThemeManager() {
    const html = document.documentElement;
    const saved = safeStorage("get", "sonrisa-viva-theme");
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const setTheme = (theme) => {
        html.setAttribute("data-theme", theme);
        $('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#060e17" : "#0c233c");
    };

    setTheme(saved || (media.matches ? "dark" : "light"));

    $("#themeToggleBtn")?.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(next);
        safeStorage("set", "sonrisa-viva-theme", next);
        showToast(ui(next === "dark" ? "themeDark" : "themeLight"));
    });

    media.addEventListener("change", (e) => {
        if (!safeStorage("get", "sonrisa-viva-theme")) setTheme(e.matches ? "dark" : "light");
    });
}

// ==========================================================================
// 8. NAVEGACIÓN STICKY
// ==========================================================================
function initStickyNavigation() {
    const pills = $$(".nav-pill");
    const sections = $$("section[id]");
    const navBar = $(".sticky-sections-nav");
    if (!pills.length || !sections.length) return;

    if (navBar) {
        navBar.addEventListener("wheel", (event) => {
            if (event.ctrlKey || navBar.scrollWidth <= navBar.clientWidth) return;
            const delta = event.deltaX || event.deltaY;
            const max = navBar.scrollWidth - navBar.clientWidth;
            if ((delta < 0 && navBar.scrollLeft > 0) || (delta > 0 && navBar.scrollLeft < max - 1)) {
                event.preventDefault();
                navBar.scrollLeft += delta;
            }
        }, { passive: false });
    }

    const centerPill = (pill) => {
        if (!navBar || !pill) return;
        const pillRect = pill.getBoundingClientRect();
        const navRect = navBar.getBoundingClientRect();
        const target = navBar.scrollLeft + pillRect.left - navRect.left - ((navBar.clientWidth - pillRect.width) / 2);
        navBar.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    };

    const setActive = (id) => {
        pills.forEach((pill) => {
            const active = pill.dataset.section === id;
            pill.classList.toggle("active", active);
            if (active) centerPill(pill);
        });
    };

    // Todos los enlaces internos (#seccion) usan el mismo desplazamiento compensado
    $$('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const id = link.getAttribute("href").slice(1);
            const target = id && document.getElementById(id);
            if (!target) return;
            event.preventDefault();
            const offset = ($(".top-nav")?.offsetHeight || 0) + (navBar?.offsetHeight || 0) + 12;
            window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - offset, behavior: "smooth" });
            setActive(id);
            if (id === "agendar") setTimeout(() => $("#bkName")?.focus({ preventScroll: true }), 600);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    sections.forEach((s) => observer.observe(s));
}

// ==========================================================================
// 9. ANIMACIONES AL HACER SCROLL
// ==========================================================================
function initScrollAnimations() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = $$(".symptom-card, .comparison-card, .booking-card, .reviews-summary, .location-card, .schedule-card, .payment-card, .share-card, .doctor-profile-card");
    targets.forEach((el) => el.classList.add("fade-in-on-scroll"));
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    targets.forEach((el) => observer.observe(el));
}

/** Oculta la barra fija mientras el formulario de citas está en pantalla. */
function initFixedBarVisibility() {
    const bar = $("#fixedBar");
    const booking = $("#agendar");
    if (!bar || !booking) return;
    new IntersectionObserver(([entry]) => {
        bar.classList.toggle("is-hidden", entry.isIntersecting);
    }, { threshold: 0.15 }).observe(booking);
}

// ==========================================================================
// 10. ACORDEONES (TRATAMIENTOS Y PREGUNTAS FRECUENTES)
// ==========================================================================
function buildAccordion(container, items, { numbered = false, idPrefix }) {
    if (!container) return;
    const openId = container.querySelector(".accordion-item.active")?.dataset.itemId;

    container.innerHTML = items.map((item, i) => {
        const id = `${idPrefix}-${i}`;
        const isOpen = openId === id;
        return `
        <div class="accordion-item${isOpen ? " active" : ""}" data-item-id="${id}">
            <button type="button" class="accordion-header" aria-expanded="${isOpen}" id="h-${id}" aria-controls="p-${id}">
                <span class="acc-title-group">
                    ${numbered ? `<span class="acc-badge">${String(i + 1).padStart(2, "0")}</span>` : `<span class="acc-badge acc-badge-q">?</span>`}
                    <span class="acc-title">${escapeHtml(item.title)}</span>
                </span>
                <svg class="acc-chevron" aria-hidden="true"><use href="#i-chevron"/></svg>
            </button>
            <div class="accordion-panel" id="p-${id}" role="region" aria-labelledby="h-${id}" ${isOpen ? "" : "hidden"}>
                <div class="accordion-body">
                    <p>${escapeHtml(item.body)}</p>
                    ${item.cta ? `<a href="${item.cta.href}" target="_blank" rel="noopener noreferrer" class="treatment-cta-btn" data-track="click_whatsapp_treatment" data-track-label="${escapeHtml(item.cta.label)}">
                        <svg aria-hidden="true"><use href="#i-wa"/></svg><span>${escapeHtml(ui("treatmentCta"))}</span></a>` : ""}
                </div>
            </div>
        </div>`;
    }).join("");

    if (container.dataset.bound) return;
    container.dataset.bound = "1";
    container.addEventListener("click", (event) => {
        const header = event.target.closest(".accordion-header");
        if (!header) return;
        const item = header.closest(".accordion-item");
        const wasOpen = item.classList.contains("active");
        $$(".accordion-item", container).forEach((other) => {
            other.classList.remove("active");
            other.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
            other.querySelector(".accordion-panel").hidden = true;
        });
        if (!wasOpen) {
            item.classList.add("active");
            header.setAttribute("aria-expanded", "true");
            item.querySelector(".accordion-panel").hidden = false;
            if (container.id === "faqAccordion") track("faq_open", { question: item.querySelector(".acc-title").textContent });
        }
    });
}

function renderTreatments() {
    buildAccordion($("#treatmentsAccordion"), CONFIG.treatments.map((t) => {
        const title = tr(t.title);
        const msg = tr(CONFIG.whatsappMessages.treatment)
            .replace("{doctor}", CONFIG.business.doctorFirstName)
            .replace("{treatment}", title);
        return { title, body: tr(t.desc), cta: { href: waLink(msg), label: t.id } };
    }), { numbered: true, idPrefix: "tr" });
}

function renderFaq() {
    buildAccordion($("#faqAccordion"), CONFIG.faq.map((f) => ({ title: tr(f.q), body: tr(f.a) })), { idPrefix: "faq" });
}

// ==========================================================================
// 11. GALERÍA DE CASOS ANTES / DESPUÉS
// ==========================================================================
let sliderApi = null;

function initCaseGallery() {
    const range = $("#comparisonRange");
    const beforeWrap = $("#beforeImageWrapper");
    const divider = $("#sliderDivider");
    const container = $("#comparisonSliderContainer");
    if (!range || !beforeWrap || !divider || !container) return;

    const update = (percent) => {
        const p = Math.max(0, Math.min(100, Number(percent)));
        beforeWrap.style.width = `${p}%`;
        divider.style.left = `${p}%`;
        range.value = p;
    };

    range.addEventListener("input", (e) => update(e.target.value));

    let dragging = false;
    const percentFrom = (e) => {
        const rect = container.getBoundingClientRect();
        return ((e.clientX - rect.left) / rect.width) * 100;
    };
    container.addEventListener("pointerdown", (e) => { dragging = true; update(percentFrom(e)); });
    window.addEventListener("pointermove", (e) => { if (dragging) update(percentFrom(e)); });
    window.addEventListener("pointerup", () => { dragging = false; });

    // Gesto de deslizar con dos dedos no aplica; flechas de navegación entre casos:
    $("#casePrevBtn")?.addEventListener("click", () => showCase(state.caseIndex - 1));
    $("#caseNextBtn")?.addEventListener("click", () => showCase(state.caseIndex + 1));

    $("#caseTabs")?.addEventListener("click", (e) => {
        const tab = e.target.closest(".case-tab");
        if (tab) showCase(Number(tab.dataset.index));
    });

    // Precargar todas las imágenes para que el cambio sea instantáneo
    CONFIG.cases.forEach((c) => { new Image().src = c.before; new Image().src = c.after; });

    sliderApi = { update };
    update(50);
}

function renderCaseTabs() {
    const tabs = $("#caseTabs");
    if (!tabs) return;
    tabs.innerHTML = CONFIG.cases.map((c, i) => `
        <button type="button" class="case-tab${i === state.caseIndex ? " active" : ""}" role="tab"
            aria-selected="${i === state.caseIndex}" data-index="${i}">${escapeHtml(tr(c.title))}</button>`).join("");
}

function showCase(index, { keepSlider = false } = {}) {
    const total = CONFIG.cases.length;
    if (!total) return;
    const i = ((index % total) + total) % total;
    const changed = i !== state.caseIndex;
    state.caseIndex = i;
    const c = CONFIG.cases[i];

    const beforeImg = $("#beforeImg");
    const afterImg = $("#afterImg");
    beforeImg.src = c.before;
    afterImg.src = c.after;
    beforeImg.alt = `${tr(c.title)} – ${state.lang === "en" ? "before" : "antes"}`;
    afterImg.alt = `${tr(c.title)} – ${state.lang === "en" ? "after" : "después"}`;

    $("#caseCounter").textContent = ui("caseCounter", { n: i + 1, total });
    $("#caseTitle").textContent = tr(c.title);
    $("#caseDesc").textContent = tr(c.desc);

    $$(".case-tab").forEach((tab) => {
        const active = Number(tab.dataset.index) === i;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-selected", String(active));
        if (active && changed) tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });

    if (!keepSlider && sliderApi) sliderApi.update(50);
    if (changed) track("case_view", { case_title: tr(c.title) });
}

// ==========================================================================
// 12. LIGHTBOX
// ==========================================================================
function initLightbox() {
    const modal = $("#galleryLightbox");
    const img = $("#lightboxImg");
    if (!modal || !img) return;
    let lastFocus = null;

    const setView = (view) => {
        const c = CONFIG.cases[state.caseIndex];
        img.src = view === "before" ? c.before : c.after;
        img.alt = `${tr(c.title)} – ${view}`;
        $$(".lb-toggle-btn", modal).forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    };

    const open = () => {
        const c = CONFIG.cases[state.caseIndex];
        $("#lightboxTitle").textContent = tr(c.title);
        $("#lightboxSub").textContent = tr(c.desc);
        setView("after");
        lastFocus = document.activeElement;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        $("#closeLightboxBtn").focus();
    };
    const close = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        lastFocus?.focus();
    };

    $("#openLightboxBtn")?.addEventListener("click", open);
    $("#closeLightboxBtn")?.addEventListener("click", close);
    $("#lightboxBackdrop")?.addEventListener("click", close);
    $$(".lb-toggle-btn", modal).forEach((b) => b.addEventListener("click", () => setView(b.dataset.view)));
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "Escape") close();
    });
}

// ==========================================================================
// 13. RESEÑAS
// ==========================================================================
function renderReviews() {
    const track = $("#reviewsTrack");
    if (!track) return;
    track.innerHTML = CONFIG.reviews.map((r) => {
        const initials = r.name.split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();
        return `
        <article class="review-card">
            <header class="review-head">
                <span class="review-avatar" aria-hidden="true">${escapeHtml(initials)}</span>
                <div class="review-meta">
                    <span class="review-name">${escapeHtml(r.name)}</span>
                    <span class="review-date">${escapeHtml(tr(r.date))}</span>
                </div>
                <svg class="review-g" aria-hidden="true"><use href="#i-google"/></svg>
            </header>
            <span class="stars" role="img" aria-label="${r.rating} / 5">${starsMarkup(r.rating)}</span>
            <p class="review-text">${escapeHtml(tr(r.text))}</p>
        </article>`;
    }).join("");
}

// ==========================================================================
// 14. HORARIOS EN VIVO
// ==========================================================================
function renderScheduleList() {
    const list = $("#scheduleDaysList");
    if (!list) return;
    const order = [1, 2, 3, 4, 5, 6, 0];
    list.innerHTML = order.map((dayIndex) => {
        const d = scheduleFor(dayIndex);
        const closed = !d || !d.open;
        return `
        <li class="schedule-row${closed ? " is-closed" : ""}" data-day="${dayIndex}">
            <span class="day-name">${ui("days")[dayIndex]}<span class="today-tag">${ui("today")}</span></span>
            <span class="day-hours">${closed ? ui("closed") : `${d.open} - ${d.close}`}</span>
        </li>`;
    }).join("");
}

function initLiveSchedule() {
    const badge = $("#liveStatusBadge");
    const text = $("#liveStatusText");
    const now = nowInClinicTz();

    $$(".schedule-row").forEach((row) => {
        row.classList.toggle("today-active", Number(row.dataset.day) === now.day);
    });

    const today = scheduleFor(now.day);
    let status = "closed";
    if (today && today.open) {
        const open = toMinutes(today.open);
        const close = toMinutes(today.close);
        if (now.minutes >= open && now.minutes < close) status = "open";
        else if (now.minutes < open) status = "later";
    }

    if (!badge || !text) return;
    badge.classList.toggle("is-open", status === "open");
    badge.classList.toggle("is-closed", status !== "open");
    if (status === "open") text.textContent = ui("openNow", { time: today.close });
    else if (status === "later") text.textContent = ui("opensToday", { time: today.open });
    else text.textContent = ui("closedNow");
}

// ==========================================================================
// 15. AGENDA DE CITAS → WHATSAPP
// ==========================================================================
function initBookingForm() {
    const form = $("#bookingForm");
    const dateInput = $("#bkDate");
    if (!form || !dateInput) return;

    const today = nowInClinicTz().isoDate;
    dateInput.min = today;
    dateInput.max = addDaysIso(today, CONFIG.schedule.maxDaysAhead);
    dateInput.value = nextOpenDate(today);

    dateInput.addEventListener("change", () => {
        clearError("bkDate");
        clearError("bkTime");
        validateDate(true);
        refreshTimeSlots();
    });
    $("#bkTime").addEventListener("change", () => clearError("bkTime"));
    $("#bkName").addEventListener("input", () => clearError("bkName"));

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validateBooking()) return;

        const data = {
            name: $("#bkName").value.trim(),
            treatment: $("#bkTreatment").selectedOptions[0]?.textContent || "",
            date: formatIsoDate(dateInput.value),
            time: $("#bkTime").value,
            first: $("#bkFirstVisit").checked,
            notes: $("#bkNotes").value.trim()
        };

        const lines = [
            ui("waBooking", { doctor: CONFIG.business.doctorFirstName }),
            "",
            `• *${ui("waName")}:* ${data.name}`,
            `• *${ui("waTreatment")}:* ${data.treatment}`,
            `• *${ui("waDate")}:* ${data.date}`,
            `• *${ui("waTime")}:* ${data.time}`,
            `• *${ui("waFirst")}:* ${data.first ? ui("yes") : ui("no")}`
        ];
        if (data.notes) lines.push(`• *${ui("waNotes")}:* ${data.notes}`);
        lines.push("", ui("waFooter"));

        track("booking_submit", { treatment: data.treatment, first_visit: data.first });
        showToast(ui("bookingOpened"));
        window.open(waLink(lines.join("\n")), "_blank", "noopener");
    });
}

function nextOpenDate(fromIso) {
    const now = nowInClinicTz();
    for (let i = 0; i <= 14; i++) {
        const iso = addDaysIso(fromIso, i);
        if (getSlotsForDate(iso, now).length) return iso;
    }
    return fromIso;
}

function getSlotsForDate(iso, now = nowInClinicTz()) {
    const day = scheduleFor(weekdayOfIso(iso));
    if (!day || !day.open) return [];
    const step = CONFIG.schedule.slotMinutes;
    const open = toMinutes(day.open);
    const close = toMinutes(day.close);
    const earliest = iso === now.isoDate ? now.minutes + CONFIG.schedule.minNoticeMinutes : -1;
    const slots = [];
    for (let m = open; m + step <= close; m += step) {
        if (m >= earliest) slots.push(fromMinutes(m));
    }
    return slots;
}

function populateTreatmentSelect() {
    const select = $("#bkTreatment");
    if (!select) return;
    const previous = select.value;
    const options = [
        { value: "evaluacion", label: ui("generalEval") },
        ...CONFIG.treatments.map((t) => ({ value: t.id, label: tr(t.title) })),
        { value: "urgencia", label: ui("emergency") }
    ];
    select.innerHTML = options.map((o) => `<option value="${o.value}">${escapeHtml(o.label)}</option>`).join("");
    if (previous) select.value = previous;
}

function refreshTimeSlots() {
    const select = $("#bkTime");
    const dateValue = $("#bkDate")?.value;
    if (!select) return;
    const previous = select.value;

    if (!dateValue) {
        select.innerHTML = `<option value="">${ui("selectDateFirst")}</option>`;
        select.disabled = true;
        return;
    }
    const slots = getSlotsForDate(dateValue);
    if (!slots.length) {
        select.innerHTML = `<option value="">${ui("noSlots")}</option>`;
        select.disabled = true;
        return;
    }
    select.disabled = false;
    select.innerHTML = `<option value="">${ui("selectTime")}</option>` +
        slots.map((s) => `<option value="${s}">${s}</option>`).join("");
    if (slots.includes(previous)) select.value = previous;
}

function validateDate(showMessage) {
    const value = $("#bkDate").value;
    let error = "";
    if (!value) error = ui("errDate");
    else if (value < nowInClinicTz().isoDate) error = ui("errDatePast");
    else if (!scheduleFor(weekdayOfIso(value))?.open) error = ui("errDateClosed");
    if (error && showMessage) setError("bkDate", error);
    return !error;
}

function validateBooking() {
    let ok = true;
    if (!$("#bkName").value.trim()) { setError("bkName", ui("errName")); ok = false; }
    if (!validateDate(true)) ok = false;
    else if (!$("#bkTime").value) { setError("bkTime", ui("errTime")); ok = false; }
    if (!ok) $("#bookingForm .is-invalid")?.focus();
    return ok;
}

function setError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field?.classList.add("is-invalid");
    field?.setAttribute("aria-invalid", "true");
    const msg = $(`[data-error-for="${fieldId}"]`);
    if (msg) msg.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    field?.classList.remove("is-invalid");
    field?.removeAttribute("aria-invalid");
    const msg = $(`[data-error-for="${fieldId}"]`);
    if (msg) msg.textContent = "";
}

// ==========================================================================
// 16. UBICACIÓN
// ==========================================================================
function initLocationActions() {
    $("#copyAddressBtn")?.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(CONFIG.contact.address);
            showToast(ui("addressCopied"));
        } catch (e) {
            showToast(CONFIG.contact.address);
        }
        track("copy_address");
    });
}

// ==========================================================================
// 17. CÓDIGO QR REAL (qrcode-generator) + DESCARGA PARA IMPRIMIR
// ==========================================================================
function buildQr(text) {
    if (typeof qrcode !== "function") return null;
    const qr = qrcode(0, "M"); // versión automática, corrección de errores media
    qr.addData(text);
    qr.make();
    return qr;
}

function drawQr(ctx, qr, x, y, size, color) {
    const quiet = 4; // margen blanco obligatorio para que los lectores lo detecten
    const count = qr.getModuleCount();
    const cell = size / (count + quiet * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = color;
    for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
            if (qr.isDark(r, c)) {
                ctx.fillRect(
                    Math.floor(x + (c + quiet) * cell),
                    Math.floor(y + (r + quiet) * cell),
                    Math.ceil(cell),
                    Math.ceil(cell)
                );
            }
        }
    }
}

function renderQr() {
    const canvas = $("#qrCanvas");
    if (!canvas) return;
    const qr = buildQr(getCardUrl());
    if (!qr) return;
    drawQr(canvas.getContext("2d"), qr, 0, 0, canvas.width, "#0c233c");
}

function downloadPrintableQr() {
    const qr = buildQr(getCardUrl());
    if (!qr) return;
    const W = 1200, H = 1500;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    // Franja superior con la marca
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "#0c233c");
    grad.addColorStop(0.6, "#0284c7");
    grad.addColorStop(1, "#14b8a6");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, 220);

    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 64px Outfit, system-ui, sans-serif";
    ctx.fillText(CONFIG.business.clinicName, W / 2, 115, W - 120);
    ctx.font = "500 38px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText(CONFIG.business.doctorName, W / 2, 175, W - 120);

    drawQr(ctx, qr, 150, 290, 900, "#0c233c");

    ctx.fillStyle = "#0c233c";
    ctx.font = "700 46px Outfit, system-ui, sans-serif";
    ctx.fillText(ui("qrScanText"), W / 2, 1290, W - 120);
    ctx.fillStyle = "#475569";
    ctx.font = "500 34px 'Plus Jakarta Sans', system-ui, sans-serif";
    ctx.fillText(getCardUrl().replace(/^https?:\/\//, "").replace(/\/$/, ""), W / 2, 1360, W - 120);
    ctx.fillText(`WhatsApp ${CONFIG.contact.phoneCall}`, W / 2, 1415, W - 120);

    canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `QR-${CONFIG.business.shortName.replace(/\s+/g, "-")}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        showToast(ui("qrDownloaded"));
    }, "image/png");
}

// ==========================================================================
// 18. COMPARTIR (NATIVO, COPIAR Y REDES)
// ==========================================================================
function shareMessage() {
    return ui("shareText", { doctor: CONFIG.business.doctorName });
}

function updateShareLinks() {
    const url = getCardUrl() + (state.lang === "en" ? "?lang=en" : "");
    const text = shareMessage();
    const e = encodeURIComponent;
    const links = {
        whatsapp: `https://wa.me/?text=${e(`${text} ${url}`)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`,
        x: `https://twitter.com/intent/tweet?text=${e(text)}&url=${e(url)}`,
        telegram: `https://t.me/share/url?url=${e(url)}&text=${e(text)}`,
        email: `mailto:?subject=${e(ui("emailSubject"))}&body=${e(`${text}\n${url}`)}`
    };
    $$("[data-share]").forEach((a) => { a.href = links[a.dataset.share]; });
    renderQr();
}

function initShareFeatures() {
    const copy = async () => {
        const url = getCardUrl();
        try {
            await navigator.clipboard.writeText(url);
            showToast(ui("linkCopied"));
        } catch (e) {
            showToast(url);
        }
    };

    $("#shareNativeBtn")?.addEventListener("click", async () => {
        const data = { title: CONFIG.business.clinicName, text: shareMessage(), url: getCardUrl() };
        if (navigator.share) {
            try { await navigator.share(data); } catch (err) { if (err.name !== "AbortError") copy(); }
        } else {
            copy();
        }
    });
    $("#copyCardLinkBtn")?.addEventListener("click", copy);
    $("#qrDownloadBtn")?.addEventListener("click", downloadPrintableQr);
    $$("[data-share]").forEach((a) => a.addEventListener("click", () => track("share", { method: a.dataset.share })));
}

// ==========================================================================
// 19. GUARDAR CONTACTO (vCard)
// ==========================================================================
function initVCardExport() {
    const download = () => {
        const b = CONFIG.business;
        const c = CONFIG.contact;
        const esc = (s) => String(s).replace(/([,;\\])/g, "\\$1");
        const vcard = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${esc(b.doctorName)}`,
            `N:${esc(b.vcardName.family)};${esc(b.vcardName.given)};;${esc(b.vcardName.prefix)};`,
            `ORG:${esc(b.clinicName)}`,
            `TITLE:${esc(tr(b.doctorTitle))}`,
            `TEL;TYPE=CELL,VOICE:${c.phoneCall}`,
            `TEL;TYPE=WORK,VOICE:${c.phoneLandline}`,
            `EMAIL;TYPE=INTERNET,WORK:${c.email}`,
            `ADR;TYPE=WORK:;;${esc(c.address)};${esc(c.city)};;;${esc(c.country)}`,
            `GEO:${c.coordinates.lat};${c.coordinates.lng}`,
            `URL:${getCardUrl()}`,
            `NOTE:${esc(tr(b.slogan))}`,
            "END:VCARD"
        ].join("\r\n");

        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${b.shortName.replace(/\s+/g, "_")}_Contacto.vcf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        showToast(ui("vcardDownloading"));
        track("vcard_download");
    };
    $("#heroSaveVCardBtn")?.addEventListener("click", download);
    $("#vcardDownloadNavBtn")?.addEventListener("click", download);
}

// ==========================================================================
// 20. ESTADÍSTICAS (GOOGLE ANALYTICS 4)
// ==========================================================================
/**
 * Si CONFIG.analytics.ga4MeasurementId tiene un ID, se carga Google Analytics
 * y se registran las acciones importantes: clics a WhatsApp, llamadas, mapa,
 * citas enviadas, casos vistos, preguntas abiertas, descargas de QR, etc.
 * Cualquier elemento con el atributo data-track="nombre_evento" se mide solo.
 */
function initAnalytics() {
    const id = CONFIG.analytics.ga4MeasurementId;
    if (id && /^G-[A-Z0-9]+$/i.test(id)) {
        const s = document.createElement("script");
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", id);
    }

    document.addEventListener("click", (event) => {
        const el = event.target.closest("[data-track]");
        if (!el || el.type === "submit") return; // el envío del formulario se mide al validar
        track(el.dataset.track, el.dataset.trackLabel ? { label: el.dataset.trackLabel } : {});
    });
}

function track(eventName, params = {}) {
    const payload = { ...params, language: state.lang };
    if (typeof window.gtag === "function") window.gtag("event", eventName, payload);
}

// ==========================================================================
// 21. NOTIFICACIÓN TOAST
// ==========================================================================
let toastTimer = null;
function showToast(message) {
    const toast = $("#appToast");
    const msg = $("#toastMessage");
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
