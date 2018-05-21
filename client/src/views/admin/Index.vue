<template>
  <div class="admin-layout">
    <sidebar class="admin-layout-left"></sidebar>
    <div class="admin-layoaut-right">
      <h2>main</h2>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar/Index'
  export default {
    components: {
      Sidebar
    }
  }
</script>

<style lang='less'>
  @import '../../public/css/style.less';
  @import '../../public/css/mixin.less';
  .admin-layout {
    .clearfix();
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .admin-layout-left{
    transition: width .3s;
    width: 180px !important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    border: 0;
  }
  .admin-layoaut-right{
    min-height: 100%;
    transition: margin-left .3s;
    margin-left: 180px;
    background: rgb(184, 184, 184);
    h2{
      margin: 0;
    }
  }
</style>
