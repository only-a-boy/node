var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
// var sql = require('./routes/dao/dbConnect');

router.route('/register')
	.get(function(req,res){
		res.render('register',{ title: '注册'})
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.username,function(result){
			if(result[0] != undefined){
				res.send('该用户名已经被使用');
			}else{
				client = sql.connect();
				sql.insertUser(client,req.body.username,req.body.password2,function(err){
					if(err){
						throw err;
					}
				res.render('hasRegister',{ title:'已经注册成功',user:req.body.username,password:req.body.password2});
				console.log('注册成功')
				});
			}

		})
		
	});


module.exports = router;
