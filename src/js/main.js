document.addEventListener('DOMContentLoaded', function () {
  // Бургер-меню
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  // Ховаємо логотип при відкритті мобільного меню Bootstrap
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
    // 🔹 Наведення на ціну
    price.addEventListener('mouseenter', () => {
      name.classList.add('highlight');
      price.classList.add('highlight');
    });

    price.addEventListener('mouseleave', () => {
      name.classList.remove('highlight');
      price.classList.remove('highlight');
    });

    // 🔹 Наведення на кнопку
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
window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

