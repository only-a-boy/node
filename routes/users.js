var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var sql = require('dao/dbConnect');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

/* GET users listing. */
router.route('/users')
	.get(function(req,res){
		client = sql.connect();
		sql.selectAllUsers(client,function(result){
			if(result[0] === undefined){
				res.send('没有任何用户');
			}else{
				var usersList = JSON.stringify(result)
				console.log(usersList);
				res.render('users',{ title:'这里是GET用户中心',user:usersList })
			}
		})
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectAllUsers(client,function(result){
			if(result[0] === undefined){
				res.send('没有任何用户');
			}else{
				var usersList = JSON.stringify(result)
				console.log(usersList);
				res.render('users',{ title:'这里是POST用户中心',user:usersList })
			}
		})
	})

module.exports = router;
