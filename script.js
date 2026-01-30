// Sistema de Tradução e Funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const languageToggle = document.getElementById('languageToggle');
    const htmlRoot = document.getElementById('html-root');
    
    let scrollTimeout;
    const headerThreshold = 50;
    let currentLanguage = localStorage.getItem('portfolio-language') || 'pt';

    // Inicializar idioma
    function initLanguage() {
        updateLanguage(currentLanguage);
    }

    // Função para atualizar o idioma
    function updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('portfolio-language', lang);
        htmlRoot.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
        
        // Atualizar texto do botão
        const langText = languageToggle.querySelector('.lang-text');
        langText.textContent = lang === 'pt' ? 'PT' : 'EN';
        
        // Atualizar todos os elementos com data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const keys = key.split('.');
            let value = translations[lang];
            
            for (let k of keys) {
                value = value?.[k];
            }
            
            if (value !== undefined) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            }
        });
    }

    // Toggle de idioma
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'pt' ? 'en' : 'pt';
            updateLanguage(newLang);
            
            // Animação no botão
            languageToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                languageToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Inicializar idioma ao carregar
    initLanguage();

    // Função para atualizar a seção ativa e o link da navbar
    const updateActiveSection = () => {
        let currentActiveSectionId = '';
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const activationPoint = sectionTop - viewportHeight * 0.3;

            if (scrollY >= activationPoint && scrollY < sectionTop + sectionHeight) {
                currentActiveSectionId = section.id;
            }

            if (scrollY >= activationPoint - 100 && scrollY < sectionTop + sectionHeight) {
                section.classList.add('active');
            }
        });

        // Atualiza a classe 'active' nos links da navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentActiveSectionId)) {
                link.classList.add('active');
            }
        });

        // Mostrar/Esconder header
        if (scrollY > headerThreshold) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    };

    // Adiciona o smooth scroll e atualiza a classe 'active' ao clicar nos links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const scrollPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });

                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Listener para o evento de scroll com debounce
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveSection, 100);
    });

    // Executa no carregamento inicial
    updateActiveSection();

    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.project-item, .skill-item, .experience-item, .course-item').forEach(el => {
        observer.observe(el);
    });

    // Efeito de parallax suave no hero
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
        });
    }

    // Animação de digitação no hero (opcional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Efeito de hover nos cards de projeto
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação de contador para números (se houver)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
});

// --- Geração de Partículas para a Seção Hero ---
const heroSection = document.getElementById('hero');
if (heroSection) {
    const heroParticlesContainer = document.createElement('div');
    heroParticlesContainer.classList.add('hero-particles');
    heroSection.prepend(heroParticlesContainer);

    const numberOfParticles = 50;
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        const size = Math.random() * 8 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heroParticlesContainer.appendChild(particle);
    }
}

// Efeito de cursor personalizado (opcional)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Adicionar efeito de brilho ao passar o mouse em links
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))';
    });
    element.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
    });
});
