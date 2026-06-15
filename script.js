// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.hero-content, .hero-image, .about-grid, .program-card, .gallery-grid img, .contact-info, .form-section form').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Navbar shadow effect safely
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(!navbar) return;
    
    if(window.scrollY > 50){
        navbar.style.boxShadow = '0 10px 30px rgba(16, 42, 67, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(16, 42, 67, 0.06)';
    }
});

window.addEventListener('load', () => {
    console.log('Beetle Day Care website loaded successfully');
});
