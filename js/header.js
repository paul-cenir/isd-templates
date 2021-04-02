$(document).ready(function () {
    function initBurgerMenu() {
        jQuery('.burger-menu').on('click', function (e) {
            console.log(423);
            e.preventDefault();
            if (jQuery(this).hasClass('is-open')) {
                jQuery(this).removeClass('is-active');
                jQuery('.bm-view').removeClass('is-open');
            }
            else {
                jQuery(this).addClass('is-active');
                jQuery('.bm-view').addClass('is-open');
            }
        });
        jQuery('.bm-drop, .bm-close').on('click', function (e) {
            e.preventDefault();
            jQuery('.bm-view').removeClass('is-open');
            jQuery('.bm-btn').removeClass('is-active');
        });
    }

    initBurgerMenu();


    function initDetectScroll() {
        console.log(243);
        if (jQuery(window).width() > 991 && jQuery(window).scrollTop() > 56) {
            jQuery('header.header').addClass('show-fixed');
        } else {
            jQuery('header.header').removeClass('show-fixed');
        }
    }


    jQuery(window).on('scroll', function () {
        initDetectScroll();

    })

});