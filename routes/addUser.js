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
		res.render('addUser',{ title:'新增用户页面' });				
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.username,function(result){
			if(result[0] == undefined){
				client = sql.connect();
				sql.insertUser(client,req.body.username,req.body.password,function(err){
					if(err){
						res.send(err)
					}else{
						res.send(true)
					}
				})	
			}else{

			}
		});
	})


module.exports = router;

	
