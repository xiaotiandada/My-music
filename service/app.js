const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res){
  res.send('hello world')
})

app.listen(config.port, function(){
  console.log(`server run ${config.port} port`)
})