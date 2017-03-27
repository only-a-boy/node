var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/users')
	.get(function(req,res){
		res.render('users',{title:"这里是GET用户中心"})
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectAllUsers(client,function(result){			
			var usersList = JSON.stringify(result)
			console.log(usersList);
			res.send(usersList);			
		})
	})

module.exports = router;
