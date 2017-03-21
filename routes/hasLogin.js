var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/hasLogin')
	.get(function(req,res){
		if(req.session.islogin){
			res.locals.islogin = req.session.islogin;
		}

		if(req.cookies.islogin){
			req.session.islogin = req.cookies.islogin;
		}
		res.render('hasLogin',{ title: '登录成功' ,user:res.locals.islogin})
	})

	.post(function(req,res){
		// res.redirect('/hasLogin')
		// res.send('登录成功')
		console.log("登陆成功")
		res.send(req.body);
	});
module.exports = router;