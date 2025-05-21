document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burger-toggle');
  const burgerMenu = document.getElementById('burger-menu');

document.querySelectorAll('.btn-order').forEach(button => {
  button.addEventListener('mouseenter', () => {
    const box = button.closest('.pricing-box');
    const name = box.querySelector('.plan-name');
    const price = box.querySelector('.pricing-price');

    name.classList.add('highlight');
    price.classList.add('highlight');
    button.classList.add('highlight');
  });

  button.addEventListener('mouseleave', () => {
    const box = button.closest('.pricing-box');
    const name = box.querySelector('.plan-name');
    const price = box.querySelector('.pricing-price');

    name.classList.remove('highlight');
    price.classList.remove('highlight');
    button.classList.remove('highlight');
  });
});
document.querySelectorAll('.pricing-box').forEach(box => {
  const name = box.querySelector('.plan-name');
  const price = box.querySelector('.pricing-price');
  const btn = box.querySelector('.btn-order');

  btn.addEventListener('mouseenter', () => {
    name.classList.add('active');
    price.classList.add('active');
    btn.classList.add('active');
  });

  btn.addEventListener('mouseleave', () => {
    name.classList.remove('active');
    price.classList.remove('active');
    btn.classList.remove('active');
  });
});

});

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.classList.add('d-none');
    document.querySelector('.contact-thankyou').classList.remove('d-none');
  });
