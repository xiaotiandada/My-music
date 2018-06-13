<template>
  <div class="admin-login">
    <el-form label-position="left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <div class="admin-login-title">Admin</div>
      <el-form-item class="logInput" prop="username">
        <span class="logSpan">账号</span>
        <el-input  type="text" v-model="ruleForm2.userName" auto-complete="off" placeholder="username" ></el-input>
      </el-form-item>
      <el-form-item class="logInput"  prop="password">
        <span class="logSpan">密码</span>
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="password" ></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button class="logButton" type="primary" @click="adminLogin('ruleForm2')">登陆</el-button>
        <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'AdminLogin',
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
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
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
    async adminLogin(formName) {
      try {
        const response = await AuthenticationService.adminLogin({
          userName: this.ruleForm2.userName,
          pass: this.ruleForm2.pass
        })
        console.log(response.data)
        this.$store.dispatch('setadminToken', response.data.token)
        this.$store.dispatch('setadminUser', response.data.userName)
          .then(() => {
            this.$router.push({ name: 'admin' })
          })
          .catch((error) => {
            console.log(error)
            return false
          })

        if (response.data.success) {
          this.$emit('clickHideShow', false)
          console.log(response.data.message)
        } else {
          console.log(response.data.message)
          return false
        }
      } catch (error) {
        console.log(error)
      }

      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     AuthenticationService.userLogin({
      //       userName: this.ruleForm2.userName,
      //       pass: this.ruleForm2.pass
      //     }).then(function(response) {
      //       console.log(response.data)
      //       this.$store.dispatch('setToken', response.data.success)
      //       if (response.data.success) {
      //         console.log(response.data.message)
      //       } else {
      //         console.log(response.data.message)
      //       }
      //     })
      //       .catch(function(error) {
      //         console.log(error)
      //       })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">

</style>
