	$(document).ready(function(){
	
	$("body").append("<div class='mask'></div>");

		$("#editButton a").toggle(function(){
			
				$(".item").animate({
				paddingLeft:"43px"
				},"fast");
				
				$(".addCart").css({display:"none"});			
				$(this).text("完了");
				$(".remove").fadeIn();

			},
			function(){

				$(".item").animate({
				paddingLeft:"0"
				},"fast");
				
				$(".addCart").css({display:"block"});			
				$(this).text("編集");
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
	
	