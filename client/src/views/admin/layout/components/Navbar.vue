<template>
  <div>
    <el-menu class="navbar" mode="horizontal">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://avatars2.githubusercontent.com/u/24250627?s=460&v=4" alt="">
          <i class="el-icon-caret-bottom"></i>
        </div>      
        <el-dropdown-menu slot="dropdown">
          <router-link to="/admin">
            <el-dropdown-item>个人中心</el-dropdown-item>            
          </router-link>
           <router-link to="/admin">
            <el-dropdown-item>退出登录</el-dropdown-item>            
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .navbar{
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    // .hamburger-container{
    //   line-height: 58px;
    //   height: 50px;
    //   float: left;
    //   padding: 0 10px;
    // }
    .avatar-container{
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper{
        cursor: pointer;
        margin-top: 5px;
        position:relative;
        .user-avatar{
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
      
    }
  }
</style>
