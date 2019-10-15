// 封装函数
function search(btn, btn_p, list, ul, span) {
    btn.onclick = function () {
        if (list.style.display == 'block') {
            list.style.display = 'none';
            span.classList.remove('rotate1');
        } else {
            list.style.display = 'block';
            span.classList.add('rotate1');
        }
    }
    ul.onclick = function (e) {
        list.style.display = 'none';
        span.classList.remove('rotate1');

        // 委托事件选择ul里对应的li标签
        if (e.target.nodeName === "LI") {
            // 将li的文本信息赋值给p标签
            btn_p.innerText = e.target.innerText;
        }
    }
}
// 鼠标点击城市按钮
var btn1 = document.querySelector('.search .btn1');
var btn1_p = document.querySelector('.search .btn1 p')
var list1 = document.querySelector('.search .list1');
var ul1 = document.querySelector('.search .list1 ul');
var span1 = document.querySelector('.search .btn1 span');
// 点击btn1 出现盒子
search(btn1, btn1_p, list1, ul1, span1);

// 鼠标点击职位按钮、
var btn2 = document.querySelector('.search .btn2');
var btn2_p = document.querySelector('.search .btn2 p')
var list2 = document.querySelector('.search .list2');
var ul2 = document.querySelector('.search .list2 ul');
var span2 = document.querySelector('.search .btn2 span');
// 点击btn1 出现盒子
search(btn2, btn2_p, list2, ul2, span2);


// 封装滚动事件函数
function scroll_text(demo, demo1, demo2, speed) {
    demo2.innerHTML = demo1.innerHTML;
    function Marquee() {
        if (demo.scrollTop >= demo1.offsetHeight) {
            demo.scrollTop = 0;
        }
        else {
            demo.scrollTop++;
        }
    }
    var MyMar = setInterval(Marquee, speed);

    demo.onmouseover = function () {
        clearInterval(MyMar);
    }
    demo.onmouseout = function () {
        MyMar = setInterval(Marquee, speed);
    }
}
// 左边文字滚动事件
var speed = 50;
// 向上滚动
var scroll_left = document.getElementById("scroll_left");
var demo2 = document.getElementById("demo2");
var left_scroll_demo1 = document.getElementById("left_scroll_demo1");

scroll_text(scroll_left, left_scroll_demo1, left_scroll_demo2, speed);

// 右边
var speed = 50;
// 向上滚动
var scroll_right = document.getElementById("scroll_right");
var right_scroll_demo2 = document.getElementById("right_scroll_demo2");
var right_scroll_demo1 = document.getElementById("right_scroll_demo1");

scroll_text(scroll_right, right_scroll_demo1, right_scroll_demo2, speed);





