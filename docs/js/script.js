// Mustache 
(function(){ 
var templateSlider = document.getElementById('template-slider').innerHTML;
var templateCarousel = document.getElementById('template-carousel').innerHTML;

Mustache.parse(templateCarousel);

var generatedSlider = '';

for(var i = 0; i < sliderData.length; i++){
   generatedSlider += Mustache.render(templateCarousel, sliderData[i])
}

var fullSliderItem = Mustache.render(templateSlider, {slider: generatedSlider});

var results = document.getElementById('results');
results.insertAdjacentHTML('beforeend', fullSliderItem);
})();


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
