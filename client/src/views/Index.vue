<template>
  <div>
    <v-header @clickToolShow="clickToolShow" @clickToolShowReg="clickToolShowReg"></v-header>
    <v-nav></v-nav>
    <v-slider :sliderImg="sliderImg"></v-slider>
    <v-content></v-content>
    <v-footer :listLink="listLink"></v-footer>
    <vodal :show="isShow" animation="door" @hide="clickHideShow(false)">
      <login @clickHideShow="clickHideShow"></login>      
    </vodal>

    <vodal :show="isShowr" :height="400" animation="door" @hide="clickHideShowReg(false)">
      <registered @clickHideShowReg="clickHideShowReg"></registered>
    </vodal>
  </div>
</template>

<script>
  import VHeader from './Header/Index'
  import VNav from './Nav/Index'
  import VSlider from './Slider/Index'
  import VContent from './Content/Index'
  import VFooter from './Footer/Index'

  import Login from './Login/Index'
  import Registered from './Registered/Index'
  
  export default {
    components: {
      VHeader,
      VNav,
      VContent,
      VSlider,
      VFooter,
      Login,
      Registered
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
        ],
        isShow: false,
        isShowr: false
  
      }
    },
    methods: {
      clickToolShow(status) {
        this.isShow = status
      },
      clickHideShow(status) {
        this.isShow = status
      },
      clickToolShowReg(status) {
        this.isShowr = status
      },
      clickHideShowReg(status) {
        this.isShowr = status
      }
    }
  }
</script>

<style lang="less">

</style>
