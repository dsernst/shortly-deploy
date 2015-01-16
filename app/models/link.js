var urlSchema = require('../config').urlSchema;
var crypto = require('crypto');
var mongoose = require('mongoose');

var Link = mongoose.model('urls', urlSchema);

urlSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.get('url'));
  this.set('code', shasum.digest('hex').slice(0, 5));
  next();
});

module.exports = Link;
