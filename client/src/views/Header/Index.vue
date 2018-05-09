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
    <div class="login_area" v-if="!isLoginShow">
      <a href="#"
        @click="logClick"
        class="login_btn">登录</a>
      <a href="#"
      @click="logClickReg"
       class="regin_btn">注册</a>
    </div>

    <div class="login_area" v-if="isUserLoggedIn">
      <el-button type="primary">登陆成功</el-button>
    </div>

  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    logClick: function() {
      this.$emit('clickToolShow', true)
      this.isLoginShow = true
    },
    logClickReg: function() {
      this.$emit('clickToolShowReg', true)
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style>
</style>
