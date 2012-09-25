	$(document).ready(function(){
	
	$("body").append("<div class='mask'></div>");

		$("#editButton a").toggle(function(){
			
				$(".addressList .item").animate({
				paddingLeft:"43px"
				},"fast").css({background:"none"});
				
				$(this).text("完了");
				$(".ownItem,.addItem").css({opacity:0.5});

				$(".remove").fadeIn();

			},
			function(){

				$(".addressList .item").animate({
				paddingLeft:"15px"
				},"fast").css({background:"url(/m/img/arrow.png) no-repeat 95% center"});
				
				$(this).text("編集");
				$(".ownItem,.addItem").css({opacity:1});

				$(".remove").fadeOut();

			}
		);

		$(".removeToggle").click(function(){
			$(".mask").show();
			$(this).addClass("active");
			$(this).parent().children(".removeBtn").fadeIn();
		});

		$(".mask").click(function(){
			$(".mask").hide();
			$(".removeToggle").removeClass("active");
			$(".removeBtn").fadeOut();
		});
		
	});