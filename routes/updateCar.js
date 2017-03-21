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
		sql.updateCarInfo(client,req.body.updateEngineNo,req.body.updateModel,req.body.updateColor,req.body.updateAddress,req.body.updateCarCard,req.body.updateCityName,req.body.updateModelYear,req.body.updatePurchaseDate,req.body.updateCarType,req.body.updateMemo,req.body.updateStatus,req.body.updateCreateUserId,req.body.updateCreateTime,req.body.updateVin,function(result){
				client = sql.connect();
				sql.selectAllCarInfo(client,function(result){
					var carsList = JSON.stringify(result)
					res.render('car',{ title:'修改之后车辆',car:carsList });
					console.log('修改车辆成功')					
				})
			})	
		})

		
	
module.exports = router;