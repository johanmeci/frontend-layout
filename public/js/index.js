import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
  
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});