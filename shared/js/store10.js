window.onload = function() {
	vtxt = "商品名";
	node = document.getElementById('skey');
	if(node.value != vtxt) { node.className = "keyinputon"; }
	node.onfocus = function () {
		if(node.value == vtxt) {
			node.value = '';
			node.className = "keyinputon";
		}
	};
	node.onblur = function () {
		if(node.value == '') {
			node.value = vtxt;
			node.className = "keyinputoff";
		}
	};
};
