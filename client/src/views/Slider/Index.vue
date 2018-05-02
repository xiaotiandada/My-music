<template>
  <el-carousel :interval="5000" arrow="always" height="500px">
    <el-carousel-item v-for="item in sliderImg" :key="item.index" :class="item.src">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    sliderImg: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less">
  .el-carousel__item{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .item1{
    background-image: url(../../public/img/banner1.jpg);
  }
  .item2{
    background-image: url(../../public/img/banner2.jpg);
  }
  .item3{
    background-image: url(../../public/img/banner3.jpg);
  }
  .item4{
    background-image: url(../../public/img/banner4.jpg);
  }
</style>
