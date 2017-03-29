// $("#addUser").click(function(e) {
//     e.preventDefault();
//     $.ajax({
//         url: "/addUser",
//         data: {
//             username: $("#addUserName").val(),
//             password: $("#addPassword").val()
//         },
//     async: true,  
//     cache: false,  
//     type: "POST",
//     dataType: "text",   
//     success: function(data){ 
//             if(data == "true"){
//               alert("新增用户成功")
//               location.href="/users" 
//             }else if(data == "false1"){
//                 alert("用户名不能为空");
//             }else{
//                 alert("已有此用户名")
//             }
//         }
//     })
// })
