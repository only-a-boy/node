var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.post('/selectCar',function(req,res){
	client = sql.connect();
	sql.queryCarInfo(client,req.body.vin,req.body.engineNo,req.body.model,req.body.color,function(result){	
		var carList = JSON.stringify(result)
		console.log(carList);
		res.send(carList)		
	})
})


module.exports = router;