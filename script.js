```javascript id="2vxm5j"
// Smooth scrolling for menu links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute('href'));

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
    threshold: 0.2
});


document.querySelectorAll(
'.hero-content, .hero-image, .about-grid, .program-card, .gallery-grid img, .contact-info'
).forEach((el) => {

    el.classList.add('hidden');

    observer.observe(el);

});


// Navbar shadow effect

window.addEventListener('scroll', () => {

    const navbar =
    document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        '0 5px 20px rgba(0,0,0,0.12)';

    }
    else{

        navbar.style.boxShadow =
        '0 2px 10px rgba(0,0,0,0.08)';

    }

});


// Gallery image hover effect

document.querySelectorAll(
'.gallery-grid img'
).forEach((img) => {

    img.addEventListener('mouseenter', () => {

        img.style.transform =
        'scale(1.05)';

    });

    img.addEventListener('mouseleave', () => {

        img.style.transform =
        'scale(1)';

    });

});


// Page loaded message

window.addEventListener('load', () => {

    console.log(
    'Beetle Day Care website loaded successfully'
    );

});
```
