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

