function rolagem() {
  if (scrollY == 0) {
    navegador.classList.remove('scroll')
  } else {
    navegador.classList.add('scroll')
  }
}

function menuexpansion() {
  document.body.classList.add('menu-expanded')
}

function exitmenuexpansion() {
  document.body.classList.remove('menu-expanded')
}
