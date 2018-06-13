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

<style>
</style>
