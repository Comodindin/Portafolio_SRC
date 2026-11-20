// English / Spanish copy. The HTML ships in English; this swaps every element
// marked with data-i18n (text) or data-i18n-aria (aria-label) to the chosen
// language. The choice is remembered, and first visits follow the browser.
(() => {
    const strings = {
        en: {
            pageTitle: 'Sarai Rosas | Interaction Designer',
            skip: 'Skip to work',
            navLabel: 'Main navigation',
            langLabel: 'Language',
            menuOpen: 'Open menu',
            menuClose: 'Close menu',
            navWork: 'Work',
            navFreelance: 'Freelance',
            navExperience: 'Experience',
            navAbout: 'About',
            navContact: 'Contact',

            heroKicker: 'Interaction designer in Puebla, Mexico',
            heroLead: 'I design interactive systems and build them in Swift, Unreal Engine and the browser: UI/UX, data visualization and real-time 3D, often where social research meets technology.',
            heroWork: 'View my work',
            heroCV: 'Download CV',
            heroTiles: 'Talavera tiles, from Puebla. Tap one to turn it.',

            workTitle: 'Selected work',
            inProduction: 'In production',
            tagProduct: 'Product design',
            tagSerious: 'Serious games',
            tag3D: '3D design',
            tagDataViz: 'Data viz',
            tagUrbanism: 'Social urbanism',
            tagResearch: 'Research',
            tagCartography: 'Cartography',
            tag2DArt: '2D art',
            tag2DAnim: '2D animation',
            tagShort: 'Short film',
            tagStory: 'Storytelling',
            p1Title: 'VITALIA: Health & Wellness App',
            p1Desc: 'A functional iOS app built around one deliberate product decision: replacing calorie-counting pressure with habit tracking and emotional journaling. Covers onboarding with a personalized assessment, macro and hydration dashboards, sleep logging, recipes and guided breathing.',
            p2Desc: 'A first-person puzzle game on gender inequality in Mexico. Each room maps a different sphere of life (domestic, media, education, politics) to an interactive challenge, closing with a memorial hall of Mexican pioneers and a puzzle that assembles the legislative wins they made possible.',
            p3Title: 'Femicide Cartography',
            p3Desc: 'A custom web interface built for the Forensic Architecture Laboratory to document and visualize data on femicide in Mexico, turning forensic research into a cartographic narrative anyone can read.',
            p4Title: 'The LAF Dashboard',
            p4Desc: 'Systematization and qualitative analysis of participatory mapping data at IBERO Puebla, translating citizen narratives into structured information layers for social urbanism research.',
            p5Title: 'RESOURCE: Analog Horror Game',
            p5Desc: 'A first-person analog horror game built with 2D assets in a 3D space, currently in final development. Concept, art direction and in-engine implementation.',
            p6Desc: "An animated short about Ian, whose family and friends won't accept that they want to transition. Caught between them, Ian ends up living a double life, hiding who they really are.",

            flIntro: 'Instagram content for an integrative medicine practice in Oaxaca: art direction, editorial design and copywriting for 8 carousels (52 pieces) that explain each therapy in plain language, plus seasonal campaigns and a reel.',
            flInstagram: 'See @marinareyesintegral on Instagram ↗',
            flHint: 'Swipe or use the arrows to flip through each carousel.',
            slidePrev: 'Previous slide',
            slideNext: 'Next slide',
            slideOf: (title, i, n) => `${title}, slide ${i} of ${n}`,
            carouselLabel: (title, n) => `${title} (${n} slides)`,

            expTitle: 'Experience',
            expIntro: "Internship, one year. I produced social media material for the 11 brands in the group, aimed at their dealership networks. Every piece had to hold each brand's global identity standards while still working as local, financing-focused content.",
            ducatiClient: 'Campaign for Ducati Financial Services',
            ducatiDesc: 'A multi-format launch for the Ducati Premier financing plan, built around the Panigale V2S 2025: one visual system adapted to carousel, feed post, story, motion graphic and reel.',
            fmtCarousel: 'Carousel',
            seatClient: 'Campaign for SEAT',
            seatDesc: "A short vertical reel for SEAT's certified pre-owned program, presenting SEAT Credit and SEAT Total financing with terms of up to 5 years.",
            specBrand: 'Brand',
            specFormat: 'Format',
            specLength: 'Length',
            specProgram: 'Program',
            specFinancing: 'Financing',
            specFinancingValue: 'SEAT Credit & SEAT Total, up to 5 years',

            aboutTitle: 'About me',
            about1: "I'm an interaction designer who takes products from concept to working build. That means a native iOS app in Swift, an interactive web interface, or an immersive environment in Unreal Engine, whichever the problem actually calls for.",
            about2: 'Much of my work sits where social research meets interaction design: turning complex data and field research into interfaces and cartographic narratives people can navigate. I studied Interaction Design and Animation at Universidad Iberoamericana Puebla, and spent a year at Volkswagen Financial Services building corporate identity assets and holding global brand standards across multiple automotive brands.',
            about3: 'My toolkit spans Swift, HTML, CSS, JavaScript and ArcGIS Experience Builder, alongside Unity, Unreal Engine and the Adobe suite. I work in Spanish, English and German.',
            skillsTitle: 'Skills',
            skill1: 'UI/UX design & testing',
            skill2: 'Mobile product design (iOS / Swift)',
            skill3: 'Data & spatial visualization',
            skill4: 'Interactive systems design',
            skill5: '3D modeling & real-time environments',
            skill6: 'Serious games & game design',
            skill7: 'AI-assisted design & workflows',

            contactTitle: 'Get in touch',
            contactText: "Based in Puebla, Mexico. Open to remote work and relocation. If you're building something interactive and want a designer who can also ship it, let's talk.",
            contactEmail: 'Email me',
            rights: 'All rights reserved.',
            // Deleted scene (red reality). Any key ending in "Red" replaces
            // its base key while the red reality is on.
            realityLabel: 'Deleted scene',
            pageTitleRed: 'Sarai Rosas | Deleted scene',
            heroKickerRed: 'Deleted scene. Footage that never made the final cut.',
            heroTilesRed: "One of these tiles wasn't here before.",
            heroWorkRed: 'Open the files',
            workTitleRed: 'Recovered files',
            inProductionRed: 'Signal detected',
            aboutTitleRed: "Who's behind the camera",
            contactTitleRed: 'Are you still there?',
            rightsRed: "You shouldn't be here.",
        },

        es: {
            pageTitle: 'Sarai Rosas | Diseñadora de interacción',
            skip: 'Ir al trabajo',
            navLabel: 'Navegación principal',
            langLabel: 'Idioma',
            menuOpen: 'Abrir menú',
            menuClose: 'Cerrar menú',
            navWork: 'Trabajo',
            navFreelance: 'Freelance',
            navExperience: 'Experiencia',
            navAbout: 'Sobre mí',
            navContact: 'Contacto',

            heroKicker: 'Diseñadora de interacción en Puebla, México',
            heroLead: 'Diseño sistemas interactivos y los construyo en Swift, Unreal Engine y el navegador: UI/UX, visualización de datos y 3D en tiempo real, muchas veces donde la investigación social se cruza con la tecnología.',
            heroWork: 'Ver mi trabajo',
            heroCV: 'Descargar CV',
            heroTiles: 'Azulejos de Talavera poblana. Toca uno para girarlo.',

            workTitle: 'Trabajo seleccionado',
            inProduction: 'En producción',
            tagProduct: 'Diseño de producto',
            tagSerious: 'Juegos serios',
            tag3D: 'Diseño 3D',
            tagDataViz: 'Visualización de datos',
            tagUrbanism: 'Urbanismo social',
            tagResearch: 'Investigación',
            tagCartography: 'Cartografía',
            tag2DArt: 'Arte 2D',
            tag2DAnim: 'Animación 2D',
            tagShort: 'Cortometraje',
            tagStory: 'Narrativa',
            p1Title: 'VITALIA: app de salud y bienestar',
            p1Desc: 'Una app funcional para iOS construida sobre una decisión de producto: sustituir la presión de contar calorías por el seguimiento de hábitos y un diario emocional. Incluye onboarding con una evaluación personalizada, paneles de macros e hidratación, registro de sueño, recetas y respiración guiada.',
            p2Desc: 'Un juego de puzzles en primera persona sobre la desigualdad de género en México. Cada sala representa un ámbito de la vida (el hogar, los medios, la educación, la política) con un reto interactivo, y cierra con un memorial de pioneras mexicanas y un puzzle que reúne los logros legislativos que hicieron posibles.',
            p3Title: 'Cartografía del feminicidio',
            p3Desc: 'Una interfaz web hecha a la medida para el Laboratorio de Arquitectura Forense que documenta y visualiza datos sobre feminicidios en México, y convierte la investigación forense en una narrativa cartográfica que cualquiera puede leer.',
            p4Title: 'El dashboard del LAF',
            p4Desc: 'Sistematización y análisis cualitativo de datos de mapeo participativo en IBERO Puebla, que traduce narrativas ciudadanas en capas de información estructurada para la investigación en urbanismo social.',
            p5Title: 'RESOURCE: juego de analog horror',
            p5Desc: 'Un juego de analog horror en primera persona hecho con assets 2D en un espacio 3D, en la recta final de desarrollo. Concepto, dirección de arte e implementación en el motor.',
            p6Desc: 'Un corto animado sobre Ian, cuya familia y amigos no aceptan que quiera transicionar. En medio de todo, Ian termina llevando una doble vida y ocultando quién es en realidad.',

            flIntro: 'Contenido de Instagram para un consultorio de medicina integral en Oaxaca: dirección de arte, diseño editorial y copy para 8 carruseles (52 piezas) que explican cada terapia en lenguaje sencillo, además de campañas de temporada y un reel.',
            flInstagram: 'Ver @marinareyesintegral en Instagram ↗',
            flHint: 'Desliza o usa las flechas para recorrer cada carrusel.',
            slidePrev: 'Lámina anterior',
            slideNext: 'Lámina siguiente',
            slideOf: (title, i, n) => `${title}, lámina ${i} de ${n}`,
            carouselLabel: (title, n) => `${title} (${n} láminas)`,

            expTitle: 'Experiencia',
            expIntro: 'Prácticas profesionales, un año. Produje material para redes sociales de las 11 marcas del grupo, dirigido a sus redes de concesionarios. Cada pieza debía respetar los estándares globales de identidad de su marca y, al mismo tiempo, funcionar como contenido local enfocado en financiamiento.',
            ducatiClient: 'Campaña para Ducati Financial Services',
            ducatiDesc: 'Un lanzamiento multiformato para el plan de financiamiento Ducati Premier, centrado en la Panigale V2S 2025: un mismo sistema visual adaptado a carrusel, post, story, motion graphic y reel.',
            fmtCarousel: 'Carrusel',
            seatClient: 'Campaña para SEAT',
            seatDesc: 'Un reel vertical corto para el programa de seminuevos certificados de SEAT, que presenta el financiamiento SEAT Credit y SEAT Total con plazos de hasta 5 años.',
            specBrand: 'Marca',
            specFormat: 'Formato',
            specLength: 'Duración',
            specProgram: 'Programa',
            specFinancing: 'Financiamiento',
            specFinancingValue: 'SEAT Credit y SEAT Total, hasta 5 años',

            aboutTitle: 'Sobre mí',
            about1: 'Soy diseñadora de interacción y llevo los productos del concepto a una versión que funciona: una app nativa de iOS en Swift, una interfaz web interactiva o un entorno inmersivo en Unreal Engine, según lo que el problema realmente necesite.',
            about2: 'Gran parte de mi trabajo está donde la investigación social se encuentra con el diseño de interacción: convertir datos complejos e investigación de campo en interfaces y narrativas cartográficas que la gente pueda recorrer. Estudié Diseño de Interacción y Animación en la Universidad Iberoamericana Puebla y pasé un año en Volkswagen Financial Services creando piezas de identidad corporativa y cuidando los estándares globales de varias marcas automotrices.',
            about3: 'Trabajo con Swift, HTML, CSS, JavaScript y ArcGIS Experience Builder, además de Unity, Unreal Engine y la suite de Adobe. Hablo español, inglés y alemán.',
            skillsTitle: 'Habilidades',
            skill1: 'Diseño y pruebas de UI/UX',
            skill2: 'Diseño de producto móvil (iOS / Swift)',
            skill3: 'Visualización de datos y espacial',
            skill4: 'Diseño de sistemas interactivos',
            skill5: 'Modelado 3D y entornos en tiempo real',
            skill6: 'Juegos serios y diseño de juegos',
            skill7: 'Diseño y flujos de trabajo asistidos por IA',

            contactTitle: 'Hablemos',
            contactText: 'Vivo en Puebla, México. Disponible para trabajo remoto y reubicación. Si estás construyendo algo interactivo y buscas una diseñadora que también pueda llevarlo a producción, escríbeme.',
            contactEmail: 'Escríbeme',
            rights: 'Todos los derechos reservados.',
            realityLabel: 'Escena eliminada',
            pageTitleRed: 'Sarai Rosas | Escena eliminada',
            heroKickerRed: 'Escena eliminada. Material que nunca llegó al corte final.',
            heroTilesRed: 'Uno de estos azulejos no estaba antes.',
            heroWorkRed: 'Abrir los archivos',
            workTitleRed: 'Archivos recuperados',
            inProductionRed: 'Señal detectada',
            aboutTitleRed: 'Quién está detrás de la cámara',
            contactTitleRed: '¿Sigues ahí?',
            rightsRed: 'No deberías estar aquí.',
        },
    };

    const STORAGE_KEY = 'lang';
    let current = 'en';

    const saved = () => {
        try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
    };

    const remember = (lang) => {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode: just don't remember */ }
    };

    const isRed = () => document.documentElement.dataset.reality === 'red';

    const t = (key, ...args) => {
        const k = isRed() && (key + 'Red') in strings[current] ? key + 'Red' : key;
        const value = strings[current][k] ?? strings.en[k];
        return typeof value === 'function' ? value(...args) : value;
    };

    const apply = (lang) => {
        current = strings[lang] ? lang : 'en';
        document.documentElement.lang = current;
        document.title = t('pageTitle');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', t(el.dataset.i18nAria));
        });

        // Carousels: alt text and labels are built from each carousel's caption
        document.querySelectorAll('[data-carousel]').forEach(carousel => {
            const title = carousel.querySelector('figcaption').textContent.trim();
            const slides = carousel.querySelectorAll('.carousel-track img');
            carousel.querySelector('.carousel-track').setAttribute('aria-label', t('carouselLabel', title, slides.length));
            slides.forEach((img, i) => img.setAttribute('alt', t('slideOf', title, i + 1, slides.length)));
            const [prev, next] = carousel.querySelectorAll('.carousel-btn');
            prev.setAttribute('aria-label', t('slidePrev'));
            next.setAttribute('aria-label', t('slideNext'));
        });

        document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
            btn.setAttribute('aria-pressed', String(btn.dataset.lang === current));
        });

        document.dispatchEvent(new CustomEvent('languagechange', { detail: current }));
    };

    const initial = saved() || ((navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en');
    apply(initial);

    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            apply(btn.dataset.lang);
            remember(current);
        });
    });

    window.i18n = { t, refresh: () => apply(current), get lang() { return current; } };
})();
