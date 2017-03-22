var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var sql = require('dao/dbConnect');
// var sql = require('/dao/dbConnect');
var urlencodedParser = bodyParser.urlencoded({ extended : false})



router.get('/', function(req, res) {
	if(req.cookies.islogin){
		req.session.islogin = req.cookies.islogin;
	}

	if(req.session.islogin){
		res.locals.islogin = req.session.islogin;
	}
  	res.render('index', { title: 'Home !',test:res.locals.islogin });
});


router.get('/logout', function(req, res) {
	res.clearCookie('islogin');
	req.session.destroy();
   res.redirect('/');
});


router.get("/session",function(req, res) {
    console.log("user in session");
    console.log(req.session.user);
    res.json({user:req.session.user});
    res.end();
})



module.exports = router;
