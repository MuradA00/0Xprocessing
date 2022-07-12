const featuresHeading = document.querySelector('.marquee__heading')
const featuresList = document.querySelector('.marquee__hidden-list')

featuresHeading.addEventListener('click', function() {
  featuresList.classList.toggle('--hidden-list');
})
