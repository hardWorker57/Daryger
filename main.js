//header style-change event

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver
(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav_scrolled");
            menuBtn.classList.add('scrolled_menu');
        } else {
            header.classList.remove("nav_scrolled");
            menuBtn.classList.remove('scrolled_menu');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// accordion

const accordion = document.getElementsByClassName('contentBx');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
};

//animations

$(window).scroll(function () {
    $('.mov').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__bounceInLeft');
            $(this).removeClass('mov');
        }
    });
});
$(window).scroll(function () {
    $('.movL').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__bounceInRight');
            $(this).removeClass('movL');
        }
    });
});
$(window).scroll(function () {
    $('.mov_card').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__zoomIn');
            $(this).removeClass('mov_card');
        }
    });
});
$(window).scroll(function () {
    $('.mov_light').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__zoomInDown');
            $(this).removeClass('mov_light');
        }
    });
});

$(window).scroll(function () {
    $('.card_fade').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+800) {
            $(this).addClass('animate__fadeInUp');
        }
    });
});

//burger-menu

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.burger_menu')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.menu_list').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

//map

// google.maps.event.addDomListener(window, 'load', init);  
        
            // function init() {
            //     // Basic options for a simple Google Map
            //     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            //     var mapOptions = {
            //         // How zoomed in you want the map to start at (always required)
            //         zoom: 11,

            //         // The latitude and longitude to center the map (always required)
            //         center: new google.maps.LatLng(40.6700, -73.9400), // New York

            //         // How you would like to style the map. 
            //         // This is where you would paste any style found on Snazzy Maps.
            //         styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"color":"#878787"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f9f5ed"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"color":"#f5f5f5"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aee0f4"}]}]
            //     };

            //     // Get the HTML DOM element that will contain your map 
            //     // We are using a div with id="map" seen below in the <body>
            //     var mapElement = document.querySelector('.js-map');

            //     // Create the Google Map using our element and options defined above
            //     var map = new google.maps.Map(mapElement, mapOptions);

            //     // Let's also add a marker while we're at it
            //     var marker = new google.maps.Marker({
            //         position: new google.maps.LatLng(40.6700, -73.9400),
            //         map: map,
            //         title: 'Snazzy!'
            //     });
            // }