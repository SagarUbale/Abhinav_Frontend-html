window.addEventListener('scroll', function () {
    const animatedElements = document.querySelectorAll('.animate-text, .animate-map');
    
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  });



  let currentIndex = 0;
  function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-item");
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    const carouselInner = document.getElementById("carouselInner");
    carouselInner.style.transform =
      "translateX(" + -currentIndex * 100 + "%)";
  }

  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000);

  // Automatic slide every 3 seconds

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


  window.addEventListener('scroll', function () {
const animatedElements = document.querySelectorAll('.animate-slide-left');

animatedElements.forEach((element) => {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    element.classList.add('visible');
  }
});
});