const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mymusic')
const Schema = mongoose.Schema
var UserSchema = new Schema({
  userName: String,
  password: String,
  createTime: Date
})

module.exports = mongoose.model('User', UserSchema)

//  var user = new User
// user.userName = 'xiaotian'
// user.password = '123456'
// user.createTime = new Date
// user.save()
//         .then( () => {
//           console.log('创建成功')
//         })
