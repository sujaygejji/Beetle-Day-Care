```javascript id="s49sve"
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Fade-in animation on scroll

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll(
'.hero-content, .hero-image, .about-grid, .program-card, .gallery-grid img, .contact-info, .form-section'
).forEach(element => {

    element.classList.add('hidden');

    observer.observe(element);

});


// Navbar shadow while scrolling

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        '0 4px 15px rgba(0,0,0,0.12)';

    }
    else{

        navbar.style.boxShadow =
        '0 2px 10px rgba(0,0,0,0.08)';

    }

});


// Welcome message

window.addEventListener('load', () => {

    console.log(
        'Welcome to Beetle Day Care'
    );

});
```
