"use strict";$("#addCar").click(function(a){a.preventDefault();var d=$("#addVin").val();""==d?alert("车辆vin不能为空"):$.ajax({url:"/addCar",data:{addVin:d,addEngineNo:$("#addEngineNo").val(),addModel:$("#addModel").val(),addColor:$("#addColor").val(),addAddress:$("#addAddress").val(),addCarCard:$("#addCarCard").val(),addCityName:$("#addCityName").val(),addModelYear:$("#addModelYear").val(),addPurchaseDate:$("#addPurchaseDate").val(),addCarType:$("#addCarType").val(),addMemo:$("#addMemo").val(),addStatus:$("#addStatus").val(),addCreateUserId:$("#addCreateUserId").val(),addCreateTime:$("#addCreateTime").val()},async:!0,cache:!1,type:"POST",dataType:"text",success:function(a){"true"==a?(alert("新增车辆成功"),location.href="/car"):"false"==a?alert("已有此车辆vin"):alert("数据传输错误！")}})});