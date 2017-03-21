var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var sql = require('dao/dbConnect');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

router.route('/delUser')
	.get(function(req,res){
		
	})

	.post(function(req,res){
		client = sql.connect();
		sql.deleteUser(client,req.body.deleteUser,function(err){
			client = sql.connect();
			sql.selectAllUsers(client,function(result){
				var userList = JSON.stringify(result)
				res.render('users',{ title:'删除之后用户',user:userList });
				console.log('删除用户成功')				
			})
		})
	})

module.exports = router;
