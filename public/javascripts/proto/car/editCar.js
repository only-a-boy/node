$.getUrlParam = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null){
    return decodeURI(r[2]);
  }
  return null;
}      

var vin = $.getUrlParam('vin') 
$.ajax({
  url:"/editCar",
  type:"POST",
  data:{
    vin:vin
  },
  async:true,
  cache:false,
  dataType:"text",
  success:function(data){
    if(data){
      var {car_id,vin,engine_no,model,color,address,car_card,city_name,model_year,purchase_date,car_type,memo,status,create_user_id,create_time} = JSON.parse(data)[0]
      $("#carId").html(car_id)
      $("#vin").html(vin)
      $("#engineNo").val(engine_no)
      $("#model").val(model)
      $("#color").val(color)
      $("#address").val(address)
      $("#carCard").val(car_card)
      $("#cityName").val(city_name)
      $("#modelYear").val(model_year)
      $("#purchaseDate").val(purchase_date)
      $("#carType").val(car_type)
      $("#memo").val(memo)
      $("#status").val(status)
      $("#createUserId").val(create_user_id)
      $("#createTime").val(create_time)
    }else{
      alert("数据传输错误！")
    }
  }
})

$("#confirm").click(function(){
  $.ajax({
    url:"/updateCar",
    type:"POST",
    data:{
      carId:$("#carId").html(),
      vin: $("#vin").html(),
      engineNo:$("#engineNo").val(),
      model:$("#model").val(),
      color:$("#color").val(),
      address:$("#address").val(),
      carCard: $("#carCard").val(),
      cityName:$("#cityName").val(),
      modelYear:$("#modelYear").val(),
      purchaseDate:$("#purchaseDate").val(),
      carType:$("#carType").val(),
      memo:$("#memo").val(),
      status:$("#status").val(),
      createUserId:$("#createUserId").val(),
      createTime:$("#createTime").val()
    },
    async:true,
    cache:false,
    dataType:"text",
    success:function(data){
      if(data){
        alert("修改车辆信息成功")
        location.href = "/car"
      }
    }
  })
})
