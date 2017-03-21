$("#signup").click(function(){
        $.ajax({
            url: "/user/signup",
            type: 'post',
            data: $("#formid").serialize(),
            success: function(data) {
                if(data.status == 99999) {
                    alert("3秒后跳转到首页");
                    setTimeout(function() {
                        location.href='http://'+window.location.host+'/html/index.html';
                    },3000)
                }else {
                    alert('登录名或密码错误')
                }
            }
        })      
    })


    $("#register").click(function(){
        $.ajax({
            url: "/user/register",
            type: 'post',
            data: $("#formRegister").serialize(),
            success: function(data) {
                console.log(data);
                if(data.status == 99999) {
                    alert("注册成功")
                }else {
                    alert("登录名已经有人用")
                }
            }
        })      
    })