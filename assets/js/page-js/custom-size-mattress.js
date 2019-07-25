jQuery(document).ready(function ($) {

    (function ($) {
        "use strict";

        //-----------------------------------------------------------------

        //KNOW HOW TO MEASURE MATTRESS SIZE POPUP OPEN AND CLOSE

        //-----------------------------------------------------------------
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

        //-----------------------------------------------------------------

        //DOCUMENT READY STARTS

        //-----------------------------------------------------------------
        $(document).ready(function () {

            //KNOW HOW TO MEASURE MATTRESS SIZE POPUP OPEN AND CLOSE
            knowMeasureSizePopupOpenClose();
            
        }); // DOCUMENT READY ENDS


    })(jQuery);
});