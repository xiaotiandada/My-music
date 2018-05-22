<template>
  <div class="admin-layout">
    <sidebar class="admin-sidebar"></sidebar>
    <div class="admin-main">
      <navbar></navbar>  
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar/Index'
  import Navbar from '@/views/admin/layout/components/Navbar.vue'
  import AppMain from '@/views/admin/layout/components/AppMain.vue'
  export default {
    components: {
      Sidebar,
      Navbar,
      AppMain
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
