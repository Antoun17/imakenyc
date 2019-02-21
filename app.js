var createError = require('http-errors');
var express = require('express');
var path = require('path');
var https = require('https');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
app.get('/request', function(req, res){
  request('https://www.joinit.org/api/beta/organizations/me/memberships?token=sGxFZB93Y4AAkyJR2', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      // do more stuff
      res.send(info);
    }
  })
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + './public/stylesheets'));

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

app.get('/style', function(req, res){
  res.sendFile('public/stylesheets/style.css', {root: __dirname});
})

module.exports = app;
