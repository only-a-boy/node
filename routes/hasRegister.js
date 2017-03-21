var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
// var sql = require('./routes/dao/dbConnect');

var urlencodedParser = bodyParser.urlencoded({ extended : false})

// router.post('/hasRegister',urlencodedParser,function(req,res,next){
router.get('/hasRegister',function(req,res,next){
	// response = {
	// 	user_name : req.body.username,
	// 	password : req.body.password2
	// }
	// console.log(response)
	// res.end(JSON.stringify(response));
	res.render('hasRegister',{ title : '要先去登录一下' });
});

module.exports = router;
