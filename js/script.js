// Flickity Carousel
var flkty = new Flickity('.main-carousel', {
    wrapAround: true,
    fullscreen: true,
    pageDots: false,
    hash: true
});
// Button Reset
var buttonGroup = document.querySelector('.button-reset');

buttonGroup.addEventListener('click', function (event) {
    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var selector = event.target.getAttribute('data-selector');
    flkty.selectCell(selector);
});
// Progress Bar
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});