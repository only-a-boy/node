$("#login").click(function(e){
  e.preventDefault();
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
})

$("#register").click(function(){
  location.href = "/register"
})
