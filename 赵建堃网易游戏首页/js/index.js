// var yin=0;
// //左侧按钮
// $('.left_a').click(function(){
//     if(yin<=$('.banner_lun_ul').children('li').length-2){
//         yin++;
//     }else{
//         yin=0;
//     }

//  $('.banner_lun_ul').children('li').eq(yin)
//  .fadeTo(600,1).siblings().fadeTo(600,0);
// })

// // 右侧按钮
// $('.right_a').click(function(){
//     if(yin==0){
//         yin=4
//     }else{
//         yin--;
//     }


//     $('.banner_lun_ul').children('li').eq(yin)
//     .fadeTo(600,1).siblings().fadeTo(600,0);
// })

//////////////////////////////////////////////////////
// 适配shishi
//获取文档的宽度
//  document.documentElement.clientWidth

document.querySelector('html').style.fontSize = document.documentElement.clientWidth / 20 + 'px';

window.addEventListener('resize', function () {
   if (document.documentElement.clientWidth < 1000) {
      document.querySelector('html').style.fontSize1 = 1000 / 20 + 'px'
   } else {
      document.querySelector('html').style.fontSize = document.documentElement.clientWidth / 20 + 'px';
   }
})


//杜晓天
// {
/* <script>
     // rem适配
     (function () {
         document.documentElement.style.fontSize = document.documentElement.clientWidth / 15 + 'px';
         window.addEventListener('resize', function () {
             if (document.documentElement.clientWidth <= 1035) {
                 document.documentElement.style.fontSize = 1035 / 15 + 'px';
             } else {
                 document.documentElement.style.fontSize = document.documentElement.clientWidth / 15 +
                     'px';
             }
         });
     })();
 </script> */
// }


// 我的版本
var banner_lun_ul_lis = document.querySelectorAll('.banner_lun_ul li')

var left_a = document.querySelector('.left_a');
var right_a = document.querySelector('.right_a')
var yin = 0;

right_a.onclick = function () {

   for (var i = 0; i < banner_lun_ul_lis.length; i++) {
      hua(banner_lun_ul_lis[yin], { 'opacity': 0 })
   }
   if (yin <= banner_lun_ul_lis.length - 2) {
      yin++;
   } else {
      yin = 0;
   }
   hua(banner_lun_ul_lis[yin], { 'opacity': 1 })

   ott();
}

left_a.onclick = function () {

   for (var i = 0; i < banner_lun_ul_lis.length; i++) {
      hua(banner_lun_ul_lis[yin], { 'opacity': 0 })
   }
   if (yin == 0) {
      yin = 4;
   } else {
      yin--;
   }
   hua(banner_lun_ul_lis[yin], { 'opacity': 1 });
   ott();
}


//小圆点
var banner_dots = document.querySelectorAll('.banner_dot span');

for (var i = 0; i < banner_dots.length; i++) {

   banner_dots[i].setAttribute('y_id', i)

   banner_dots[i].onclick = function () {

      for (var j = 0; j < banner_dots.length; j++) {
         banner_dots[j].classList.remove('dot_move')
      }

      this.classList.add('dot_move')

      yin = this.getAttribute('y_id')

      for (var i = 0; i < banner_lun_ul_lis.length; i++) {
         hua(banner_lun_ul_lis[i], { 'opacity': 0 })
      }
      var id = this.getAttribute('y_id');

      hua(banner_lun_ul_lis[id], { 'opacity': 1 })
   }
}


//小圆点跟着移动
function ott() {
   for (var j = 0; j < banner_dots.length; j++) {
      banner_dots[j].classList.remove('dot_move')
   }

   banner_dots[yin].classList.add('dot_move')
}


//轮播图自动播放
var btn_right = document.querySelector('.btn_right')

var btn_left = document.querySelector('.btn_left')


var time_id = null;

time_id = setInterval(function () {
   right_a.onclick();
}, 3000)


right_a.onmouseenter = function () {
   btn_right.style.display = 'block';
   clearInterval(time_id);
 
}
left_a.onmouseenter = function () {
   btn_left.style.display = 'block';
   clearInterval(time_id);
  
}
right_a.onmouseleave = function () {
   btn_right.style.display = ''
   time_id = setInterval(function () {
      right_a.onclick();
   }, 3000)
}
left_a.onmouseleave = function () {
   btn_left.style.display = ''
   time_id = setInterval(function () {
      right_a.onclick();
   }, 3000)
}
// 导航区域右侧游戏列表盒子

