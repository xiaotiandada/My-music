/**
 *
 */
(function () {
    'use strict';
    //var _this = this;

    $('#more,#secondMenu').hover(function () {
            $('#secondMenu').css('display','block');
            $('#more').addClass('active');
            $('#icon').removeClass('icon').addClass('iconrotate');
        },
        function () {
            $('#secondMenu').css('display','none');
            $('#more').removeClass('active');
            $('#icon').removeClass('iconrotate').addClass('icon');;
        })

})();

