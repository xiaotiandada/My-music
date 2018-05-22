<template>
  <div class="admin-layout">
    <sidebar class="admin-sidebar"></sidebar>
    <div class="admin-main">
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
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
