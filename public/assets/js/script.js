window.onload = function ($) {
    const navbar = document.getElementById('js-site-navbar');
    const modals = document.querySelectorAll(".modal");
    const html = document.querySelector('html');
    setTimeout(() => $("#subscriptionModal")?.modal('show'), 6000); //onload pop modal
    for (let i = 0; i < modals.length; i++) {
        modals[i].addEventListener('show.bs.modal', function () {
            html.classList.add('jsStopScroll');
        });

        modals[i].addEventListener('hidden.bs.modal', function () {
            html.classList.remove('jsStopScroll');
        })
    }

    if (navbar) {
        window.onscroll = function () {
            window.pageYOffset >= 10
                ? navbar.classList.add("navbar-scrolled")
                : navbar.classList.remove("navbar-scrolled");
        };
    }
};



function navForSlider() {
    var sync2 = $('.home-slider-thumbnails-sm-carousel-js'),
    sync1 = $('.home-slider-thumbnails-carousel-js');

    // Start Carousel
    sync1.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navText: ['<i class="icon icon-chevron-left" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });

    sync2.owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });

    // Sync nav
    sync1.on('click', '.owl-next', function () {
        sync2.trigger('next.owl.carousel')
    });
    sync1.on('click', '.owl-prev', function () {
        sync2.trigger('prev.owl.carousel')
    });
};

$(document).ready(function () {
    // Otp Inputs Logic
    $(".otp-controls-group .form-control").keyup(function () {
        if (this.value !== $(this).data('old') && this.value.length === this.maxLength) {
            $(this).data('old', this.value);
            let next = $(this).data('next');
            $('#otp-' + next).focus();
        }
    });
    //
    const productsSliderJs = $('.subscription-products-slider-js');
    const followUsSliderJs = $('.follow-us-slider-js');
    const productsListingGridSliderJs = $('.product-listing-grid-slider-js');
    const homeThumbnailsSliderJs = $('.home-slider-thumbnails-carousel-js');
    const SubscriptionCenterSliderJs = $('.subscription-center-slider-js');
    const reviewsGallerySliderJs = $('.reviews-gallery-slider-js');


    // Products Slider
    if (productsSliderJs) {
        productsSliderJs.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items: 1,
            navText: ['<i class="icon icon-chevron-left" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 24
                },
                1300: {
                    items: 3,
                    margin: 30
                },
                1800: {
                    items: 3,
                    margin: 80
                }
            }
        })
    }

    // Follow Us Slider
    if (followUsSliderJs) {
        followUsSliderJs.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items: 1,
            navText: ['<i class="icon icon-chevron-left" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2,
                    margin: 16
                },
                992: {
                    items: 3,
                    margin: 16
                },
                1200: {
                    items: 4,
                    margin: 27
                }
            }
        })
    }

    // Follow Us Slider
    if (productsListingGridSliderJs) {
        productsListingGridSliderJs.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            items: 1,
            navText: ['<i class="icon icon-chevron-left" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2,
                    margin: 16
                },
                992: {
                    items: 3,
                    margin: 16
                },
                1200: {
                    items: 4,
                    margin: 16
                },
                1400: {
                    items: 5,
                    margin: 10
                }

            }
        })
    }

    // Home Thumbnails Slider
    if (homeThumbnailsSliderJs) {
        homeThumbnailsSliderJs.owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ['<i class="icon icon-chevron-left" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false
        })
    }

    // Subscription Center Slider
    if (SubscriptionCenterSliderJs) {
        SubscriptionCenterSliderJs.owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ['<i class="icon icon-chevron-left" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false
        })
    }

    // Reviews Gallery Slider
    if (reviewsGallerySliderJs) {
        reviewsGallerySliderJs.owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            items: 1,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2,
                    margin: 30
                },
                992: {
                    items: 3,
                    margin: 63
                }
            }
        })
    }

    navForSlider();
    

    $(document).on("click", "a", function () {
        navForSlider();
    });

});

    $(window).on('load', function () {
        setTimeout(function () {
            navForSlider();
        }, 0);
    });
    var intervalId = window.setInterval(function(){
        navForSlider();
    }, 1000);

