/**
 * PORTFOLIO JAVASCRIPT - KAI BOOMGAARDEN
 * Handles interactive menu, smooth scrolling and timeline highlight events.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });
        
        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fa-solid fa-bars';
                }
            });
        });
    }
    
    // --- Sticky Navigation Effect on Scroll ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                navbar.style.backgroundColor = 'rgba(9, 13, 22, 0.95)';
                navbar.style.height = '70px'; // shrink navbar slightly on scroll
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.backgroundColor = 'rgba(9, 13, 22, 0.9)';
                navbar.style.height = '80px';
            }
        });
    }

    // --- Simple Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.skills-card, .project-card, .timeline-content');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Init state for scroll reveal
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // run once on load
});
