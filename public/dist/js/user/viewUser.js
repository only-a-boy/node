"use strict";var username=$.getUrlParam("username");$.ajax({url:"/viewUser",data:{username:username},async:!0,cache:!1,type:"POST",dataType:"text",success:function(e){if(e){var a=JSON.parse(e)[0],s=a.id,r=a.username,t=a.password;$("#id").html(s),$("#username").html(r),$("#password").html(t)}else alert("数据传输有错误")}});