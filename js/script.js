// script.js
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollTopBtn');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Tombol scroll to top
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
