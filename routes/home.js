var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.all('/home',function(req,res){
	if(req.session.islogin){
			res.locals.islogin = req.session.islogin;
		}

	if(req.cookies.islogin){
		req.session.islogin = req.cookies.islogin;
	}
	res.render('home',{ title: '首页！',user: res.locals.islogin })
})


module.exports = router;