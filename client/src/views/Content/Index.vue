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
                    :key="item.ItIndex"
                    class="listItem">
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
    
        <div class="subContentTwo">
            <!-- 新歌首发 -->
            <div class="itemTwoLeftContent">
                <div class="itemTwoLeftTiele">
                    <div class="itemTiele itemTitleBOrder">
                        <h3 class="xgsf">
                            <b>精选</b>
                            歌单
                        </h3>
                        <div class="itemTwoLeftTextMenu" id="tab-list">
                            <span class="MenuItem tab-active">华语</span>
                            <span class="MenuItem">欧美</span>
                            <span class="MenuItem">韩国</span>
                            <span class="MenuItem">日本</span>
                        </div>
                        <a href="#" target="_blank" class="moreR palyAll">
                            <i class="icon-play"></i>
                            全部播放
                        </a>
                    </div>
                </div>
                <div class="itemTwoLeftContent tab-content tab-show">
                    <ul>
                        <li 
                        v-for="item in listTab" :key="item.tabIndex">
                            <a href="#">
                                {{item.tabTitle}}
                                <span :class="[ item.tabShow ? 'songTips' : '' ]"></span>
                                <span class="icon-playBtn"></span>
                                <span class="icon-download"></span>
                                <span class="icon-Time">{{item.tabTime}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="itemTwoLeftContent tab-content tab-hide">
                    <ul>
                        <li 
                        v-for="item in listTab" :key="item.tabIndex">
                            <a href="#">
                                {{item.tabTitle}}
                                <span :class="[ item.tabShow ? 'songTips' : '' ]"></span>
                                <span class="icon-playBtn"></span>
                                <span class="icon-download"></span>
                                <span class="icon-Time">{{item.tabTime}}</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div class="pages">
                    <div class="pagesCenter">
                        <a href="#" class="pages-prev">上一页</a>
                        <span class="pages-currentPage">1</span>
                        /
                        <span class="pages-allPage">3</span>
                        <a href="#" class="pages-next">下一页</a>
                    </div>
                </div>
            </div>


                        <!--推荐Mv-->
            <div class="itemTwoRightContent">
                <div class="itemTiele itemTwoRightContentTitle">
                    <h3 class="tjmv">
                        <b>精选</b>
                        歌单
                    </h3>
                    <a href="#" target="_blank" class="moreRR">更多</a>
                </div>
                <div 
                v-for="item in listRecommend"
                :class="[ item.reId ? 'itemTwoRightContentMidl': 'itemTwoRightContentBigL' ]"
                :key="item.ItIndex"
                class="cpt">
                    <a href="#" target="_blank" class="itemZA">
                        <div class="play_btn">{{item.reTitle}}</div>
                    </a>
                    <a href="#" target="_blank">
                        <img :src="item.reSrc" :alt="item.reAlt">
                        <div class="cptB">
                            <p class="songListName">{{item.reName}}</p>
                            <p class="songListSinger">{{item.reSinger}}</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>

        <v-banner></v-banner>
        <v-partner></v-partner>
        <v-link></v-link>

    </div>
</template>

<script>
import VBanner from './Banner'
import VPartner from './Partner'
import VLink from './Link'

export default {
  components: {
    VBanner,
    VPartner,
    VLink
  },
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
          playNum: '506.8万',
          playSrc: require('../../public/img/cpt3.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        },
        {
          playIndex: 4,
          playId: 1,
          playText: '播放',
          playNum: '561.8万',
          playSrc: require('../../public/img/cpt4.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        },
        {
          playIndex: 5,
          playId: 1,
          playText: '播放',
          playNum: '501.8万',
          playSrc: require('../../public/img/cpt5.jpg'),
          playName: '酷狗音乐',
          playSinger: '酷狗电疗中心'
        }
      ],
      listItem: [
        {
          ItIndex: 1,
          src: require('../../public/img/bs.jpg'),
          title: '酷狗飙升榜',
          textContent1: '1.庄心妍-恨嫁恨嫁恨嫁恨嫁恨嫁恨嫁恨嫁',
          textContent2: '2.庄心妍-恨嫁'
        },
        {
          ItIndex: 2,
          src: require('../../public/img/top.jpg'),
          title: '酷狗飙升榜',
          textContent1: '1.庄心妍-恨嫁',
          textContent2: '2.庄心妍-恨嫁'
        },
        {
          ItIndex: 3,
          src: require('../../public/img/hg.jpg'),
          title: '酷狗飙升榜',
          textContent1: '1.庄心妍-恨嫁',
          textContent2: '2.庄心妍-恨嫁'
        }
      ],
      listTab: [
        {
          tabIndex: 1,
          tabTitle: '冯提莫 - 哼',
          tabTime: '03:33',
          tabShow: true
        },
        {
          tabIndex: 2,
          tabTitle: '冯提莫 - 哼',
          tabTime: '03:33',
          tabShow: false
        }
      ],
      listRecommend: [
        {
          reIndex: 1,
          reId: 0,
          reTitle: '播放',
          reSrc: require('../../public/img/re.jpg'),
          reAlt: 'sing',
          reName: '蒙面唱将2 第一期',
          reSinger: '蒙面唱将猜猜猜1'
        },
        {
          reIndex: 1,
          reId: 1,
          reTitle: '播放',
          reSrc: require('../../public/img/re.jpg'),
          reAlt: 'sing',
          reName: '蒙面唱将2 第一期',
          reSinger: '蒙面唱将猜猜猜2'
        },
        {
          reIndex: 1,
          reId: 1,
          reTitle: '播放',
          reSrc: require('../../public/img/re.jpg'),
          reAlt: 'sing',
          reName: '蒙面唱将2 第一期',
          reSinger: '蒙面唱将猜猜猜2'
        }
      ]
    }
  }
}
</script>

<style>

</style>
