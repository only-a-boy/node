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

