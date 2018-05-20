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
    <div class="login_area" v-if="!isUserLoggedIn">
      <a href="#" @click="logClick" class="login_btn">登录</a>
      <a href="#" @click="logClickReg" class="regin_btn">注册</a>
    </div>
  
    <div class="login_user" v-if="isUserLoggedIn">
      <!-- <el-button type="primary">登陆成功</el-button>
           -->
      <el-dropdown>
        <span class="el-dropdown-link">
          <div class="user-img">
            <img src="https://avatars2.githubusercontent.com/u/24250627?s=460&v=4" alt="">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人主页</el-dropdown-item>
          <a href="" @click="logout">
            <el-dropdown-item>
              退出登陆
            </el-dropdown-item>
          </a>
          
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  
  </header>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'isUserLoggedIn'
      ])
    },
    data() {
      return {}
    },
    methods: {
      logClick: function() {
        this.$emit('clickToolShow', true)
      },
      logClickReg: function() {
        this.$emit('clickToolShowReg', true)
      },
      logout: function() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      }
    }
  }
</script>

<style>
.login_user{
  float: left;
  margin: 10px 0 0 80px;
}
.user-img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.user-img img{
  width: 100%;
  height: 100%;
  background-size: cover;
}
  
</style>
