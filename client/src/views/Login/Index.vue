<template>
      <div class="logfrom">
        <el-form label-position="left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
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
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     console.log(valid)
      //     console.log(this.ruleForm2)
      //     // alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      // console.log('login' + this.ruleForm2.userName)
      // console.log('login' + this.ruleForm2.pass)
      await AuthenticationService.userLogin({
        userName: this.ruleForm2.userName,
        pass: this.ruleForm2.pass
      }).then(function(response) {
        console.log(response.data)
        if (response.data.success) {
          console.log(response.data.message)
        } else {
          console.log(response.data.message)
        }
      })
        .catch(function(error) {
          console.log(error)
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">
  .logfrom{
    padding: 34px;
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
</style>
