"use strict";$("#addUser").click(function(a){a.preventDefault();var e=$("#addUserName").val();""==e?alert("用户名不能为空"):$.ajax({url:"/addUser",data:{username:e,password:$("#addPassword").val()},async:!0,cache:!1,type:"POST",dataType:"text",success:function(a){"true"==a?(alert("新增用户成功"),location.href="/users"):"false"==a?alert("已有此用户名"):alert("数据传输错误")}})});