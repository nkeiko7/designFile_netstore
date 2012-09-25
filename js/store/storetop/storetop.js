/* RSS */
btConfig = {'bt_id': 'BT-415'};

/* NEWS */
$(document).ready(function(){
	$("#news .newsButton").click(function(){
		if($(this).attr("id") == "storeNewsClose"){
			$("#news dl.more").slideUp("fast");
		} else {
			$("#news dl.more").slideDown("fast");
		}
		$(".newsButton").toggle();
	});


/* BIG TARGET */

	if(is_mobile()){
		$("#storeTop #maintenance a").bigTarget();
		$("#main .itemList li a").bigTarget();
	}

});