<template>
  <footer class="footer">
    <div class="links">
      <p>
        <template v-for="item in listLink">
                   <span
                   v-if="item.liIndex !== 1"
                  :key="item.liIndex">|</span>
                  <a :href="item.liSrc" target="_blank" :key="item.liIndex">{{item.liTitle}}</a>
</template>
            </p>
        </div>
        <div class="copyright">
            <p>我们致力于推动网络正版音乐发展，相关版权合作请联系copyrights@kugou.com</p>
            <p>信息网络传播视听节目许可证 1910564 增值电信业务经营许可证粤B2-20060339 &nbsp;&nbsp;&nbsp;<a target="_blank"
                                                                                  href="http://www.miitbeian.gov.cn/">粤ICP备09017694号-2</a><span
                    class="footerIcon"><a target="_blank"
                                          href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/E64D2439A71544C7B995FC0A53D8F965">&nbsp;&nbsp;&nbsp;&nbsp;</a></span>
            </p>
            <p>广播电视节目制作经营许可证（粤）字第01270号&nbsp;&nbsp;&nbsp;&nbsp;营业性演出许可证穗天演440106026</p>
            <p>穗公网监备案证第44010650010167&nbsp;&nbsp;&nbsp;&nbsp;互联网药品信息服务资格证编号（粤）-非经营性-2012-0018</p>
            <p>Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2004-2017 KuGou-Inc.All Rights Reserved
                <a class="office-verification"
                   href="http://netadreg.gzaic.gov.cn/ntmm/WebSear/WebLogoPub.aspx?logo=440106106022006022000209"
                   target="_blank"></a>
            </p>
        </div>
    </footer>
</template>

<script>
  export default {
    data() {
      return {
        listLink: [{
          liIndex: 1,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liIndex: 2,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liIndex: 3,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liIndex: 4,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liIndex: 5,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liIndex: 6,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        },
        {
          liIndex: 7,
          liSrc: 'http://www.kugou.com/about/aboutus.html',
          liTitle: '关于酷狗'
        }
        ]
      }
    }
  }
</script>

<style>
  
</style>
