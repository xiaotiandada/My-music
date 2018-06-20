<template>
      <div class="logfrom">
        <el-form label-position="left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item class="logInput" prop="userName">
            <span class="logSpan">账号</span>
            <el-input  type="text" v-model="ruleForm2.userName" auto-complete="off" placeholder="username" ></el-input>
          </el-form-item>
          <el-form-item class="logInput"  prop="pass">
            <span class="logSpan">密码</span>
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="password" ></el-input>
          </el-form-item>
          <el-form-item class="logInput" prop="checkPass">
             <span class="logSpan">确认密码</span>
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="password"></el-input>
          </el-form-item>
          <el-form-item label-width="0px">
            <el-button class="logButton" type="primary" @click="submitForm('ruleForm2')">注册</el-button>
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
        callback(new Error('请输入帐号'))
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
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        userName: '',
        pass: '',
        checkPass: ''
      },
      rules2: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
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
          AuthenticationService.userRegister(data)
            .then(function(response) {
              console.log(response.data)
              if (response.data.success) {
                _this.$emit('clickHideShowReg', false)
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
