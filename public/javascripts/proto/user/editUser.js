// $.getUrlParam = function (name) {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//   var r = window.location.search.substr(1).match(reg);
//   if (r != null){ 
//     return decodeURI(r[2]);
//   } 
//   return null;
// }                

// var username = $.getUrlParam('username')

// $.ajax({
//   url: "/editUser",
//   data: {
//       username: username
//   },
//   async: true,  
//   cache: false,  
//   type: "POST",
//   dataType: "text",   
//   success: function(data){ 
//     if(data){
//       let {id,username,password} = JSON.parse(data)[0]
//       $("#id").html(id);
//       $("#username").html(username);
//       $("#password").val(password);    
//     }else{
//         alert("数据传输有错误！");
//     }
//   }
// })          

// $("#confirm").click(function() {

//   $.ajax({
//     url: "/updateUser",
//     data: {
//         username: username,
//         password:$("#password").val()
//     },
//     async: true,  
//     cache: false,  
//     type: "POST",
//     dataType: "text",   
//     success: function(data){ 
//         if(data){
//           alert("修改成功")
//           location.href="/users";   
//         }else{
//             alert("数据传输有错误！");
//         }
//       }
//     });      
//   });

