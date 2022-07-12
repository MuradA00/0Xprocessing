const acc = document.getElementsByClassName("faq__item-visible");
const arrows = document.getElementsByClassName('faq-arrow')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.transition = 'all .4s ease'
      panel.style.opacity = '0'
      panel.style.visibility = 'hidden'
      panel.style.marginBottom = '0px'

    } else {
      panel.style.opacity = '1'
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.visibility = 'visible'
      panel.style.marginBottom = '30px'
    }
  });
};

// var visibleItems = Array.from(document.querySelectorAll('.faq__item'));
// visibleItems.forEach(function (item) {
//   item.addEventListener('click', collapseHandler);
// });

// function collapseHandler(e) {
//   e.preventDefault();
//   var currentIcon = e.target.closest('.faq__item-heading');
//   var currentItem = e.target.closest('.faq__item-visible');
//   var currentContent = e.target.nextElementSibling;
//   currentItem.classList.toggle('collapse');

//   if (currentItem.classList.contains('collapse')) {
//     currentContent.style.display = 'block';
//     currentContent.style.maxHeight = currentContent.scrollHeight + "px";
//     currentIcon.classList.add('arrow-change');
//   } else {
//     currentContent.style.maxHeight = 0;
//     currentContent.style.display = 'none';
//     currentIcon.classList.remove('arrow-change');
//   }
// }
