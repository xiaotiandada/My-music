const AuthenticationController = require('../controllers/AuthenticationController')

module.exports = (app) => {
  // app.get('/', function (req, res) {
  //   res.send('hello world')
  // })
  app.post('/userLogin', AuthenticationController.userLogin )

  app.post('/userRegister', AuthenticationController.userRegister)

  app.post('/adminLogin', AuthenticationController.adminLogin)

  app.post('/adminRegister', AuthenticationController.adminRegister)

}