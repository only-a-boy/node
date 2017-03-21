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
		res.render('addCar',{ title:"车辆新增页面" })
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectCarInfo(client,req.body.addVin,function(result){
			if(req.body.addVin == null){
				res.send("车辆VIN不能为空")
			}
			if(result[0] !== undefined){
				res.send('该车辆VIN已经被使用');
			}else{
				client = sql.connect();
				sql.insertCarInfo(client,req.body.addVin,req.body.addEngineNo,req.body.addModel,req.body.addColor,req.body.addAddress,req.body.addCarCard,req.body.addCityName,req.body.addModelYear,req.body.addPurchaseDate,function(err){
					if(err){
						throw err;
					}
				res.render('addCar',{ title:'新增车辆成功'});
				console.log('新增车辆成功')
				});
			}
		})
	});
		
	


module.exports = router;