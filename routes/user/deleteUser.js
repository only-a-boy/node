var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/delUser')
	.post(function(req,res){
		client = sql.connect();
		sql.deleteUser(client,req.body.username,function(err){
			if(err){
				res.send(err)
			}else{
				res.send(true)
			}
		})
	})

module.exports = router;
