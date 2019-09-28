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

$('.slider').slick({
    arrows: false,
    fade: true
});

$('.slider .slick-next').click(() => {
    $('.slider').slick('slickNext');
});

$('.slider .slick-prev').click(() => {
    $('.slider').slick('slickPrev');
});

$('.item__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.item__nav',
    swipe: false
});

$('.item__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.item__main',
    arrows: false,
    dots: false,
    vertical: true,
    focusOnSelect: true,
    responsive: [ {
        breakpoint: 1024,
        settings: {
            vertical: false
        }
    }]
});

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