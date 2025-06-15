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
  slidesPerView: 2,
  spaceBetween: 60,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 60,
    }
  }
});



// === Contact Form with Modal ===
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const modal = document.getElementById('thankyou-modal');
  const closeBtn = document.getElementById('thankyou-close');

  if (form && modal && closeBtn) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      modal.classList.add('active');
      form.reset();
    });

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});






