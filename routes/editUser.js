var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var sql = require('dao/dbConnect');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

router.route('/editUser')
	.get(function(req,res){
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectUser(client,req.body.EUser,function(result){
			var userList = JSON.stringify(result)
			res.render('editUser',{ title:'修改车辆',user:userList });
		})
	})

module.exports = router;
