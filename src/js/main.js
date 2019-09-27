$(window).on('load', () => {
    $('.menu .container').append("<span class='bar'></span>");
    let $bar = $('.menu .bar');
    let barLeft =  $('.menu a.active').position().left;
    let barWidth = $('.menu a.active').width();
    $bar.css('width', barWidth).css('left', barLeft);

    $('.menu a').hover((e) => {
        $bar.css('width', $(e.currentTarget).width()).css('left', $(e.currentTarget).position().left);
    });

    $('.menu').mouseleave(() => {
        $bar.css('width', barWidth).css('left', barLeft);  
    });

    $('.menu a').click((e) => {
        barLeft =  $(e.currentTarget).position().left;
        barWidth = $(e.currentTarget).width();
        $('.menu a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
});

var swiper = new Swiper('.slider', {
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

var galleryThumbs = new Swiper('.item__nav', {
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    centeredSlides: true,
        slideToClickedSlide: true
});

var galleryTop = new Swiper('.item__main', {
    spaceBetween: 10,
    slideToClickedSlide: true,
    navigation: {
        thumbs: {
            swiper: galleryThumbs
        }
    }
});

galleryThumbs.params.control = galleryTop;
galleryTop.params.control = galleryThumbs;

$('body').on('change', '.create__photo input', (e) => {
    if ($(e.currentTarget).val().length > 0) {
        $('.create__photo').addClass('active');
    } else {
        $('.create__photo').removeClass('active');
    }
});

$('body').on('click', '.create__photo .uploaded a', (e) => {
    $('.create__photo').removeClass('active');
    $('.create__photo input').val('');
});

$('body').on('keyup', '.form-group input', (e) => {
    if ($(e.currentTarget).parent().find('.count')) {
        $(e.currentTarget).parent().find('.current').text($(e.currentTarget).val().length);

        if ($(e.currentTarget).val().length > parseInt($(e.currentTarget).parent().find('.full').text())) {
            $(e.currentTarget).parent().addClass('error');
        } else {
            $(e.currentTarget).parent().removeClass('error');
        }
    }
});

$('body').on('blur', '.form-group input', (e) => {
    if ($(e.currentTarget).parent().find('.count')) {
        $(e.currentTarget).parent().find('.current').text($(e.currentTarget).val().length);

        if ($(e.currentTarget).val().length > parseInt($(e.currentTarget).parent().find('.full').text())) {
            $(e.currentTarget).parent().addClass('error');
        } else {
            $(e.currentTarget).parent().removeClass('error');
        }
    }
});

function initMap() {
    if ($('#map').length > 0) {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {lat: 55.754176, lng: 37.620359}
        });
    
        var image = '/img/point.svg';
        var beachMarker = new google.maps.Marker({
            position: {lat: 55.754176, lng: 37.620359},
            map: map,
            icon: image
        });
    }
}