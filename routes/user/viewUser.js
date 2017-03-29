var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');

router.route('/viewUser')
	.get(function(req,res){
		res.render("user/viewUser",{ title:'查看用户成功'})
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.username,function(result){			
			var userList = JSON.stringify(result)
			res.send(userList)
			console.log('查看用户成功')	
		});
	})
		
	


module.exports = router;