var btn = document.getElementsByClassName("btn")[0];
var btnbox = document.getElementsByClassName("btnbox")[0];
var left = 40;
btn.onmousedown = function(ev) {
	var oEvent = ev || event;
	var x = oEvent.clientX - btnbox.offsetLeft;
	document.onmousemove = function(ev) {
		var oEvent = ev || event;
		var x1 = oEvent.clientX - x;
		btnbox.style.left = x1 + "px";
		console.log(btnbox.style.left);
		left = x1;
	};
	document.onmouseup = function() {
		document.onmousedown = null;
		document.onmousemove = null;
		if (left >= 199 && left <= 201) {
			alert("验证通过");
			btnbox.style.left = "40px";
			window.location.href = 'https://game.drbd.tk/'
		} else {
			alert("验证失败");
			btnbox.style.left = "40px";
		};
	};
};
