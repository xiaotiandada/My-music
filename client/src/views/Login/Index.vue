<template>
  <div v-if="isShow" class="fullScreen">
    <vodal :show="isShow" animation="zoom" @hide="clickHideShow">
      
      <div class="from">
        <el-form label-position="left" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <span class="logSpan">usernaem</span>
            <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="username" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="password" ></el-input>
          </el-form-item>
          <!-- <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item> -->
          <el-form-item label-width="0px">
            <el-button class="logButton" type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
            <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>

    </vodal>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
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
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      clickHideShow() {
        this.$emit('clickHideShow', false)
        console.log(1)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>
  .fullScreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
  }
  .from{
    padding: 34px;
  }
  .logButton{
    width: 100%;
  }
  .logSpan{
    display: inline;
  }
</style>
