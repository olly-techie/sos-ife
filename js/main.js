// --- Animation Engine Module ---
const AnimationEngine = {
    revealObserver: null,
    statsObserver: null,

    init: () => {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        AnimationEngine.revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        AnimationEngine.statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                AnimationEngine.startCounters();
            }
        }, { threshold: 0.5 });

        AnimationEngine.refresh();
    },

    refresh: () => {
        // Observe new elements added to DOM
        document.querySelectorAll('.reveal').forEach(el => {
            AnimationEngine.revealObserver.observe(el);
        });

        const statsSection = document.querySelector('#about-detail') || document.querySelector('#about');
        if (statsSection) {
            AnimationEngine.statsObserver.observe(statsSection);
        }

        AnimationEngine.initHeroInteractivity();
    },

    startCounters: () => {
        const stats = document.querySelectorAll('h4');
        stats.forEach(stat => {
            const text = stat.innerText;
            if (text.includes('+') && !stat.dataset.animated) {
                const target = parseInt(text.replace('+', ''));
                let current = 0;
                const increment = target / 50;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        stat.innerText = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.innerText = target + '+';
                    }
                };
                updateCounter();
                stat.dataset.animated = "true";
            }
        });
    },

    initHeroInteractivity: () => {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');

        if (hero && heroContent) {
            hero.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                const moveX = (clientX / innerWidth) - 0.5;
                const moveY = (clientY / innerHeight) - 0.5;
                const intensity = 20;
                heroContent.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
            });

            hero.addEventListener('mouseleave', () => {
                heroContent.style.transition = 'transform 0.5s ease';
                heroContent.style.transform = 'translate(0, 0)';
                setTimeout(() => { heroContent.style.transition = ''; }, 500);
            });
        }
    }
};

// Expose to global scope for Router
window.AnimationEngine = AnimationEngine;

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Animation Engine
    AnimationEngine.init();

    // 2. Initialize Router
    Router.init();

    // 3. Header Behavior (Persistent)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Mobile Menu Logic (Persistent)
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
});
