var callLazyload = function() {
	$(".thumb img").lazyload({
		placeholder : "/img/common/blank.gif",
		effect : "fadeIn"
	});
}

$(document).ready(function() {
	$("#history .itemList").jCarouselLite({
		btnNext: ".next",
		btnPrev: ".prev",
		visible: 5,
		circular: false
	});
});