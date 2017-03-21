        <script type="text/javascript">  
        $(function () {  
            $.ajax({  
                url: 'jsondata.ashx',  
                type: 'GET',  
                dataType: 'json',  
                timeout: 1000,  
                cache: false,  
                beforeSend: LoadFunction, //加载执行方法    
                error: erryFunction,  //错误执行方法    
                success: succFunction //成功执行方法    
            })  
            function LoadFunction() {  
                $("#list").html('加载中...');  
            }  
            function erryFunction() {  
                alert("error");  
            }  
            function succFunction(tt) {  
                $("#list").html('');  
  
                //eval将字符串转成对象数组  
                //var json = { "id": "10086", "uname": "zhangsan", "email": "zhangsan@qq.com" };  
                //json = eval(json);  
                //alert("===json:id=" + json.id + ",uname=" + json.uname + ",email=" + json.email);  
  
                var json = eval(tt); //数组         
                $.each(json, function (index, item) {  
                    //循环获取数据    
                    var Key = json[index].key;  
                    var Info = json[index].info;  
                    //                 var idnumber = json[index].IdNumber;  
                    //                 var sex = json[index].Sex;  
                    $("#list").html($("#list").html() + "<br>" + Key + "----" + Info.name); //+ " - " + idnumber + " - " + sex + "<br/>");  
                });  
            }  
        });  
    </script>