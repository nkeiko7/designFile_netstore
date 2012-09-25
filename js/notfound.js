$(function(){
	if($("#skey").val() != "") { setoff(); }
	$("#skey").focus(function(){ setoff(); })
	$("#skey").blur(function(){ seton(); })
});
function seton() { if($("#skey").val() == "") { $("#sKeyword label").attr("class","labelon"); }}
function setoff() { $("#sKeyword label").attr("class","labeloff"); }