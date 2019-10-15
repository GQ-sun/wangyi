window.onload = function () {
    document.onscroll = function () {

        // 查看当前滚动条位置
        // console.log($(window).scrollTop());
        // var w=document.clearWidth()
        if ($(window).scrollTop() > 330) {
            $('.xt1').fadeIn(1000);
        }
        if ($(window).scrollTop() > 1000) {
            $('.xt2').fadeIn(1000);
        }
        if ($(window).scrollTop() > 1700) {
            $('.xt3').fadeIn(1000);
        }
        if ($(window).scrollTop()> 2400) {
            $('.xt4').fadeIn(1000);
        }
    };
};