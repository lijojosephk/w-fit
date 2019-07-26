jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";

        // Window Full Width
        var vW = $(window).width();

        // Window Full Height
        var vH = $(window).height();


        //-----------------------------------------------------------------

        // OFFER RIBBON ON PAGE TOP

        //-----------------------------------------------------------------
        function offerRibbon() {  
            $('body').css('padding-top', $('.header').outerHeight());
            setTimeout(() => {
                $('.offer-top-ribbon').css('top', 0);
                $('.header').css('top', $('.offer-top-ribbon').outerHeight());
            }, 3000);
        }
        
        
        //-----------------------------------------------------------------

        // FULL WIDTH BLOCK LEFT AND RIGHT SPACING

        //-----------------------------------------------------------------
        function fullWidthLeftRightSpacing() {  
            // Padding for full width blocks
            
            if(vW > 991) {
                var widthDifference = (vW - $('.dummy div').outerWidth()) / 2;
            } else {
                var widthDifference = (vW - $('.dummy div').width()) / 2;
            }
            $('.container-fluid-container-pad-right').css('padding-right', widthDifference);
            $('.container-fluid-container-pad-left').css('padding-left', widthDifference);
        }


        //-----------------------------------------------------------------

        // SLEEP SCORE CALCULATOR POPUP CLOSE

        //-----------------------------------------------------------------
        function sleepScoreCalculatorPopupClose() {
            $('.sleep-score-calculator-popup--close-button').on('click', function (e) {
                e.preventDefault();
                $(this).closest('.sleep-score-calculator-popup').fadeOut(500);
                $('.body-overlay').removeClass('sleep-score-popup--visible');

                $("body").removeClass('sleep-score-popup-open-scroll-lock');
            });            
        }


        //-----------------------------------------------------------------

        // SLEEP SCORE CALCULATOR POPUP OPEN FROM SLIDE MENU BUTTON

        //-----------------------------------------------------------------
        function sleepScoreCalculatorOpen() {
            $('.get-sleep-score .get-sleep-score--access').on('click',function(e) {
                e.preventDefault();
                $('.slide-menu--close a').trigger('click');
                $('.sleep-score-calculator-popup').fadeIn(500);
                $('.body-overlay').addClass('sleep-score-popup--visible');
    
                $("body").addClass('sleep-score-popup-open-scroll-lock');
            });
        }


        //-----------------------------------------------------------------

        // SITE WIDE SWIPER SLIDER INITIALIZATION

        //-----------------------------------------------------------------
        function commonSwiper() {  
            // Swiper Slider Init
            var sliders = [];

            $('.swiper-container.normal-swiper').each(function (index, element) {
                $(this).addClass('s' + index);
                $(this).find(".swiper-button-prev").addClass("btn-prev-" + index);
                $(this).find(".swiper-button-next").addClass("btn-next-" + index);
                var centeredSlidesVal = $(this).attr('data-centeredSlides');
                if (centeredSlidesVal === 'true') {
                    centeredSlidesVal = true;
                } else {
                    centeredSlidesVal = false;
                }

                var centeredSlidesMobileVal = $(this).attr('data-centeredSlidesMobile');
                if (centeredSlidesMobileVal === 'true') {
                    centeredSlidesMobileVal = true;
                } else {
                    centeredSlidesMobileVal = false;
                }

                var loopVal = $(this).attr('data-loop');
                if (loopVal === 'true') {
                    loopVal = true;
                } else {
                    loopVal = false;
                }

                var loopMobileVal = $(this).attr('data-loopMobile');
                if (loopMobileVal === 'true') {
                    loopMobileVal = true;
                } else {
                    loopMobileVal = false;
                }

                var slider = new Swiper('.s' + index, {
                    slidesPerView: $(this).attr('data-slidesPerView'),
                    spaceBetween: parseInt($(this).attr('data-spaceBetween'), 10),
                    loop: loopVal,
                    centeredSlides: centeredSlidesVal,
                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    //If we need navigation
                    navigation: {
                        nextEl: ".btn-next-" + index,
                        prevEl: ".btn-prev-" + index
                    },
                    autoplay: {
                        delay: $(this).attr('data-delay'),
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        // when window width is <= 320px
                        320: {
                            slidesPerView: $(this).attr('data-slidesPerView320'),
                            centeredSlides: centeredSlidesMobileVal,
                            loop: loopMobileVal,
                        },
                        // when window width is <= 480px
                        480: {
                            slidesPerView: $(this).attr('data-slidesPerView480'),
                            centeredSlides: centeredSlidesMobileVal,
                            loop: loopMobileVal,
                        },
                        // when window width is <= 640px
                        640: {
                            slidesPerView: $(this).attr('data-slidesPerView640'),
                            centeredSlides: centeredSlidesMobileVal,
                            loop: loopMobileVal,
                        },
                        // when window width is <= 991px
                        991: {
                            slidesPerView: $(this).attr('data-slidesPerView991'),
                            centeredSlides: centeredSlidesMobileVal,
                            loop: loopMobileVal,
                        }
                    }
                });
                if ($(this).attr('data-autoplay') === 'false') {
                    slider.autoplay.stop();
                }
                sliders.push(slider);

            });
        }


        //-----------------------------------------------------------------

        // OTHER PRODUCTS DESKTOP SLIDER INITIALIZATION

        //-----------------------------------------------------------------
        function otherProductsSlider() {  
            var mySwiper = new Swiper('.swiper-container.other-products-block--slider', {
                slidesPerView: 'auto',
                speed: 400,
                spaceBetween: 0,
                loop: true,
                
            });
        }



        //-----------------------------------------------------------------

        // KNOW MATTRESS SIZE POPUP 

        //-----------------------------------------------------------------
        function knowMattressSizePopupInnerFunctionalities() {  
            $('.know-mattress-size-popup-block--close-button').on('click', function (e) {
                e.preventDefault();
                $('.know-mattress-size-popup-block').fadeOut(500);
                $('.body-overlay').removeClass('know-mattress-size-popup--visible');
                $('body').removeClass('know-mattress-size-popup-block-open-scroll-lock');
            });

            $('.know-mattress-size-popup-block--size-selector-tab .tab-content .tab-pane .bed-size').on('click', function () {
                $(this).closest('.tab-pane').find('.bed-size').removeClass('active');
                $(this).addClass('active');
            });

            $('.mattress-size-guide-trigger a').on('click',function(e) {
                e.preventDefault();
                $('.header--get-help').trigger('click');
                $('.know-mattress-size-popup-block').fadeIn(500);
                $('.body-overlay').addClass('know-mattress-size-popup--visible');
                $('body').addClass('know-mattress-size-popup-block-open-scroll-lock');
            })
        }


        //-----------------------------------------------------------------

        // CART OPEN CLOSE 

        //-----------------------------------------------------------------
        function cartOpenClose(){
            $('.header--cart').on('click', function (e) {
                e.preventDefault();
                $('.cart').css('right', 0);
                $('body').addClass('cart-open-scroll-lock');
                $('.body-overlay').addClass('cart-open');
            });

            $('.cart--close-button').on('click', function (e) {
                e.preventDefault();
                $(this).closest('.cart').css('right', '-110%');
                $('body').removeClass('cart-open-scroll-lock');
                $('.body-overlay').removeClass('cart-open');
            });
        }
        
        
        //-----------------------------------------------------------------

        // CART INNER FUCTIONALITIES

        //-----------------------------------------------------------------
        function insideCartFunctionalities() {  
            $('.cart--added-product__remove').on('click', function (e) { 
                e.preventDefault(); 
                $(this).closest('.cart--added-product').fadeOut(300);
            });

            $('.cart--promo-code-block__link').on('click', function (e) {
                e.preventDefault();
                $(this).fadeOut(25);
                $('.cart--promo-code-block__added-code').fadeOut(25);
                $(this).closest('.cart--promo-code-block').find('.cart--promo-code-block__form').fadeIn(500);
            });

            $('.cart--promo-code-block__form button').on('click', function () {
                $(this).closest('.cart--promo-code-block__form').fadeOut(200);
                $('.cart--promo-code-block__added-code').delay(200).fadeIn(300);
                $('.cart--promo-code-block__link').delay(200).fadeIn(300);
            });

            $('.cart--promo-code-block__added-code--close-button').on('click', function (e) {
                e.preventDefault();
                $(this).closest('.cart--promo-code-block__added-code').fadeOut(25);
            });
        }       


        //-----------------------------------------------------------------

        // MENU FUNCTIONALITIES

        //-----------------------------------------------------------------
        function menuFunctionalities() {
            $('.header--menu-icon').on('click', function (e) {
                e.preventDefault();
                $('.slide-menu').css({
                    'left': '0%'
                });
                $('main, .header--inner, .footer .container, .get-help-block').css({
                    '-webkit-transform': 'translateX(100px)',
                    'transform': 'translateX(100px)'
                });

                $('.body-overlay').addClass('menu-open');
                $("body").addClass('menu-open-scroll-lock');
            });

            $('.slide-menu--close').on('click', function (e) {
                e.preventDefault();
                $(this).closest('.slide-menu').css({
                    'left': '-100%'
                });
                $('main, .header--inner, .footer .container, .get-help-block').css({
                    '-webkit-transform': 'translateX(0px)',
                    'transform': 'translateX(0px)'
                });

                $('.body-overlay').removeClass('menu-open');
                $("body").removeClass('menu-open-scroll-lock')
            });

            if (vW < 992) {
                var slideMenuFooterH = $('.slide-menu--footer').outerHeight();
                $('.slide-menu--element-wrap').css('height', vH - slideMenuFooterH - 70);

                $('.menu--item.has-children').on('click', function (e) {
                    e.preventDefault();
                    $(this).closest('.menu').css('left', '-125%');
                    var parentItem = $(this).find('a').html();
                    var submenuContent = $(this).find('ul').html();

                    $('.sub-menu-dump-block').height($(this).find('.sub-menu').height()+70);

                    $('.sub-menu-dump-block').css({
                        'visibility': 'visible',
                        'opacity': '1'
                    });
                    // $('.sub-menu-dump-block--inner').css({
                    //     '-webkit-transform': 'scale(1)',
                    //     'transform': 'scale(1)'
                    // });
                    $('.slide-menu .slide-menu--track-order-button').fadeOut(100);
                    $('.slide-menu .get-sleep-score').fadeOut(100);

                    $('.sub-menu-dump-block--inner__go-back a').html(parentItem);
                    $('.sub-menu-dump-block--inner__content ul').html(submenuContent);
                });
            }

            $('.sub-menu-dump-block--inner__go-back a').on('click', function (e) {
                e.preventDefault();
                $('.sub-menu-dump-block').css({
                    'visibility': 'hidden',
                    'opacity': '0'
                });
                // $(this).closest('.sub-menu-dump-block--inner').css({
                //     '-webkit-transform': 'scale(0.8)',
                //     'transform': 'scale(0.8)'
                // });

                $('.slide-menu .slide-menu--track-order-button').fadeIn(100);
                $('.slide-menu .get-sleep-score').fadeIn(100);
                $('.menu').css('left', '0%');
            });

        }


        //-----------------------------------------------------------------

        // GET HELP OPEN CLOSE

        //-----------------------------------------------------------------
        function headerGetHelpOpenCLose() {  
            $('.header--get-help').on('click', function (e) {
                e.preventDefault();

                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $('.get-help-block').css({
                        'visibility': 'visible',
                        'opacity': '1'
                    });
                    $('.master-wrap--overlay').fadeIn(200);
                } else {
                    $('.get-help-block').css({
                        'visibility': 'hidden',
                        'opacity': '0'
                    });
                    $('.master-wrap--overlay').fadeOut(200);
                }
            });

            $('.master-wrap--overlay').on('click', function (e) {
                e.preventDefault();

                $('.get-help-block').css({
                    'visibility': 'hidden',
                    'opacity': '0'
                });
                $('.master-wrap--overlay').fadeOut(200);

                $('.header--get-help').removeClass('active');
            });
        } 


        //-----------------------------------------------------------------

        // CLOSE POPUP ON CLICK OUTSIDE

        //-----------------------------------------------------------------
        function allPopupCloseFunctionality() {
            $('.body-overlay').on('click', function () {
                $('.offer-popup').fadeOut(500);
                $('.sleep-score-calculator-popup').fadeOut(500);
                $('.know-measure-size-popup').removeClass('active');
                $('.know-mattress-size-popup-block').fadeOut(500);

                $(this).removeClass('offer-popup-block--visible know-mattress-size-popup--visible know-measure-size-popup--visible sleep-score-popup--visible');

                $("body").removeClass('offer-popup-block-open-scroll-lock sleep-score-popup-open-scroll-lock know-measure-size-popup-open-scroll-lock know-mattress-size-popup-block-open-scroll-lock');
            });
        }


        //-----------------------------------------------------------------

        // NUMBER INCREMENT/DECREMENT FIELD

        //-----------------------------------------------------------------
        function numberChange() {
            $('.number-change .minus').on('click', function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });

            $('.number-change .plus').on('click', function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        }


        //-----------------------------------------------------------------

        // INPUT FIELD PLACEHOLDER ANIMATION

        //-----------------------------------------------------------------
        function inputPlaceholderAnimation() {
            $('input').focus(function () {
                $(this).parents('span').addClass('focused');
            });

            $('input').blur(function () {
                var inputValue = $(this).val();
                if (inputValue == "") {
                    $(this).removeClass('filled');
                    $(this).parents('span').removeClass('focused');
                } else {
                    $(this).addClass('filled');
                }
            })
        }


        //-----------------------------------------------------------------

        // CUSTOM SELECT BOX INITIALIZATION

        //-----------------------------------------------------------------
        function customSelectbox() {
            if ($('.custom-select-box').length) {
                $('.custom-select-box').dropdown({
                    "dropdownClass": "my-dropdown",
                    "optionClass": "my-option"
                });
            }
        }
        

        //-----------------------------------------------------------------

        //DOCUMENT READY STARTS

        //-----------------------------------------------------------------
        $(document).ready(function () {

            setTimeout(() => {
                //Common Swiper Initialization
                commonSwiper();

                // Other Product Slider Init
                if (vW > 991) {
                    if($('.other-products-block--slider').length){
                        
                    //OTHER PRODUCTS SLIDER FOR DESKTOP
                    otherProductsSlider();
                    }    
                }    
            }, 1000);

            setTimeout(() => {
                $('.dropdownjs > ul > li').on('click', function () {
                    $(this).closest('.dropdownjs').find('.fakeinput').addClass('selected');
                });
            }, 1000);

            // OFFER RIBBON ON PAGE TOP
            offerRibbon();

            // FULL WIDTH BLOCK LEFT AND RIGHT SPACING
            fullWidthLeftRightSpacing();

            // KNOW MATTRESS SIZE POPUP 
            knowMattressSizePopupInnerFunctionalities();

            // SLEEP SCORE CALCULATOR POPUP OPEN FROM SLIDE MENU BUTTON
            sleepScoreCalculatorOpen();

            // SLEEP SCORE CALCULATOR POPUP CLOSE
            sleepScoreCalculatorPopupClose();

            // MENU FUNCTIONALITIES
            menuFunctionalities();

            // GET HELP OPEN CLOSE
            headerGetHelpOpenCLose();

            // CART OPEN CLOSE
            cartOpenClose();

            // CART INNER FUCTIONALITIES
            insideCartFunctionalities(); 

            // CLOSE POPUP ON CLICK OUTSIDE
            allPopupCloseFunctionality();

            // NUMBER INCREMENT/DECREMENT FIELD
            numberChange();
            
            // INPUT FIELD PLACEHOLDER ANIMATION
            inputPlaceholderAnimation();

            // CUSTOM SELECT BOX INITIALIZATION
            customSelectbox();


        }); // DOCUMENT READY ENDS

    })(jQuery);
});