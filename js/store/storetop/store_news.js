$(document).ready(function(){
	$("#news .newsButton").click(function(){
		if($(this).attr("id") == "storeNewsClose"){
			$("#news dl.more").slideUp("fast");
		} else {
			$("#news dl.more").slideDown("fast");
		}
		$(".newsButton").toggle();
	});
});