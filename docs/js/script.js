jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    // $(".scroll").on("click", function (event) {
    //     event.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $(this.hash).offset().top - 40
    //     }, 100);
    // });
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 80) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    var sections = $('section')
        , nav = $('.header')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 300;

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 100);

        return false;
    });

    $('#mobile-menu').click(() => {
        $('#menu-container').addClass('open');
        $('#menu-container').removeClass('close-menu')
    });
    $('.nav-link').click(() => {
        $('#menu-container').addClass('close-menu')
        $('#menu-container').removeClass('open')
    });
    $('.close').click(() => {
        $('#menu-container').addClass('close-menu')
        $('#menu-container').removeClass('open')
    });
});
