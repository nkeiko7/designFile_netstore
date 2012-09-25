// Hide Browser Address Bar
function doScroll() { if (window.pageYOffset === 0) { window.scrollTo(0,1); } }
$(window).bind('load',function(){setTimeout(doScroll,100);});

function footerH2Accordion() {
	$(this).next().next().slideToggle("fast");
	if ($(this).hasClass("headOpen")) {
		$(this).removeClass("headOpen").addClass("headClose");
	} else if ($(this).hasClass("headClose")) {
		$(this).removeClass("headClose").addClass("headOpen");
	}
}

function footerH3Accordion() {
	$(this).next().slideToggle("fast");
	if ($(this).hasClass("contentOpen")) {
		$(this).removeClass("contentOpen").addClass("contentClose");
	} else if ($(this).hasClass("contentClose")) {
		$(this).removeClass("contentClose").addClass("contentOpen");
	}
}

$(document).ready(function(){
	$("#snCategory h2").click(footerH2Accordion).next().hide();
	$("#snCategory h3").click(footerH3Accordion).next().hide();
	$("#showSearch").toggle(
		function(){$("#hSearch").slideDown("fast")},
		function(){$("#hSearch").slideUp("fast")}
	);
});
