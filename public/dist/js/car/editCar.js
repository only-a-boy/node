"use strict";var vin=$.getUrlParam("vin");$.ajax({url:"/editCar",type:"POST",data:{vin:vin},async:!0,cache:!1,dataType:"text",success:function(a){if(a){var e=JSON.parse(a)[0],r=e.car_id,c=e.vin,t=e.engine_no,l=e.model,s=e.color,v=e.address,d=e.car_card,i=e.city_name,m=e.model_year,o=e.purchase_date,n=e.car_type,u=e.memo,y=e.status,p=e.create_user_id,h=e.create_time;$("#carId").html(r),$("#vin").html(c),$("#engineNo").val(t),$("#model").val(l),$("#color").val(s),$("#address").val(v),$("#carCard").val(d),$("#cityName").val(i),$("#modelYear").val(m),$("#purchaseDate").val(o),$("#carType").val(n),$("#memo").val(u),$("#status").val(y),$("#createUserId").val(p),$("#createTime").val(h)}else alert("数据传输有错误!")}}),$("#confirmCar").click(function(){$.ajax({url:"/updateCar",type:"POST",data:{carId:$("#carId").html(),vin:$("#vin").html(),engineNo:$("#engineNo").val(),model:$("#model").val(),color:$("#color").val(),address:$("#address").val(),carCard:$("#carCard").val(),cityName:$("#cityName").val(),modelYear:$("#modelYear").val(),purchaseDate:$("#purchaseDate").val(),carType:$("#carType").val(),memo:$("#memo").val(),status:$("#status").val(),createUserId:$("#createUserId").val(),createTime:$("#createTime").val()},async:!0,cache:!1,dataType:"text",success:function(a){"true"==a&&(alert("修改车辆信息成功"),location.href="/car")}})});