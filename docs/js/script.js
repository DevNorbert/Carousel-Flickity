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

// Mustache 
(function(){ 
var templateList = document.getElementById('template-product-list').innerHTML;
var templateSlider = document.getElementById('template-slider').innerHTML;

Mustache.parse(templateSlider);

var generatedSlider = '';

for(var i = 0; i < sliderData.length; i++){
    console.log(sliderData);
    generatedSlider += Mustache.render(templateSlider, sliderData[i])
}
//var generatedHello = Mustache.render(templateSlider, dataHello);
var fullProductList = Mustache.render(templateList, {products: generatedSlider});


var results = document.getElementById('results');
	
results.insertAdjacentHTML('beforeend', fullProductList);
})();