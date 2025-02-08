// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeButton = document.getElementById('close-button');

mobileMenu.addEventListener('click', () => {
  mobileOverlay.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileOverlay.classList.remove('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileOverlay.classList.remove('active');
  });
});
// Testimonials Carousel
// Testimonials Carousel
const carousel = document.querySelector('.testimonials-carousel');
const cards = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

// Show the first testimonial initially
cards[currentIndex].classList.add('active');

// Next Button
nextButton.addEventListener('click', () => {
  cards[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add('active');
});

// Previous Button
prevButton.addEventListener('click', () => {
  cards[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  cards[currentIndex].classList.add('active');
});
const dots = document.querySelectorAll('.carousel-dots .dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    cards[currentIndex].classList.remove('active');
    currentIndex = index;
    cards[currentIndex].classList.add('active');
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});
setInterval(() => {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('active');
  }, 5000); // Change testimonial every 5 seconds