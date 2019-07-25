jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";

        // Window Full Width
        var vW = $(window).width();

        // Window Full Height
        var vH = $(window).height();
        

        $(document).ready(function () {
        
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

            //-----------------------------------------------------------------

            // BACKGROUND IMAGE SETTINGS

            //-----------------------------------------------------------------

            $('.section-bgimg').each(function() {
                var sectionBgImg = $(this).attr('data-sectionBgImg');
                $(this).css('background-image','url('+sectionBgImg+')');
            });
            
        }); // DOCUMENT READY ENDS

    })(jQuery);
});