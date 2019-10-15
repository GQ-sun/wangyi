getColor();

//鼠标进入效果
$('.wy_game .content li').mouseenter(function () {
    $(this).find('p').addClass('instyle').siblings('li').removeClass('instyle');
    // $('this').css('color','#e60012').siblings().css('color','')
})
//鼠标离开以后
$('.wy_game .content li').mouseout(function () {
    $(this).find('p').removeClass('instyle');
})

// 左边li点击效果
$('.wy_game .content ul li').click(function () {
    var index = $(this).index();
    console.log(index);
    // 改变字体颜色
    // if (index % 2 == 1) {
    //     $('li').find('p').addClass('li_out1');
    // } else {
    //     $('li').find('p').removeClass('li_out1');
    // }

    //点击页面平滑滚动
    $('html,body').animate({
        scrollTop: $('.wangyi>div').eq(index).offset().top


    }, function () {

        //改变当前li样式
        $(this).addClass('pitch_on').siblings().removeClass('pitch_on');

    });
})

//页面滚动li显示效果
$(window).scroll(function () {

    getColor();
})

//封装一个关于左边li样式的效果函数
function getColor() {
    var n = $(document).scrollTop();
    $('.wangyi>div').each(function (i, elm) {
        if (n >= $(elm).offset().top) {
            if (i % 2 == 1) {
                $('.wy_game .content ul li').eq(i).addClass('pitch_on').siblings('li').removeClass('pitch_on').css('color', '#fff');
            } else {
                $('.wy_game .content ul li').eq(i).css('color', '').addClass('pitch_on').siblings('li').removeClass('pitch_on').css('color', '');

            }
        }
    })
}


//点击箭头下滑效果
$('.down').click(function () {
    $('html,body').animate({
        scrollTop: $(this).parents('.public').offset().top
    })
})

//区别小图标的颜色
$('.down').each(function (i, elm) {
    if (i % 2 == 1) {
        $(this).css('background', '#000');
        $(this).find('.bounce_symbol').css('backgroundPosition', '-276px -430px')
    } else {
        $(this).css('background', '#fff');
    }
})




//回到顶部效果
$('.back_to_top a').click(function () {
    $('html,body').animate({
        scrollTop: 0
    });
})




//获取公司地址

//封装一个获取杭州网易公司地址的函数
function getLocation(id) {

    //创建和初始化地图函数：
    function initMap1() {
        createMap(); //创建地图
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
        addMarker(); //向地图中添加marker
    }

    //创建地图函数：
    function createMap() {
        var map = new BMap.Map(id); //在百度地图容器中创建一个地图
        var point = new BMap.Point(120.197255, 30.193334); //定义一个中心点坐标
        map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
        map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
        map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            isOpen: 0
        });
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        });
        map.addControl(ctrl_sca);
    }

    //标注点数组
    var markerArr = [{
        title: "网易(杭州)网络有限公司",
        content: "我是网易",
        point: "120.197219|30.193662",
        isOpen: 0,
        icon: {
            w: 21,
            h: 21,
            l: 0,
            t: 0,
            x: 6,
            lb: 5
        }
    }];
    //创建marker
    function addMarker() {
        for (var i = 0; i < markerArr.length; i++) {
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0, p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point, {
                icon: iconImg
            });
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title, {
                "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
            });
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                border: "none",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                color: "#000",
            });
            (function () {
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click", function () {
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open", function () {
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close", function () {
                    _marker.getLabel().show();
                })
                label.addEventListener("click", function () {
                    _marker.openInfoWindow(_iw);
                })
                if (!!json.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i) {
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
            "</b><div class='iw_poi_content'>" + json.content + "</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json) {
        var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w, json.h), {
            imageOffset: new BMap.Size(-json.l, -json.t),
            infoWindowOffset: new BMap.Size(json.lb + 5, 1),
            offset: new BMap.Size(json.x, json.h)
        })
        return icon;
    }

    initMap1(); //创建和初始化地图
}
getLocation(dituContent_hanghzou);



//封装一个获取广州网易大厦地址的函数
function getLocation_guangzhou(id) {
    //创建和初始化地图函数：

    function initMap() {
        createMap(); //创建地图
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
        addMarker(); //向地图中添加marker
    }

    //创建地图函数：
    function createMap() {
        var map = new BMap.Map(id); //在百度地图容器中创建一个地图
        var point = new BMap.Point(113.379309, 23.132152); //定义一个中心点坐标
        map.centerAndZoom(point, 18); //设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map; //将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent() {
        map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
        map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            type: BMAP_NAVIGATION_CONTROL_LARGE
        });
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            isOpen: 0
        });
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_BOTTOM_LEFT
        });
        map.addControl(ctrl_sca);
    }

    //标注点数组
    var markerArr = [{
        title: "网易大厦",
        content: "",
        point: "113.378887|23.13231",
        isOpen: 0,
        icon: {
            w: 21,
            h: 21,
            l: 0,
            t: 0,
            x: 6,
            lb: 5
        }
    }];
    //创建marker
    function addMarker() {
        for (var i = 0; i < markerArr.length; i++) {
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0, p1);
            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point, {
                icon: iconImg
            });
            var iw = createInfoWindow(i);
            var label = new BMap.Label(json.title, {
                "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
            });
            marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                border: "none",
                fontSize: "14px",
                fontWeight: "700",
                color: "#000",
                cursor: "pointer"
            });

            (function () {
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click", function () {
                    this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open", function () {
                    _marker.getLabel().hide();
                })
                _iw.addEventListener("close", function () {
                    _marker.getLabel().show();
                })
                label.addEventListener("click", function () {
                    _marker.openInfoWindow(_iw);
                })
                if (!!json.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i) {
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
            "</b><div class='iw_poi_content'>" + json.content + "</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json) {
        var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w, json.h), {
            imageOffset: new BMap.Size(-json.l, -json.t),
            infoWindowOffset: new BMap.Size(json.lb + 5, 1),
            offset: new BMap.Size(json.x, json.h)
        })
        return icon;
    }

    initMap(); //创建和初始化地图
}
getLocation_guangzhou(dituContent_guangzhou);