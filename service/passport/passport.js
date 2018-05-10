const passport = require('passport')
const {User} = require('./model/User')


passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({
      username: username
    }, function(err, user){
      if(err){
        return done(err)
      }
      if(!user){
        return done(null, false)
      }
      if(!user.verifyPassword(password)) {
        return done(null, fasle)
      }
      return done(null, user)
    })
  }
))

// 这里还不懂！！！