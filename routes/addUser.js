var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
// var sql = require('./routes/dao/dbConnect');

router.route('/addUser')
	.get(function(req,res){
		res.render('addUser',{ title:'新增用户页面' });
		console.log('新增用户页面')						
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.addUserName,function(result){
			if(result[0] !== undefined){
				res.send('该用户名已经被使用');
			}else{
				client = sql.connect();
				sql.insertUser(client,req.body.addUserName,req.body.addPassword,function(err){
					if(err){
						throw err;
					}
					client = sql.connect();
					sql.selectAllUsers(client,function(result){
						var userList = JSON.stringify(result)
						res.render('users',{ title:'修改之后用户',user:userList });
						console.log('修改用户成功')		
					})
				});
			}
		})		
	});


module.exports = router;