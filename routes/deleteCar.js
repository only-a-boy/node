var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');


router.route('/delCar')
	.get(function(req,res){
		// client = sql.connect();
		// sql.deleteCar(client,vin,function(result){
		// 	client = sql.connect();
		// 	sql.selectAllCarInfo(client,function(result){
		// 		var carsList = JSON.stringify(result)
		// 		res.render('car',{ title:'删除之后车辆',car:carsList });
		// 		console.log('删除车辆成功')				
		// 	})
		// })
	})

	.post(function(req,res){
		client = sql.connect();
		sql.deleteCar(client,req.body.deleteVin,function(err){
			client = sql.connect();
			sql.selectAllCarInfo(client,function(result){
				var carsList = JSON.stringify(result)
				res.render('car',{ title:'删除之后车辆',car:carsList });
				console.log('删除车辆成功')				
			})
		})
	})

module.exports = router;
