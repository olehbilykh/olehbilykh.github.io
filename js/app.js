$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        sectionsColor: ['#f1f2f6', '#f1f2f6', '#f1f2f6', '#f1f2f6', '#f1f2f6'],
        anchors: ['home-sec', 'about-sec', 'service-sec', 'project-sec', 'testimony-sec', 'contact-sec'],
        menu: '#myMenu',
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        touchSensitivity: 5
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

function task1(){
     document.getElementById('demo').style.fontSize= '60px';
    document.getElementById('ph').style.width = '300px';
}
function task2(){
    document.getElementById('photo').style.width = '60%';
    document.getElementById('php').style.textAlign = 'center';
}