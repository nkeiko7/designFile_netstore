$(document).ready(function(){

	var a = "携帯アドレスで登録の方",b = "携帯アドレス欄を非表示",el = $(".featurePhone"),btn = $("#featureSmartToggleBtn a");

	btn.html(el.is(":visible")?b:a);

	btn.click(function(){
		var t = $(this);
		el.slideToggle("fast");
		t.html((t.html() == a)?b:a);
		return false;
	});

});