const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt =require('bcryptjs')
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

UserSchema.pre('save', function(next){
  
})

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
