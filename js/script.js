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

    // Two realities: blue is the original cut, red is the deleted scene.
    const root = document.documentElement;
    const realityToggle = document.querySelector('.reality-toggle');
    const screenFx = document.querySelector('.screen-fx');

    const applyReality = (red) => {
        root.dataset.reality = red ? 'red' : 'blue';
        realityToggle.setAttribute('aria-pressed', String(red));
        if (window.i18n) window.i18n.refresh();
    };

    // Like changing channel on an old TV: the screen cuts to black, the
    // reality swaps while nothing is visible, then the new one fades in.
    let switching = false;
    const setReality = (red) => {
        if (reduceMotion.matches) {
            applyReality(red);
            return;
        }
        if (switching) return;
        switching = true;
        screenFx.classList.add('switching');
        setTimeout(() => applyReality(red), 320);
    };

    screenFx.addEventListener('animationend', () => {
        screenFx.classList.remove('switching');
        switching = false;
    });
    realityToggle.addEventListener('click', () => setReality(root.dataset.reality !== 'red'));

    // Flashlight: in the deleted scene, the light follows the pointer
    let lightFrame = null;
    window.addEventListener('pointermove', (e) => {
        if (root.dataset.reality !== 'red' || lightFrame) return;
        lightFrame = requestAnimationFrame(() => {
            screenFx.style.setProperty('--mx', `${e.clientX}px`);
            screenFx.style.setProperty('--my', `${e.clientY}px`);
            lightFrame = null;
        });
    }, { passive: true });

    // Hero: a panel of Talavera tiles. Each one turns a quarter when touched,
    // except the one with a keyhole: that one is a door to the other reality.
    const tiles = document.querySelector('.tiles');
    if (tiles) {
        const COUNT = 16;
        const DOOR = 10;
        for (let i = 0; i < COUNT; i++) {
            const tile = document.createElement('span');
            // A fixed, irregular mix of the four motifs so the panel looks hand-laid
            tile.className = i === DOOR ? 'tile tile-door' : `tile tile-${(i * 7 + Math.floor(i / 4)) % 4}`;
            tile.style.setProperty('--turn', i === DOOR ? '0deg' : `${((i * 5) % 4) * 90}deg`);
            // In the deleted scene every tile sits slightly wrong
            tile.style.setProperty('--slip', `${((i * 37) % 9) - 4}deg`);
            tile.style.setProperty('--i', i);
            tiles.appendChild(tile);
        }

        const turn = (tile) => {
            if (tile.classList.contains('tile-door')) return;
            const now = parseInt(tile.style.getPropertyValue('--turn'), 10) || 0;
            tile.style.setProperty('--turn', `${now + 90}deg`);
        };

        tiles.addEventListener('pointerover', (e) => {
            if (e.pointerType === 'mouse' && e.target.classList.contains('tile')) turn(e.target);
        });
        tiles.addEventListener('click', (e) => {
            if (e.target.classList.contains('tile-door')) {
                setReality(root.dataset.reality !== 'red');
            } else if (e.target.classList.contains('tile')) {
                turn(e.target);
            }
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
