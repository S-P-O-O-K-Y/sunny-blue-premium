document.addEventListener('DOMContentLoaded', () => {

    /* --- Navbar Scroll Effect --- */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Scroll Reveal Animations --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    /* --- Use Cases / Reviews Tabs Logic --- */
    const tabs = document.querySelectorAll('.use-case-tab');
    const panes = document.querySelectorAll('.use-case-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding pane
            const targetId = `pane-${tab.dataset.target}`;
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    /* --- Mobile Menu Toggle --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isMenuOpen = navLinks.style.display === 'flex';
            
            if (isMenuOpen) {
                navLinks.style.display = '';
                navActions.style.display = '';
                menuToggle.innerHTML = '<i class="ph ph-list"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--bg-base)';
                navLinks.style.padding = '24px';
                navLinks.style.borderBottom = '1px solid var(--border-color)';
                
                navActions.style.display = 'flex';
                navActions.style.position = 'absolute';
                navActions.style.top = '100%';
                navActions.style.marginTop = '180px'; // Adjust based on link height
                navActions.style.left = '0';
                navActions.style.right = '0';
                navActions.style.background = 'var(--bg-base)';
                navActions.style.padding = '0 24px 24px';
                
                menuToggle.innerHTML = '<i class="ph ph-x"></i>';
            }
        });
    }
});