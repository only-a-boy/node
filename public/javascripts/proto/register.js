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