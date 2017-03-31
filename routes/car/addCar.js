var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/addCar')
	.get(function(req,res){
		res.render('car/addCar',{ title:"车辆新增页面" })
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectCarInfo(client,req.body.addVin,function(result){
			if(result[0] == undefined){
				client = sql.connect();
				sql.insertCarInfo(client,req.body.addVin,req.body.addEngineNo,req.body.addModel,req.body.addColor,req.body.addAddress,req.body.addCarCard,req.body.addCityName,req.body.addModelYear,req.body.addPurchaseDate,req.body.addCarType,req.body.addMemo,req.body.addStatus,req.body.addCreateUserId,req.body.addCreateTime,function(err){
					if(err){
						res.send("err")
					}else{
						res.send("true")
					}
				})	
			}else{
				res.send("false")
			}
		})
	});
		
	


module.exports = router;