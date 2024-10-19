// Animation on scroll
window.addEventListener('scroll', function() {
    const animatedImage = document.getElementById('animatedImage');
    const rect = animatedImage.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        animatedImage.classList.add('visible');
    }
});
