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
        <el-button class="logButton" type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
        <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
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
    async submitForm(formName) {
      try {
        const response = await AuthenticationService.userLogin({
          userName: this.ruleForm2.userName,
          pass: this.ruleForm2.pass
        })
        console.log(response.data)
        this.$store.dispatch('userLoggin', response.data.token)
        if (response.data.success) {
          this.$emit('clickHideShow', false)
        }

        if (response.data.success) {
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
      //       this.$store.dispatch('userLoggin', response.data.success)
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
.admin-login{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
}

  .logButton{
    width: 100%;
  }
  .logSpan{
    padding: 0;
    color: #889aa4;
    vertical-align: middle;
    width: 60px;
    height: 38px;
    display: inline-block;
    font-size: 14px;
    line-height: 42px;
  }
  .el-input{
    display: inline-block;
    height: 38px;
    width: 78%;
  }
  .logInput{
    border: 1px solid #e6e6e6;
    background: transparent;
    border-radius: 3px;
    color: #454545;
    line-height: 38px;
  }
  .el-input__inner{
    border: none;
  }

  .el-form{
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .admin-login-title{
    color: #fff;
    font-size: 26px;
    text-align: center;
    font-weight: bold;
    margin: 0px auto 40px auto;
  }
</style>
