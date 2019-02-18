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
  res.sendFile('views/index.html', {root: __dirname});
})

app.get('/login', function(req,res){
  res.sendFile('views/login.html', {root: __dirname});
})

app.get('/register', function(req,res){
  res.sendFile('views/register.html', {root: __dirname});
})

app.get('/test', function(req,res){
  res.sendFile('views/test.html', {root: __dirname});
})

module.exports = app;
