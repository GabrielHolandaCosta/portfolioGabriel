document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const sections = Array.from(document.querySelectorAll('.section'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const languageToggle = document.getElementById('languageToggle');
    const htmlRoot = document.getElementById('html-root');
    const heroSection = document.getElementById('hero');
    const storageKey = 'portfolio-language';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileViewport = window.matchMedia('(max-width: 768px)');
    const headerThreshold = 48;

    let ticking = false;
    let currentLanguage = getStoredLanguage();

    function getStoredLanguage() {
        try {
            const savedLanguage = localStorage.getItem(storageKey);
            return savedLanguage === 'en' ? 'en' : 'pt';
        } catch {
            return 'pt';
        }
    }

    function saveLanguage(lang) {
        try {
            localStorage.setItem(storageKey, lang);
        } catch {
            // O site continua funcionando mesmo se o navegador bloquear localStorage.
        }
    }

    function getTranslation(lang, key) {
        return key.split('.').reduce((value, part) => value?.[part], translations?.[lang]);
    }

    function updateLanguage(lang) {
        currentLanguage = lang;
        saveLanguage(lang);

        htmlRoot?.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

        if (languageToggle) {
            const langText = languageToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'pt' ? 'PT' : 'EN';
            }

            languageToggle.setAttribute(
                'aria-label',
                lang === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'
            );
            languageToggle.setAttribute(
                'title',
                lang === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'
            );
        }

        document.querySelectorAll('[data-translate]').forEach((element) => {
            const value = getTranslation(lang, element.getAttribute('data-translate'));

            if (value === undefined) {
                return;
            }

            if (element.matches('input, textarea')) {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        });
    }

    function updateActiveSection() {
        const viewportMarker = window.innerHeight * 0.42;
        let currentActiveSectionId = sections[0]?.id || '';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= viewportMarker && rect.bottom >= viewportMarker) {
                currentActiveSectionId = section.id;
            }

            if (rect.top <= window.innerHeight * 0.82 && rect.bottom >= window.innerHeight * 0.08) {
                section.classList.add('active');
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentActiveSectionId}`);
        });

        if (header) {
            header.classList.toggle('visible', window.scrollY > headerThreshold || mobileViewport.matches);
        }
    }

    function requestScrollUpdate() {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(() => {
            updateActiveSection();
            ticking = false;
        });
    }

    function animateScrollTo(targetY) {
        const distance = Math.abs(targetY - window.scrollY);
        const shouldJump = prefersReducedMotion.matches || mobileViewport.matches || distance > 3200;

        window.scrollTo({
            top: targetY,
            behavior: shouldJump ? 'auto' : 'smooth'
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href')?.substring(1);
            const targetSection = targetId ? document.getElementById(targetId) : null;

            if (!targetSection) {
                return;
            }

            navLinks.forEach((nav) => nav.classList.remove('active'));
            link.classList.add('active');

            if (mobileViewport.matches) {
                return;
            }

            event.preventDefault();

            const headerHeight = header?.offsetHeight || 0;
            const scrollPosition = Math.max(targetSection.offsetTop - headerHeight + 1, 0);

            animateScrollTo(scrollPosition);
        });
    });

    languageToggle?.addEventListener('click', () => {
        updateLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
        languageToggle.classList.add('is-pressing');
        window.setTimeout(() => languageToggle.classList.remove('is-pressing'), 160);
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.project-item, .skill-item, .experience-item, .course-item')
            .forEach((element) => observer.observe(element));
    }

    function createHeroParticles() {
        if (!heroSection || prefersReducedMotion.matches || mobileViewport.matches) {
            return;
        }

        const heroParticlesContainer = document.createElement('div');
        const fragment = document.createDocumentFragment();
        const numberOfParticles = 18;

        heroParticlesContainer.className = 'hero-particles';

        for (let index = 0; index < numberOfParticles; index += 1) {
            const particle = document.createElement('span');
            const size = Math.random() * 7 + 3;

            particle.className = 'particle';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${Math.random() * 5 + 7}s`;

            fragment.appendChild(particle);
        }

        heroParticlesContainer.appendChild(fragment);
        heroSection.prepend(heroParticlesContainer);
    }

    updateLanguage(currentLanguage);
    createHeroParticles();
    updateActiveSection();

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate);
});
