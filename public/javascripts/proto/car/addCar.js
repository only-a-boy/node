$("#addCar").click(function(e) {
    e.preventDefault();
    var addVin =  $("#addVin").val();
    
    if(addVin == ""){
        alert("车辆vin不能为空")
    }else{
        $.ajax({
            url: "/addCar",
            data: {
                addVin: addVin,
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
                  location.href="/car" 
                }else if(data == "false"){
                    alert("已有此车辆vin");
                }else{
                    alert("数据传输错误！")
                }
            }
        })  
    }
    
})