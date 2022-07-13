const hiddenAdvantList = document.querySelector('.advant-hidden')
const readMore = document.getElementById('read-more_btn')

readMore.addEventListener('click', function() {
  hiddenAdvantList.classList.toggle('--collapse-advant-list')
})
