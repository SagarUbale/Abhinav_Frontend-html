window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const animatedImage = document.getElementById('animatedImage');

    // Toggle header visibility based on scroll
    if (window.scrollY > 50) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

  
});