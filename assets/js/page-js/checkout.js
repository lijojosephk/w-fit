jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";

        function orderSummaryShowHide() { 
            $('.order-summary-show-hide-trigger').on('click', function () {
                $(this).toggleClass('opened');
                if($(this).hasClass('opened')){
                    var openVal = $(this).find('.checkout--order-summary__title').attr('data-open-content');
                    $(this).find('.checkout--order-summary__title').text(openVal);
                    $(this).closest('.checkout--order-summary').find('.order-summary-show-hide-block').fadeIn(300);
                }else{
                    var closeVal = $(this).find('.checkout--order-summary__title').attr('data-close-content');
                    $(this).find('.checkout--order-summary__title').text(closeVal);
                    $(this).closest('.checkout--order-summary').find('.order-summary-show-hide-block').fadeOut(300);
                }
                
            })
        }

        // DOCUMENT READY STARTS
        $(document).ready(function () {
            
            orderSummaryShowHide();

        }); // DOCUMENT READY ENDS

    })(jQuery);        
});