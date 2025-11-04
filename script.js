// Carrousel automatique infini
const carousel = document.getElementById('carousel');

if (carousel) {
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    function scrollCarousel() {
        scrollPosition += scrollSpeed;
        const slideWidth = carousel.querySelector('.carousel-slide').offsetWidth;
        
        if (scrollPosition >= slideWidth) {
            scrollPosition = 0;
        }
        
        // Support pour Safari (préfixe webkit)
        const transformValue = `translateX(-${scrollPosition}px)`;
        carousel.style.webkitTransform = transformValue;
        carousel.style.transform = transformValue;
        requestAnimationFrame(scrollCarousel);
    }

    scrollCarousel();
}

// Smooth scroll avec support Safari
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Vérifier si le navigateur supporte le smooth scroll natif
            if ('scrollBehavior' in document.documentElement.style) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Fallback pour les anciennes versions de Safari
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 120;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
