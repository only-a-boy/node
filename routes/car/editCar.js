var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('./routes/dao/dbConnect');

router.route('/editCar')
	.get(function(req,res){
		res.render("car/editCar",{ title : "修改车辆"})	 
	})
		
	.post(function(req,res){
		client = sql.connect();
		sql.selectCarInfo(client,req.body.vin,function(result){
			var carsList = JSON.stringify(result)
			res.send(carsList)
		})
	})


		
	
module.exports = router;