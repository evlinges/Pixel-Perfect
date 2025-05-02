const menuToggle = document.getElementById('menu-toggle');
const navbarNav = document.querySelector('.navbar-nav');

menuToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

