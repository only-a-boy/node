"use strict";$.getUrlParam=function(e){var a=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(a);return null!=t?decodeURI(t[2]):null};var vin=$.getUrlParam("vin");$.ajax({url:"/viewCar",type:"POST",data:{vin:vin},async:!0,cache:!1,dataType:"text",success:function(e){var a=JSON.parse(e)[0],t=a.car_id,r=a.vin,m=a.engine_no,c=a.model,l=a.color,n=a.address,s=a.car_card,d=a.city_name,h=a.model_year,i=a.purchase_date,o=a.car_type,u=a.memo,v=a.status,_=a.create_user_id,p=a.create_time;$("#carId").html(t),$("#vin").html(r),$("#engineNo").html(m),$("#model").html(c),$("#color").html(l),$("#address").html(n),$("#carCard").html(s),$("#cityName").html(d),$("#modelYear").html(h),$("#purchaseDate").html(i),$("#carType").html(o),$("#memo").html(u),$("#status").html(v),$("#createUserId").html(_),$("#createTime").html(p)}});