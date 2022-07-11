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
      html.classList.remove('--body-locked')
    });
  });
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("--scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("--scroll-down")) {
		body.classList.remove("--scroll-up");
		body.classList.add("--scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("--scroll-down")
	) {
		body.classList.remove("--scroll-down");
		body.classList.add("--scroll-up");
	}
	lastScroll = currentScroll;
});
