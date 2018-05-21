<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import SidebarItem from './SidebarItem'
  import ScrollBar from './ScrollBar'
  export default {
    components: {
      SidebarItem,
      ScrollBar
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  
</style>
