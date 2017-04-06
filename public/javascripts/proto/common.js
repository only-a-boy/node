$.getUrlParam = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null){
    return decodeURI(r[2]);
  }
  return null;
}      

var isCheckAll = false;  
function swapCheck() {  
    if (isCheckAll) {  
        $("input[type='checkbox']").each(function() {  
            this.checked = false;  
        });  
        isCheckAll = false;  
    }else{  
        $("input[type='checkbox']").each(function() {  
            this.checked = true;  
        });  
      isCheckAll = true;  
    }  
}  


function showList(id,btn0,btn1,btn2,btn3,btn4,btn5,count,pageSizeNo,pageSizeSet,changePageNo){
  var pageSize = 10;    
  var curPage = 0;        
  var lastPage;       
  var direct = 0;       
  var len;            
  var page;           
  var begin;
  var end;            
  this.display = function(){  
    len = $(id).length - 1;    
    page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;
    curPage = 1;    
    displayPage(1);

    $(btn0).html("当前 " + curPage + "/" + page + " 页    每页 ")
    $(count).html("数据总量 " + len + "   ")  
    $(pageSizeNo).val(pageSize);

    $(btn1).click(function(){    
        curPage = 1;
        direct = 0;
        displayPage();
    });
    $(btn2).click(function(){   
        direct =- 1;
        displayPage();
    });
    $(btn3).click(function(){   
        direct = 1;
        displayPage();
    });
    $(btn4).click(function(){  
        curPage = page;
        direct = 0;
        displayPage();
    });
    $(btn5).click(function(){    
        curPage = $(changePageNo).val() * 1;
        if (!/^[1-9]\d*$/.test(curPage)) {
            alert("请输入正整数");
            return ;
        }
        if (curPage > page) {
            alert("超出数据页面");
            return ;
        }
        direct = 0;
        displayPage();
    });

     
    $(pageSizeSet).click(function setPageSize(){    
      pageSize = $(pageSizeNo).val();    
      if (!/^[1-9]\d*$/.test(pageSize)) {
          alert("请输入正整数");
          return ;
      }
      len = $(id).length - 1;
      page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;
      curPage = 1;       
      direct = 0;       
      displayPage();
    });
  };

  function displayPage(){
    if(curPage <= 1 && direct == -1){
        direct = 0;
        alert("已经是第一页了");
        return;
    } else if (curPage >= page && direct == 1) {
        direct = 0;
        alert("已经是最后一页了");
        return ;
    }

    lastPage = curPage;

    if (len > pageSize) {
        curPage = ((curPage + direct + len) % len);
    } else {
        curPage = 1;
    }

    if(curPage == 0){
      curPage = page;
    }

   
    $(btn0).html("当前 " + curPage + "/" + page + " 页    每页 ");       

    begin = (curPage - 1) * pageSize + 1;
    end = begin + 1 * pageSize - 1;  

   
    if(end > len ){
      end = len;
    }
    $(id).hide();    
    $(id).each(function(i){    
        if((i >= begin && i <= end) || i == 0 )
          $(this).show();
    });

  }  

}


function showInfoList(id,btn0,btn1,btn2,btn3,btn4,btn5,count,pageSizeNo,pageSizeSet,changePageNo){
  var showlist = new showList(id,btn0,btn1,btn2,btn3,btn4,btn5,count,pageSizeNo,pageSizeSet,changePageNo);   
  return showlist.display(); 
}




