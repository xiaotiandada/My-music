(function(){
    'use strict';
    var bannerMain = document.getElementById('banner__main');
    var banner = document.getElementById('banner');
    var pics = document.getElementById('banner').getElementsByTagName('div');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var buttons = document.getElementById('buttons');
    var spanChildren =document.getElementById('buttons').getElementsByTagName('span');

    var index = 0;
    var size = pics.length;

    var timer=null;


    // 浏览器加载生成圆点
    function circles(){
        //var circle = document.createElement('div');
        //circle.setAttribute('class','buttons');
        for(var i = 0; i<size;i++){
            var circleSpan = document.createElement('span');
            buttons.appendChild(circleSpan);
        }
        //bannerMain.appendChild(circle);

        // children节点
        //var spanChildren = circle.children;
        //spanChildren[0].setAttribute('class','buttons__active');
    }
    /**
     * 默认 0
     * 加   1  index = 1
     * for循环  i = 0 隐藏
     * index = 1 显示
     *
     * 2
     * 1
     *
     * 3
     * 2
     *
     * 4
     * 3
     *
     * 5
     * 0
     *
     */
    // 调用 切换函数三秒切换一次  如果索引值大于总长度 拉回零
    function play(){
        timer = setInterval(function(){
            index++;
            if(index >= size){
                index = 0;
            }
            changeImg();
        },3000)
    };

    // 轮播图切换 根据图片数量切换 size
    function changeImg(){
        for(var i = 0; i < size; i++ ){
            spanChildren[i].className="";
            pics[i].style.display = 'none';
        }

        spanChildren[index].className="buttons__active";
        pics[index].style.display = 'block';
    }
    // 清空定时器
    function stop(){
        clearInterval(timer);
    }

    // 默认开启轮播图
    play();
    // 根据图片数量生成小圆点
    circles();
    // 下一张
    next.onclick = function(){
        index++;
        if(index >= size){
            index=0;
        }
        changeImg();
    };
    // 上一张
    prev.onclick = function(){
        index--;
        if(index < 0){
            index = size-1;
        }
        changeImg();
    };

    // 遍历span圆点 单击切换导航
    for(var i =0,len=spanChildren.length;i<len;i++){
        // 第一个圆点默认
        spanChildren[0].setAttribute('class','buttons__active');
        // 增加索引值
        spanChildren[i].id = i;
        // 单击
        spanChildren[i].onclick=function(){
            // 赋值给index索引值
            index= this.id;
            // 切换
            changeImg();
        }
    }

    // 鼠标经过容器开启和停止
    bannerMain.onmouseover = stop;
    bannerMain.onmouseout = play;


})();