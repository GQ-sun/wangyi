$(function () {
	showDiv();

	function showDiv() {
		// 页面滚动出去一段距离，让电梯导航显示
		// 获取卷起距离
		var topVal = $(document).scrollTop();

		// 判断
		if (topVal >= $('.titd2').offset().top) {
			// 让盒子显示
			$('.fh').fadeIn();
		} else {
			$('.fh').fadeOut();
		}
	}

	// 添加滚动事件，加给window
	$(window).scroll(function () {
		showDiv();
	});

	//返回顶部
	$(window).scroll(function () {

		console.log($(window).scrollTop());

	});
	$("input").click(function () {
		$('body,html').animate({
			scrollTop: 0
		});

	});

	// 小箭头下滑
	$(".jiantou").click(function () {
		$('body,html').animate({
			scrollTop: 573
		}, 1000);
	});
});