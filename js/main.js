$(window).scroll(function() {
    var docscroll = $(document).scrollTop();
    if (docscroll > 1) {
        $('header').addClass('bg-opacity-100')
    } else {
        $('header').removeClass('bg-opacity-100')
    }
});

$(".slick-slider").slick({
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 1000,
});