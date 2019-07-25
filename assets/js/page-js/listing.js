jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";
            var vW = $(window).width();
            var vH = $(window).height();

            function sectionBgImg() {
                $('.section-bgimg').each(function () {
                    var sectionBgImg = $(this).attr('data-sectionBgImg');
                    $(this).css('background-image', 'url(' + sectionBgImg + ')');
                });
            }

            function designBlock() {
                if (vW > 991) {
                    if ($('.design-block').length) {
                        var i = 0;
                        var j = 0;

                        $('.design-block--img-inner').height($('.design-block--inner').innerHeight());

                        $('.design-block--inner--each').each(function () {
                            $(this).attr('data-block', 'block' + i);
                            i++;
                        });
                        $('.design-block--img-inner--each').each(function () {
                            $(this).addClass('block' + j);
                            j++;
                        });

                        $('.design-block--inner--each').on('click', function () {
                            if ($(this).hasClass('active')) {

                            } else {
                                $('.design-block--inner--each').removeClass('active');
                                $(this).addClass('active');
                                var classVal = $(this).data('block');
                                $('.design-block--img-inner .design-block--img-inner--each').removeClass('img-active');
                                $('.design-block--img-inner').find('.' + classVal).addClass('img-active');
                            }

                        })
                    }
                }
            }


        function productFeaturesCarousel1 () {

            if(vW > 991) {
                var widthDifference = (vW - $('.dummy div').width()) / 2;
                $('.product-features-carousel1-wrap').css('padding-left', widthDifference);
            }

            if ($('.product-features-carousel1').length) {
                var productFeaturesCarousel1Swiper = new Swiper('.product-features-carousel1', {
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    spaceBetween: 50,
                    breakpoints: {
                        // when window width is <= 991px
                        991: {
                            slidesPerView: 1,
                        }
                    }
                });
            }
        }

        function productFeaturesCarousel2() {
            if ($('.product-features-carousel2').length) {
                var productFeaturesCarousel2Swiper = new Swiper('.product-features-carousel2', {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    // autoplay: {
                    //     delay: 5000,
                    // },
                    spaceBetween: 50,
                });
            }
        }

        function offerPopupClose (){
            $('.offer-popup--close-button').on('click', function (){
                $(this).closest('.offer-popup').fadeOut(500);
                $('.body-overlay').removeClass('offer-popup-block--visible');
                $("body").removeClass('offer-popup-block-open-scroll-lock');
            });
        }

        function offerPopupAppear () {
            setTimeout( function () { 
                if ($('.offer-popup').length){
                    $('.offer-popup').fadeIn(500);
                    $('.body-overlay').addClass('offer-popup-block--visible');
                    $("body").addClass('offer-popup-block-open-scroll-lock');
                }
            }, 5000);
        }


        // DOCUMENT READY STARTS
        $(document).ready(function () {

            sectionBgImg();

            designBlock();

            offerPopupClose();

            if(vW < 992){
                offerPopupAppear();
            }

            productFeaturesCarousel1();

            productFeaturesCarousel2();

        }); // DOCUMENT READY ENDS

    })(jQuery);
});