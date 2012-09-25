
(function($) {
	/**
	 * 画像切り替え
	 */
	$.fn.picture = function(opts) {

		var defaults = {
			targetSelector : '#picture #mainImage'
		}

		var options = $.extend({} , defaults, opts);

		function over() {
			$(this).queue(function() {
				$(options.targetSelector).attr('src',options.picturemap[this.id]);
			});
			$(this).dequeue();

			//alert("over " + $(options.targetSelector).attr('src'));
		}

		function out() {
			$(this).queue(function() {
				$(options.targetSelector).attr('src',options.base);
			});
			$(this).dequeue();
		}

		return this.each(
			function() {
				$(this).hover(over,function(){});
				$(options.outTagSelector).hover(function(){},out);
				//$(this).parent().parent().parent().hover(function(){},out);
			}
		);

	}

	/**
	 * 在庫切り替え
	 */
	$.fn.stock = function(opts) {

		var defaults = {
			targetSelector : '#color dd span:last-child',
			stockfull : { name : '在庫あり' , _class : 'available' },
			stockfew : { name : '残り' , _class : 'few' },
			stockout : { name : '在庫なし' , _class : 'out' }
		}

		var options = $.extend({} , defaults, opts);

		function render_stock(id) {
			var colorstocks = options.stockmap[id];

			$(options.targetSelector).each( function () {
				var stock = colorstocks[this.id];

				//alert("before " + $(this).text());
				var stockinfo = options.stockfull;
				if(stock > 20) {  // 在庫あり
					$(this).text(options.stockfull.name);
					$(this).parent().attr('class',options.stockfull._class);
				} else if ( stock > 0 && stock <= 20 ) { // 残り僅か
					$(this).text(options.stockfew.name + stock);
					$(this).parent().attr('class',options.stockfew._class);
				} else { //在庫なし
					$(this).text(options.stockout.name);
					$(this).parent().attr('class',options.stockout._class);
				}
				// alert("set " + $(this).text());
			})
		}
		function over() {
			var size = this.id;
			render_stock(this.id);
		}

		function out() {
			render_stock(options.base_size);
		}

		return this.each(
			function() {
				$(this).hover(over,out);
			}
		);

	}

	/**
	 * 価格切り替え
	 * requires: ajax.js
	 */
	$.fn.price = function(opts) {

		render_prices = function(priceInfo) {
			$(options.targetSelector).each(function() {
				var price = priceInfo.prices[this.id];
				if(price != null) {
					if(price.hasCancelPrice) {
						priceHtml = price_format(options.hasPrePriceFmt,price.cancelPrice,price.price);
					} else {
						priceHtml = price_format(options.priceFmt,price.price);
					}
					$(this).parent().replaceWith(priceHtml);
				}
			})

		}

		price_format = function(format /*,obj1,obj2...*/)
		{
		    var args = arguments;
		    return format.replace(/\{(\d)\}/g, function(m, c) { return args[parseInt(c) + 1] });
		}

		app_error = function(error) {
			//alert(options.errorMsg);
		}

		var defaults = {
			loginSelector : '.loginAfter',
			discountCodeTargetSelector : '#discountPlanImage',
			targetSelector : '#relatedItems .price span',
			relatedItemTargetSelector : '#relatedItems .price span',
			priceFmt: "<span class=\"price\">税込<span class=\"num\">{0}</span>円</span>",
			hasPrePriceFmt : "<span class=\"price\"><del>税込<span class=\"num\" >{0}</span>円</del><ins>税込<span class=\"num\" >{1}</span>円</ins></span>",
			relatedPricesUrl : $('#relatedPriceInfoUrl').attr('href'),
			errorMsg : "価格が表示できませんでした。申し訳ありませんが、時間を置いて再度利用をお願いします。"
		}

		var options = $.extend({} , defaults, opts);

		// ディスカウント企画画像の設定
		if(typeof discountPlanImageSrc != 'undefined' && discountPlanImageSrc != "") {
			$(options.discountCodeTargetSelector).attr('src', discountPlanImageSrc);
		} else {
			$(options.discountCodeTargetSelector).parent().parent().hide();
		}

		//関連商品価格の取得
		var target = $(options.relatedItemTargetSelector);
		if (target.length > 0) {
			janCodesData = "";
			target.each(function() {
				janCodesData += "janCodes=" + this.id + "&"
			});
			var authParam="?auth=" + (($(options.loginSelector).length > 0) ? "true" : "false");

			var setup = {
				cache: false,
				data : janCodesData
			};
			$.ajaxSetup(setup);

			Ajax.json_by_method(options.relatedPricesUrl + authParam, render_prices, app_error, null, "POST");
		}
	}
})(jQuery);



$(document).ready(function() {

	$('#cartUrl').click(
		function () {
			var numObj = $('#selectQuantity option:selected');
			var text = numObj.val();
			this.href = this.href.replace(/(\d)+$/g, text);
		}
	)

	$(this).price({});
	$('#thumbnails a img').picture($.extend({} , relatedPictureOptions, { outTagSelector : "#thumbnails" }));
	if(typeof colorPictureOptions != 'undefined') {
		$('#color dd img').picture($.extend({} , colorPictureOptions, { outTagSelector : "#color" }));
	}
	if(typeof stockOptions != 'undefined') {
		$('#size dd a').stock(stockOptions);
	}
});
