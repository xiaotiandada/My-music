const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt =require('bcryptjs')
let SALT_WORK_FACTOR = 10
mongoose.connect('mongodb://localhost/mymusic')


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

UserSchema.pre('save', function preSaveCallback (next){
  let _this = this
  if(!_this.isModified('password')){
      return next()
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function preSaveCallback (err, salt){
    if(err){
      return next(err)
    }
    bcrypt.hash(_this.password, salt, function hashCassback (err, hash) {
      if(err){
        return next(err)
      }
      _this.password = hash
      next()
    })
  })


})

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function compareCallback(err, isMatch) {
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
