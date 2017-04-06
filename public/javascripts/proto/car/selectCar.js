$("#selCarBtn").click(function(){
  $.ajax({
    url:"/selectCar",
    data:{
      vin: $("#selectVin").val(),
      engineNo: $("#selectEngineNo").val(),
      model: $("#selectModel").val(),
      color: $("#selectColor").val(),
    },
    async:true,
    cache:false,
    type:"POST",
    dataType:"text",
    success:function(data){
      if(data){
        data = JSON.parse(data);
        var tmp="";
        for(let i = 0;i < data.length;i++){
          var {car_id,vin,engine_no,model,color,address,car_card,city_name,model_year,purchase_date,memo} = data[i]
          tmp += `
            <tr>
              <td><input type="checkbox" name="carCheckBox" value= ${ vin }></td>
              <td>${ car_id }</td>
              <td>${ vin }</td>
              <td>${ engine_no }</td>
              <td>${ model }</td>
              <td>${ color }</td>
              <td>${ address }</td>
              <td>${ car_card }</td>
              <td>${ city_name }</td>
              <td>${ model_year }</td>
              <td>${ purchase_date }</td>
              <td>${ memo }</td>
            </tr>
        `}
        $("#carData").html(tmp);
        showInfoList("#carInfo tr","#btn0","#btn1","#btn2","#btn3","#btn4","#btn5","#count","#pageSize","#pageSizeSet","#changePage");
      }else{
        alert("数据传输有错误!")
      }
    }
  })
})