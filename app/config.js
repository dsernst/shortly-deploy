// var path = require('path');
var mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var urlSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})


module.exports = {
  db: db,
  urlSchema: urlSchema,
  userSchema: userSchema
}
