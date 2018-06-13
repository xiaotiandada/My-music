<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
      <slot>empty</slot>
    </div>
  </div>
</template>

<script>
const delta = 15
export default {
  name: 'scrollBar',
  data() {
    return {
      top: 0
    }
  },
  methods: {
    handleScroll(e) {
      // 鼠标滚动 -120 下 120 上
      const eventDelta = e.wheelDelta || -e.daltaY * 3
      // console.log(eventDelta)
      const $container = this.$refs.scrollContainer
      const $containerHeight = $container.offsetHeight
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperHeight = $wrapper.offsetHeight
      if (eventDelta > 0) {
        this.top = Math.min(0, this.top + eventDelta)
      } else {
        if ($containerHeight - delta < $wrapperHeight) {
          if (this.top < -($wrapperHeight - $containerHeight + delta)) {
            this.top = this.top
          } else {
            this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
          }
        } else {
          this.top = 0
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.scroll-container{
  /*position: relative;*/
  width: 100%;
  height: 100%;
  background: #304156;
  .el-menu{
    border: none;
    width: 100%;
  }
  .scroll-wrapper{
    position: absolute;
    width: 100% !important;
  }
}
</style>
