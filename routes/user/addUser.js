var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/addUser')
	.get(function(req,res){
		res.render('user/addUser',{ title:'新增用户页面' });				
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.username,function(result){
			if(result[0] == undefined){
				client = sql.connect();
				sql.insertUser(client,req.body.username,req.body.password,function(err){
					if(err){
						res.send("false1")
					}else{
						res.send("true")
					}
				})	
			}else{
				res.send("false2")
			}
		});
	})


module.exports = router;

	
