var userSchema = require('../config').userSchema;
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

userSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};

userSchema.methods.hashPassword = function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  cipher(this.get('password'), null, null).bind(this)
  .then(function(hash) {
      this.set('password', hash);
  })
  .then(next);
};

userSchema.pre('save', function(next){this.hashPassword(next)});

var User = mongoose.model('users', userSchema);

module.exports = User;
