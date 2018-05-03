<template>
    <div class="content">
        <div class="subContentM">
            <!--精选歌单-->
            <featured :listCpt="listCpt"></featured>
            <!-- 热门歌单 -->
            <hot-song :listItem="listItem"></hot-song>
        </div>
        <div class="subContentTwo">
            <!-- 新歌首发 -->
            <new-song :listTab="listTab"></new-song>
            <!--推荐Mv-->
            <recommend :listRecommend="listRecommend"></recommend>
        </div>
        <!-- 广告 -->
        <v-banner></v-banner>
        <!-- 合作伙伴 -->
        <v-partner :listParther="listParther"></v-partner>
        <!-- 友情连接 -->
        <v-link :listLink="listLink"></v-link>
    </div>
</template>

<script>
    import NewSong from './NewSong'
    import HotSong from './HotSong'
    import Featured from './Featured'
    import Recommend from './Recommend'
    import VBanner from './Banner'
    import VPartner from './Partner'
    import VLink from './Link'
    
    export default {
      components: {
        VBanner,
        VPartner,
        VLink,
        Recommend,
        Featured,
        HotSong,
        NewSong
      },
      data() {
        return {
          listCpt: [
            {
              playId: 0,
              playText: '播放',
              playNum: '5061.8万',
              playSrc: require('../../public/img/cpt1.jpg'),
              playName: '酷狗音乐',
              playSinger: '酷狗电疗中心'
            },
            {
              playId: 1,
              playText: '播放',
              playNum: '5061.8万',
              playSrc: require('../../public/img/cpt2.jpg'),
              playName: '酷狗音乐',
              playSinger: '酷狗电疗中心'
            },
            {
              playId: 1,
              playText: '播放',
              playNum: '506.8万',
              playSrc: require('../../public/img/cpt3.jpg'),
              playName: '酷狗音乐',
              playSinger: '酷狗电疗中心'
            },
            {
              playId: 1,
              playText: '播放',
              playNum: '561.8万',
              playSrc: require('../../public/img/cpt4.jpg'),
              playName: '酷狗音乐',
              playSinger: '酷狗电疗中心'
            },
            {
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
          ],
          listTab: [
            [
              {
                tabTitle: '冯提莫 - 哼1',
                tabTime: '03:33',
                tabShow: true
              },
              {
                tabTitle: '冯提莫 - 哼',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '冯提莫 - 哼',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '冯提莫 - 哼',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '冯提莫 - 哼',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '冯提莫 - 哼',
                tabTime: '03:33',
                tabShow: false
              }
            ],
            [
              {
                tabTitle: '冯提莫 - 哼2',
                tabTime: '03:33',
                tabShow: true
              },
              {
                tabTitle: '大壮 - 赌',
                tabTime: '03:33',
                tabShow: false
              }
            ],
            [
              {
                tabTitle: '冯提莫 - 哼3',
                tabTime: '03:33',
                tabShow: true
              },
              {
                tabTitle: '李宇春 - 1987我不知会遇见你 (Live)',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '李宇春 - 1987我不知会遇见你 (Live)',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '李宇春 - 1987我不知会遇见你 (Live)',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '李宇春 - 1987我不知会遇见你 (Live)',
                tabTime: '03:33',
                tabShow: false
              }
            ],
            [
              {
                tabTitle: '冯提莫 - 哼4',
                tabTime: '03:33',
                tabShow: true
              },
              {
                tabTitle: '艾辰 - 恋爱啦',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '艾辰 - 恋爱啦',
                tabTime: '03:33',
                tabShow: false
              },
              {
                tabTitle: '艾辰 - 恋爱啦',
                tabTime: '03:33',
                tabShow: false
              }
            ]
          ],
          listRecommend: [
            {
              reId: 0,
              reTitle: '播放',
              reSrc: require('../../public/img/re.jpg'),
              reAlt: 'sing',
              reName: '蒙面唱将2 第一期',
              reSinger: '蒙面唱将猜猜猜1'
            },
            {
              reId: 1,
              reTitle: '播放',
              reSrc: require('../../public/img/re.jpg'),
              reAlt: 'sing',
              reName: '蒙面唱将2 第一期',
              reSinger: '蒙面唱将猜猜猜2'
            },
            {
              reId: 1,
              reTitle: '播放',
              reSrc: require('../../public/img/re.jpg'),
              reAlt: 'sing',
              reName: '蒙面唱将2 第一期',
              reSinger: '蒙面唱将猜猜猜2'
            }
          ],
          listLink: [
            {
              listSrc: 'http://www.lady8844.com/',
              listTitle: '爱美网',
              listText: '爱美网'
            },
            {
              listSrc: 'http://www.warsu.com',
              listTitle: '华数唱片',
              listText: '华数唱片'
            },
            {
              listSrc: 'http://baa.bitauto.com/',
              listTitle: '汽车论坛',
              listText: '汽车论坛'
            },
            {
              listSrc: 'http://www.yue365.com/',
              listTitle: '365音乐网',
              listText: '365音乐网'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://www.lady8844.com/',
              listTitle: '爱美网',
              listText: '爱美网'
            },
            {
              listSrc: 'http://www.warsu.com',
              listTitle: '华数唱片',
              listText: '华数唱片'
            },
            {
              listSrc: 'http://baa.bitauto.com/',
              listTitle: '汽车论坛',
              listText: '汽车论坛'
            },
            {
              listSrc: 'http://www.yue365.com/',
              listTitle: '365音乐网',
              listText: '365音乐网'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://www.lady8844.com/',
              listTitle: '爱美网',
              listText: '爱美网'
            },
            {
              listSrc: 'http://www.warsu.com',
              listTitle: '华数唱片',
              listText: '华数唱片'
            },
            {
              listSrc: 'http://baa.bitauto.com/',
              listTitle: '汽车论坛',
              listText: '汽车论坛'
            },
            {
              listSrc: 'http://www.yue365.com/',
              listTitle: '365音乐网',
              listText: '365音乐网'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://www.lady8844.com/',
              listTitle: '爱美网',
              listText: '爱美网'
            },
            {
              listSrc: 'http://www.warsu.com',
              listTitle: '华数唱片',
              listText: '华数唱片'
            },
            {
              listSrc: 'http://baa.bitauto.com/',
              listTitle: '汽车论坛',
              listText: '汽车论坛'
            },
            {
              listSrc: 'http://www.yue365.com/',
              listTitle: '365音乐网',
              listText: '365音乐网'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            },
            {
              listSrc: 'http://y.tencentmusic.com',
              listTitle: '腾讯音乐人',
              listText: '腾讯音乐人'
            }
          ],
          listParther: [
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            },
            {
              listSrc: require('../../public/img/partner1.jpg'),
              listAlt: '唱片公司'
            }
          ]
        }
      }
    }
</script>

<style>
    
</style>
