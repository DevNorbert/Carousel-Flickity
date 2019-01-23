// Variables
var sliderData;


// Mustache 
(function () {
    sliderData = [{
            sliderID: 'carousel-cell1',
            image: 'images/carousel-image1.jpg',
            title: 'Slider 1',
            description: 'Lorem ipsum.',
            coords: {
                lat: -25.363,
                lng: 131.044
            }
        },
        {
            sliderID: 'carousel-cell2',
            image: 'images/carousel-image2.jpg',
            title: 'Slider 2',
            description: 'Lorem ipsum.',
            coords: {
                lat: -23.363,
                lng: 131.044
            }
        },
        {
            sliderID: 'carousel-cell3',
            image: 'images/carousel-image3.jpg',
            title: 'Slider 3',
            description: 'Lorem ipsum.',
            coords: {
                lat: -24.363,
                lng: 131.044
            }
        },
        {
            sliderID: 'carousel-cell4',
            image: 'images/carousel-image4.jpg',
            title: 'Slider 4',
            description: 'Lorem ipsum.',
            coords: {
                lat: -21.363,
                lng: 131.044
            }
        },
        {
            sliderID: 'carousel-cell5',
            image: 'images/carousel-image5.jpg',
            title: 'Slider 5',
            description: 'Lorem ipsum.',
            coords: {
                lat: -26.363,
                lng: 131.044
            }
        }
    ]

    var templateSlider = document.getElementById('template-slider').innerHTML;
    var templateCarousel = document.getElementById('template-carousel').innerHTML;

    Mustache.parse(templateCarousel);

    var generatedSlider = '';

    for (var i = 0; i < sliderData.length; i++) {
        generatedSlider += Mustache.render(templateCarousel, sliderData[i])
    }

    var fullSliderItem = Mustache.render(templateSlider, {
        slider: generatedSlider
    });

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

// Google Maps
(function () {
    window.initMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: sliderData[0].coords,
        });

        for (var i = 0; i < sliderData.length; i++) {
            var marker = new google.maps.Marker({
                position: sliderData[i].coords,
                map: map
            });
            marker.addListener('click', function () {
                for (var x = 0; x < sliderData.length; x++) {
                    window.location.hash = sliderData[x].sliderID;
                };
            });
        };

    }
})();