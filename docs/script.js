// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateLanguage();
    }

    bindEvents() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
        this.updateLanguage();
    }

    updateLanguage() {
        document.body.className = this.currentLang;
        
        // Update all elements with language data attributes
        const elements = document.querySelectorAll('[data-en][data-zh]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update names specifically
        this.updateNames();
        
        // Update language toggle button styles
        this.updateLanguageToggle();
    }

    updateNames() {
        const nameElements = [
            document.getElementById('nav-name'),
            document.getElementById('hero-name'),
            document.getElementById('footer-name')
        ];

        nameElements.forEach(element => {
            if (element) {
                element.textContent = this.currentLang === 'en' ? 'ManYao Li' : '李曼瑶';
            }
        });
    }

    updateLanguageToggle() {
        const langEn = document.querySelector('.lang-en');
        const langZh = document.querySelector('.lang-zh');
        
        if (langEn && langZh) {
            if (this.currentLang === 'en') {
                langEn.style.fontWeight = '600';
                langEn.style.color = '#3b82f6';
                langZh.style.fontWeight = '500';
                langZh.style.color = '#94a3b8';
            } else {
                langZh.style.fontWeight = '600';
                langZh.style.color = '#3b82f6';
                langEn.style.fontWeight = '500';
                langEn.style.color = '#94a3b8';
            }
        }
    }
}

// Navigation functionality
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileToggle = document.getElementById('mobile-menu-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                this.scrollToSection(targetId);
            });
        });

        // Mobile menu toggle
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Handle window scroll
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    scrollToSection(targetId) {
        const element = document.querySelector(targetId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            this.closeMobileMenu();
        }
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.navMenu) {
            this.navMenu.style.display = this.isMenuOpen ? 'flex' : 'none';
        }
        this.updateMobileToggle();
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        if (this.navMenu) {
            this.navMenu.style.display = 'none';
        }
        this.updateMobileToggle();
    }

    updateMobileToggle() {
        if (this.mobileToggle) {
            const spans = this.mobileToggle.querySelectorAll('span');
            if (this.isMenuOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }

    handleScroll() {
        if (this.navbar) {
            const scrolled = window.scrollY > 50;
            if (scrolled) {
                this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                this.navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            } else {
                this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                this.navbar.style.boxShadow = 'none';
            }
        }
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
            if (this.navMenu) {
                this.navMenu.style.display = 'flex';
            }
        } else {
            if (this.navMenu) {
                this.navMenu.style.display = this.isMenuOpen ? 'flex' : 'none';
            }
        }
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Special handling for skills section
                    if (entry.target.classList.contains('skills-section')) {
                        this.animateSkills();
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animations
        const sectionsToObserve = [
            '.about',
            '.projects',
            '.blog',
            '.contact',
            '.skills-section'
        ];

        sectionsToObserve.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                observer.observe(element);
            }
        });

        // Observe individual cards for staggered animations
        const cards = document.querySelectorAll('.project-card, .blog-card, .about-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }

    animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.style.width;
                bar.style.width = '0%';
                bar.offsetHeight; // Force reflow
                bar.style.width = width;
            }, index * 100);
        });
    }
}

// Utility functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Profile image handler
class ProfileImageHandler {
    constructor() {
        this.init();
    }

    init() {
        const profileImg = document.getElementById('profile-img');
        if (profileImg) {
            // Set fallback in case image fails to load
            profileImg.onerror = () => {
                profileImg.style.backgroundColor = '#e2e8f0';
                profileImg.style.display = 'flex';
                profileImg.style.alignItems = 'center';
                profileImg.style.justifyContent = 'center';
                profileImg.innerHTML = '<span style="font-size: 48px; color: #64748b;">👤</span>';
            };
            
            // Add loading animation
            profileImg.style.opacity = '0';
            profileImg.onload = () => {
                profileImg.style.transition = 'opacity 0.5s ease';
                profileImg.style.opacity = '1';
            };
        }
    }
}

// Contact form handler (for future enhancement)
class ContactHandler {
    constructor() {
        this.init();
    }

    init() {
        // Handle mailto links
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Track email click for analytics if needed
                console.log('Email contact initiated');
            });
        });

        // Handle external links
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Track external link clicks for analytics if needed
                console.log('External link clicked:', link.href);
            });
        });
    }
}

// Copy profile image from attached assets
class AssetHandler {
    constructor() {
        this.setupProfileImage();
    }

    setupProfileImage() {
        // Since we're using a static site, we'll need to manually copy the image
        // The profile image should be placed in docs/images/profile.jpg
        const profileImg = document.getElementById('profile-img');
        if (profileImg) {
            // For now, use a placeholder or the user should manually copy their image
            profileImg.src = 'images/profile.jpg';
            
            // Add alt text for accessibility
            profileImg.alt = 'ManYao Li Professional Photo';
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new LanguageSwitcher();
    new Navigation();
    new AnimationObserver();
    new ProfileImageHandler();
    new ContactHandler();
    new AssetHandler();

    // Add loading complete class to body
    document.body.classList.add('loaded');

    // Console message for developers
    console.log('ManYao Li Portfolio Website Loaded Successfully! 🎉');
    console.log('Built with HTML, CSS, and JavaScript for GitHub Pages');
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Re-animate skills when page becomes visible again
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection && skillsSection.classList.contains('animate')) {
            new AnimationObserver().animateSkills();
        }
    }
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}