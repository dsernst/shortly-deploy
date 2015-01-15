var User = require('../config').User;
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

User.pre('save', this.hashPassword);

User.prototype.comparePassword = function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  };

User.prototype.hashPassword = function(){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }

module.exports = User;
