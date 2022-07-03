const showMore = document.querySelector('.withdraw__more')
const withdrawItemLength = document.querySelectorAll('.withdraw-list__item').length;
const columns = document.querySelector('.withdraw__columns')

let items = 50;

showMore.addEventListener('click', () => {
  items += 1;
  const array = Array.from(document.querySelector('.withdraw-list').children)
  const secArray = Array.from(document.querySelector('.second-list').children);
  const visibleItems = array.slice(0, items);
  const visibleSecItems = secArray.slice(0, items)
  visibleItems.forEach(el => el.classList.add('visible-item'))
  visibleSecItems.forEach(el => el.classList.add('visible-item'))
  columns.classList.remove('--overlay-list')
  showMore.style = 'margin: 2rem auto 0';
})
