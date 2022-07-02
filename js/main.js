window.addEventListener('scroll', rolagem)

function rolagem() {
  showNavOnScroll()
  showBackToTopButtonScroll()
  activateMenuAtCurrenctSector(home)
  activateMenuAtCurrenctSector(services)
  activateMenuAtCurrenctSector(about)
  activateMenuAtCurrenctSector(contact)
}

function activateMenuAtCurrenctSector(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha

  //console.log(services.offsetTop) Mostra qual o numero que é indentificado o topo da tela
  //console.log(services.offsetHeight) Mostra o numero que é indentificado o final
  // offset significa deslocamento

  //SEMPRE QUE FOR CODIFICAR, PENSAR EM TODOS OS DADOS NECESSARIOS PARA
  //REALIZAR A AÇÃO

  //QUAIS DADOS VOU PRECISAR ???

  //o topo da seção
  const sectionTop = section.offsetTop

  //a altura da seção
  const sectionHeight = section.offsetHeight

  //O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //informações dos dados e da logica
  // console.log(
  //   'O topo da sessão chegou ou passou da linha ?',
  //   sectionTopReachOrPassedTargetline
  // )

  //verificar se a base está abaixo da linha alvo

  //QUAIS DADOS VOU PRECISAR ???

  //a sessão termina onde
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da sessão passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  // console.log(
  //   'O fundo da sessão chegou ou passou da linha ?',
  //   sectionEndPassedTargetline
  // )

  //limite da sessãp
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}] `)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
