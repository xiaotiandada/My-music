<template>
  <header class="header" @click="searchToogle">
    <div class="logo">
      <h1>酷狗音乐</h1>
      <a href="index.html">
        <img src="../../public/img/logo.png" alt="logo">
      </a>
    </div>

    <div class="search_wrapper">



      <div class="search_input">
        <input type="search" placeholder="请输入歌名" v-model="searchKey">
        <div class="search_btn">
          <i class="search_icon"></i>
          <span>搜索</span>
        </div>
      </div>



      <div class="search_wrapper_content" v-if="searchShow">
        <ul>
          <li v-for="(item, index) in searchArr" :key="index"><a @click="searchPlay(index)">{{item.name}}</a></li>
        </ul>
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
        <el-menu mode="horizontal" class="user-menu">
          <el-dropdown trigger="click">
              <div class="user-img">
                <img src="https://avatars2.githubusercontent.com/u/24250627?s=460&v=4" alt="">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人主页</el-dropdown-item>
              <a href="" @click="logout">
                <el-dropdown-item>
                  退出登陆
                </el-dropdown-item>
              </a>

            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
    </div>

  </header>
</template>

<script>
  import musicService from '@/services/musicService'
  import _ from 'lodash'

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
      return {
        searchKey: '',
        searchArr: [],
        searchShow: false
      }
    },
    watch: {
      searchKey: _.debounce(
        async function() {
          // console.log(this.searchKey)
          const key = this.searchKey
          const that = this
          musicService.getSearch(key)
            .then(function(response) {
              // console.log(response)
              const data = response.data
              if (data.code === 200) {
                // console.log(data.result.songs)
                that.searchArr = data.result.songs
                that.searchShow = true
              }
            })
            .catch(function(err) {
              that.searchShow = false
              console.log(err)
            })
        }, 700)
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
      },
      searchPlay: function(index) {
        this.$router.push({
          path: 'songplay',
          query: {
            id: this.searchArr[index].id
          }
        })
      },
      searchToogle: function() {
        this.searchShow = false
      }
    }
  }
</script>

<style lang="less">

</style>
