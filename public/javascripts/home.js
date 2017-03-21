window.onload = function() {
	function myBrowser(){
		var userAgent = navigator.userAgent;
		var isOpera = userAgent.indexOf("Opera") > -1;
		if(isOpera){
			return "Opera"
		}
		if(userAgent.indexOf("Firefox") > -1){
			return "FF"
		}
		if(userAgent.indexOf("Chrome") > -1){
			return "Chrome"
		}
		if(userAgent.indexOf("Safari") > -1){
			return "Safari"
		}	
		if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1){
			return "IE";
		}
	}
	var mb = myBrowser();
	if("FF" == mb){
		document.getElementById("nav").style.marginTop = -65 + "px"
		document.getElementById("prev").style.paddingBottom = 60 + "px";
		document.getElementById("next").style.paddingBottom = 60 + "px";
	}
	if("IE" == mb){
		document.getElementsByTagName("body")[0].setAttribute("style","width:1260px"); 
	}
	


	var toTop = document.getElementById("toTop");
	var screenw = document.documentElement.clientWidth || document.body.clientWidth;
	var screenh = document.documentElement.clientHeight || document.body.clientHeight;
	toTop.style.left = screenw - toTop.offsetWidth - 24 + "px";
	toTop.style.top = screenh - toTop.offsetHeight + "px";
	window.onscroll = function(){
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		toTop.style.top = screenh - toTop.offsetHeight + scrolltop + "px";	
	}
	toTop.onclick = function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}

	var scroll = document.getElementById("scroll");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	function change(range){
		var newLeft = parseInt(scroll.style.left) + range; 
		if(newLeft > -1300){
			scroll.style.left = -7800 + "px"
		}else if(newLeft < -7800){
			scroll.style.left = -1300 + "px"
		}else{
			scroll.style.left = newLeft + "px"
		}
	}
	var auto;
	function play(){
		auto = setInterval(function(){
			next.onclick();
		},1500)
	}
	play();
	var content = document.getElementById("content")
	function stop(){
		clearInterval(auto);
	}
	content.onmouseover = stop;
	content.onmouseout = play;
	var buttons = document.getElementById("buttons").getElementsByTagName("span")
	var index = 1;
	function light(){
		for(var i = 0;i < buttons.length;i++){
			if(buttons[i].className == "on"){
				buttons[i].className = "";
			}
		}
		buttons[index - 1].className = "on"
	}
	prev.onclick = function(){
		index -= 1;
		if(index < 1){
			index = 6
		}
		light();
		change(1300);
	} 
	next.onclick = function(){
		index += 1;
		if(index > 6){
			index = 1
		}
		light();
		change(-1300);
	}
	for(var i = 0;i < buttons.length;i++){
		(function(i){
			buttons[i].onclick = function(){
				var clickIndex = parseInt(this.getAttribute("index"));
				var range = 1300 * (index - clickIndex)
				index = clickIndex;
				change(range);
				light();
			}
		})(i)
	}
}



