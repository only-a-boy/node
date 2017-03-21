var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
// var sql = require('./routes/dao/dbConnect');

router.post('/selectCar',function(req,res){
	client = sql.connect();
	sql.queryCarInfo(client,req.body.selectVin,req.body.selectEngineNo,req.body.selectModel,req.body.selectColor,function(result){	
		var carsList = JSON.stringify(result)
		console.log(carsList);
		res.render('car',{ title:'车辆信息',car:carsList })		
	})
})


module.exports = router;