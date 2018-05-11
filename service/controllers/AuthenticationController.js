const User = require('../model/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')


// token
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async userLogin(req, res) {
    try {
      await User.findOne({
        userName: req.body.userName
      }, function (err, user) {
        if (err) {
          throw err
        }
        if (!user) {
          res.send({
            success: false,
            message: '用户不存在'
          })
        } else if (user) {
          // 通过bcrypt 对再次传入的密码和数据库中保存的加密后的密码进行比较，如果匹配，则登录成功 isMatch 为布尔值
          user.comparePassword(req.body.pass, (err, isMatch) => {
            if (isMatch && !err) {
              user.token = jwtSignUser({
                userName: req.body.userName
              })

              user.save(function (err) {
                if (err) {
                  res.send({
                    success: false,
                    message: '认证错误'
                  })
                }
              })


              res.send({
                success: true,
                message: '登陆成功',
                userName: user.userName,
                token: jwtSignUser({
                  userName: req.body.userName
                })
              })
            } else {
              res.send({
                seccess: false,
                message: '密码错误'
              })
            }
          })

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

  async userRegister(req, res) {
    try {
      User.findOne({
        userName: req.body.userName
      }, (err, user) => {
        if (err) {
          res.send({
            success: false,
            message: '发生错误'
          })
        }

        if (user) {
          res.send({
            success: false,
            message: '用户存在'
          })
        } else if (!req.body.userName || !req.body.pass) {
          res.send({
            success: false,
            message: '请输入账号密码'
          })
        } else {
          let newUser = new User({
            userName: req.body.userName,
            password: req.body.pass,
            token: jwtSignUser({
              userName: req.body.userName
            })
          })

          newUser.save((err) => {
            if (err) {
              return res.send({
                success: false,
                message: '注册失败'
              })
            }
            res.send({
              success: true,
              message: '注册成功',
              token: jwtSignUser({
                userName: req.body.userName
              })
            })
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}