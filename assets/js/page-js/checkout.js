jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";

        function orderSummaryShowHide() { 
            $('.order-summary-show-hide-trigger').on('click', function () {
                $(this).toggleClass('opened');
                if($(this).hasClass('opened')){
                    $(this).find('.checkout--order-summary__title').text('Hide Order Summary');
                    $(this).closest('.checkout--order-summary').find('.order-summary-show-hide-block').fadeIn(300);
                    $(this).find('.checkout--order-summary__amount').fadeOut(50);
                }else{
                    $(this).find('.checkout--order-summary__title').text('Show Order Summary');
                    $(this).closest('.checkout--order-summary').find('.order-summary-show-hide-block').fadeOut(300);
                    $(this).find('.checkout--order-summary__amount').fadeIn(50);
                }
                
            })
        }

        // DOCUMENT READY STARTS
        $(document).ready(function () {
            
            orderSummaryShowHide();

        }); // DOCUMENT READY ENDS

    })(jQuery);        
});