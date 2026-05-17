// --- Animation Engine Module ---
const AnimationEngine = {
    revealObserver: null,

    init: () => {
        // 1. Scroll Progress
        const progressBar = document.getElementById('scroll-progress');
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            if (progressBar) progressBar.style.width = scrolled + "%";
        });

        // 2. Intersection Observer for Reveals
        const revealOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        AnimationEngine.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger effect logic
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);
                    AnimationEngine.revealObserver.unobserve(entry.target);
                }
            });
        }, revealOptions);

        AnimationEngine.refresh();
    },

    refresh: () => {
        // Observe elements and apply automatic staggering to grids
        document.querySelectorAll('.grid-3').forEach(grid => {
            const children = grid.querySelectorAll('.reveal');
            children.forEach((child, index) => {
                child.dataset.delay = index * 150; // 150ms stagger
            });
        });

        document.querySelectorAll('.reveal').forEach(el => {
            AnimationEngine.revealObserver.observe(el);
        });

        AnimationEngine.initHeroInteractivity();
    },

    initHeroInteractivity: () => {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');

        if (hero && heroContent) {
            hero.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                
                // Content Parallax
                const moveX = (clientX / innerWidth) - 0.5;
                const moveY = (clientY / innerHeight) - 0.5;
                const intensity = 30;
                heroContent.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
                
                // Background subtle movement
                hero.style.backgroundPosition = `${50 + (moveX * 5)}% ${50 + (moveY * 5)}%`;
            });

            hero.addEventListener('mouseleave', () => {
                heroContent.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                heroContent.style.transform = 'translate(0, 0)';
                hero.style.transition = 'background-position 0.8s ease';
                hero.style.backgroundPosition = 'center';
                setTimeout(() => { 
                    heroContent.style.transition = ''; 
                    hero.style.transition = '';
                }, 800);
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
    const appRoot = document.getElementById('app-root');
    const footer = document.querySelector('footer');

    const toggleMenu = (forceClose = false) => {
        const isActive = forceClose ? false : !navLinksContainer.classList.contains('active');
        
        if (isActive) {
            navLinksContainer.classList.add('active');
            appRoot.classList.add('blurred');
            footer.classList.add('blurred');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            navLinksContainer.classList.remove('active');
            appRoot.classList.remove('blurred');
            footer.classList.remove('blurred');
            document.body.style.overflow = ''; // Restore scrolling
        }
        
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars', !isActive);
        icon.classList.toggle('fa-times', isActive);
    };

    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing from the document click listener
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinksContainer.classList.contains('active')) {
            const isClickInsideMenu = navLinksContainer.contains(e.target);
            const isClickOnToggle = mobileToggle.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnToggle) {
                toggleMenu(true);
            }
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(true);
        });
    });
});
