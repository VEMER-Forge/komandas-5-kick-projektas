document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.hero-title, .hero-text, .features-header, .feature-item, .testimonial-card');
    
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = `fadeIn 0.8s ease-out ${index * 0.1}s forwards`;
            element.style.opacity = '0';
        }, 100);
    });
    
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            navToggle.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (isInViewport(section) && !section.classList.contains('animated')) {
            section.classList.add('animated');
            
            if (section.classList.contains('features')) {
                const featureItems = section.querySelectorAll('.feature-item');
                featureItems.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.classList.add('fade-in');
                });
            }
            
            if (section.classList.contains('testimonials')) {
                const testimonialCards = section.querySelectorAll('.testimonial-card');
                testimonialCards.forEach((card, index) => {
                    card.style.transitionDelay = `${index * 0.1}s`;
                    card.classList.add('fade-in');
                });
            }
        }
    });
});