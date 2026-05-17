const Router = {
    routes: {
        '/': Components.Home,
        '/home': Components.Home,
        '/about': Components.About,
        '/academics': Components.Academics,
        '/admissions': Components.Admissions,
        '/gallery': Components.Gallery,
        '/contact': Components.Contact,
        '/privacy': Components.Privacy,
        '/terms': Components.Terms,
        '/sitemap': Components.Sitemap
    },

    init: () => {
        window.addEventListener('hashchange', Router.handleRoute);
        // Load initial route
        Router.handleRoute();
    },

    handleRoute: () => {
        const hash = window.location.hash.slice(1) || '/';
        const viewFunction = Router.routes[hash] || Router.routes['/'];
        
        const appRoot = document.getElementById('app-root');
        
        // --- Page Transition Logic (Fade Out) ---
        appRoot.style.opacity = '0';
        appRoot.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            // Render new content
            appRoot.innerHTML = viewFunction();
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // --- Re-initialize Page Logic ---
            // Trigger animation engine
            if (window.AnimationEngine) {
                window.AnimationEngine.refresh();
            }
            
            // --- Page Transition Logic (Fade In) ---
            appRoot.style.opacity = '1';
            appRoot.style.transform = 'translateY(0)';
            
            // Update Active Link in Nav
            Router.updateActiveLink(hash);
        }, 300);
    },

    updateActiveLink: (currentHash) => {
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href').slice(1);
            if (href === currentHash || (currentHash === '/' && href === '/home')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
};
