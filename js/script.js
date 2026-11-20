document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const t = (key) => (window.i18n ? window.i18n.t(key) : key);

    // Mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    const setMenu = (open) => {
        navMenu.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
    };

    if (navToggle && navMenu) {
        setMenu(false);
        document.addEventListener('languagechange', () => setMenu(navMenu.classList.contains('open')));

        navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));

        // Tapping a link should navigate and get the menu out of the way
        navMenu.addEventListener('click', (e) => {
            if (e.target.matches('a')) setMenu(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                setMenu(false);
                navToggle.focus();
            }
        });
    }

    // In-page links scroll below the sticky header
    const header = document.querySelector('.site-header');
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.getElementById(link.getAttribute('href').slice(1));
            if (!target) return;
            e.preventDefault();
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - header.offsetHeight,
                behavior: reduceMotion.matches ? 'auto' : 'smooth'
            });
        });
    });

    // Hero: a panel of Talavera tiles. Each one turns a quarter when touched.
    const tiles = document.querySelector('.tiles');
    if (tiles) {
        const COUNT = 16;
        for (let i = 0; i < COUNT; i++) {
            const tile = document.createElement('span');
            // A fixed, irregular mix of the four motifs so the panel looks hand-laid
            tile.className = `tile tile-${(i * 7 + Math.floor(i / 4)) % 4}`;
            tile.style.setProperty('--turn', `${((i * 5) % 4) * 90}deg`);
            tile.style.setProperty('--i', i);
            tiles.appendChild(tile);
        }

        const turn = (tile) => {
            const now = parseInt(tile.style.getPropertyValue('--turn'), 10) || 0;
            tile.style.setProperty('--turn', `${now + 90}deg`);
        };

        tiles.addEventListener('pointerover', (e) => {
            if (e.pointerType === 'mouse' && e.target.classList.contains('tile')) turn(e.target);
        });
        tiles.addEventListener('click', (e) => {
            if (e.target.classList.contains('tile')) turn(e.target);
        });
    }

    // Carousels: the track scrolls natively; buttons and the counter just drive it
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = track.querySelectorAll('img');
        const count = carousel.querySelector('.carousel-count');
        const [prev, next] = carousel.querySelectorAll('.carousel-btn');

        const current = () => Math.round(track.scrollLeft / track.clientWidth);

        const update = () => {
            const i = current();
            count.textContent = `${i + 1} / ${slides.length}`;
            prev.disabled = i === 0;
            next.disabled = i === slides.length - 1;
        };

        const goTo = (i) => {
            track.scrollTo({
                left: i * track.clientWidth,
                behavior: reduceMotion.matches ? 'auto' : 'smooth'
            });
        };

        prev.addEventListener('click', () => goTo(current() - 1));
        next.addEventListener('click', () => goTo(current() + 1));
        track.addEventListener('scroll', update, { passive: true });
        update();
    });

    // Only one reel plays at a time
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(other => {
                if (other !== video) other.pause();
            });
        });
    });
});
