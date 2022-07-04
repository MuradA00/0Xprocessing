const featuresBtn = document.querySelector('.label__features')
const hiddenList = document.querySelector('.label-hidden-list')

featuresBtn.addEventListener('click', () => {
  hiddenList.classList.add('--collapse-hidden-list')
})
