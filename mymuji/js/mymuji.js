
function setupFancyBox(){
    $("a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 780, 'height': 400 });
    $("li.review a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 520, 'height': 310 });
    $("#errorhandle_href").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 520, 'height': 250 });
    $("#postConfirm_href").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 530, 'height': 350 });
    $("#postConfirmReport_href").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 400, 'height': 150 });
    $("#deleteConfirmContribution_href").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 400, 'height': 150 });
    $("#deleteConfirmComment_href").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 400, 'height': 150 });
    $("a.voteList").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 610, 'height': 320 });
    $("a.commentList").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 610, 'height': 320 });
    $("a.rightNavi").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 610, 'height': 320 });
    $(".action_button a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 610, 'height': 320 });
    $(".others a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 610, 'height': 320 });
    $(".postSetting a.fancyBox").fancybox({ 'speedIn': 10, 'speedOut': 100, 'width': 400, 'height': 150 });
}

var lastClickedlistButton;
$(document).ready(function() {

        $('a.tTip').tinyTips('profile', 'title');

        $("#mhAccount dt a").click(function(){
                $(this).parent().eq(0).siblings().toggle();
                return false;
        });


	$(".postSetting dt a").click(function(){
		$(this).parent().eq(0).siblings().toggle();
		return false;
	});


	$("body").click(function(){
		$("#mhAccount dd,.postSetting dd,#userProfile .setting dd").hide();
	});

//fancyBox Opener
    setupFancyBox();


		$('.action a').click(function(){
			var clickedLink = $(this);
			if (clickedLink.parent().attr('class').indexOf('checked') != -1) {
				return false;
			}
			var pop=document.createElement("div");
			if (clickedLink.parent().attr('class').indexOf("wish") != -1) {
				pop.className="popWish";
			} else if (clickedLink.parent().attr('class').indexOf("own") != -1) {
				pop.className="popOwn";
			}
			this.parentNode.parentNode.parentNode.parentNode.appendChild(pop);
			setTimeout(function(){
				$("." + pop.className).fadeOut("slow");
			},200);
		
			return false;
		});


});
