<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
    <v-slider :sliderImg="sliderImg"></v-slider>
    <v-content></v-content>
    <v-footer :listLink="listLink"></v-footer>
  </div>
</template>

<script>
  import VHeader from './Header/Index'
  import VNav from './Nav/Index'
  import VSlider from './Slider/Index'
  import VContent from './Content/Index'
  import VFooter from './Footer/Index'
  
  export default {
    components: {
      VHeader,
      VNav,
      VContent,
      VSlider,
      VFooter
    },
    data() {
      return {
        sliderImg: [
          {
            src: 'item1'
          },
          {
            src: 'item2'
          },
          {
            src: 'item3'
          },
          {
            src: 'item4'
          }
        ],
        listLink: [
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          },
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          },
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          },
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          },
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          },
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          },
          {
            liSrc: 'http://www.kugou.com/about/aboutus.html',
            liTitle: '关于酷狗'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  @import '../public/css/base.less';
</style>
