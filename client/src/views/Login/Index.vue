<template>
  <div v-if="isShow" class="fullScreen">
    <vodal :show="isShow" animation="zoom" @hide="clickHideShow" :closeButton="true">
      <div>A vue modal with animations.</div>
    </vodal>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
  
      }
    },
    methods: {
      clickHideShow() {
        this.$emit('clickHideShow', false)
        console.log(1)
      }
    }
  }
</script>

<style>
  .fullScreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
  }
</style>
