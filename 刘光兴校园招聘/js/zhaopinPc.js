$(function() {
	//投递简历特效
	$('.toudi').hover(function() {
		$('.toudi em').show().addClass('em_scale');
		$('.toudi em').each(function(i, elm) {
			$(elm).css({
				'animation-delay': Math.sqrt(i / 10) + 's'
			});
		});
		// 最后边框变红
		setTimeout(function() {
			$('.toudi em').removeClass('em_scale').hide();
		}, 2000);
		$('.toudi').addClass('toudi_scale');
		// $('em').removeClass('em_scale').hide();
	}, function() {
		$('.toudi').removeClass('toudi_scale');

		// $('em').each(function(i, elm) {
		// 	$(elm).removeAttr('anim');
		// });
	});

	//第二个投递按钮页面效果
	//function changbig(){
	//	$('.toudi_two em').each(function(i, elm) {
	//		$(elm).css({
	//			'animation-delay': Math.sqrt((4-i) / 10) + 's'
	//		});
	//	});
	//}
	//changbig();

	//第二个投递按钮自定义效果
	$('.toudi_two').hover(function() {
		$(this).removeClass('rotateInDownLeft').addClass('heartBeat');
	}, function() {
		$(this).removeClass('heartBeat');
	});
	//第一个淡入淡出轮播图的左右按钮切换按钮背景图事件
	$('.l_circle').hover(function() {
		// $(this).stop().animate({
		//     width:65,
		//     height:64
		// },1000).css('background','url(img/prev-btn-h_f0b7a08.png)');
		$(this).fadeIn('10000', 'linear', function() {
			$(this).css('background', 'url(img/prev-btn-h_f0b7a08.png)');
		});

	}, function() {
		// $(this).stop().animate({
		//     width:66,
		//     height:66
		// },1000).css('background','url(img/prev-btn_bffde15.png)');
		$(this).fadeIn('10000', 'linear', function() {
			$(this).css('background', 'url(img/prev-btn_bffde15.png)');
		});

	});
	$('.r_circle').hover(function() {
		// $(this).stop().animate({
		//     width:65,
		//     height:64
		// },1000).css('background','url(img/prev-btn-h_f0b7a08.png)');
		$(this).fadeIn('10000', 'linear', function() {
			$(this).css('background', 'url(img/next-btn-h_f5103c6.png)');
		});

	}, function() {
		// $(this).stop().animate({
		//     width:66,
		//     height:66
		// },1000).css('background','url(img/prev-btn_bffde15.png)');
		$(this).fadeIn('10000', 'linear', function() {
			$(this).css('background', 'url(img/next-btn_fe7bb9d.png)');
		});

	});
	//第一个淡入淡出轮播图的左右按钮切点击事件
	$('.l_circle').click(function() {
		$('.banner_fade img:first-of-type').stop().fadeToggle();
	});
	$('.r_circle').click(function() {
		$('.banner_fade img:first-of-type').stop().fadeToggle();
	});

	//第二个轮播图小圆点点击事件
	$('.banner2_Ul li').click(function() {
		//  	console.log($(this));
		$(this).addClass('whiteLi').siblings().removeClass('whiteLi');
		banner2Btn($(this).index());
	});
	//var bgArr=['img/bg_1_1_c9d7ab1.jpg','img/bg_1_2_75417ef.jpg','img/bg_1_3_11d254a.jpg','img/bg_1_4_ebb42f3.jpg',
	//'img/bg_1_5_5512aff.jpg','img/bg_1_6_ee38b1d.jpg'
	//]
	function banner2Btn(a) {
		//		$('.banner_fadeTwo').css('background','url('+bgArr[a]+') no-repeat 0 0');
		$('.bannerTwo_img').eq(a).stop().fadeIn().siblings('img').stop().fadeOut();
		$('.peopleIntroductionTwo').eq(a).stop().fadeIn().siblings().stop().fadeOut();
	}
	banner2Btn(0);

	//第三个轮播图小圆点点击事件
	$('.banner3_Ul li').click(function() {
		banner3Index = $(this).index();
		$(this).addClass('blackLi').siblings().removeClass('blackLi');
		banner3Btn($(this).index());
	});

	function banner3Btn(a) {
		$('.peopleIntroductionThree').eq(a).stop().fadeIn().siblings().stop().fadeOut();
	}
	banner3Btn(0);

	//鼠标形按钮动态事件
	$('.scoll_circle').hover(function() {
		$(this).children('.scoll_circleCenter').animate({
			backgroundPositionY: "-100px"
		}, 400);
		$(this).css({
			'background': 'white'
		}).animate({
			top: '10px'
		}, 400);
		//console.log($(this).index());
	}, function() {
		$(this).children('.scoll_circleCenter').animate({
			backgroundPositionY: "0px"
		}, 400);
		$(this).css({
			'background': 'brown'
		}).animate({
			top: '0'
		}, 400);
	});
	// 鼠标形按钮点击事件-------------------------------------------------------------------
//	console.log($('.scoll_circle'));
	$('.scoll_circle').click(function() {
//		console.dir(this);
		//$(this).index()基于this同级所有元素的下标
		//$(this).index()返回的是该节点在兄弟节点中排行第几，从0开始计数
		//注意是同一父级元素的兄弟节点！！！不能跨级！！！
//		console.log($('.scoll_circle').index(this));
//		console.log($('.scoll_circle').eq($('.scoll_circle').index(this)));
		//mouseBtn($(this));
		$('body,html').animate({
			'scrollTop': $('.banner_fadeBox').eq($('.scoll_circle').index(this) + 1).offset().top
		}, 500);
	});

	//var scollArr=document.querySelectorAll('.scoll_circle');
	//for (var i=0;i<scollArr.length;i++) {
	//	scollArr[i].onclick=function() {
	//			console.log($(this).index());
	//			mouseBtn($(this));
	//		}
	//}

	//	$('#scollOne').click(function() {
	//		$('body,html').animate({
	//			'scrollTop': $('.banner_fadeBox').eq(1).offset().top
	//		});
	//	});
	//	$('#scollTwo').click(function() {
	//		$('body,html').animate({
	//			'scrollTop': $('.banner_fadeBox').eq(2).offset().top
	//		});
	//	});
	//	$('#scollThree').click(function() {
	//		$('body,html').animate({
	//			'scrollTop': $('.banner_fadeBox').eq(3).offset().top
	//		});
	//	});
	//	$('.scoll_circle').each(function(i ,elm) {
	//		console.log(i);
	//	});

	// 点击翻页事件
	function mouseBtn(a) {
		$('body,html').animate({
			'scrollTop': $('.banner_fadeBox').eq(a.index()).offset().top
		}, 500);
	}

	//页面右侧固定li翻页按钮事件
	$('.left_liBtn').find('li').click(function() {
		circleRingtBtn($(this));
	});
	//鼠标滚动事件
	$(window).scroll(function() {
		//鼠标滚动右侧li跟着动
		$('.banner_fadeBox').each(function(i, elm) {
			if($(document).scrollTop() > $(elm).offset().top - 71) {
				//			console.log($('.left_liBtn').find('li').eq(i));
				circleRingtBtnScoll($('.left_liBtn').find('li').eq(i));
			}
		});
		// 左侧悬浮宣讲会报名入口
		$('.fixBigBox').stop().animate({
			'top': $(document).scrollTop() + 200 + 'px'
		}, 'fast', 'linear');
	});

	//这个事件在标准下和IE下是有区别的。
	//firefox是按标准实现的,事件名为"DOMMouseScroll ",IE下采用的则是"mousewheel "。
	//当然一行代码就解决了兼容问题 
	//var mousewheel = document.all?"mousewheel":"DOMMouseScroll";
	//事件属性，IE是event.wheelDelta，Firefox是event.detail 属性的方向值也不一样，IE向上滚 > 0，Firefox向下滚 > 0。

	//$(document).on('mousewheel DOMMouseScroll',function(e){
	//var delta=(e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta>0?1:-1))||
	//(e.originalEvent.detail && (e.originalEvent.detail>0?-1:1));
	//	if (delta>0) {
	//		console.log('向下滚');
	//	} else{
	//		console.log('向上滚');
	//	}
	//});

	function circleRingtBtnScoll(a) {
		$('.left_liBtn').find('li').children('em').hide();
		a.children('em').show();
		a.addClass('redLi').siblings().removeClass('redLi');
		sessionStorage.setItem('elmIndex', a.index());
	}

	function circleRingtBtn(a) {
		//		console.log(a.index());
		$('.left_liBtn').find('li').children('em').hide();
		a.children('em').show();
		a.addClass('redLi').siblings().removeClass('redLi');
		mouseBtn(a);
		sessionStorage.setItem('elmIndex', a.index());
	}
	circleRingtBtn($('.left_liBtn').find('li').eq(sessionStorage.getItem('elmIndex')));

	//第四个轮播图小圆点特效
	//	$('.banner4_btn').hover(function() {
	//		$(this).addClass('zoomInDown');
	//	}, function() {
	//		$(this).removeClass('zoomInDown');
	//	});

	//视频左右按钮特效
	$('.left_vedioBtn,.right_vedioBtn').hover(function() {
		$(this).addClass('shake');
	}, function() {
		$(this).removeClass('shake');
	});

	//返回顶部
	$('.goToTop a').click(function() {
		$('body,html').animate({
			'scrollTop': 0
		});
		return false;
	});
});

//第一个淡入淡出轮播图的轮播定时事件
var fristBannerid = null;

function intervalFristBanner() {
	if(fristBannerid != null) {
		fristBannerid = null;
	}
	fristBannerid = setInterval(function() {
		$('.l_circle').click();
	}, 8000);
}
intervalFristBanner();
//第三个淡入淡出轮播图的轮播定时事件
var banner3Id = null,
	banner3Index, index;

function banner3BtnF() {
	if(!banner3Id) {
		banner3Id = null
	}
	if(!banner3Index) {
		banner3Index = 0;
	}
	banner3Id = setInterval(function() {
		$('.banner3_Ul li').eq(banner3Index).click();
		banner3Index = (banner3Index + 1) % 3;
	}, 3000);
}
banner3BtnF();

// 左侧悬浮宣讲会报名入口上下浮动特效
// var fixBoxFloatId=null;
// function fixBoxFloat(){
// 	if(!fixBoxFloatId) {
// 		fixBoxFloatId = null
// 	}
// 	fixBoxFloatId=setInterval(function(){
// 		$('.fixBox').css({
// 			'animation': 'fixBox 3s linear infinite'
// 		});
// 	},1000)
// }
// fixBoxFloat();