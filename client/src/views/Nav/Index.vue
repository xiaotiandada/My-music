<template>
    <nav class="navWrap">
        <div class="nav">
            <ul class="homeNav" id="homeNav">
                <li>
                    <a href="#" class="normal active">首页</a>
                </li>
                <li>
                    <a href="#" class="normal">榜单</a>
                </li>
                <li>
                    <a href="#" class="normal">下载客户端</a>
                </li>
                <li class="more" @mouseenter="toggleShow" @mouseleave="toggleShow" :class="{navshowmenu: isNavShow}">
                    <a href="#">更多</a>
                    <i class="icon" id="icon"></i>
                </li>
            </ul>
            <ul class="secondMenu" @mouseenter="toggleShow" @mouseleave="toggleShow" :class="{ navshow : isNavShow}">
                <li><a href="http://www.kugou.com/fmweb/html/index.html">电台</a></li>
                <li><a href="http://www.kugou.com/mvweb/html/">MV</a></li>
                <li><a href="http://www.kugou.com/yy/html/special.html">歌单</a></li>
                <li><a href="http://www.kugou.com/yy/html/singer.html">歌手</a></li>
            </ul>
            <ul class="subNav">
                <li>
                    <a href="#" class="icon icon-nav1" target="_blank">音乐直播</a>
                </li>
                <li>
                    <a href="#" class="icon icon-nav2" target="_blank">酷狗LIVE</a>
                </li>
                <li>
                    <a href="#" class="icon icon-nav3" target="_blank">音乐人</a>
                </li>
                <li>
                    <a href="#" class="icon icon-nav4" target="_blank">游戏</a>
                </li>
                <li>
                    <a href="#" class="icon icon-nav5" target="_blank">商城</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
      data() {
        return {
          isNavShow: false
        }
      },
      methods: {
        toggleShow: function() {
          this.isNavShow = !this.isNavShow
          console.log(this.isNavShow)
        }
      }
    }
</script>

<style>
    .navshowmenu {
        background: #0c8ed9;
    }
    
    .navshow {
        display: block;
    }
</style>
