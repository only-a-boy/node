var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var sql = require('dao/dbConnect');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

router.post('/updateUser',function(req,res){
		client = sql.connect();
		sql.updateUser(client,req.body.updateUsername,req.body.updatePassword,function(result){
				client = sql.connect();
				sql.selectAllUsers(client,function(result){
					var userList = JSON.stringify(result)
					res.render('users',{ title:'修改之后用户',user:userList });
					console.log('修改用户成功')					
				})
			})	
		})

		
	
module.exports = router;