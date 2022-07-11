const showMoreMain = document.querySelector('.comprasion__show')
const withdrawRowLength = document.querySelectorAll('.comprasion-list__item').length;
const rowList = document.querySelector('.withdraw__columns')

let rowItems = 50;

showMoreMain.addEventListener('click', () => {
  rowItems += 1;
  const arrayMain = Array.from(document.querySelector('.comprasion-list').children)
  const visibleRows = arrayMain.slice(0, rowItems);

  visibleRows.forEach(el => el.classList.toggle('show-row'))

  // columns.classList.remove('--overlay-list')

})
