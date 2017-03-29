// $(document).ready(function showUserList(){
//   $.ajax({
//     url:"/users",
//     async:true,
//     cache:false,
//     type:"POST",
//     dataType:"text",
//     success:function(data){
//       if(data){
//         data = JSON.parse(data);
//         var tmp="";
//         for(let i = 0;i < data.length;i++){
//           var {id,username,password} = data[i]
//           tmp +=`
//             <tr><td><input type='checkbox' name='userCheckBox' value=${ username }></td>
//               <td>${ id }</td>
//               <td>${ username }</td>
//               <td>${ password }</td> 
//             </tr>
//         `}
//         $("#userData").html(tmp);
//         display();
//       }else{
//         alert("数据传输有错误！")
//       }
//     }
//   })
// })


// $("#viewClick").click(function() {
//   var userCheckBox = $("input[name='userCheckBox']");
//     var s = "";
//     var checkCount = 0;
//     for(let i = 0;i < userCheckBox.length;i++){
//       if(userCheckBox[i].checked){
//         s += userCheckBox[i].value
//         checkCount++;
//       }
//     }
//     if(checkCount == 1){
//       location.href = encodeURI("/viewUser?username=" + s);
//     }else if(checkCount == 0){
//       alert("您还没有选择用户")
//     }else{
//       alert("请只选择一个用户")
//     }
//   });


// $("#editClick").click(function(){
//   var userCheckBox = $("input[name='userCheckBox']");
//     var s = "";
//     var checkCount = 0;
//     for(let i = 0;i < userCheckBox.length;i++){
//       if(userCheckBox[i].checked){
//         s += userCheckBox[i].value
//         checkCount++;
//       }
//     }
//     if(checkCount == 1){
//       location.href = encodeURI("/editUser?username=" + s);   
//     }else if(checkCount == 0){
//       alert("您还没有选择用户")
//     }else{
//       alert("请只选择一个用户")
//     }
//   });

// $("#delClick").click(function() {
//   var userCheckBox = $("input[name='userCheckBox']");
//     var s = "";
//     var checkCount = 0;
//     for(let i = 0;i < userCheckBox.length;i++){
//       if(userCheckBox[i].checked){
//         s += userCheckBox[i].value
//         checkCount++;
//       }
//     }
//     if(checkCount == 1){

//       $.ajax({
//         url: "/delUser",
//         data: {
//             username: s
//         },
//         async: true,  
//         cache: false,  
//         type: "POST",
//         dataType: "text",   
//         success: function(data){ 
//             if(data == "true"){
//               alert("删除用户成功")
//               location.href="/users" 
//             }else{
//                 alert("数据传输有错误！");
//             }
//         }
//       });
//     }else if(checkCount == 0){
//       alert("您还没有选择用户")
//     }else{
//       alert("请只选择一个用户")
//     }
//   });


// var isCheckAll = false;  
// function swapCheck() {  
//     if (isCheckAll) {  
//         $("input[type='checkbox']").each(function() {  
//             this.checked = false;  
//         });  
//         isCheckAll = false;  
//     } else {  
//         $("input[type='checkbox']").each(function() {  
//             this.checked = true;  
//         });  
//         isCheckAll = true;  
//     }  
// }  


// var pageSize = 10;    
// var curPage = 0;        
// var lastPage;       
// var direct = 0;       
// var len;            
// var page;           
// var begin;
// var end;
             
// function display(){  
//   len = $("#userInfo tr").length - 1;    
//   page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;
//   curPage = 1;    
//   displayPage(1);


//   $("#btn0").html("当前 " + curPage + "/" + page + " 页    每页 ");
//   $("#count").html("数据总量 " + len + "   ");  
//   $("#pageSize").val(pageSize);

//   $("#btn1").click(function firstPage(){    
//       curPage = 1;
//       direct = 0;
//       displayPage();
//   });
//   $("#btn2").click(function frontPage(){   
//       direct =- 1;
//       displayPage();
//   });
//   $("#btn3").click(function nextPage(){   
//       direct = 1;
//       displayPage();
//   });
//   $("#btn4").click(function lastPage(){  
//       curPage = page;
//       direct = 0;
//       displayPage();
//   });
//   $("#btn5").click(function changePage(){    
//       curPage = $("#changePage").val() * 1;
//       if (!/^[1-9]\d*$/.test(curPage)) {
//           alert("请输入正整数");
//           return ;
//       }
//       if (curPage > page) {
//           alert("超出数据页面");
//           return ;
//       }
//       direct = 0;
//       displayPage();
//   });

 
//   $("#pageSizeSet").click(function setPageSize(){   
//       pageSize = $("#pageSize").val();   
//       if (!/^[1-9]\d*$/.test(pageSize)) {
//           alert("请输入正整数");
//           return ;
//       }
//       len = $("#userInfo tr").length - 1;
//       page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;
//       curPage = 1;       
//       direct = 0;       
//       displayPage();
//   });
// };

// function displayPage(){
//   if(curPage <= 1 && direct == -1){
//       direct = 0;
//       alert("已经是第一页了");
//       return;
//   } else if (curPage >= page && direct == 1) {
//       direct = 0;
//       alert("已经是最后一页了");
//       return ;
//   }

//   lastPage = curPage;

//   if (len > pageSize) {
//       curPage = ((curPage + direct + len) % len);
//   } else {
//       curPage = 1;
//   }

//   if(curPage == 0){
//     curPage = page;
//   }

 
//  $("#btn0").html("当前 " + curPage + "/" + page + " 页    每页 ");       

//   begin = (curPage - 1) * pageSize + 1;
//   end = begin + 1 * pageSize - 1;  

//   if(end > len ){
//     end = len;
//   }
//   $("#userInfo tr").hide();    
//   $("#userInfo tr").each(function(i){    
//       if((i >= begin && i <= end) || i == 0 )
//           $(this).show();
//   });
// }
