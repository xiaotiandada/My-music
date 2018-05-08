const express = require('express')

// morgan
const morgan = require('morgan') // 命令行log显示
const User = require('./model/user')

const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')

const app = express()

app.use(morgan('combined')) // 命令行中显示程序运行日志,便于bug调试
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('hello world')
})
app.post('/userLogin', function (req, res) {
  User.findOne({
    userName : req.body.userName
  }, function(err, user){
    if(err){
      throw err
    }
    if(!user){
      res.send({
        success: false,
        message: '用户不存在'
      })
    } else if(user){
      if(user.password !== req.body.password){
        res.send({
          seccess: false,
          message: '密码错误'
        })
      }else{
        res.send({
          success: true,
          message: '登陆成功',
          userName: user.userName
        })
      }
    } else {
      res.send({
        success: false,
        message: '认证错误，账号或在密码错误'
      })
    }
  })
})

app.listen(config.port, function () {
  console.log(`server run ${config.port} port`)
})