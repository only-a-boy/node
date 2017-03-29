$.getUrlParam = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null){
    return decodeURI(r[2]);
  }
  return null;
}      

var username = $.getUrlParamUser('username')

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
        alert("数据传输有错误！");
    }
  }
})          
