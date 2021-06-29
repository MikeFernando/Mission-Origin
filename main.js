const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('ul li a')
for (const element of links) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// MUDAR O HEADER DA PÁGINA QUANDO DER SCROLL
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLL REVEAL: Mostrar elementos quando der scroll na página
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text, 
  #services header, #services .card,
  #testimonials header, #testimonials .testimonial,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `
)
