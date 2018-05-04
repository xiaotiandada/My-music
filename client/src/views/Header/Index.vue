<template>
  <header class="header">
    <div class="logo">
      <h1>酷狗音乐</h1>
      <a href="index.html">
        <img src="../../public/img/logo.png" alt="logo">
      </a>
    </div>
  
    <div class="search_wrapper">
      <div class="search_input">
        <input type="search" placeholder="请输入歌名">
        <div class="search_btn">
          <i class="search_icon"></i>
          <span>搜索</span>
        </div>
      </div>
    </div>
    <div class="topNav">
      <ul>
        <li><a href="#" target="_blank">客服中心</a></li>
        <li><a href="#" target="_blank">招纳贤士</a></li>
        <li><a href="#" target="_blank">会员中心</a></li>
      </ul>
    </div>
    <div class="login_area">
      <a href="#"
        @click="logClick"
        class="login_btn">登录</a>
      <a href="#" class="regin_btn">注册</a>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      logClick: function() {
        this.$emit('clickToolShow', true)
      }
    }
  }
</script>

<style>
</style>
