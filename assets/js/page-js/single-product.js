jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";

        // Window Full Width
        var vW = $(window).width();

        // Window Full Height
        var vH = $(window).height();

        //-----------------------------------------------------------------

        // SELECT MATTRESS POPUP SELECT CATEGORY CUSTOM SIZE OPTION SELECTED 

        //-----------------------------------------------------------------
        $('.select-mattress-popup--category--option.custom-size-option').on('click', function () {  
            $('.select-mattress-popup--custom-size').fadeIn(200);
            $('.select-mattress-popup--dimensions').fadeOut(200);
        });

        $('.select-mattress-popup--category--option:not(.custom-size-option)').on('click', function () {
            $('.select-mattress-popup--custom-size').fadeOut(200);
            $('.select-mattress-popup--dimensions').fadeIn(200);
        });



        //-----------------------------------------------------------------

        // SELECT MATTRESS POPUP MATTRESS HEIGHT CUSTOM SELECT DROPDOWN

        //-----------------------------------------------------------------
        function customSelectDropdownFunctionalities() {  
            function getSelectedValue(id) {
                return $("#" + id).find("dt a span.value").html();
            }

            $("button").click(function (e) {
                var val = getSelectedValue('countries');
                alert(val);
            });

            $(".custom-select-dropdown--selected-option a").on('click', function (e) {
                $(".custom-select-dropdown ul").toggle();
                e.preventDefault();
            });

            $(".custom-select-dropdown ul li a").on('click', function () {
                var text = $(this).html();
                $(".custom-select-dropdown--selected-option a span").html(text);
                $(".custom-select-dropdown ul").hide();

            });

            $(document).bind('click', function (e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass("custom-select-dropdown"))
                    $(".custom-select-dropdown--selected-option ul").hide();
            });
        }
        
        function singleProductReviewBlockSpacing() {
            var width = $('.single-product-review-block--main-sec .container').width();
            var widthDifference = (vW - width) / 2;
            $('.single-product-review-block--main-sec .bg-color-placer').width(width);
            $('.single-product-review-block--main-sec .bg-color-placer').css('left', widthDifference)
        }

        function sectionBgImg() {
            $('.section-bgimg').each(function() {
                var sectionBgImg = $(this).attr('data-sectionBgImg');
                $(this).css('background-image','url('+sectionBgImg+')');
            });
        }

        function knowMeasureSizePopupOpenClose() {  
            $('.select-mattress-popup--know-measure-size__button').on('click', function (e) {
                e.preventDefault();
                $('.know-measure-size-popup').addClass('active');
                $('.body-overlay').addClass('know-measure-size-popup--visible');
                $('body').addClass('know-measure-size-popup-open-scroll-lock');
            });

            $('.know-measure-size-popup--close-button').on('click', function () {
                $('.know-measure-size-popup').removeClass('active');
                $('.body-overlay').removeClass('know-measure-size-popup--visible');
                $('body').removeClass('know-measure-size-popup-open-scroll-lock');
            });
        }



        

        function featuresBlockAccordianBlock() {
            if(vW < 992) {
                if($('.features-block.accordian-block').length) {
                    var _this = $('.features-block.accordian-block');
                    _this.find('.features-block--each--content').slideUp();
            
                    _this.find('.features-block--each').on('click',function() {
                        var __this = $(this);
                        if(__this.hasClass('active')){
                            __this.removeClass('active');
                            __this.find('.features-block--each--content').slideUp(200);
                        } else {
                            _this.find('.features-block--each--content').slideUp(200);
                            $('.features-block--each').removeClass('active');
                            __this.addClass('active');
                            __this.find('.features-block--each--content').slideDown(200);
                        }
                        
                    });
                }
            }
        }


        // Product Image Carousel Pagination
        setTimeout(function () { 
            $('.product-image-carousel').each(function(){
                var slideCount = $(this).find('.swiper-slide').length;
                
                for (var i = 0; i < slideCount; i++) {
                    var bgImg = $(this).find('.swiper-slide').eq(i).attr('data-bg');
                    $(this).find('.swiper-slide').eq(i).css('background-image', 'url(' + bgImg + ')');
                    $(this).closest('.product-image-carousel-wrap').find('.swiper-pagination .swiper-pagination-bullet').eq(i).css('background-image', 'url(' + bgImg + ')');
                }
            });
        }, 1500);

        function productFeaturesCarousel1() {
            if(vW > 991) {
                var widthDifference = (vW - $('.dummy div').width()) / 2;
                $('.product-features-carousel1-wrap').css('padding-left', widthDifference);
            }
        }

        function sleepScoreCalculatorPopupAppear() {
            setTimeout(function () {
                $('.sleep-score-calculator-popup').fadeIn(500);
                $('.body-overlay').addClass('sleep-score-popup--visible');

                $("body").addClass('sleep-score-popup-open-scroll-lock');
            }, 5000);
        }

        //To-top Position Adjustment On Scroll
        $('.footer').waypoint(function (direction) {
            if (direction === 'down')
                $(".select-mattress").animate({
                    opacity: '0',
                    visibility: 'hidden'
                });
            else
                $(".select-mattress").animate({
                    opacity: '1',
                    visibility: 'visible'
                });
        }, {
            offset: $(window).height()
        });

        // Select Mattress Popup Functionalities
        function selectMattressPopup() {
            $('.select-mattress-popup--category--size-guide__popup-link').on('click', function (e) {
                e.preventDefault();
                $('.know-mattress-size-popup-block').fadeIn(500);
                $('.body-overlay').addClass('know-mattress-size-popup--visible');
                $('body').addClass('know-mattress-size-popup-block-open-scroll-lock');
            });
        }

        $('.select-mattress-popup--category--option').on('click', function (e) { 
            e.preventDefault();
            $(this).closest('.select-mattress-popup--category--option--wrap').find('.select-mattress-popup--category--option').removeClass('active');
            $(this).addClass('active');
        });

        $('.select-mattress-popup--dimensions--option').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.select-mattress-popup--dimensions--option--wrap').find('.select-mattress-popup--dimensions--option').removeClass('active');
            $(this).addClass('active');
        });

        $('.select-mattress--button').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').text('Add To Cart');
            $('.select-mattress-popup').fadeIn(500);
            $('.select-mattress-popup--know-measure-size').css('bottom', $('.select-mattress').outerHeight());
            $('body').addClass('select-mattress-popup-open-scroll-lock');
        });

        $('.select-mattress-popup--close-button').on('click', function (e) {
            e.preventDefault();
            $('.select-mattress--button').find('a').text('Select Mattress');
            $('.select-mattress-popup').fadeOut(500);
            $('.select-mattress-popup--know-measure-size').css('bottom', '-100px');
            $('body').removeClass('select-mattress-popup-open-scroll-lock');
        });

        function selectMattressDesktop() {
            $(window).click(function(event) {
                if($('body').hasClass('select-active')) {
                    $('body').removeClass('select-active');
                    $('.select-mattress--block--select--option').fadeOut(100);
                }
            });

            $('.select-mattress--block--select--option').fadeOut(0);
            $('.select-mattress--block--select--wrap--selected-content').on('click', function () {
                setTimeout(() => {
                    $('body').addClass('select-active');
                    $('.select-mattress--block--select--option').fadeIn(100);
                }, 10);
            })

            $('.select-mattress--block--select--option ul li').on('click', function () {
                if ($(this).hasClass('active')) {
                    $('.select-mattress--block--select--option').fadeOut(100);
                } else {
                    $('.select-mattress--block--select--option ul li').removeClass('active');
                    $(this).addClass('active');
                    var textVal = $(this).find('.select-mattress--block--select--option--select-text').attr('data-text');
                    $('.select-mattress--block--select--wrap--selected-content .select-mattress--block--select--option--select-text').text(textVal);
                    $('.select-mattress--block--select--option').fadeOut(100);
                }
            });
            
        }

        function singleProductSpecificationBlock () {
            if($('.single-product-specification-tab').length) {
                $('.single-product-specification-tab--desc--each.active').slideDown();
                $('.single-product-specification-tab--clicker--wrap span').on('click',function() {
                    if($(this).hasClass('active')) {

                    } else {
                        $('.single-product-specification-tab--clicker--wrap span').removeClass('active');
                        $(this).addClass('active');
                        var tabVal = $(this).attr('data-clicker');
                        $('.single-product-specification-tab--desc--each').slideUp();
                        $('.single-product-specification-tab--desc').find('.'+tabVal).slideDown();
                    }
                });
            }
        }

        function designBlock() {
            if(vW > 991) {
                if($('.design-block').length) {
                    var i = 0;
                    var j = 0;
    
                    $('.design-block--img-inner').height($('.design-block--inner').innerHeight());
    
                    $('.design-block--inner--each').each(function() {
                        $(this).attr('data-block','block'+i);
                        i++;
                    });
                    $('.design-block--img-inner--each').each(function() {
                        $(this).addClass('block'+j);
                        j++;
                    });
    
                    $('.design-block--inner--each').on('click',function() {
                        if($(this).hasClass('active')) {
    
                        } else {
                            $('.design-block--inner--each').removeClass('active');
                            $(this).addClass('active');
                            var classVal = $(this).data('block');
                            $('.design-block--img-inner .design-block--img-inner--each').removeClass('img-active');
                            $('.design-block--img-inner').find('.'+classVal).addClass('img-active');
                        }
                        
                    })
                } 
            }
        }


        // DOCUMENT READY STARTS
        $(document).ready(function () {

            // SELECT MATTRESS POPUP MATTRESS HEIGHT CUSTOM SELECT DROPDOWN
            customSelectDropdownFunctionalities();

            knowMeasureSizePopupOpenClose();

            singleProductReviewBlockSpacing();

            sectionBgImg();

            selectMattressDesktop();
            
            featuresBlockAccordianBlock();

            // productImageCarousel();

            productFeaturesCarousel1();

            if(vW < 992){
                sleepScoreCalculatorPopupAppear();
            }   

            selectMattressPopup();

            singleProductSpecificationBlock();

            designBlock();

            


        }); // DOCUMENT READY ENDS

    })(jQuery);
});