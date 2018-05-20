const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  database: 'mongodb://localhost/mymusic',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}