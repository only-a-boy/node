var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
// var sql = require('./routes/dao/dbConnect');

/* GET users listing. */
router.route('/car')
	.get(function(req,res){
		client = sql.connect();
		sql.selectAllCarInfo(client,function(result){
			if(result[0] === undefined){
				res.send('没有任何车辆');
			}else{
				var carsList = JSON.stringify(result)
				res.render('car',{ title:'这里是GET车辆中心',car:carsList })
			}
		})
	})

	.post(function(req,res){
		client = sql.connect();
		sql.selectAllCarInfo(client,function(result){
			if(result[0] === undefined){
				res.send('没有任何车辆');
			}else{
				var carsList = JSON.stringify(result)
				res.render('car',{ title:'这里是POST车辆中心',car:carsList })
			}
		})
	})

module.exports = router;
