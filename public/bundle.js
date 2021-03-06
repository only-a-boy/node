$.getUrlParam = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null){
    return decodeURI(r[2]);
  }
  return null;
}      

var isCheckAll = false;  
function swapCheck() {  
    if (isCheckAll) {  
        $("input[type='checkbox']").each(function() {  
            this.checked = false;  
        });  
        isCheckAll = false;  
    }else{  
        $("input[type='checkbox']").each(function() {  
            this.checked = true;  
        });  
      isCheckAll = true;  
    }  
}  


function showList(id,btn0,btn1,btn2,btn3,btn4,btn5,count,pageSizeNo,pageSizeSet,changePageNo){
  var pageSize = 10;    
  var curPage = 0;        
  var lastPage;       
  var direct = 0;       
  var len;            
  var page;           
  var begin;
  var end;            
  this.display = function(){  
    len = $(id).length - 1;    
    page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;
    curPage = 1;    
    displayPage(1);

    $(btn0).html("当前 " + curPage + "/" + page + " 页    每页 ")
    $(count).html("数据总量 " + len + "   ")  
    $(pageSizeNo).val(pageSize);

    $(btn1).click(function(){    
        curPage = 1;
        direct = 0;
        displayPage();
    });
    $(btn2).click(function(){   
        direct =- 1;
        displayPage();
    });
    $(btn3).click(function(){   
        direct = 1;
        displayPage();
    });
    $(btn4).click(function(){  
        curPage = page;
        direct = 0;
        displayPage();
    });
    $(btn5).click(function(){    
        curPage = $(changePageNo).val() * 1;
        if (!/^[1-9]\d*$/.test(curPage)) {
            alert("请输入正整数");
            return ;
        }
        if (curPage > page) {
            alert("超出数据页面");
            return ;
        }
        direct = 0;
        displayPage();
    });

     
    $(pageSizeSet).click(function setPageSize(){    
      pageSize = $(pageSizeNo).val();    
      if (!/^[1-9]\d*$/.test(pageSize)) {
          alert("请输入正整数");
          return ;
      }
      len = $(id).length - 1;
      page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;
      curPage = 1;       
      direct = 0;       
      displayPage();
    });
  };

  function displayPage(){
    if(curPage <= 1 && direct == -1){
        direct = 0;
        alert("已经是第一页了");
        return;
    } else if (curPage >= page && direct == 1) {
        direct = 0;
        alert("已经是最后一页了");
        return ;
    }

    lastPage = curPage;

    if (len > pageSize) {
        curPage = ((curPage + direct + len) % len);
    } else {
        curPage = 1;
    }

    if(curPage == 0){
      curPage = page;
    }

   
    $(btn0).html("当前 " + curPage + "/" + page + " 页    每页 ");       

    begin = (curPage - 1) * pageSize + 1;
    end = begin + 1 * pageSize - 1;  

   
    if(end > len ){
      end = len;
    }
    $(id).hide();    
    $(id).each(function(i){    
        if((i >= begin && i <= end) || i == 0 )
          $(this).show();
    });

  }  

}


function showInfoList(id,btn0,btn1,btn2,btn3,btn4,btn5,count,pageSizeNo,pageSizeSet,changePageNo){
  var showlist = new showList(id,btn0,btn1,btn2,btn3,btn4,btn5,count,pageSizeNo,pageSizeSet,changePageNo);   
  return showlist.display(); 
}





$(document).ready(function(){
  $("#login").click(function(e){
    e.preventDefault();
    if($("#logUsername").val() == ""){
      alert("用户名不能为空")
    }else{
      $.ajax({
        url:"/login",
        type:"POST",
        data:{
          username: $("#logUsername").val(),
          password: $("#logPassword").val()
        },
        async:true,
        cache:false,
        dataType:"text",
        success:function(data){
          if(data == "false1"){
            alert("没有此用户")
          }
          if(data == "false2"){
            alert("密码错误")
          }
          if(data == "true"){
            location.href="/home"    
          }
        }
      })
    }
   
  })
}) 

