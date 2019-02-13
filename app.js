var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use('/views', express.static(__dirname + '/views'));

app.use('/routes', express.static('./routes/'));

app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));


app.get('/', function(req,res){
  res.sendFile('/Users/antounsawires/Desktop/Node Projects/imakenyc/views/index.html');
})

app.get('/login', function(req,res){
  res.sendFile('/Users/antounsawires/Desktop/Node Projects/imakenyc/views/login.html');

})

app.get('/register', function(req,res){
  res.sendFile('/Users/antounsawires/Desktop/Node Projects/imakenyc/views/register.html');

})

module.exports = app;
