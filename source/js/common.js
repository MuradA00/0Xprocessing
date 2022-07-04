// const mobMenu = document.querySelector('.nav-menu')

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  if (mobMenu.classList.contains('--menu-open')) {
    document.documentElement.style.setProperty('--vh', `0px`)
    console.log(vh)
  }

});

var menuLinks = document.querySelectorAll('.nav__link');

if (menuLinks.length > 0) {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function (event) {
      mobMenu.classList.remove('--open-menu');
      body.classList.remove('--body-locked')
    });
  });
}

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 35;

anchors.forEach(function(item) {

  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    body.classList.remove('--body-locked')
    mobMenu.classList.remove('--open-menu')
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;


      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

        window.scrollBy(0, scrollBy);
      } else {

        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }

    }, animationTime / framesCount);
  });
});


