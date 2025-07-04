// Tunggu hingga DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Toggle menu responsif
  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navbar.classList.toggle('active'); // Menggunakan class 'active'
    });
  }

  // Tombol kembali ke atas
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      // Tampilkan/sembunyikan tombol berdasarkan posisi scroll
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Gulir dengan animasi halus
      });
    });
  }
});