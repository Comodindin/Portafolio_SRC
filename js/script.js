document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    const closeMenu = () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
    };

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        // Tapping a link should navigate and get the menu out of the way
        navMenu.addEventListener('click', (e) => {
            if (e.target.matches('a')) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                closeMenu();
                navToggle.focus();
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for sticky header
                        behavior: reduceMotion.matches ? 'auto' : 'smooth'
                    });
                }
            }
        });
    });

    // Advanced reveal animation on scroll
    const revealItems = document.querySelectorAll('.reveal-item');

    // No IntersectionObserver (or motion turned down) means no animation, so
    // show everything up front rather than leaving it stuck at opacity 0.
    if (!('IntersectionObserver' in window) || reduceMotion.matches) {
        revealItems.forEach(item => item.classList.add('active'));
        return;
    }

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealOnScroll, {
        root: null,
        threshold: 0.15,
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });
});
