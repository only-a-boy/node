"use strict";$("#selUserBtn").click(function(){$.ajax({url:"/selectUser",data:{username:$("#selectUser").val()},async:!0,cache:!1,type:"POST",dataType:"text",success:function(e){if(e){e=JSON.parse(e);for(var t="",n=0;n<e.length;n++){var a=e[n],s=a.id,r=a.username;t+="\n            <tr><td><input type='checkbox' name='userCheckBox' value="+r+"></td>\n              <td>"+s+"</td>\n              <td>"+r+"</td>\n              <td>"+a.password+"</td> \n            </tr>\n        "}$("#userData").html(t),showInfoList("#userInfo tr","#btn00","#btn01","#btn02","#btn03","#btn04","#btn05","#count0","#pageSize0","#pageSizeSet0","#changePage0")}else alert("数据传输有错误!")}})});