$(function () {
        // 当鼠标进入到 游戏全目录 时显示下拉列表
        $('.list_title').hover(function () {
            $('.xiala').stop().slideDown();
        }, function () {
            $('.xiala').stop().slideUp(500);
        });
        // 鼠标移动到下拉列表上
        $('.xiala').hover(function () {
            $(this).stop().show();
        }, function () {
            $('.xiala').stop().slideUp();
        })

        // 鼠标移动到 头部图片上
        $('.nav_list').hover(function () {
            $(this).children('img').stop().hide();
            $('.ziliao').stop().show();
        }, function () {
            $(this).children('img').stop().show();
            $('.ziliao').stop().hide();
        })
        // 定时器
        setInterval(function () {
            $('.cz1').slideToggle();
            $('.cz').mouseover(function () {
                $('.cz1').show();
            })
        }, 1000);



        // 鼠标滚动事件
          
        $(window).scroll(function () {
            var top =$(document).scrollTop();
            // console.log(top)
            if(top>0){
                $('.content').hide(); 
               $('.content2').fadeIn();
               
            }else{
                $('.content').fadeIn(); 
                $('.content2').hide();
            }
        })


     // 手风琴
        $('.content2 .left li ').click(function(){
            var index=  $(this).index();
           
            $('.zhanshi div').eq(index).show().siblings().hide();
            $('.juqing div').eq(index).show().siblings().hide();
            $('.ziyang p').eq(index).show().siblings().hide();
            $(this).animate({
                width:201,
                height: 1080
            }).siblings().animate({
                width:68,
                height: 1080
            }).children().siblings('img').hide();
            $(this).children().siblings('img').show();
        })

        $('.left').animate(function(){
            
        })
     
    }
)
