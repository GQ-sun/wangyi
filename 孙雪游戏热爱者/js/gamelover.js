//1.设置导航open
$('.nav_open').click(function () {
    $(this).stop().fadeOut().siblings('.nav_close').stop().fadeIn();
    $('.nav_menu').css('display', 'block').stop().animate({
        width: 880,
    });
});
//2.导航close
$('.nav_close').click(function () {
    $(this).stop().fadeOut().siblings('.nav_open').stop().fadeIn();
    $('.nav_menu').stop().animate({
        width: 100,
    }, function () {
        $('.nav_menu').css('display', 'none');
    });
    stopVideo();
});
//3.播放按钮
$('.btn_play').click(function () {
    // 多余的盒子隐藏
    $('.full_video').css('display', 'block').siblings('.word').css('display', 'none').siblings('.cover').children('.mask').css('display', 'none');
    $('.border_box').css('display', 'none');
    $('.frame_down').css('display', 'none');
    // 视频播放
    $('.full_video video')[0].play();
    //导航变成关闭按钮
    $('.nav_open').stop().fadeOut().siblings('.nav_close').stop().fadeIn();
});

//4.设置向下按钮
var n = 0;
$('.frame_down').click(function () {
    n++;
    // n=(n+1)%6;
    $('.swip_wrapper').stop().animate({
        scrollTop: 657 * n
    });
    //对应的按钮样式显示
    getActive();
    getUp();
    getBig(n);

});

//5.设置向上按钮
$('.frame_up').click(function () {
    $('.swip_wrapper').stop().animate({
        scrollTop: 0
    });
    $(this).hide().siblings('.frame_down').show();
    n = 0;
    //对应的按钮样式显示
    getActive();
    $('.share_box').stop().fadeOut();

});
// 6.设置小圆点点击事件
$('.page_btn span').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.swip_wrapper').stop().animate({
        scrollTop: 657 * index
    });

    //对应的上下键互相切换
    n = index;
    stopVideo();
    getBig(n);
    if (n == 5) {
        $('.frame_down').hide().siblings('.frame_up').show();
        $('.share_box').stop().fadeIn();
        return;
    } else {
        $('.frame_up').hide().siblings('.frame_down').show();
        $('.share_box').stop().fadeOut();
        return;
    }
});


//7.设置滚动事件
// 这个事件在标准下和IE下是有区别的。
// 	firefox是按标准实现的,事件名为"DOMMouseScroll ",IE下采用的则是"mousewheel "。
// 	当然一行代码就解决了兼容问题 
// 	var mousewheel = document.all?"mousewheel":"DOMMouseScroll";
// 	事件属性，IE是event.wheelDelta，Firefox是event.detail 属性的方向值也不一样，IE向上滚 > 0，Firefox向下滚 > 0。

$(document).on('mousewheel DOMMouseScroll', function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
    if (delta > 0) {
        if (n > 0) {
            n--;
            // console.log('向上滚');
            $('.swip_wrapper').stop().animate({
                scrollTop: 657 * n
            });
            stopVideo();
            getActive();
            //前五页显示向下
            if (n < 5) {
                $('.frame_up').hide().siblings('.frame_down').show();
                $('.share_box').stop().fadeOut();

            }
        };

    } else {
        n++;
        // console.log('向下滚');
        $('.swip_wrapper').stop().animate({
            scrollTop: 657 * n
        });
        stopVideo();
        getActive();
        //最后一页显示向上
        if (n >= 5) {
            $('.frame_down').hide().siblings('.frame_up').show();
            $('.share_box').stop().fadeIn();

        }

    };
    getBig(n);
});

//8.设置分享盒子鼠标进入离开事件
$('.share_box li').hover(function () {
    $(this).stop().fadeTo(300, 0.5).siblings().stop().fadeTo(300, 1);
}, function () {
    $(this).stop().fadeTo(300, 1).siblings().stop().fadeTo(300, 1);
})
// 函数部分***************************************************************************************************
//视频停止函数
function stopVideo() {
    $('.full_video video')[0].pause();
    $('.full_video').css('display', 'none').siblings('.word').css('display', 'block').siblings('.cover').children('.mask').css('display', 'block');
    $('.border_box').css('display', 'block');
    $('.frame_down').css('display', 'block');
    $('.nav_close').fadeOut().siblings('.nav_open').fadeIn();
};

//设置上下键切换函数
function getUp() {
    if (n == 5) {
        $('.frame_down').hide().siblings('.frame_up').show();
        $('.share_box').stop().fadeIn();
    }
};

//对应的按钮样式显示函数
function getActive() {
    $('.page_btn span').eq(n).addClass('active').siblings().removeClass('active');
};
//bg背景图放大,words显示
function getBig(index) {
    // bg背景图效果
    $('.page').find('.bg').stop().css({
        'animation': ''
    });

    $('.page').find('.bg').eq(index - 1).stop().css({
        'animation': 'big 2s linear'
    });
    //words滑动显示
    $('.words').children('img').hide().removeClass('fadeInUp').siblings('.pub_words').hide().removeClass('fadeInUp');

    $('.page').find('.words').eq(index - 1).children('img').show().addClass('fadeInUp').siblings('.pub_words').show().addClass('fadeInUp');
    console.log(index - 1);

}