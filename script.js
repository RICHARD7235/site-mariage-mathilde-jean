// Carrousel automatique infini
const carousel = document.getElementById('carousel');
let scrollPosition = 0;
const scrollSpeed = 0.5;

function scrollCarousel() {
    scrollPosition += scrollSpeed;
    const slideWidth = carousel.querySelector('.carousel-slide').offsetWidth;
    
    if (scrollPosition >= slideWidth) {
        scrollPosition = 0;
    }
    
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(scrollCarousel);
}

scrollCarousel();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
