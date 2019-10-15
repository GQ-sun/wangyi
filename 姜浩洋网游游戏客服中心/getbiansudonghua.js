//变速动画的封装//
//  function animate(element,target) {
//     //清理定时器
//     clearInterval(element.time_id);
//     //创建定时器
//     element.time_id=setInterval(function(){
//         //获取div当前位置
//         var current = element.offsetLeft;
//         var step =10;
//         var  step=(target-current)/10;
//         step=step>0?Math.ceil(step):Math.floor(step);
//         //每次移动后的距离
//         current+=step;
//         element.style.left =current+'px';
//         //判断当前移动后的位置是否到达目标位置
//         if(current==target){
//             clearInterval(element.time_id);
//         }
//          console.log('目标位置'+target+'当前位置'+current+'每次移动步数'+step);
//     },20)
// }
//最终版本
// 增加任意属性 //
//arry  是css任意的属性
function getStyle(element, arry) {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[arry] : element.currentStyle[arry];
};
//增加回调函数//增加透明度和层级
function animate(element, json, fn) {
  //清理定时器
  clearInterval(element.time_id);
  //创建定时器
  element.time_id = setInterval(function () {
    var flag = true //默认里面所有的属性都到达了位置
    for (var arry in json) {
      //获取div当前位置
      //判断arry 中是否存在opacity属性
      if (arry == 'opacity') {
        //获取当前元素透明度乘以100
        var current = getStyle(element, arry) * 100;
        //目标也乘以100
        var target = json[arry] * 100;
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[arry] = current / 100;
      } else if (arry == 'zIndex') {
        element.style[arry] = json[arry];
      } else {
        var current = parseInt(getStyle(element, arry));
        var target = json[arry];
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //每次移动后的距离
        current += step;
        element.style[arry] = current + 'px';
      }
      //判断当前移动后的位置是否到达目标位置
      if (current != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(element.time_id);
      if (fn) {
        fn();
      }
    }
    //     console.log('目标位置'+target+'当前位置'+current+'每次移动步数'+step);
  }, 20)
}

function getStyle(element, arry) {
  return window.getComputedStyle ? window.getComputedStyle(element, null)[arry] : element.currentStyle[arry];
};
//增加回调函数//增加透明度和层级
function animate2(element, json, fn) {
  //清理定时器
  clearInterval(element.time_id);
  //创建定时器
  element.time_id = setInterval(function () {
    var flag = true //默认里面所有的属性都到达了位置
    for (var arry in json) {
      //获取div当前位置
      //判断arry 中是否存在opacity属性
      if (arry == 'opacity') {
        //获取当前元素透明度乘以100
        var current = getStyle(element, arry) * 100;
        //目标也乘以100
        var target = json[arry] * 100;
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[arry] = current / 100;
      } else if (arry == 'zIndex') {
        element.style[arry] = json[arry];
      } else {
        var current = parseInt(getStyle(element, arry));
        var target = json[arry];
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //每次移动后的距离
        current += step;
        element.style[arry] = current + 'px';
      }
      //判断当前移动后的位置是否到达目标位置
      if (current != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(element.time_id);
      if (fn) {
        fn();
      }
    }
    //     console.log('目标位置'+target+'当前位置'+current+'每次移动步数'+step);
  }, 30)
}