$(document).ready(function(){
  $("#register").click(function(e){ 
    e.preventDefault();
    if($("#RegUsername").val() == "" || $("#RegPassword").val() == ""){
      alert("用户名或者密码不能为空")
    }else{

      $.ajax({
        url:"/register",
        type:"POST",
        data:{
          username: $("#RegUsername").val(),
          password: $("#RegPassword").val()
        },
        async:true,
        cache:false,
        dataType:"text",
        success:function(data){
          if(data == "false1"){
            alert("此用户名已经被使用")
          }
          if(data == "true"){
            alert("注册成功")
            location.href="/login"    
          }
        }
      })
    } 
  })
})
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
$(document).ready(function Car(){
  $.ajax({
    url:"/car",
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

$("#delCarClick").click(function(){
  var carCheckBox = $("input[name='carCheckBox']");
  var vin = "";
  var checkCount = 0;
  for(let i = 0;i < carCheckBox.length;i++){
    if(carCheckBox[i].checked){
      vin += carCheckBox[i].value
      checkCount++;
    }
  }
  if(checkCount == 1){
    $.ajax({
        url: "/delCar",
        data: {
            vin: vin
        },
        async: true,  
        cache: false,  
        type: "POST",
        dataType: "text",   
        success: function(data){ 
            if(data == "true"){
              alert("删除车辆成功")
              location.href="/car" 
            }else{
                alert("数据传输有错误!");
            }
        }
      });
  }else if(checkCount == 0){
    alert("您还没有选择车辆")
  }else{
    alert("请只选择一个车辆")
  }
})

$("#editCarClick").click(function(){
  var carCheckBox = $("input[name='carCheckBox']");
  var vin = "";
  var checkCount = 0;
  for(let i = 0;i < carCheckBox.length;i++){
    if(carCheckBox[i].checked){
      vin += carCheckBox[i].value
      checkCount++;
    }
  }
  if(checkCount == 1){
    location.href = encodeURI("/editCar?vin=" + vin)
  }else if(checkCount == 0){
    alert("您还没有选择车辆")
  }else{
    alert("请只选择一个车辆")
  }
})

$("#viewCarClick").click(function(){
  var carCheckBox = $("input[name='carCheckBox']");
  var vin = "";
  var checkCount = 0;
  for(let i = 0;i < carCheckBox.length;i++){
    if(carCheckBox[i].checked){
      vin += carCheckBox[i].value
      checkCount++;
    }
  }
  if(checkCount == 1){
    location.href = encodeURI("/viewCar?vin=" + vin);
  }else if(checkCount == 0){
    alert("您还没有选择车辆")
  }else{
    alert("请只选择一个车辆")
  }
})






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
      alert("数据传输有错误!")
    }
  }
})

$("#confirmCar").click(function(){
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
      if(data == "true"){
        alert("修改车辆信息成功")
        location.href = "/car"
      }
    }
  })
})

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

$("#addUser").click(function(e) {
    e.preventDefault();
    var username = $("#addUserName").val()
    if(username == ""){
        alert("用户名不能为空")
    }else{
        $.ajax({
        url: "/addUser",
        data: {
            username: username,
            password: $("#addPassword").val()
        },
        async: true,  
        cache: false,  
        type: "POST",
        dataType: "text",   
        success: function(data){ 
            if(data == "true"){
              alert("新增用户成功")
              location.href="/users" 
            }else if(data == "false"){
                alert("已有此用户名")
            }else{
                alert("数据传输错误")
            }
        }
    })
    }
    
})

var username = $.getUrlParam('username')
$.ajax({
  url: "/editUser",
  data: {
      username: username
  },
  async: true,  
  cache: false,  
  type: "POST",
  dataType: "text",   
  success: function(data){ 
    if(data){
      let {id,username,password} = JSON.parse(data)[0]
      $("#id").html(id);
      $("#username").html(username);
      $("#password").val(password);    
    }else{
        alert("数据传输有错误！");
    }
  }
})          

$("#confirmUser").click(function() {

  $.ajax({
    url: "/updateUser",
    data: {
        username: username,
        password:$("#password").val()
    },
    async: true,  
    cache: false,  
    type: "POST",
    dataType: "text",   
    success: function(data){ 
        if(data == "true"){
          alert("修改成功")
          location.href="/users";   
        }else{
            alert("数据传输有错误!");
        }
      }
    });      
  });


