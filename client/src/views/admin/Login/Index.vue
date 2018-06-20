<template>
  <div class="admin-login">
    <el-form label-position="left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <div class="admin-login-title">Admin</div>
      <el-form-item class="logInput" prop="userName">
        <span class="logSpan">账号</span>
        <el-input  type="text" v-model="ruleForm2.userName" auto-complete="off" placeholder="username" ></el-input>
      </el-form-item>
      <el-form-item class="logInput"  prop="pass">
        <span class="logSpan">密码</span>
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="password" ></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button class="logButton" type="primary" @click="subadminLogin('ruleForm2')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        userName: '',
        pass: ''
      },
      rules2: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    subadminLogin(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            userName: this.ruleForm2.userName,
            pass: this.ruleForm2.pass
          }
          AuthenticationService.adminLogin(data)
            .then(function(response) {
              console.log(response)
              if (response.data.success) {
                _this.$store.dispatch('setadminUser', response.data.userName)
                _this.$store.dispatch('setadminToken', response.data.token)
                _this.$router.push({ name: 'admin' })
                _this.$refs[formName].resetFields()
              }
            })
            .catch(function(err) {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less">

</style>
