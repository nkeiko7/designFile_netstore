/**
* 共通
*/

/**
* double submit防止
*/

(function($) {
	$.fn.disableDoubleClick = function(opts) {
		var options = $.extend({} , $.fn.disableDoubleClick.defaults, opts);

		// Makes sure button is enabled at start
		$(this).removeAttr(options.controlAttrName);

		$(this).bind('click', function(e) {
			$(this)._disableControl(options, e);
		});
		//alert("bind! " + $(this).attr('tagName'));

	}
	$.fn.disableDoubleSubmit = function(opts) {
		var options = $.extend({} , $.fn.disableDoubleClick.defaults, opts);

		// Makes sure button is enabled at start
		//$(this).removeAttr(options.controlAttrName);

		$(this).bind('submit', function(e) {
			$(this)._disableControl(options, e);
		});
		//alert("submit bind! " + $(this).attr('tagName'));
	}

	$.fn._disableControl = function(options, e) {

		options = {
			timeout : 10000,
			controlAttrName : 'disableControl'
		};

		if(this._lock) {
			return $(this)._cancelEvent(e);
		}

		this._lock = true;
		if($(this).attr(options.controlAttrName) != null && $(this).attr(options.controlAttrName)) {
			//alert("in progress " + $(this).attr('tagName'));
			return $(this)._cancelEvent(e);
		}
		//alert("go! "  + $(this).attr('tagName'));
		$(this).attr(options.controlAttrName,true);
		$(this).oneTime(options.timeout, function() {
			$(this).removeAttr(options.controlAttrName);
			//alert("removeAttr! " +  $(this).attr('tagName'));
		});
		this._lock = false;
		return true;
	}
	$.fn._cancelEvent = function(e) {
		e.preventDefault();
		e.returnValue = false;
		$(this).oneTime(1000, function() {
			// sleep;
		});

		return false;
	}

})(jQuery);

$(document).ready(function() {
	$('input[type=submit],input[type=button],a:not(a[href^=#])').each(
		function() {
			$(this).disableDoubleClick();
		}
	);
	$('form').each(
		function() {
			$(this).disableDoubleSubmit();
		}
	);
});
