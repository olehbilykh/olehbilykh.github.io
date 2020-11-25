$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        sectionsColor: ['#f1f2f6', '#f1f2f6', '#f1f2f6', '#f1f2f6'],
        anchors: ['home-sec', 'about-sec', 'service-sec', 'contact-sec'], //'project-sec' 'testimpny-sec'
        menu: '#myMenu',
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        touchSensitivity: 5
    });

    // filterizr

    var filterizd = $('.filter-container').filterizr({
        animationDuration: .5
    });

    // Slick slider
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        speed: 1000,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    // mobile menu
    $('.burger').on('click', function () {
        $('.overlay').toggleClass('mob-active');
    })

});