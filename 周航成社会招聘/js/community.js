// 获取地点列表
var lis = document.querySelectorAll('.menu_top li');
var content = document.querySelector('.content');
window.onload = function () {
    
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (var j = 0; j < arr1.length; j++) {
                content.innerHTML = '';
            }
            var Z = this.innerText + '市';
            var ZZ=this.innerText;
            arr1.forEach(function (ele, i) {
                if (ZZ == '全部') {
                    var ul = ' <ul><li>' + ele.collect + '</li><li>' + ele.presentations + '</li><li>' + ele.section + '</li><li>' + ele.classes + '</li><li>' + ele.site + '</li><li>' + ele.number + '</li><li>' + ele.time + '</li></ul>';
                    content.insertAdjacentHTML('beforeend', ul);
                }
                if (ele.site == Z) {
                    var ul = ' <ul><li>' + ele.collect + '</li><li>' + ele.presentations + '</li><li>' + ele.section + '</li><li>' + ele.classes + '</li><li>' + ele.site + '</li><li>' + ele.number + '</li><li>' + ele.time + '</li></ul>';
                   
                    // 添加内容
                    content.insertAdjacentHTML('beforeend', ul);
                }
                
            })




        }
    }
}
