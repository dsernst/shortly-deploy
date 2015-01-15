// var path = require('path');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var urlSchema, userSchema;

// db.once('open', function(cb){

  urlSchema = mongoose.Schema({
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  })

  userSchema = mongoose.Schema({
    username: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  })

// });

module.exports = {
  db: db,
  urlSchema: urlSchema,
  userSchema: userSchema
}
