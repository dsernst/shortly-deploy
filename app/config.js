// var path = require('path');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var Link, User;

db.once('open', function(){

  var urlSchema = mongoose.Schema({
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: Number,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  })

  Link = mongoose.model('urls', urlSchema);

  var userSchema = mongoose.Schema({
    username: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  })

  User = mongoose.model('users', userSchema);

});

module.exports = {
  db: db,
  Link: Link,
  User: User
}
