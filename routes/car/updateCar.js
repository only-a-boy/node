var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.post('/updateCar',function(req,res){
	client = sql.connect();
	sql.updateCarInfo(client,req.body.engineNo,req.body.model,req.body.color,req.body.address,req.body.carCard,req.body.cityName,req.body.modelYear,req.body.purchaseDate,req.body.carType,req.body.memo,req.body.status,req.body.createUserId,req.body.createTime,req.body.vin,function(err){
			if(err){
				res.send(err)
			}else{
				res.send("true")
				console.log('修改车辆成功')
			}								
		})	
	})

		
	
module.exports = router;