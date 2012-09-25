$(document).ready(function() {

//fancyBox Opener
	$("a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 780, 'height': 400 });
	$("#faq a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 420, 'height': 400 });
	$("#shopStock a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 420, 'height': 400 });
	$(".storeStock a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 420, 'height': 400 });
	$("#open-sim a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 900, 'height': 572 });

//item list carousels
//carousel for related items
	$("#relatedItems .itemList").jCarouselLite({
		btnNext: "#relatedItems .next",
		btnPrev: "#relatedItems .prev",
		visible: 4,
		circular: false
	});
	$("#relatedItems .itemList li").css({height : null});

//carousel for history items
	if($("#history .itemList ul").length > 0){
		$("#history .itemList").jCarouselLite({
			btnNext: "#history .next",
			btnPrev: "#history .prev",
			visible: 5,
			circular: false
		});

	}

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




