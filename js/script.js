const burger = document.getElementById('burger')
const nav = document.getElementById('nav')
const body = document.getElementById('body')

burger.addEventListener('click', function() {
    nav.classList.toggle('nav--active')
    body.classList.toggle('stop-scroll')
    burger.classList.toggle('burger--active')
})

const swiper = new Swiper('#hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 5000,
    },
  });