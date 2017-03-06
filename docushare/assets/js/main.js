$(document).ready(function() {

    // SVG Injection
    var mySVGsToInject = document.querySelectorAll("img.svg-img");
    SVGInjector(mySVGsToInject);

    // Smooth scroll
    $('body').smoothScroll({
        delegateSelector: 'ul.secondary-nav a',
        speed: 'auto'
    });

    // Fix secondary menu
    var nav = $('.wrapper-for-fix');
    var pos = $('.wrapper-for-fix').offset().top;

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    var videoOwl = $('.video-carousel');
    var caseOwl = $('.case-carousel');
    var paperOwl = $('.paper-carousel');
    var graphicOwl = $('.graphic-carousel');
    var articleOwl = $('.article-carousel');

    videoOwl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Go to the next item
    $('.customNextBtn').click(function() {
        videoOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        videoOwl.trigger('prev.owl.carousel');
    });

    // Case carousel
    caseOwl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Go to the next item
    $('.customNextBtnCase').click(function() {
        caseOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtnCase').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        caseOwl.trigger('prev.owl.carousel');
    });

    // Paper Carousel
    paperOwl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Go to the next item
    $('.customNextBtnPaper').click(function() {
        paperOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtnPaper').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        paperOwl.trigger('prev.owl.carousel');
    });

    // Graphic Carousel
    graphicOwl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Go to the next item
    $('.customNextBtnGraphic').click(function() {
        graphicOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtnGraphic').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        graphicOwl.trigger('prev.owl.carousel');
    });

    // Article Carousel
    articleOwl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Go to the next item
    $('.customNextBtnArticle').click(function() {
        articleOwl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtnArticle').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        articleOwl.trigger('prev.owl.carousel');
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // Hover
    $(".parent").hover(
    function () {
        $(this).addClass('hover-on');
    },
    function () {
        $(this).removeClass('hover-on');
    }
    );

});
