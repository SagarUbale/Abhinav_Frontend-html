$(document).ready(function () {
    // Detect click on first or last card and simulate carousel button click
    $('.clickable-card').click(function (event) {
        const cardIndex = $(this).attr('data-index');

        if (cardIndex === 'first') {
            // Simulate previous button click
            $('.carousel-control-prev').click();
            event.preventDefault(); // Prevent the card's default action
        } else if (cardIndex === 'last') {
            // Simulate next button click
            $('.carousel-control-next').click();
            event.preventDefault(); // Prevent the card's default action
        }
    });
});

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
window.addEventListener('scroll', function() {
    var para = document.querySelector('.para');
    var paraPosition = para.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (paraPosition < screenPosition) {
        para.classList.add('visible');
    }
});


// Scrolling text functionality
const scrollText = document.getElementById('scroll-text');
if (scrollText) {
    scrollText.addEventListener('mouseover', () => {
        scrollText.style.animationPlayState = 'paused'; // Pause scrolling on hover
    });

    scrollText.addEventListener('mouseout', () => {
        scrollText.style.animationPlayState = 'running'; // Resume scrolling when not hovered
    });
}

// Language selection redirection
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.addEventListener('change', function () {
        const selectedValue = this.value; // Get the selected value
        if (selectedValue === "marathi.html") {
            // Redirect to the Marathi page
            window.location.href = selectedValue;
        } else if (selectedValue === "en") {
            // Redirect to the English page (optional, if needed)
            window.location.href = 'english.html'; // Change path as needed
        }
    });
}

// IntersectionObserver for card animations
  // IntersectionObserver for card animations
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when card is in view
        }
    });
}, {
    threshold: 0.4 // 40% of the card needs to be visible before the animation triggers
});

// Select all card elements and observe them
const cards = document.querySelectorAll('.info-card');
cards.forEach(card => {
    cardObserver.observe(card);
});

// Select all card elements
// const cards = document.querySelectorAll('.info-card');
// cards.forEach(card => {
//     cardObserver.observe(card);
// });

// // IntersectionObserver for paragraph animation
// const paraObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible'); // Add 'visible' class when text comes into view
//         }
//     });
// }, {
//     threshold: 1.0 // 100% of the section needs to be visible to trigger the effect
// });

// Select the paragraph container
const para = document.querySelector('.para');
if (para) {
    paraObserver.observe(para);
}
window.onload = function() {
    setTimeout(function() {
        document.querySelectorAll('.info-card').forEach(function(card) {
            card.classList.add('visible');
        });
    }, 500); // Delay of 500 milliseconds
};
window.addEventListener('scroll', function() {
    var cards = document.querySelectorAll('.info-card');
    var screenPosition = window.innerHeight / 1.3;

    cards.forEach(function(card) {
        var cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < screenPosition) {
            card.classList.add('visible');
        }
    });
});
