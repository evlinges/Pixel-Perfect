document.addEventListener('DOMContentLoaded', function () {
  // burger
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }


  const navCollapse = document.getElementById('mainNav');
  const logo = document.querySelector('.navbar-brand');

  if (navCollapse && logo) {
    navCollapse.addEventListener('shown.bs.collapse', function () {
      logo.style.display = 'none';
    });

    navCollapse.addEventListener('hidden.bs.collapse', function () {
      logo.style.display = 'flex';
    });
  }

  const pricingBoxes = document.querySelectorAll('.pricing-box');

pricingBoxes.forEach(box => {
  const name = box.querySelector('.plan-name');
  const price = box.querySelector('.pricing-price');
  const button = box.querySelector('.btn-order');

  if (name && price && button) {

    price.addEventListener('mouseenter', () => {
      name.classList.add('highlight');
      price.classList.add('highlight');
    });

    price.addEventListener('mouseleave', () => {
      name.classList.remove('highlight');
      price.classList.remove('highlight');
    });

    button.addEventListener('mouseenter', () => {
      name.classList.add('highlight');
      price.classList.add('highlight');
      button.classList.add('highlight');
    });

    button.addEventListener('mouseleave', () => {
      name.classList.remove('highlight');
      price.classList.remove('highlight');
      button.classList.remove('highlight');
    });
  }
});

});
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


