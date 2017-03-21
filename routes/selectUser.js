var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var sql = require('dao/dbConnect');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');

router.post('/selectUser',function(req,res){
	client = sql.connect();
	sql.selectUser(client,req.body.selectUser,function(result){	
		var usersList = JSON.stringify(result)
		console.log(usersList);
		res.render('users',{ title:'这里是POST用户中心',user:usersList })		
	})
})


module.exports = router;