// element-----元素
// attr----任意属性的当前的值
// end----希望得到的属性的值
// json----一个对象——-多个属性以及多个目标值
// fn----传入一个函数在动画执行完之后立即执行 里面可以穿任何东西都会执行包括动画

//元素计算后的样式的值
function getStyle(element, attr) {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}



// 这里开始

function hua(element, json, fn) {
  //清理定时器
  clearInterval(element.time_id);

  element.time_id = setInterval(function () {

    var flag = true;//假设flag是true,全部到达目标

    //遍历对象拿到每一个键 arrt 然后在通过json【arrt】拿到每一个键的值
    for (var attr in json) {

      if (attr == 'opacity') {
        //判断当前的属性是不是opacity

        // 获取元素当前的透明度 然后放大100倍

        var start = getStyle(element, attr)*100;//因为透明度就是数字所以不需要转数字

        //当前透明度也放大100倍
        var end = json[attr]*100;
       
        var step = (end - start) / 10;
        
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        start = start + step;
        //最后除以100回复到小数
        element.style[attr] = start/100;
        
      } else if (attr == 'zIndex') {
        // 判断当前属性中是不是zindex
        //层级改变就是直接改变值
        element.style[attr] = json[attr]
      } else {
        // 正常属性
        // 获取元素当前的位置start不是开始位置而是当前currente位置我为了好理解

        var start = parseInt(getStyle(element, attr))//因为获得的可能有带单位，parseInt可以解析一个字符串并返回一个整数

        //当前属性对应的目标值  也就是要到达的那个值end
        var end = json[attr]
        // 移动的步数
        var step = (end - start) / 10;
        // 判断开始的位置是不是大于结束的位置如果是大于那么就是负的反方向移动
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        start = start + step;
        element.style[attr] = start + 'px';

      }

      //判断一下是否全部到达目标，有一个没有到就不会执行下面的
      if (start != end) {
        flag = false
      }
    }
    //清理定时器

    if (flag == true) {
      clearInterval(element.time_id)
      if (fn) {
        fn()
      }
    }




    //测试
    //  console.log('开始:'+start+'结束'+end+'步数'+step)   
  }, 20)
}

