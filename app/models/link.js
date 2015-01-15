var urlSchema = require('../config').urlSchema;
var crypto = require('crypto');
var mongoose = require('mongoose');

var Link = mongoose.model('urls', urlSchema);

urlSchema.pre('save', function(model, attrs, options){
  var shasum = crypto.createHash('sha1');
  shasum.update(model.get('url'));
  model.set('code', shasum.digest('hex').slice(0, 5));
});

module.exports = Link;
