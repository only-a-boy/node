$("#addUser").click(function(e) {
    e.preventDefault();
    var username = $("#addUserName").val()
    if(username == ""){
        alert("用户名不能为空")
    }else{
        $.ajax({
        url: "/addUser",
        data: {
            username: username,
            password: $("#addPassword").val()
        },
        async: true,  
        cache: false,  
        type: "POST",
        dataType: "text",   
        success: function(data){ 
            if(data == "true"){
              alert("新增用户成功")
              location.href="/users" 
            }else if(data == "false"){
                alert("已有此用户名")
            }else{
                alert("数据传输错误")
            }
        }
    })
    }
    
})
