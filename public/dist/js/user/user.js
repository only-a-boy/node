"use strict";$(document).ready(function(){$.ajax({url:"/users",async:!0,cache:!1,type:"POST",dataType:"text",success:function(e){if(e){e=JSON.parse(e);for(var t="",a=0;a<e.length;a++){var n=e[a],r=n.id,c=n.username;t+="\n            <tr><td><input type='checkbox' name='userCheckBox' value="+c+"></td>\n              <td>"+r+"</td>\n              <td>"+c+"</td>\n              <td>"+n.password+"</td> \n            </tr>\n        "}$("#userData").html(t),showInfoList("#userInfo tr","#btn00","#btn01","#btn02","#btn03","#btn04","#btn05","#count0","#pageSize0","#pageSizeSet0","#changePage0")}else alert("数据传输有错误!")}})}),$("#viewUserClick").click(function(){for(var e=$("input[name='userCheckBox']"),t="",a=0,n=0;n<e.length;n++)e[n].checked&&(t+=e[n].value,a++);1==a?location.href=encodeURI("/viewUser?username="+t):0==a?alert("您还没有选择用户"):alert("请只选择一个用户")}),$("#editUserClick").click(function(){for(var e=$("input[name='userCheckBox']"),t="",a=0,n=0;n<e.length;n++)e[n].checked&&(t+=e[n].value,a++);1==a?location.href=encodeURI("/editUser?username="+t):0==a?alert("您还没有选择用户"):alert("请只选择一个用户")}),$("#delUserClick").click(function(){for(var e=$("input[name='userCheckBox']"),t="",a=0,n=0;n<e.length;n++)e[n].checked&&(t+=e[n].value,a++);1==a?$.ajax({url:"/delUser",data:{username:t},async:!0,cache:!1,type:"POST",dataType:"text",success:function(e){"trueUser"==e?(alert("删除用户成功"),location.href="/users"):alert("数据传输有错误!")}}):0==a?alert("您还没有选择用户"):alert("请只选择一个用户")});