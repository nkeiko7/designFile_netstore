$(document).ready(function(){
	$(".related dl a").bigTarget({
		hoverClass: 'over',
		clickZone : 'dl:eq(0)'
	});

/*
	$('.add a').click(function(){
		$("#list4 tr").css("display")=="table-row"?$(this).replaceWith($(".note li")[1].innerHTML):"";
		$("#list4 tr").css("display")=="table-row"?$("#list5 tr").show():"";
		$("#list3 tr").css("display")=="table-row"?$("#list4 tr").show():"";
		$("#list2 tr").css("display")=="table-row"?$("#list3 tr").show():"";
		$("#list2 tr").show();
	});
*/

});
