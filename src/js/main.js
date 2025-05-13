 const burger = document.getElementById('burger');
 const menu = document.getElementById('menu');
 burger.addEventListener('click', function() {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
 });
 
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  this.classList.add('d-none');
  document.querySelector('.contact-thankyou').classList.remove('d-none');
});
