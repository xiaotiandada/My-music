const express = require('express')
const app = express()
// morgan
const morgan = require('morgan') // 命令行log显示

const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')

const fs = require('fs')
const path = require('path')


app.use(morgan('combined')) // 命令行中显示程序运行日志,便于bug调试
app.use(bodyParser.json())
app.use(cors())

require('./router/index.js')(app)

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})

app.listen(config.port, function () {
  console.log(`server run ${config.port} port`)
})