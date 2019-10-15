//轮播图效果
var ary = [{
    'width': 300,
    'left': 100,
    'opacity': 0.6,
    'top': 50,
    'zIndex': 6
  },
  {
    'width': 400,
    'left': 150,
    'opacity': 0.8,
    'top': 150,
    'zIndex': 8
  },
  {
    'width': 600,
    'left': 400,
    'opacity': 1,
    'top': 270,
    'zIndex': 10
  },
  {
    'width': 400,
    'left': 850,
    'opacity': 0.8,
    'top': 150,
    'zIndex': 8
  },
  {
    'width': 300,
    'left': 1000,
    'opacity': 0.6,
    'top': 50,
    'zIndex': 6
  },
]

var list = document.querySelectorAll('.lun-box li');
var jian = document.querySelector('.jiantou');
var con = document.querySelector('.con');

window.onload = function () {
  setTimeout(function () {
    //定义一个变量
    var flag = true; //假设动画都完成了
    for (var i = 0; i < list.length; i++) {
      animate(list[i], ary[i]);
    }
    //鼠标进入大盒子则显示箭头图标
    con.onmouseover = function () {
      animate(jian, {
        'opacity': 1
      });
    }
    //鼠标离开事件
    con.onmouseout = function () {
      animate(jian, {
        'opacity': 0
      });
    }
    //点击右边按钮事件
    jian.lastElementChild.onclick = function () {

      if (flag) {
        flag = false;
        ary.push(ary.shift());
        for (var i = 0; i < list.length; i++) {
          animate(list[i], ary[i], function () {
            flag = true
          });
        }
      }
    }
    //点击左按钮事件
    jian.firstElementChild.onclick = function () {
      if (flag) {
        flag = false;
        ary.unshift(ary.pop());
        for (var i = 0; i < list.length; i++) {
          animate(list[i], ary[i], function () {
            flag = true
          });
        }
      }
    }
  }, 3000)

}
//上边切换TAP栏
var top_list = document.querySelectorAll('.top_list li');
for (var i = 0; i < top_list.length; i++) {
  top_list[i].onmouseover = function () {
    for (var j = 0; j < top_list.length; j++) {
      top_list[j].children[1].style.display = 'none';
    }
    this.children[1].style.display = 'block';
  }
  top_list[i].onmouseout = function () {
    this.children[1].style.display = 'none';
  }
}
//中心盒子的TAP栏
var li2 = document.querySelectorAll('.center-nav_left ul li');
var pub = document.querySelectorAll('.pub');
for (var i = 0; i < li2.length; i++) {
  li2[i].onclick = function () {
    for (var j = 0; j < li2.length; j++) {
      li2[j].className = '';
    }
    this.className = 'active1';


    for (var j = 0; j < pub.length; j++) {
      pub[j].style.display = 'none';
    }
    var num = this.dataset.hand;
    var nums = document.getElementById(num);
    nums.style.display = 'block';

  }
}
//点击最后更多按钮事件
var btn = document.querySelector('.cont-foot>input');

// console.log(pub[0]);
btn.onclick = function () {
  var num = pub[0].offsetHeight;
  // console.log(num);
  if (num < 750) {
    pub[0].style.height = 850 + 'px'
    btn.value = '收起';
  } else {
    pub[0].style.height = 700 + 'px'
    btn.value = '更多';
  }
}
var btn3 = document.querySelector('.cont-foot3>input')
btn3.onclick = function () {
  var num = pub[2].offsetHeight;
  // console.log(num);
  if (num < 750) {
    pub[2].style.height = 1800 + 'px';
    btn3.value = '收起';
  } else {
    pub[2].style.height = 700 + 'px'
    btn3.value = '更多';
  }
}
//小轮播图
var ul = document.querySelector('.my_lunbo ul');
var img = document.querySelector('.my_lunbo img')
var my_lunbo_son_son = document.querySelector('.my_lunbo_son_son');
var uop = document.getElementById('uop');

var ufo = document.getElementById('ufo');
//  console.log(ul)
//开启定时器
// var brn33 = document.querySelector('.my_lunbo input');
// animate( my_lunbo_son,{'left':-640})
// getdonghua( my_lunbo_son_son,0,-1600,10,20)
var num = 0
// brn33.onclick=function(){
//         if(num==6){
//             num=0;
//           my_lunbo_son_son.style.left =0;
//         }    
//         num++
//          getdonghua( my_lunbo_son_son,my_lunbo_son_son.offsetLeft,-num*(img.offsetWidth+12),10,20)
//           // console.log(my_lunbo_son_son.offsetLeft)
//           // console.log(uop.offsetLeft)
// }
var time_id = null;

time_id = setInterval(function () {
  if (num == 6) {
    num = 0;
    my_lunbo_son_son.style.left = 0;
  }
  num++
  //  getdonghua( my_lunbo_son_son,my_lunbo_son_son.offsetLeft,-num*(img.offsetWidth+12),1,70);
  animate2(my_lunbo_son_son, {
    'left': -num * (img.offsetWidth + 12)
  });

}, 1000)
//鼠标进入事件
my_lunbo_son_son.onmouseover = function () {
  clearInterval(time_id);

}
//鼠标离开事件
my_lunbo_son_son.onmouseout = function () {
  time_id = setInterval(function () {

    if (num == 6) {
      num = 0;
      my_lunbo_son_son.style.left = 0;
    }
    num++
    // getdonghua( my_lunbo_son_son,my_lunbo_son_son.offsetLeft,-num*(img.offsetWidth+12),20,100);
    animate2(my_lunbo_son_son, {
      'left': -num * (img.offsetWidth + 12)
    });
  }, 1000)
}
















//右侧固定定位盒子动画
var close = document.querySelector('.fix-top span');
var fixfoot = document.querySelector('.fix-foot');
var fixright = document.querySelector('.fix_right');
var fixfoot2 = document.querySelector('.fix-foot_2');
var fixfoot1 = document.querySelector('.fix-foot_1')
close.onclick = function () {
  animate(fixfoot2, {
    'height': 0
  }, function () {
    animate(fixfoot1, {
      'height': 0
    }, function () {
      animate(fixfoot, {
        'height': 0
      }, function () {
        fixright.style.display = 'none';
      })
    })
  })
}
//换一换

var btn2 = document.querySelector('.change_title span:nth-child(3)');
var changecon = document.querySelector('.changecon');
var change_tu =document.querySelector('.change_tu');
var changefloor=document.querySelectorAll('.change-floor');

    $('.change_title span:nth-child(3)').click(function(){
             var aaa =$('.changecon').children('.change_tu')
           var bbb = aaa.filter('.show');
          
           var ccc =  bbb.next();
           console.log(bbb);
            if(ccc.length==0){
          ccc=$(aaa).eq(0);
            }
              aaa.removeClass('show').children().removeClass('changeactive');
              $(ccc).addClass('show').children().addClass('changeactive');
           
    })
     
 










  // var index = 0;
  // btn2.onclick = function () {
  //         //  
  //         // //  change_tu[0].style.display='none';
  //         //  setInterval(function(){
                  
  //         //  })













  //         // for(var i=0;i<6;i++){
  //         //     change_tu[0].children[i].className=' change-floor changeactive';
  //         //    }
  //   for (var i = 0; i < changecon.children.length; i++) {
  //     changecon.children[i].style.display = 'none';
  //   }
  //   index++;
  //   if (index == 3) {
  //     index = 0;
  //     changecon.children[index].style.display = 'block';
     
  //   } else {
  //     changecon.children[index].style.display = 'block';
  //   }
  
       

  // }