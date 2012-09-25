/*

$(function(){
	if($("#skey").val() != "") { setoff(); }
	$("#skey").focus(function(){ setoff(); })
	$("#skey").blur(function(){ seton(); })
});
function seton() { if($("#skey").val() == "") { $("#sKeyword label").attr("class","labelon"); }}
function setoff() { $("#sKeyword label").attr("class","labeloff"); }
*/
$(document).ready(function(){
	$(".buy a").click(function(){
	var box=document.createElement("div");
	box.id="CartInfo";
	box.innerHTML='<span class="CartInfo_bg"><ul><li>カートに追加されました</li><li id="cartBtn"><a href="/sys/cart/">カートを見る</a></li><li id="closeBtn"><img src="/img/store/cmdty/close_btn.png"></li></ul></span>';
	$(this).parents(".buy").css("position","relative").append(box);
	$(box).css("display","none").fadeIn(200);
		$("#closeBtn img").click(function(){
			$("#CartInfo").fadeOut(400,function(){$("#CartInfo").remove()});
		});
	return false;
	});
});
