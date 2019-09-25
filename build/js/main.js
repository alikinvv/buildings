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
