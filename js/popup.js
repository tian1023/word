/*
 args {
 	title:"温馨提示：",
 	content:"请继续支持姐姐走花路！",
 	confirmFn:function(){
 	},
 	
 }
 */

function lcAlter(args) {
	var back = document.createElement("div");
	back.className = "back";
	back.innerHTML = `
				<div class="alert">
					<div class="head">
						<span class="title">`+args.title+`</span>
						<span class="close">X</span>
					</div>
					<div class="main">
						`+args.content+`
					</div>
					<div class="bottom">
						<button class="btn1">确定</button>
						<button class="btn2">取消</button>
					</div>
				</div>
				`
	var body = document.querySelector("body");
	body.appendChild(back);

	var close = document.querySelector(".close");
	close.onclick = function() {
		body.removeChild(back);
	}
	var btn2 = document.querySelector(".btn2");
	btn2.onclick = function() {
		body.removeChild(back);
	}
	var btn1 = document.querySelector(".btn1");
	btn1.onclick = function() {
		args.confirmFn();
		body.removeChild(back);
	}
}