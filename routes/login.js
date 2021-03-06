var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/login')
	.get(function(req,res){
		if(req.session.islogin){
			res.locals.islogin = req.session.islogin;
		}

		if(req.cookies.islogin){
			req.session.islogin = req.cookies.islogin;
		}
		res.render('login',{ title: '用户登录！',test: res.locals.islogin })
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.username,function(result){
			if(result[0] === undefined){
				res.send("false1");
			}else{
				if(result[0].password === req.body.password){
					req.session.islogin = req.body.username;
					res.locals.islogin = req.session.islogin;
					res.cookie('islogin'),res.locals.islogin,{maxAge:60000};
					res.send("true")
				}else{
					res.send("false2")
				}
			}
		})
	})

module.exports = router;