var cover = document.querySelector('.cover')
var nav_right = document.querySelector('.nav_right');
var nav_play = document.querySelector('.nav_play')
nav_right.addEventListener('click', function () {
   hua(nav_hei, { 'zIndex': 100 }, function () {
      hua(nav_right, { 'zIndex': 1 })
   })
   hua(nav_play, { 'height': 961 })


})

var nav_hei = document.querySelector('.nav_hei')
nav_hei.addEventListener('click', function () {
   hua(nav_right, { 'zIndex': 100 }, function () {
      hua(nav_hei, { 'zIndex': 1 })
   })

   hua(nav_play, { 'height': 0 })
})

// 底部广告区域设置切换
var left_ad1 = document.querySelectorAll('.left_ad1')
var foot_mid_img = document.querySelectorAll('.foot_mid img')
for (var i = 0; i < left_ad1.length; i++) {
   left_ad1[i].setAttribute('tong', i)
   left_ad1[i].addEventListener('click', function () {
      for (var i = 0; i < left_ad1.length; i++) {
         left_ad1[i].classList.remove('bg')

      }
      this.classList.add('bg')
      var imgid = this.getAttribute('tong')
      for (var j = 0; j < foot_mid_img.length; j++) {
         foot_mid_img[j].style.display = 'none'
      }
      foot_mid_img[imgid].style.display = 'block'
   })
}

//左侧小盒子轮播
var btn_left_box = document.querySelectorAll('.btn_left_box')
var yin2 = 0
var txt_box = document.querySelectorAll('.txt_box')
var btn_right_box = document.querySelectorAll('.btn_right_box')
var txt_box2 = document.querySelectorAll('.txt_box2')
setInterval(function () {
   for (var k = 0; k < btn_left_box.length; k++) {
      btn_left_box[k].style.opacity = '0';
      txt_box[k].classList.remove('onee')
   }
   if (yin2 > btn_left_box.length - 3) {
      yin2 = 0
   } else {
      yin2++;
   }
   btn_left_box[yin2 + 1].style.opacity = '1'
   txt_box[yin2 + 1].classList.add('onee')
}, 3000)


///////////////////////
setInterval(function () {
   for (var k = 0; k < btn_right_box.length; k++) {
      btn_right_box[k].style.opacity = '0';
      txt_box2[k].classList.remove('two')
   }
   if (yin2 > btn_right_box.length - 3) {
      yin2 = 0
   } else {
      yin2++;
   }
   btn_right_box[yin2 + 1].style.opacity = '1'
   txt_box2[yin2 + 1].classList.add('two')
}, 3000)

//下面动态添加元素
var huan = document.querySelector('.huan')
var allad=document.querySelector('.allad')
var y=0;

 huan.onclick=function(){
    for(var i=0;i<allad.children.length;i++){
      allad.children[i].style.display='none'
      allad.children[i].style.opacity='0'
    }

   if(y>=1){
      y=0
   }else{
      y++;
   }
   allad.children[y].style.display='block'
    
    hua(  allad.children[y],{
         'opacity':1
   }) 
 }


 ////////////是鼠标进入下拉
 var hh=null;
var alladimg=document.querySelectorAll('.alladimg')
var ma=document.querySelectorAll('.ma')

 for(var i=0;i<alladimg.length;i++){
   alladimg[i].setAttribute('hh',i)
   alladimg[i].onmouseenter=function(){
      hh=this.getAttribute('hh')
       
       hua(ma[hh].children[0],{
          
         'top':123
       })
   }
   ////////////////
   alladimg[i].onmouseleave=function(){
      hua(ma[hh].children[0],{
          
         'top':-190
       })
   }
 }


var fang=document.querySelector('.fang')
var guan=document.querySelector('.guan')
var jietu2=document.querySelector('.jietu2').children[0];

fang.onclick=function(){
   guan.style.zIndex='10';
   fang.style.zIndex='9';
   hua(jietu2,{
     'height':0
   })
}
guan.onclick=function(){
   fang.style.zIndex='10';
   guan.style.zIndex='9';
   hua(jietu2,{
      'height':347
    })
}
var bott=document.querySelector('.bott')


window.onscroll=function(){

  if(this.scrollY>1300) {
    hua(bott,{
       'opacity':1
    })
  }else{
   hua(bott,{
      'opacity':0
   })
  }
}  

bott.onclick=function(){
   window.scrollTo(0,0)
}
