<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" class="el-menu-vertical-demo" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
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
    computed: {
      routes() {
        console.log(this.$router.options.routes)
        return this.$router.options.routes
      }
    },
    methods: {
    }
  }
</script>

<style>
  
</style>
