
    // Animation on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        const animatedImage = document.getElementById('animatedImage');

        // Toggle header visibility based on scroll
        if (window.scrollY > 50) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        // Show animated image
        if (animatedImage.getBoundingClientRect().top < window.innerHeight) {
            animatedImage.classList.add('visible');
        }
    });


    document.getElementById('feedbackBtn').addEventListener('click', function () {
        var form = document.getElementById('feedbackForm');
        form.style.display = form.style.display === 'block' ? 'none' : 'block';
    });