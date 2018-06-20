<template>
  <div class="logfrom">
    <el-form label-position="left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item class="logInput" prop="userName">
        <span class="logSpan">账号</span>
        <el-input type="text" v-model="ruleForm2.userName" auto-complete="off" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item class="logInput" prop="pass">
        <span class="logSpan">密码</span>
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button class="logButton" type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
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
          userName: [{
            validator: validateUserName,
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submitForm(formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const data = {
              userName: this.ruleForm2.userName,
              pass: this.ruleForm2.pass
            }
            AuthenticationService.userLogin(data)
              .then(function(response) {
                console.log(response.data)
                _this.$store.dispatch('setToken', response.data.token)
                _this.$store.dispatch('setUser', response.data.userName)
                if (response.data.success) {
                  _this.$emit('clickHideShow', false)
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
