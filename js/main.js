window.addEventListener('scroll', rolagem)

function rolagem() {
  showNavOnScroll()
  showBackToTopButtonScroll()
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navegador.classList.remove('scroll')
  } else {
    navegador.classList.add('scroll')
  }
}

function showBackToTopButtonScroll() {
  if (scrollY < 500) {
    BackToTopButton.classList.remove('show')
  } else {
    BackToTopButton.classList.add('show')
  }
}

function menuexpansion() {
  document.body.classList.add('menu-expanded')
}

function exitmenuexpansion() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about h4,
  #about h2,
  #about p`)
