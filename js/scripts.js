// Popup
var Popup = {
    block: $('.popup'),
    window: $('.popup__window'),
    container: $('.popup__container'),
    title: $('.popup__title'),
    close: $('.popup__close'),
    bg: $('.popup__bg'),
    speed: 500,
    funShow: function () {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height();
        this.block.css('padding-top', scrollTop + 20).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
    }
}

$('.popupShow').click(function() {
    Popup.funShow();
});

Popup.close.click(function() {
    Popup.funHide();
});

Popup.bg.click(function() {
    Popup.funHide();
});

$('.nav-button').click(function () {
    $('.nav > ul').slideToggle();
    // alert(1);
});


$('.phone').mask("+7 (999) 999-99-99");

$('.slider').slick({
	prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
});

$('.slider-mini').slick({
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
});

$(window).resize(function () {
    $('.nav > ul').removeAttr('style');
});