var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/viewCar')
	.get(function(req,res){
		client = sql.connect();
		sql.selectCarInfo(client,req.body.viewVin,function(result){
				var carsList = JSON.stringify(result)
				res.render('viewCar',{ title:'查看车辆',carInfo:carsList });
				console.log('查看车辆成功')
			})
		})
		

	.post(function(req,res){
		client = sql.connect();
		sql.selectCarInfo(client,req.body.viewVin,function(result){
				var carsList = JSON.stringify(result)
				res.render('viewCar',{ title:'查看车辆',carInfo:carsList });
				console.log('查看车辆成功')
			});
		})

		

module.exports = router;