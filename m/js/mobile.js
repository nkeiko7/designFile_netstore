// Hide Browser Address Bar
function doScroll() { if (window.pageYOffset === 0) { window.scrollTo(0,1); } }
$(window).bind('load',function(){setTimeout(doScroll,100);});


// Detect Mobile UserAgent
function is_mobile () {
	var useragents = [
	'iPhone',			// Apple iPhone
	'iPod',			// Apple iPod touch
	'Android',			// 1.5+ Android
	'dream',			// Pre 1.5 Android
	'CUPCAKE',		// 1.5+ Android
	'blackberry9500', 	// Storm
	'blackberry9530', 	// Storm
	'blackberry9520', 	// Storm v2
	'blackberry9550',	// Storm v2
	'blackberry9800',	// Torch
	'webOS',			// Palm Pre Experimental
	'incognito',		// Other iPhone browser
	'webmate'		// Other iPhone browser
	];
	var pattern = new RegExp(useragents.join('|'), 'i');
	return pattern.test(navigator.userAgent);
}

// Get View Mode
function is_viewmode_pc () {
	if($("#mobileStyle").attr('href')==''){
		return true;
	}else{
		return false;
	}
}

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
function getRecommendItemSize(def) {
	if(is_mobile()){
		var itemSize = 120 + 5 + 5;
		return Math.floor(($(window).width() - $("div.prev").width()*2)/itemSize);
	} else {
		return def;
	}
}


$(document).ready(function(){

	//////////////////////////////////
	// TERMINAL:smartphone
	if(is_mobile()){
		// Toggle PC/Mobile Switch
		$("#modeSwitch").css("display","block");
		// smartphone mode
		$("#modeSwitch1").click(function() {
			var currentUrl = location.href.split("#")[0];
			var nextUrl = "";
			if(currentUrl.indexOf('mode=pc') > -1) {
				nextUrl = currentUrl.replace("mode=pc", "mode=sp");
			} else {
				if(currentUrl.indexOf('?') < 0) {
					nextUrl = currentUrl.concat("?mode=sp");
				}else{
					nextUrl = currentUrl.concat("&mode=sp");
				}
			}
			location.replace(nextUrl);
		});
		// pc mode
		$("#modeSwitch2").click(function() {
			var currentUrl = location.href.split("#")[0];
			var nextUrl = "";
			if(currentUrl.indexOf('mode=sp') > -1) {
				nextUrl = currentUrl.replace("mode=sp", "mode=pc");
			} else {
				if(currentUrl.indexOf('?') < 0) {
					nextUrl = currentUrl.concat("?mode=pc");
				}else{
					nextUrl = currentUrl.concat("&mode=pc");
				}
			}
			location.replace(nextUrl);
		});

		//////////////////////////////////
		// VIEWMODE:smartphone
		if(!is_viewmode_pc ()){
			//////////////////////////////////
			// Common
			// footer h2 accordion
			$("#snCategory h2").click(footerH2Accordion).next().hide();
			// footer h3 accordion
			$("#snCategory h3").click(footerH3Accordion).next().hide();

			// Move Elements
			$("#storeTop #maintenance").insertBefore($("#storeHeaderWrap"));
			//$("#snVisitor").insertBefore($("#gnShop"));

			$("#mobileSort").after($("#snSiblingCategory"));
			$("#mobileSort").after($("#snRefinement"));
			$("#mobileSort").append($("#sortItems"));

			$("#snCategory").insertBefore($("#mobileNav"));
			var ss=document.createElement('div');
			ss.id="showSearch";
			$(".content").eq(0).append(ss);

			// Show Hide Search Box
			$("#showSearch").toggle(
				function(){$("#hSearch").slideDown("fast")},
				function(){$("#hSearch").slideUp("fast")}
			);
			if(!$("#modeSwitch a").eq(0).hasClass("current"))$("#modeSwitch a").eq(0).addClass("current");
			if($("#modeSwitch a").eq(1).hasClass("current"))$("#modeSwitch a").eq(1).removeClass("current");

			//////////////////////////////////
			// StoreTop
			// CategoryAccordion
			$("#mobileCategoryList h3").click(function() {
				$(this).next().slideToggle("fast");
				if ($(this).hasClass("categoryOpen")) {
					$(this).removeClass("categoryOpen").addClass("categoryClose");
				} else if ($(this).hasClass("categoryClose")) {
					$(this).removeClass("categoryClose").addClass("categoryOpen");
				}
			}).next().hide();

			if((typeof jCarouselFlickTop != 'undefined')) {
				$(window).bind("orientationchange", function () {
					jCarouselFlickTop.resize()
				});
//				$(window).resize(function () {
//					jCarouselFlickTop.resize()
//				})
			}

			//////////////////////////////////
			// CmdtyDetail
			// viewInPcMode
			$("#viewInPCmode a").eq(0).click(function(){
				$("#modeSwitch2").click();
			});
			// Stock Link
			if ($("#showStoreStock") != null) {
				$("#showStoreStock").removeClass();
				$("#showStoreStock").attr("target","_blank");
			}
			// StoreStock Link
			if ($("#switchTargetLink1") != null) {
				$("#switchTargetLink1").removeClass();
				$("#switchTargetLink1").attr("target","_blank");
			}
			// FAQ Link
			if ($("#switchTargetLink2") != null) {
				$("#switchTargetLink2").removeClass();
				$("#switchTargetLink2").attr("target","_blank");
			}
			// About Delivery Link
			if ($("#switchTargetLink3") != null) {
				$("#switchTargetLink3").removeClass();
				$("#switchTargetLink3").attr("target","_blank");
			}

			//////////////////////////////////
			// SearchResult
			// ItemNum
			$.cookie('search_itemParPage', 50);

			// Refinement and snSiblingCategory fancyBox
			if ($("a#snRefinementTitle").size() > 0) {
				$("a#snRefinementTitle").fancybox({'hideOnContentClick': true,'padding':0,'autoScale' : false,'scrolling' : 'no' });
			}
			$("a#snSiblingCategoryTitle").fancybox({'hideOnContentClick': true,'padding':0,'autoScale' : false,'scrolling' : 'no'});
			$("a#sortTitle").fancybox({'hideOnContentClick': true,'padding':0,'autoScale' : false,'scrolling' : 'no' });

		}
		//////////////////////////////////
		// viewmode:pc
		else if(is_viewmode_pc ()){
			$("#mobileStyle").remove();
			if($("#modeSwitch a").eq(0).hasClass("current"))$("#modeSwitch a").eq(0).removeClass("current");
			if(!$("#modeSwitch a").eq(1).hasClass("current"))$("#modeSwitch a").eq(1).addClass("current");
		}
	}
	//////////////////////////////////
	// terminal:pc
	else {

	}
});
