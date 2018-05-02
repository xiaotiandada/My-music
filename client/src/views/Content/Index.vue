<template>
    <div class="content">
        <div class="subContentM">
            <!--精选歌单-->
            <div class="itemM">
                <div class="itemTiele">
                    <h3 class="jxgd">
                        <b>精选</b>
                        歌单
                    </h3>
                    <a href="#" target="_blank" class="moreR">更多</a>
                </div>
                <div class="itemComtentL">

                    <div 
                    v-for="item in listCpt" 
                    class="cpt"
                    :key="item.playIndex"
                   :class="[ item.playId ? 'cptMid' : 'cptBig'  ]"
                    >
                        <a href="#" target="_blank" class="itemZA">
                            <div class="play_btn">{{item.playText}}</div>
                        </a>
                        <p class="cptT">
                            <span class="icon"></span>
                            <span class="num">{{item.playNum}}</span>
                        </p>
                        <img :src="item.playSrc" alt="">
                        <div class="cptB">
                            <p class="songListName">{{item.playName}}</p>
                            <p class="songListSinger">{{item.playSinger}}</p>
                        </div>
                    </div>
  
                </div>

            </div>
            <!-- 热门歌单 -->
            <div class="itemMR">
                <div class="itemTiele">
                    <h3 class="rmgd">
                        <b>精选</b>
                        歌单
                    </h3>
                    <a href="#" target="_blank" class="moreRR">更多</a>
                </div>

                <div class="itemComtentR">
                    <div
                    v-for="item in listItem"
                    class="listItem"
                    >
                        <a href="#">
                            <div class="Cover">
                                <img :src="item.src"
                                     alt="">
                            </div>
                            <span class="arrow"></span>
                            <div class="list">
                                <dl>
                                    <dt>{{item.title}}</dt>
                                    <dd>{{item.textContent1}}</dd>
                                    <dd>{{item.textContent2}}</dd>
                                </dl>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      listCpt: [
        {
          playIndex: 1,
          playId: 0,
          playText: '播放',
          playNum: '5061.8万',
          playSrc: require('../../public/img/cpt1.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        },
        {
          playIndex: 2,
          playId: 1,
          playText: '播放',
          playNum: '5061.8万',
          playSrc: require('../../public/img/cpt2.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        },
        {
          playIndex: 3,
          playId: 1,
          playText: '播放',
          playNum: '5061.8万',
          playSrc: require('../../public/img/cpt3.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        },
        {
          playIndex: 4,
          playId: 1,
          playText: '播放',
          playNum: '5061.8万',
          playSrc: require('../../public/img/cpt4.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        },
        {
          playIndex: 5,
          playId: 1,
          playText: '播放',
          playNum: '5061.8万',
          playSrc: require('../../public/img/cpt5.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        }
      ],
      listItem: [
        {
          src: require('../../public/img/bs.jpg'),
          title: '酷狗飙升榜',
          textContent1: '1.庄心妍-恨嫁恨嫁恨嫁恨嫁恨嫁恨嫁恨嫁',
          textContent2: '2.庄心妍-恨嫁'
        },
        {
          src: require('../../public/img/top.jpg'),
          title: '酷狗飙升榜',
          textContent1: '1.庄心妍-恨嫁',
          textContent2: '2.庄心妍-恨嫁'
        },
        {
          src: require('../../public/img/hg.jpg'),
          title: '酷狗飙升榜',
          textContent1: '1.庄心妍-恨嫁',
          textContent2: '2.庄心妍-恨嫁'
        }
      ]
    }
  }
}
</script>

<style>

</style>
