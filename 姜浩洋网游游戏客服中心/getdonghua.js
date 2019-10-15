     
  var ids = null;
   function getdonghua(element,begin,finish,step,time) {
    //获取当前盒子位置
    begin =element.offsetLeft;
 //清除 里面所有定时器
 if (element.ids) {
     clearInterval(element.ids);
    element.ids = null;
 }
 //通过定时器让盒子移动
   element.ids = setInterval(function () {
         if(begin>finish){
             step =-Math.abs(step);
            // step=-step;
         }
     //判断走到终点时候让盒子停止，取消定时器
     if (Math.abs(begin - finish) <= Math.abs(step)){
          begin=finish;
         clearInterval(element.ids);
        
     } else {
         begin += step;
     }
     element.style.left = begin + 'px';
 }, time)
}
