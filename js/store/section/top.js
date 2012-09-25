$(document).ready(function() { 
$(".coordinate .image").fancybox({ 'speedIn': 10, 'speedOut': 100, 'autoDimensions': false, 'width': 660, 'height': 520 });

$("#history .itemList").jCarouselLite({
	btnNext: ".next",
	btnPrev: ".prev",
	visible: 5,
	circular: false
});

//carousel for searchResult items
	if($("#searchResultItems .itemList ul").length > 0){
		$("#searchResultItems .itemList").jCarouselLite({
			btnNext: "#searchResultItems .next",
			btnPrev: "#searchResultItems .prev",
			visible: 4,
			circular: false
		});

	}

});