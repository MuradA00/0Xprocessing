const burger = document.querySelector('.header__menu')
const mobMenu = document.querySelector('.nav-menu')
const closeIcon = document.querySelector('.nav-menu__close-icon')
const body = document.getElementById('body')

burger.addEventListener('click', () => {
  burger.classList.toggle('--burger-active');
  menuOpen();
  body.classList.add('--body-locked')
})

closeIcon.addEventListener('click', () => {
  mobMenu.classList.remove('--open-menu')
  burger.classList.remove('--burger-active')
  body.classList.remove('--body-locked')
})

function menuOpen () {
  mobMenu.classList.add('--open-menu')
}
