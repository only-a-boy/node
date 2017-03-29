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
  url:"/viewCar",
  type:"POST",
  data:{
    vin:vin
  },
  async:true,
  cache:false,
  dataType:"text",
  success:function(data){   
    var {car_id,vin,engine_no,model,color,address,car_card,city_name,model_year,purchase_date,car_type,memo,status,create_user_id,create_time} = JSON.parse(data)[0]
    $("#carId").html(car_id)
    $("#vin").html(vin)
    $("#engineNo").html(engine_no)
    $("#model").html(model)
    $("#color").html(color)
    $("#address").html(address)
    $("#carCard").html(car_card)
    $("#cityName").html(city_name)
    $("#modelYear").html(model_year)
    $("#purchaseDate").html(purchase_date)
    $("#carType").html(car_type)
    $("#memo").html(memo)
    $("#status").html(status)
    $("#createUserId").html(create_user_id)
    $("#createTime").html(create_time)
  }
})
