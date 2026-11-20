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

    // Like an old CRT TV. Off: the picture squashes into a bright line,
    // shrinks to a dot and the dot glows out. The reality swaps in the dark.
    // On: the dot stretches into a line and opens into the new picture.
    const screen = document.querySelector('.screen');
    const tvStatic = document.querySelector('.tv-static');
    const tvDot = document.querySelector('.tv-dot');
    // Line and dot sizes depend on the window, so they're set on each switch
    let LINE = 'scale(1, 0.006)';
    let DOT = 'scale(0.004, 0.006)';
    let switching = false;

    const tvLine = document.querySelector('.tv-line');

    const crtOff = () => {
        tvStatic.animate(
            [{ opacity: 0 }, { opacity: 0.35, offset: 0.3 }, { opacity: 0 }],
            { duration: 420, easing: 'steps(6)' }
        );
        // The bright line takes over as the picture gets thin, then shrinks with it
        tvLine.animate([
            { opacity: 0, transform: 'scaleX(1)' },
            { opacity: 0, transform: 'scaleX(1)', offset: 0.4 },
            { opacity: 1, transform: 'scaleX(1)', offset: 0.55, easing: 'cubic-bezier(0.5, 0, 0.75, 0)' },
            { opacity: 1, transform: 'scaleX(0.003)', offset: 0.9 },
            { opacity: 0, transform: 'scaleX(0.003)' }
        ], { duration: 560, fill: 'forwards' });
        // Afterglow: the dot lingers a moment after the picture is gone
        tvDot.animate(
            [{ opacity: 0 }, { opacity: 0, offset: 0.55 }, { opacity: 1, offset: 0.62 }, { opacity: 0.9, offset: 0.75 }, { opacity: 0 }],
            { duration: 900 }
        );
        return screen.animate([
            { transform: 'scale(1, 1)', easing: 'cubic-bezier(0.7, 0, 0.84, 0)' },
            { transform: LINE, offset: 0.55, easing: 'cubic-bezier(0.5, 0, 0.75, 0)' },
            { transform: DOT, offset: 0.9 },
            { transform: DOT, opacity: 0 }
        ], { duration: 560, fill: 'forwards' }).finished;
    };

    const crtOn = () => {
        tvStatic.animate(
            [{ opacity: 0 }, { opacity: 0.45, offset: 0.35 }, { opacity: 0 }],
            { duration: 700, easing: 'steps(7)' }
        );
        tvLine.animate([
            { opacity: 1, transform: 'scaleX(0.003)', easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)' },
            { opacity: 1, transform: 'scaleX(1)', offset: 0.3 },
            { opacity: 0, transform: 'scaleX(1) scaleY(6)', offset: 0.5 },
            { opacity: 0, transform: 'scaleX(1)' }
        ], { duration: 640 });
        return screen.animate([
            { transform: DOT, opacity: 0, easing: 'cubic-bezier(0.2, 0.7, 0.3, 1)' },
            { transform: LINE, opacity: 1, offset: 0.3, easing: 'cubic-bezier(0.15, 0.75, 0.25, 1)' },
            { transform: 'scale(1, 1.025)', offset: 0.72 },
            { transform: 'scale(1, 0.992)', offset: 0.86 },
            { transform: 'scale(1, 1)' }
        ], { duration: 640 }).finished;
    };

    const setReality = async (red) => {
        if (reduceMotion.matches || !screen.animate) {
            applyReality(red);
            return;
        }
        if (switching) return;
        switching = true;

        // Only the part of the page on screen is the "picture": clip to it and
        // squash around its middle, so a 4px line is 4px whatever the page length
        const top = window.scrollY;
        const vh = window.innerHeight;
        const below = Math.max(0, screen.offsetHeight - top - vh);
        LINE = `scale(1, ${4 / vh})`;
        DOT = `scale(${5 / window.innerWidth}, ${4 / vh})`;
        screen.style.clipPath = `inset(${top}px 0 ${below}px 0)`;
        screen.style.transformOrigin = `50% ${top + vh / 2}px`;
        root.classList.add('crt');

        const off = await crtOff();
        applyReality(red);
        await new Promise(r => setTimeout(r, 160));
        off.cancel();
        tvLine.getAnimations().forEach(an => an.cancel());
        await crtOn();

        root.classList.remove('crt');
        screen.style.transformOrigin = '';
        screen.style.clipPath = '';
        switching = false;
    };

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
