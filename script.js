// JavaScript Logic file for Beetle Day Care Interactive Enhancements

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Navigation Bar Toggle Trigger Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenuElement = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenuElement.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
            
            // Decorative conversion of burger bars to modern close 'X' symbol
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            if(mobileMenuBtn.classList.contains('open')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile nav overlay view when clicking layout links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenuElement.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
            const bars = mobileMenuBtn ? mobileMenuBtn.querySelectorAll('.bar') : [];
            bars.forEach(bar => bar.style.transform = 'none');
            if(bars[1]) bars[1].style.opacity = '1';
        });
    });

    // 2. High-Performance Intersection Observer for Scroll Trigger Animations
    const scrollElements = document.querySelectorAll('.scroll-trigger');

    const elementInViewOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers viewport rendering instantly when 15% item block appears
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Unobserve once specific block element animation completes successfully
                observer.unobserve(entry.target);
            }
        });
    }, elementInViewOptions);

    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // 3. Highlight current section automatically inside active viewport menu anchors
    const navSections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 160;

        navSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
