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
var hasLogin = require('./routes/hasLogin');
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
// var jquery = require('./public/javascripts/jquery-3.1.1.min.js');
// var userJS = require('./public/dist/js/user/user');
// var addUserJS = require('./public/dist/js/user/addUser');
// var editUserJS = require('./public/dist/js/user/editUser');
// var viewUserJS = require('./public/dist/js/user/viewUser');
// var carJS = require('./public/dist/js/car/car');
// var addCarJS = require('./public/dist/js/car/addCar');
// var editCarJS = require('./public/dist/js/car/editCar');
// var viewCarJS = require('./public/dist/js/car/viewCar');


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
// app.use('/',jquery);
// app.use('/',userJS);
// app.use('/',addUserJS);
// app.use('/',editUserJS);
// app.use('/',viewUserJS);
// app.use('/',carJS);
// app.use('/',addCarJS);
// app.use('/',editCarJS);
// app.use('/',viewCarJS);


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
