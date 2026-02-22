// Nexora - Enhanced UX with animations and smooth interactions

document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const updateActiveLink = function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animableElements = document.querySelectorAll(
        '.reason-card, .service-card, .process-card, .communication-card, ' +
        '.contact-option-card, .timeline-item, .expectation-card, ' +
        '.expectation-modern-card, .additional-service, .benefit-card, ' +
        '.info-list-item, .next-step-card, .testimonial-card, .team-member'
    );

    animableElements.forEach(element => {
        observer.observe(element);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

