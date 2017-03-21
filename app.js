var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');
var hasLogin = require('./routes/hasLogin');
var hasRegister = require('./routes/hasRegister');
var car = require('./routes/car');
var home = require('./routes/home');
var editUser = require('./routes/editUser');
var editCar = require('./routes/editCar');
var addCar = require('./routes/addCar');
var addUser = require('./routes/addUser');
var viewCar = require('./routes/viewCar');
var viewUser = require('./routes/viewUser');
var deleteUser = require('./routes/deleteUser');
var deleteCar = require('./routes/deleteCar');
var updateCar = require('./routes/updateCar');
var updateUser = require('./routes/updateUser');
var selectUser = require('./routes/selectUser');
var selectCar = require('./routes/selectCar');



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
app.use('/',hasLogin);
app.use('/',hasRegister);
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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
