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
		res.render('car/viewCar' ,{ title:"查看车辆" })
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectCarInfo(client,req.body.vin,function(result){
				var carsList = JSON.stringify(result)
				res.send(carsList)
				console.log('查看车辆成功')
			});
		})

		

module.exports = router;