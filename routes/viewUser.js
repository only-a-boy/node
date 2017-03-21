var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var sql = require('dao/dbConnect');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

router.route('/viewUser')
	.get(function(req,res){
			res.render('viewUser',{ title:"请选择一个用户" })
		})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.VUser,function(result){
				
				var userList = JSON.stringify(result)
				res.send(userList)
								
				// res.render('viewUser',{ title:'查看用户',user:userList });
				console.log('查看用户成功')
			});
		})
		
	


module.exports = router;