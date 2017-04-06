$("#selUserBtn").click(function selUserBtn() {
  $.ajax({
    url:"/selectUser",
    data: {
      username: $("#selectUser").val()
    },
    async:true,
    cache:false,
    type:"POST",
    dataType:"text",
    success:function selUserAjax(data){
      if(data){
        data = JSON.parse(data);
        var tmp="";
        for(let i = 0;i < data.length;i++){
          var {id,username,password} = data[i]
          tmp +=`
            <tr><td><input type='checkbox' name='userCheckBox' value=${ username }></td>
              <td>${ id }</td>
              <td>${ username }</td>
              <td>${ password }</td> 
            </tr>
        `}
        $("#userData").html(tmp);
        showInfoList("#userInfo tr","#btn00","#btn01","#btn02","#btn03","#btn04","#btn05","#count0","#pageSize0","#pageSizeSet0","#changePage0");
      }else{
        alert("数据传输有错误!")
      }
    }
  })
})