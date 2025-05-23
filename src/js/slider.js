const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const modal = document.getElementById('thankyou-modal');
  const closeBtn = document.getElementById('thankyou-close');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Тут можна додати ajax-запит, якщо потрібно
    modal.classList.add('active');
    form.reset();
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });

  // Закриття по кліку на фон
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});




