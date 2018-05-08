const AuthenticationController = require('../controllers/AuthenticationController')


module.exports = (app) => {
  app.get('/', function (req, res) {
    res.send('hello world')
  })
  app.post('/userLogin', AuthenticationController.userLogin )  
}