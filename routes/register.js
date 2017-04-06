var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/register')
	.get(function(req,res){
		res.render('register',{ title: '注册'})
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.username,function(result){
			if(result[0] != undefined){
				res.send('false1');
			}else{
				client = sql.connect();
				sql.insertUser(client,req.body.username,req.body.password,function(err){
					if(err){
						throw err;
					}
				res.send("true")
				console.log('注册成功')
				});
			}

		})
		
	});


module.exports = router;
