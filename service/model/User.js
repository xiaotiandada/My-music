const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt =require('bcryptjs')  // 密码加密
let SALT_WORK_FACTOR = 10
const config = require('../config/config')
mongoose.connect(config.database)


var UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,  // 不重复
    require: true  // 不为空
  },
  password: {
    type: String,
    required: true
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  token: {
    type: String
  }
})

// 在保存密码之前用bcrypt加密保证密码只有用户知道
UserSchema.pre('save', function (next){
  // 保存this指向
  let _this = this
  // 判断是否为最新
  if(!_this.isModified('password')){
      return next()
  }
  // 加密EMMM 产生一个salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt){
    if(err){
      return next(err)
    }

    // 结合salt 生成 hash
    bcrypt.hash(_this.password, salt, function (err, hash) {
      if(err){
        return next(err)
      }

      // 用hash覆盖明文密码
      _this.password = hash
      next()
    })
  })


})

// 通过bcrypt的compare方法，对再次传入的密码和数据库中保存的加密后的密码进行比较，如果匹配，则登录成功 isMatch 为布尔值
// mongoose 模型扩展 在 methods 对象上扩展
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }

    cb(null, isMatch);
  });
};



module.exports = mongoose.model('User', UserSchema)


// var User = mongoose.model('User', UserSchema)

//  var user = new User
// user.userName = 'xiaotian'
// user.password = '123456'
// user.createTime = new Date
// user.token = '111111111111111111111'
// user.save()
//         .then( () => {
//           console.log('创建成功')
//         })
