const express = require('express')

// morgan
const morgan = require('morgan') // 命令行log显示
const User = require('./model/user')

const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')

const AuthenticationController = require('./controllers/AuthenticationController')

const app = express()

app.use(morgan('combined')) // 命令行中显示程序运行日志,便于bug调试
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('hello world')
})
app.post('/userLogin', AuthenticationController.userLogin )

app.listen(config.port, function () {
  console.log(`server run ${config.port} port`)
})