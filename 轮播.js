# icecreamly
js轮播图
function byId(id){
	return typeof(id) === "string"? document.getElementById(id):id;
}

var index = 0,
	timer = null,
	pics = byId("banner").getElementsByTagName("div"),
	content = byId("content").getElementsByTagName("div"),
	len = pics.length;


function slideImg(){
	var main = byId("main");
	// 鼠标放上停止轮播
	main.onmouseover = function(){
		if(timer) clearInterval(timer);
	}
	// 鼠标离开自动轮播
	main.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if(index>=len){index = 0;}
			changeImg();
		},1000);
		}
	main.onmouseout();
 	// 点击导航切换
 	for(var b in content){
 		content[b].id = b;
 		content[b].onclick = function(){
 			index = this.id;
 			changeImg();
 		}
 	}
}

function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display = "none";
		content[i].className = "";
	}
	pics[index].style.display = "block";
	content[index].className = "item-active";
}

slideImg();
