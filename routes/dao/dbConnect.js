var mysql = require('mysql');

function connectServer(){
	var client = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'saber',
		port : '3306',
		database : 'index'
	});
	return client;
}


function selectUser(client,username,callback) {
    var promise = new Promise(function() {
        var result = null;
        client.connect();
        client.query("SELECT * FROM users WHERE (username = '" + username + "' or '" + username + "'='') and 1 = 1",username,function(err,result) { 
	        if(err){
				throw err;
			}
		callback(result);
		console.log('--------------------------SELECT----------------------------');
		console.log('SELECT ID:',result);       
		console.log('-----------------------------------------------------------------'); 
    	});
        client.end(); 
    })

    return promise; 
}

function selectAllUsers(client,callback){
	var promise = new Promise(function(){
		var result = null;
		client.connect();
		client.query('SELECT * FROM users',function(err,result){
			if(err){
				throw err;
			}
		callback(result);
		})
		client.end();
	})
	
	return promise;
}



function selectCarInfo(client,vin,callback) {
    var promise = new Promise(function() {
        var result = null;
        var mysql = require('mysql');
        client.connect();
        client.query('SELECT * FROM car_info WHERE vin = ? ',vin,function(err,result) { 
          if(err){
			throw err;
		  }
		callback(result);
		console.log('--------------------------SELECT----------------------------');
		console.log('SELECT ID:',result);       
		console.log('-----------------------------------------------------------------'); 
          });
        client.end(); 
    })

    return promise; 
}

function queryCarInfo(client,vin,engineNo,model,color,callback){
	var promise = new Promise(function(){
		var result = null;
		var mysql = require('mysql');
		client.connect();
		client.query("SELECT * FROM car_info WHERE (vin = '" + vin + "' or '" + vin + "'='') and (engine_no = '" + engineNo + "' or '" + engineNo + "'='') and (model = '" + model + "' or '" + model + "'='') and (color = '" + color + "' or '" + color + "'='') and 1 = 1",[vin,engineNo,model,color],function(err,result){
			if(err){
				throw err;
			}
			callback(result);
			console.log('--------------------------SELECT----------------------------');
			console.log('SELECT ID:',result);       
			console.log('-----------------------------------------------------------------'); 
		})
		client.end();
	})
	return promise;
}


function selectAllCarInfo(client,callback) {
    var promise = new Promise(function() {
        var result = null;
        var mysql = require('mysql');
        client.connect();
        client.query('SELECT * FROM car_info',function(err,result) { 
          if(err){
			throw err;
		}
		callback(result);
          } 
        );
        client.end(); 
    })

    return promise; 
}


function updateUser(client,username,password,callback) {
    var promise = new Promise(function() {
        var result = null;
        client.connect();
        client.query("UPDATE users SET password =  '" + password + "'WHERE username = '" + username +"'",[username,password],function(err,result) { 
          if(err){
          	console.log("error:" + err.message);
			return err;
		}
		callback(result);
		console.log('--------------------------UPDATE----------------------------');
		console.log('UPDATE ID:',result);       
		console.log('-----------------------------------------------------------------'); 
          } 
        );
        client.end(); 
    })

    return promise; 
}

function updateCarInfo(client,engineNo,model,color,address,carCard,cityName,modelYear,purchaseDate,carType,memo,status,createUserId,createTime,vin,callback){
	var promise = new Promise(function(){
		var result = null;
		client.connect();
		client.query('UPDATE car_info SET engine_no = ?,model = ?,color = ?,address = ?,car_card = ?,city_name = ?,model_year = ?,purchase_date = ?,car_type = ?,memo = ?,status = ?,create_user_id = ?,create_time = ? where vin = ?',[engineNo,model,color,address,carCard,cityName,modelYear,purchaseDate,carType,memo,status,createUserId,createTime,vin],function(err,result){
			if(err){
				console.log("error:" + err.message);
				return err;
			}
			callback(result);
			console.log('--------------------------UPDATE CAR----------------------------');
			console.log('UPDATE ID:',result);       
			console.log('-----------------------------------------------------------------')
		});
		client.end();
	})
	return promise;
}


function deleteUser(client,username,callback) {
    var promise = new Promise(function() {
        var result = null;
        client.connect();
        client.query('DELETE FROM users WHERE username = ? ',username,function(err,result) { 
	        if(err){
	          	console.log("error:" + err.message);
				return err;
			}
			callback(err);
			console.log('--------------------------DELETE----------------------------');
			console.log('DELETE ID:',result);       
			console.log('-----------------------------------------------------------------'); 
	       });
        client.end(); 
    })
    return promise; 
}

function deleteCar(client,vin,callback) {
    var promise = new Promise(function() {
        var result = null;
        client.connect();
        client.query('DELETE FROM car_info where vin = ?',vin,function(err,result) { 
	        if(err){
	          	console.log("error:" + err.message);
				return err;
			}
			callback(err);
			console.log('--------------------------DELETE----------------------------');
			console.log('DELETE ID:',result);       
			console.log('-----------------------------------------------------------------'); 
	   	});
    	client.end(); 
    })
    return promise; 
}




function handleDisconnect() {
	connection = mysql.createConnection(client);
	connection.connect(function(err) {
		if (err) {
			console.log('进行断线重连：' + new Date());
			setTimeout(handleDisconnect, 2000); //2秒重连一次
			return;
		}
		console.log('连接成功');
	});

	connection.on('error', function(err) {
		console.log('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}


function insertUser(client,username,password,callback) {
    var promise = new Promise(function() {
        var result = null;
        client.connect();
        client.query('INSERT INTO users(username,password) value(?,?)',[username,password],function(err,result) { 
           if(err){
				console.log("error:" + err.message);
				return err;
			}
			callback(err);
			console.log('--------------------------INSERT----------------------------');
			console.log('INSERT ID:',result);       
			console.log('-----------------------------------------------------------------')
         });
        client.end(); 
    })

    return promise; 
}


function insertCarInfo(client,vin,engineNo,model,color,address,carCard,cityName,modelYear,purchaseDate,callback){
	var promise = new Promise(function(){
		var result = null;
		client.connect();
		client.query('INSERT INTO car_info(vin,engine_no,model,color,address,car_card,city_name,model_year,purchase_date) value(?,?,?,?,?,?,?,?,?)',[vin,engineNo,model,color,address,carCard,cityName,modelYear,purchaseDate],function(err,result){
			if(err){
				console.log("error:" + err.message);
				return err;
			}
			callback(err);
			console.log('--------------------------INSERT CAR----------------------------');
			console.log('INSERT ID:',result);       
			console.log('-----------------------------------------------------------------')
		});
		client.end();
	})
	return promise;
}



exports.connect = connectServer;
exports.selectUser = selectUser;
exports.selectAllUsers = selectAllUsers;
exports.selectCarInfo = selectCarInfo;
exports.selectAllCarInfo = selectAllCarInfo;
exports.insertUser = insertUser; 
exports.insertCarInfo = insertCarInfo;
exports.deleteUser = deleteUser;
exports.deleteCar = deleteCar;
exports.updateUser = updateUser;
exports.updateCarInfo = updateCarInfo;
exports.queryCarInfo = queryCarInfo;

