// Carrousel automatique infini - Optimisé pour Chrome et Safari
const carousel = document.getElementById('carousel');
let scrollPosition = 0;
const scrollSpeed = 0.5;
let slideWidth = 0;
let animationId = null;

// Calculer la largeur une seule fois au chargement et lors du redimensionnement
function updateSlideWidth() {
    const slide = carousel.querySelector('.carousel-slide');
    if (slide) {
        slideWidth = slide.offsetWidth;
    }
}

// Fonction de scroll optimisée - évite les reflows multiples
function scrollCarousel() {
    scrollPosition += scrollSpeed;

    if (scrollPosition >= slideWidth) {
        scrollPosition = 0;
    }

    // Utiliser des propriétés préfixées pour Safari
    carousel.style.webkitTransform = `translateX(-${scrollPosition}px)`;
    carousel.style.mozTransform = `translateX(-${scrollPosition}px)`;
    carousel.style.msTransform = `translateX(-${scrollPosition}px)`;
    carousel.style.oTransform = `translateX(-${scrollPosition}px)`;
    carousel.style.transform = `translateX(-${scrollPosition}px)`;

    animationId = requestAnimationFrame(scrollCarousel);
}

// Initialiser et démarrer le carrousel
function initCarousel() {
    updateSlideWidth();
    if (slideWidth > 0) {
        scrollCarousel();
    }
}

// Recalculer la largeur lors du redimensionnement (avec debounce pour performance)
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        updateSlideWidth();
    }, 250);
});

// Démarrer le carrousel quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    initCarousel();
}

// Smooth scroll avec fallback pour Safari
// Détection du support de smooth scroll
function supportsSmoothScroll() {
    return 'scrollBehavior' in document.documentElement.style;
}

// Fonction de smooth scroll avec polyfill
function smoothScrollTo(target) {
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 120; // 120px pour la nav fixe
    const duration = 800; // durée en ms
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Fonction d'easing pour un effet plus fluide
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    if (!supportsSmoothScroll()) {
        requestAnimationFrame(animation);
    } else {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Appliquer le smooth scroll à tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        smoothScrollTo(target);
    });
});
