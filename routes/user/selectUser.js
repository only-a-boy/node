var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.post('/selectUser',function(req,res){
	client = sql.connect();
	sql.selectUser(client,req.body.username,function(result){	
		var userList = JSON.stringify(result)
		console.log(userList);
		res.send(userList)		
	})
})


module.exports = router;