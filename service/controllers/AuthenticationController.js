const User = require('../model/User')
const config = require('../config/config')

module.exports = {
  async userLogin (req, res) {
    try {
      await User.findOne({
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
          if(user.password === req.body.pass ){
            res.send({
              success: true,
              message: '登陆成功',
              userName: user.userName
            })
          }else{
            res.send({
              seccess: false,
              message: '密码错误'
            })
          }
        } else {
          res.send({
            success: false,
            message: '认证错误，账号或在密码错误'
          })
        }
      })
    } catch (error) {
      res.send({
        success: false,
        message: '认证错误，账号或在密码错误'
      })
    }
  },

  async userRegister (req, res){
    try {
      User.findOne({
        userName: req.body.userName
      }, (err, user) => {
        if(err){
          res.send({
            success: false,
            message: '发生错误'
          })
        }

        if(user){
          res.send({
            success: false,
            message: '用户存在'
          })
        } else if(!req.body.userName || !req.body.pass){
          res.send({
            success: false,
            message: '请输入账号密码'
          })
        } else {
          let newUser = new User({
            userName: req.body.userName,
            password: req.body.pass
          })
  
          newUser.save( (err) => {
            if(err){
              return res.send({
                success: false,
                message: '注册失败'
              })
            }
            res.send({
              success: true,
              message: '注册成功'
            })
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}