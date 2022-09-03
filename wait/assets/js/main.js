/*---------------------------------------------

[Table of Content]

01: Preloader
02: Scroll to top button
03: Page scrolling
04: Magnific Popup
05: Pricing table switcher
06Form#
----------------------------------------------*/

(function ($) {
    "use strict";
    const $window = $(window);

    $window.on('load', function () {

        const $document = $(document);
        const $dom = $('html, body');
        const preLoader = $('#loading-area');
        const videoPlayBtn = $('.video-play-btn');

        /*========= Preloader =========*/
        $(preLoader).delay('500').fadeOut(2000);

        /*========= Scroll to top button =========*/
        var scrollToTopBtn = $('#scroll-top');

        $window.on('scroll', function () {
            // scroll to top button
            if ($window.scrollTop() > 300) {
                scrollToTopBtn.addClass('active');
            } else {
                scrollToTopBtn.removeClass('active');
            }
        });

        scrollToTopBtn.on('click', function (e) {
            e.preventDefault();
            $($dom).animate({ scrollTop: 0 }, '300');
        });

        /*================= Page scrolling ======================*/
        // Add smooth scrolling to all links
        $document.on('click', '.page-scroll', function (event) {
            var $anchor = $(this);
            $anchor.parent('li').addClass('active');
            $anchor.parent('li').siblings().removeClass('active');
            $($dom).stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 60
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });

        /*=========== Magnific Popup ============*/
        if ($(videoPlayBtn).length) {
            $(videoPlayBtn).magnificPopup({
                type: 'video'
            });
        }



        /*==== Pricing table switcher =====*/
        if ($('#switch-toggle').length) {
            var toggleSwitch = $('#switch-toggle .switcher');
            var monthTabTitle = $('#switch-toggle li.month');
            var yearTabTitle = $('#switch-toggle li.year');
            var monthTabContent = $('#month');
            var yearTabContent = $('#year');
            // hidden show deafult;
            monthTabContent.show();
            yearTabContent.hide();

            function toggleHandle() {
                if (toggleSwitch.hasClass('on')) {
                    yearTabContent.hide();
                    monthTabContent.show();
                    monthTabTitle.addClass('active');
                    yearTabTitle.removeClass('active');
                } else {
                    monthTabContent.hide();
                    yearTabContent.show();
                    yearTabTitle.addClass('active');
                    monthTabTitle.removeClass('active');
                }
            }
            monthTabTitle.on('click', function () {
                toggleSwitch.addClass('on').removeClass('off');
                toggleHandle();
                return false;
            });
            yearTabTitle.on('click', function () {
                toggleSwitch.addClass('off').removeClass('on');
                toggleHandle();
                return false;
            });
            toggleSwitch.on('click', function () {
                toggleSwitch.toggleClass('on off');
                toggleHandle();
            });
        }


    });


})(jQuery);



/*===============Form_start==============*/


var state = false;
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "fi fi-rr-eye");
        document.getElementById("eye").style.color = "#999";
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "fi fi-rr-eye-crossed");
        document.getElementById("eye").style.color = "#7d2ae8";
        state = true;
    }
}



var state1 = false;
function toggle1() {
    if (state1) {
        document.getElementById("Rpassword").setAttribute("type", "password");
        document.getElementById("Reye").setAttribute("class", "fi fi-rr-eye");
        document.getElementById("Reye").style.color = "#999";
        state1 = false;
    } else {
        document.getElementById("Rpassword").setAttribute("type", "text");
        document.getElementById("Reye").setAttribute("class", "fi fi-rr-eye-crossed");
        document.getElementById("Reye").style.color = "#7d2ae8";
        state1 = true;
    }
}


/*===============Form_End==============*/


/*======Swiper slider ===========*/

