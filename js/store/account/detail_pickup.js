
$( document ) . ready( function() {
	$( "#animate-toggle-title" ) .click( function() {
		$( "#animate-toggle-block" ) .animate( { height: "toggle"}, "easeInQuart" );
			if ($("#animate-toggle-title").hasClass("arrow_down")){
			$("#animate-toggle-title").removeClass("arrow_down").addClass("arrow_right");
			}else if
			($("#animate-toggle-title").hasClass("arrow_right")){
			$("#animate-toggle-title").removeClass("arrow_right").addClass("arrow_down");
			}
		return false;
	} );
} );