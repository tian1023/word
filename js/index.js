var sorce = 0;
var body = document.querySelector("body");
var Box = document.querySelector("#box");
var randomCode = function() {
	var Code = 97 + parseInt(Math.random() * 26);
	var strCode = String.fromCharCode(Code);
	Box.innerHTML = strCode.toUpperCase();
}
randomCode();

body.onkeypress = function(ev) {
	console.log(ev);
	var keyCode = ev.key.toUpperCase();
	if(keyCode == Box.innerHTML) {
		randomCode();
		sorce++;
	}
}
var fn10 = function() {
	/*alert("您的打字速度为："+sorce*6+"个/min");*/
	lcAlter({
		title: "打字速度",
		content: "您的打字速度为：" + sorce * 6 + "个/min",
		confirmFn() {
			sorce = 0;
			setTimeout(fn10, 10000);
		}
	})
}
setTimeout(fn10, 10000)