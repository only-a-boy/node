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
