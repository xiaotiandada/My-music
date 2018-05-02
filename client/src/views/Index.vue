<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
    <v-slider :sliderImg="sliderImg"></v-slider>
    <v-content></v-content>
  </div>
</template>

<script>
import VHeader from './Header/Index'
import VNav from './Nav/Index'
import VSlider from './Slider/Index'
import VContent from './Content/Index'
export default {
  components: {
    VHeader,
    VNav,
    VContent,
    VSlider
  },
  data() {
    return {
      sliderImg: [
        {
          index: '1',
          src: 'item1'
        },
        {
          index: '2',
          src: 'item2'
        },
        {
          index: '3',
          src: 'item3'
        },
        {
          index: '4',
          src: 'item4'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  @import '../public/css/base.less';
</style>
