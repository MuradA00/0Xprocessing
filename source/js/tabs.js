const content = document.querySelectorAll('.tools__wrapper-item');
const tab = document.querySelectorAll('.panel__btn');
const slider = document.querySelector('.tools__wrapper');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('active-panel-btn');
  });
}

function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('active-panel-btn');
}


hideTabContent();
showTabContent();

slider.addEventListener("click", (e) => {
  const target = e.target
  if (target) {
     tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
  }
})
