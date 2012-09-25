/*
 * jCarousel for Moblie - jQuery Plugin
 * http://www.inkdesign.jp/donwload/jCarousel-mobile/
 *
 * Original: jCarousel - jQuery Plugin
 * http://d.hatena.ne.jp/kudakurage/
 *
 * Thanks for  Kazuyuki Motoyama
 *
 * Copyright (c) 2010 hiloki (EC studio, inkdesign)
 * Licensed under the MIT license
 *
 * $Date: 2010-09-09
 * $version: 1.1
 *
 * This jQuery plugin will only run on devices running Mobile Safari
 * on iPhone or iPod Touch devices running iPhone OS 2.0 or later.
 * http://developer.apple.com/iphone/library/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW5
 */
var jCarouselFlickTop = {
	ua: "pc",
	num: 0,
	target: [],
	sel: [],
	activeBool: false,
	active: 0,
	main: 0,
	colorSet: {
		black: {
			back: "#666",
			active: "#eee",
			shadow: "#333"
		},
		white: {
			back: "#ddd",
			active: "#999",
			shadow: "#333"
		}
	}
};
jCarouselFlickTop.set = function (d) {
	jCarouselFlickTop.color = jCarouselFlickTop.colorSet.black;
	jCarouselFlickTop.main = 0;
	if (typeof d == "object") {
		if (d.color == "white") {
			jCarouselFlickTop.color = jCarouselFlickTop.colorSet.white
		}
		if (!isNaN(d.main)) {
			jCarouselFlickTop.main = eval(d.main)
		}
	}
	$(".jCarouselFlickTop").each(function () {
		if (!$(this).attr("name")) {
			var b = jCarouselFlickTop.num,
				e = $(this).width(),
				i = $(this).find("li").length;
			$(this).parent().addClass('jCarouselWrapper' + b);
			var prevBtnW  = $(".jCarouselWrapper" + b).parent().find("#prevBtn").width() + ($(document).width() - e);
			var nextBtnW  = $(".jCarouselWrapper" + b).parent().find("#nextBtn").width();
			e = e - prevBtnW - nextBtnW;

			$(this).attr("name", b);
			jCarouselFlickTop.target[b] = this;
			jCarouselFlickTop.sel[b] = {
				width: e,
				max: i,
				left: 0,
				current: 0,
				startX: 0,
				endX: 0,
				auto: 0
			};
			for (var l = "<ul>", j = 0; j < i; j++) {
				l += '<li><a rel="' + j + '" name="' + b + '"></a></li>'
			};
			l += '</ul>';
			$(".jCarouselWrapper" + b).parent().find("#prevBtn").before('<div class="simpleNav">' + l + "</div>");
			$(".jCarouselWrapper" + b).parent().find(".simpleNav").find('a[rel="' + jCarouselFlickTop.sel[b].current + '"]').parent().addClass("current");
			
			$(".jCarouselWrapper" + b).css({
//				overflow: "hidden",
				width: "100%"
			});
			$(this).css({
				width: "900000px",
				listStyle: "none",
				padding: 0,
				margin: 0,
				backgroundColor: "transparent"
			});
//			$(this).find("li").css("float", "left");
			$(this).find("li").css({
				width: e + "px",
				listStyle: "none",
				textAlign: "center",
				padding: 0,
				margin: 0,
				color: "#000"
			});
			$(".jCarouselWrapper" + b + " .simpleNav").css({
				clear: "both",
				textAlign: "center"
			});
			$(".jCarouselWrapper" + b + " .simpleNav b").css({
				fontSize: "14px",
				margin: "0 3px",
				verticalAlign: "5px"
			});
			$(".jCarouselWrapper" + b + " .simpleNav a").css({
				display: "inline-block",
				width: "8px",
				height: "8px",
				margin: "5px",
				padding: "0px",
				backgroundColor: jCarouselFlickTop.color.back,
				cursor: "pointer",
				borderRadius: "4px",
				boxShadow: "0px -1px 1px " + jCarouselFlickTop.color.shadow,
				webkitBorderRadius: "4px",
				webkitBoxShadow: "0px -1px 1px " + jCarouselFlickTop.color.shadow
			});
			$(".jCarouselWrapper" + b + " .simpleNav a.selected").css({
				backgroundColor: jCarouselFlickTop.color.active
			});

/*
			if (jCarouselFlickTop.ua == "mobile") {
				$(this).bind("touchstart", function () {
					var a = $(this).attr("name");
					jCarouselFlickTop.active = a;
					jCarouselFlickTop.sel[a].startX = event.touches[0].pageX;
					jCarouselFlickTop.activeBool = true
				});
				$(window).bind("touchmove", function () {
					if (jCarouselFlickTop.activeBool) {
						var a = jCarouselFlickTop.active;
						jCarouselFlickTop.sel[a].endX = event.touches[0].pageX;
						var c = -jCarouselFlickTop.sel[a].startX + jCarouselFlickTop.sel[a].endX;
//						$(jCarouselFlickTop.target[a]).css({
//							marginLeft: jCarouselFlickTop.sel[a].left + c + "px"
//						})
					}
				});
				$(window).bind("touchend", function () {
					if (jCarouselFlickTop.activeBool) {
						jCarouselFlickTop.activeBool = false;
						var a = jCarouselFlickTop.active,
							c = -jCarouselFlickTop.sel[a].startX + jCarouselFlickTop.sel[a].endX,
							h = jCarouselFlickTop.sel[a].width / 5,
							g = jCarouselFlickTop.sel[a].current,
							k = jCarouselFlickTop.sel[a].max;
						if (c > h && g > 0) {
							g--
						} else {
							c < -h && g < k - 1 && g++
						}
						jCarouselFlickTop.slide(a, g, 200)
					}
				})
			}
*/
			$(".simpleNav a").click(function () {
				var a = $(this).attr("name"),
					c = $(this).attr("rel");
				jCarouselFlickTop.slide(a, c, 800);
				return false
			});
			$("#nextBtn").click(function() {
				var a = jCarouselFlickTop.active;
				var g = jCarouselFlickTop.sel[a].current;
				var k = jCarouselFlickTop.sel[a].max;
				if (g < k - 1) g++
				jCarouselFlickTop.slide(a, g, 200);
				set_prevnext_button (a,g);
			});
			$("#prevBtn").click(function() {
				var a = jCarouselFlickTop.active;
				var g = jCarouselFlickTop.sel[a].current;
				if (g > 0) g--
				set_prevnext_button (a,g);
				jCarouselFlickTop.slide(a, g, 200);
			});

			jCarouselFlickTop.num++
		}
	})
};
jCarouselFlickTop.ini = function () {
	if(is_mobile()) {
		jCarouselFlickTop.ua="mobile";
	} else {
		jCarouselFlickTop.ua="pc";
	}

	$(window).bind("orientationchange", function () {
		jCarouselFlickTop.resize()
	});
//	$(window).resize(function () {
//		jCarouselFlickTop.resize()
//	})
};
jCarouselFlickTop.slide = function (f, a) {
	jCarouselFlickTop.activeBool = false;
	var c = -a * jCarouselFlickTop.sel[f].width;
	/* 直した部分（CSS を指定するだけ、アニメーションは -webkit-transition で */
//	$(jCarouselFlickTop.target[f]).css({
//		marginLeft: c + "px"
//	});

	jCarouselFlickTop.sel[f].left = c;
	jCarouselFlickTop.sel[f].current = a;
	$(".jCarouselWrapper" + f).parent().find(".simpleNav").find('li').removeClass("current");
	$(".jCarouselWrapper" + f).parent().find(".simpleNav").find('a[rel="' + a + '"]"').parent().addClass("current");

	$(".jCarouselWrapper" + f + " li").removeClass("current");
	$(".jCarouselWrapper" + f + " li").eq(a).addClass("current");

	var a = jCarouselFlickTop.active;
	var g = jCarouselFlickTop.sel[a].current;
	set_prevnext_button(a,g);
};
jCarouselFlickTop.resize = function () {
	$(".jCarouselFlickTop").each(function () {
		var f = $(this).attr("name"),
			a = $(".jCarouselWrapper" + f).width();
		var prevBtnW  = $("#prevBtn").width() +  + ($(document).width() - a);
		var nextBtnW  = $("#nextBtn").width();
		a = a - prevBtnW - nextBtnW;

		jCarouselFlickTop.sel[f].width = a;
		var c = -jCarouselFlickTop.sel[f].current * jCarouselFlickTop.sel[f].width;
		jCarouselFlickTop.sel[f].left = c;
		$(this).find("li").css({
			width: a + "px"
		});
//		$(this).css({
//			marginLeft: c + "px"
//		})
	})
};
jQuery.extend(jQuery.easing, {
	easeCarousel: function (j, a, h, g, c) {
		return g * ((a = a / c - 1) * a * a + 1) + h
	}
});
function set_prevnext_button (a,g) {
	if (g > 0) {
		$("#prevBtn").removeClass("disabled");
		
	} else {
		$("#prevBtn").addClass("disabled");
	}

	var k = jCarouselFlickTop.sel[a].max;
	if (g < k - 1) {
		$("#nextBtn").removeClass("disabled");
	} else {
		$("#nextBtn").addClass("disabled");
	}
};

$(function () {
	jCarouselFlickTop.ini();
	jCarouselFlickTop.set()
});