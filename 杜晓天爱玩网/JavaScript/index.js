{
    // 轮播图
    $(document).ready(function () {
        var imgList = $('.carousel').children('.imgList').find('a');
        var list = $('.carousel').children('.btnList').children();
        var index = 0;
        list.click(time);
        var timer = setInterval(time, 5000);
        $('.carousel').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(time, 5000);
        })

        function time() {
            index++;
            if (index == 2) index = 0;
            list.eq(index).animate({
                'width': '35px',
                'border-radius': '15px'
            }).css('backgroundColor', 'yellow').removeClass('jqbg').siblings().animate({
                'width': '20px',
                'border-radius': '0px',
            }).css('backgroundColor', '').removeClass('jqbg');
            imgList.eq(index).stop().fadeIn(700).siblings().stop().fadeOut(700);
        }
    });
}; {
    // 登录
    $(function () {
        $('.long').children(0).hover(function () {
            $(this).eq(0).children(0).addClass('jsUp');
            $(this).find('.login').css({
                'transform': 'translateX(0%)',
            });
        }, function () {
            $(this).eq(0).children(0).removeClass('jsUp');
            $(this).find('.login').css({
                'transform': 'translateX(100%)',
            });
        });
    });
}; {
    // 图片轮播图
    $(function () {
        $("#carousel").waterwheelCarousel({
            // autoPlay: 2000,
        });
    });
}; {
    // canvas
    $(function () {
        $('#myClouds').Klouds();
    });
}; {
    $(function () {
        $('.assess-cont').children('li').hover(function () {
            $(this).find('.w').addClass('ww');
            $(this).siblings().find('.w').removeClass('ww');
        });
    });
}
