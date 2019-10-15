// 鼠标滚动事件
$(function () {
    // 先调用函数判断鼠标滚动距离是否出现电梯导航
    scroll();
    // 封装成函数
    function scroll() {
        // 页面滚动后一段距离出现电梯导航
        // 先获取滚动的距离
        var top_val = $(document).scrollTop();
        // 如果滚动距离大于元素到顶部的距离就让电梯导航显示
        if (top_val > 5) {
            // 显示电梯导航
            $('.bots').fadeIn();
        } else {
            $('.bots').fadeOut();
        }
    }

    // 注册window的滚动事件
    $(window).scroll(function () {

        // 调用滚动出现电梯导航
        scroll();
        // 获取滚动的距离
        var scroll_length = $(document).scrollTop();
        // 获取每个盒子到顶部的距离
        $('.banner>div').each(function (index, elm) {
            // 和每一个盒子到顶部的距离比较  
            if (scroll_length >= $(elm).offset().top) {
                //  获取到盒子的索引值 并且赋值给li 并且对应的li背景颜色变化 
                $('.bots li').eq(index).addClass('current').siblings().removeClass('current');
            }

        })
    })

    // 点击电梯导航页面找到相对应的页面

    $('.bots li').click(function () {

        // 找到对应的盒子 先获取到li的index
        var index = $(this).index();
        // 获取这些盒子距离顶部的距离
        var box_top = $('.banner>div').eq(index).offset().top + 5 + 'px'
        $('body,html').animate({
            scrollTop: box_top
        })
        $(this).addClass('current').siblings().removeClass('current');

    })
    // 回到顶部
    $('.return_top span').click(function () {
        // 将滚出的距离设为0;
        $('body,html').animate({
            scrollTop: 0
        })
    })
    // 开关灯换背景颜色
    var flag = false;
    $('.on_off').click(function () {
        if (flag) {
            $(this).css('backgroundPosition', '0 0px');
            $('.top_anim').addClass('animate');
            $(this).siblings('.banner').children('.first_photo').removeClass('first_photo_changed');
            $(this).siblings('.banner').children('.second_photo').removeClass('second_photo_changed');
            $(this).siblings('.banner').children('.three_photo').removeClass('three_photo_changed');
            $(this).siblings('.banner').children('.four_photo').removeClass('four_photo_changed');
            flag = false;
        } else {
            $(this).css('backgroundPosition', '0 -80px');
            $('.top_anim').addClass('animate');
            $(this).siblings('.banner').children('.first_photo').addClass('first_photo_changed');
            $(this).siblings('.banner').children('.second_photo').addClass('second_photo_changed');
            $(this).siblings('.banner').children('.three_photo').addClass('three_photo_changed');
            $(this).siblings('.banner').children('.four_photo').addClass('four_photo_changed');
            flag = true;
        }

    })
    // 点击第一页按钮切换下一页
    $('.first_photo .mouse-big').click(function () {
        $('body,html').animate({
            scrollTop: 630
        })
        $('.div1').addClass('bounceInLeft');
        $('.div2').addClass('bounceInLeft');
        $('.div3').addClass('bounceInLeft');
        $('.div4').addClass('bounceInLeft');
        $('.div5').addClass('bounceInRight');
        $('.div6').addClass('bounceInRight');
        $('.div7').addClass('bounceInRight');
    })
    // 点击第二页按钮切换下一页
    $('.second_photo .mouse-big').click(function () {
        $('body,html').animate({
            scrollTop: 1260
        })
        $('.three_box').addClass('swing');
        $('.three_left').addClass('bounceInLeft');
        $('.three_right').addClass('bounceInRight');
    })
    // 点击第三页按钮切换下一页
    $('.three_photo .mouse-big').click(function () {
        $('body,html').animate({
            scrollTop: 1890
        })
        $('.four_box').addClass('wobble');
        $('video').addClass('slideInLeft');
        $('.text').addClass('slideInRight');
    })

    // 添加c3动画 设置开始动画

    $('.top_anim').addClass('animate');
    //   背景图大小位置改变
    $('.first_photo').animate({
        backgroundPosition: '0',
        backgroundSize: '100%'
    }, 800, function () {
        $('.mouse-big').fadeIn(1000);
        $('.top_anim').removeClass('animate');
        // .addClass('top_anim')
    })
    //   搜索框弹出事件 
    $('.search').animate({
        bottom: '200px'
    }, 800)
    $('.hot_search').animate({
        bottom: '170px'
    }, 800)
    //  第二页动画
    $(window).scroll(function () {
        // 获取滚出距离
        var scroll_top = $(document).scrollTop();
        if (scroll_top > 300) {
            // 第二页动画效果显示
            $('.div1').addClass('bounceInLeft');
            $('.div2').addClass('bounceInLeft');
            $('.div3').addClass('bounceInLeft');
            $('.div4').addClass('bounceInLeft');
            $('.div5').addClass('bounceInRight');
            $('.div6').addClass('bounceInRight');
            $('.div7').addClass('bounceInRight');
            $('.item-detail').addClass('bounceInDown');
        }
        if(scroll_top > 900){
            // 第三页动画显示
            $('.three_box').addClass('swing');
            $('.three_left').addClass('bounceInLeft');
            $('.three_right').addClass('bounceInRight');
        }
        if(scroll_top > 1500){
            // 第四张动画显示
            $('.four_box').addClass('wobble');
            $('.video').addClass('slideInLeft');
            $('.text').addClass('slideInRight');
        }
    })

    // 视频播放

    $('.video_btn').click(function(){
       $(this).parent().removeClass('zezhao');
    })

})