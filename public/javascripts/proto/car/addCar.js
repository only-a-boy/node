$("#addCar").click(function(e) {
    e.preventDefault();
    $.ajax({
        url: "/addCar",
        data: {
            addVin: $("#addVin").val(),
            addEngineNo: $("#addEngineNo").val(),
            addModel: $("#addModel").val(),
            addColor: $("#addColor").val(),
            addAddress: $("#addAddress").val(),
            addCarCard: $("#addCarCard").val(),
            addCityName: $("#addCityName").val(),
            addModelYear: $("#addModelYear").val(),
            addPurchaseDate: $("#addPurchaseDate").val(),
            addCarType: $("#addCarType").val(),
            addMemo: $("#addMemo").val(),
            addStatus: $("#addStatus").val(),
            addCreateUserId: $("#addCreateUserId").val(),
            addCreateTime: $("#addCreateTime").val(),
        },
    async: true,  
    cache: false,  
    type: "POST",
    dataType: "text",   
    success: function(data){ 
            if(data == "true"){
              alert("新增车辆成功")
              location.href="/users" 
            }else if(data == "false1"){
                alert("车辆Vin不能为空");
            }else{
                alert("已有此车辆Vin")
            }
        }
    })
})