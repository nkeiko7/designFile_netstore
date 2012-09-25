if($(".itemList ul").length > 0 ){
	$(function() {
		$(".itemList").jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 4,
			circular: false
		});
	});
}

$(function() {
	$("a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 780, 'height': 400 });
});