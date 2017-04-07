var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/user/users');
var login = require('./routes/login');
var register = require('./routes/register');
var car = require('./routes/car/car');
var home = require('./routes/home');
var editUser = require('./routes/user/editUser');
var editCar = require('./routes/car/editCar');
var addCar = require('./routes/car/addCar');
var addUser = require('./routes/user/addUser');
var viewCar = require('./routes/car/viewCar');
var viewUser = require('./routes/user/viewUser');
var deleteUser = require('./routes/user/deleteUser');
var deleteCar = require('./routes/car/deleteCar');
var updateCar = require('./routes/car/updateCar');
var updateUser = require('./routes/user/updateUser');
var selectUser = require('./routes/user/selectUser');
var selectCar = require('./routes/car/selectCar');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser("An"));
app.use(session({
	secret:'an',
	resave:false,
	saveUninitialized:true
}));

app.use('/',index);
app.use('/',users);
app.use('/',login);
app.use('/',register);
app.use('/',car);
app.use('/',home);
app.use('/',editUser);
app.use('/',editCar);
app.use('/',addCar);
app.use('/',addUser);
app.use('/',viewCar);
app.use('/',viewUser);
app.use('/',deleteUser);
app.use('/',deleteCar);
app.use('/',updateCar);
app.use('/',updateUser);
app.use('/',selectUser);
app.use('/',selectCar);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
