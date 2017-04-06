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
