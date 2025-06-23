
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .gallery-item, .blog-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Cookie Consent
function initCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        showCookieConsent();
    }
}

function showCookieConsent() {
    const consentHTML = `
        <div id="cookie-consent" style="
            position: fixed;
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            z-index: 9999;
            max-width: 24rem;
            margin: 0 auto;
            background: white;
            border: 2px solid var(--racing-red);
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        ">
            <h3 style="
                font-family: 'Orbitron', monospace;
                font-weight: 700;
                color: var(--racing-red);
                margin-bottom: 0.5rem;
                font-size: 1rem;
            ">🍪 Cookie Policy</h3>
            <p style="
                color: #374151;
                font-size: 0.875rem;
                margin-bottom: 1rem;
                line-height: 1.5;
            ">
                We use cookies to enhance your gaming experience, analyze site traffic, and personalize content. 
                By continuing to use our site, you consent to our use of cookies.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-direction: column;">
                <button onclick="acceptCookies()" style="
                    background: linear-gradient(135deg, #DC2626 0%, #EF4444 50%, #FFFFFF 100%);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    Accept All
                </button>
                <button onclick="declineCookies()" style="
                    background: transparent;
                    color: var(--racing-red);
                    border: 2px solid var(--racing-red);
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='var(--racing-red)'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='var(--racing-red)'">
                    Decline
                </button>
            </div>
            <p style="
                color: #6B7280;
                font-size: 0.75rem;
                margin-top: 0.5rem;
            ">
                <a href="/cookies/" style="color: var(--racing-red); text-decoration: none;">
                    Read our full Cookies Policy
                </a>
            </p>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', consentHTML);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    removeCookieConsent();
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    removeCookieConsent();
}

function removeCookieConsent() {
    const consent = document.getElementById('cookie-consent');
    if (consent) {
        consent.remove();
    }
}

// Initialize cookie consent when page loads
document.addEventListener('DOMContentLoaded', initCookieConsent);

// Utility functions for external links
function openAppStore() {
    window.open('https://apps.apple.com/us/app/descenders/id1604675493', '_blank');
}

function openPlayStore() {
    window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank');
}

function contactSupport() {
    window.open('mailto:support@noodlecake.com?subject=Descenders Support Request', '_blank');
}
