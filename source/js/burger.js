const burger = document.querySelector('.header__menu')
const mobMenu = document.querySelector('.nav-menu')
const closeIcon = document.querySelector('.nav-menu__close-icon')
const body = document.getElementById('body')
const html = document.getElementById('html')

burger.addEventListener('click', () => {
  burger.classList.toggle('--burger-active');
  menuOpen();
  html.classList.add('--body-locked')
})

closeIcon.addEventListener('click', () => {
  mobMenu.classList.remove('--open-menu')
  burger.classList.remove('--burger-active')
  html.classList.remove('--body-locked')
})

function menuOpen () {
  mobMenu.classList.add('--open-menu')
}


const menuMobLinks = document.querySelectorAll('.mob-menu__link');

if (menuMobLinks.length > 0) {
  menuMobLinks.forEach(function (menuMobLinks) {
    menuMobLinks.addEventListener("click", function (event) {
      mobMenu.classList.remove('--open-menu');
      html.classList.remove('--body-locked')
    });
  });
}