$("#selUserBtn").click(function selUserBtn() {
  $.ajax({
    url:"/selectUser",
    data: {
      username: $("#selectUser").val()
    },
    async:true,
    cache:false,
    type:"POST",
    dataType:"text",
    success:function selUserAjax(data){
      if(data){
        data = JSON.parse(data);
        var tmp="";
        for(let i = 0;i < data.length;i++){
          var {id,username,password} = data[i]
          tmp +=`
            <tr><td><input type='checkbox' name='userCheckBox' value=${ username }></td>
              <td>${ id }</td>
              <td>${ username }</td>
              <td>${ password }</td> 
            </tr>
        `}
        $("#userData").html(tmp);
        showInfoList("#userInfo tr","#btn00","#btn01","#btn02","#btn03","#btn04","#btn05","#count0","#pageSize0","#pageSizeSet0","#changePage0");
      }else{
        alert("数据传输有错误!")
      }
    }
  })
})
$(document).ready(function(){
  $.ajax({
    url:"/users",
    async:true,
    cache:false,
    type:"POST",
    dataType:"text",
    success:function(data){
      if(data){
        data = JSON.parse(data);
        var tmp="";
        for(let i = 0;i < data.length;i++){
          var {id,username,password} = data[i]
          tmp +=`
            <tr><td><input type='checkbox' name='userCheckBox' value=${ username }></td>
              <td>${ id }</td>
              <td>${ username }</td>
              <td>${ password }</td> 
            </tr>
        `}
        $("#userData").html(tmp);
        showInfoList("#userInfo tr","#btn00","#btn01","#btn02","#btn03","#btn04","#btn05","#count0","#pageSize0","#pageSizeSet0","#changePage0");
      }else{
        alert("数据传输有错误!")
      }
    }
  })
})


$("#viewUserClick").click(function() {
	var userCheckBox = $("input[name='userCheckBox']");
	    var s = "";
	    var checkCount = 0;
	    for(let i = 0;i < userCheckBox.length;i++){
	      if(userCheckBox[i].checked){
	        s += userCheckBox[i].value
	        checkCount++;
	      }
	    }
	    if(checkCount == 1){
	      location.href = encodeURI("/viewUser?username=" + s);
	    }else if(checkCount == 0){
	      alert("您还没有选择用户")
	    }else{
	      alert("请只选择一个用户")
	    }
	});


$("#editUserClick").click(function(){
  var userCheckBox = $("input[name='userCheckBox']");
    var s = "";
    var checkCount = 0;
    for(let i = 0;i < userCheckBox.length;i++){
      if(userCheckBox[i].checked){
        s += userCheckBox[i].value
        checkCount++;
      }
    }
    if(checkCount == 1){
      location.href = encodeURI("/editUser?username=" + s);   
    }else if(checkCount == 0){
      alert("您还没有选择用户")
    }else{
      alert("请只选择一个用户")
    }
  });

$("#delUserClick").click(function() {
  var userCheckBox = $("input[name='userCheckBox']");
    var s = "";
    var checkCount = 0;
    for(let i = 0;i < userCheckBox.length;i++){
      if(userCheckBox[i].checked){
        s += userCheckBox[i].value
        checkCount++;
      }
    }
    if(checkCount == 1){

      $.ajax({
        url: "/delUser",
        data: {
            username: s
        },
        async: true,  
        cache: false,  
        type: "POST",
        dataType: "text",   
        success: function(data){ 
            if(data == "trueUser"){
              alert("删除用户成功")
              location.href="/users" 
            }else{
                alert("数据传输有错误!");
            }
        }
      });
    }else if(checkCount == 0){
      alert("您还没有选择用户")
    }else{
      alert("请只选择一个用户")
    }
  });


var username = $.getUrlParam('username')

$.ajax({
  url: "/viewUser",
  data: {
      username: username
  },
  async: true,  
  cache: false,  
  type: "POST",
  dataType: "text",   
  success: function(data){ 
    if(data){
      var {id,username,password} = JSON.parse(data)[0]
      $("#id").html(id);
      $("#username").html(username);
      $("#password").html(password);     
    }else{
        alert("数据传输有错误");
    }
  }
})          
