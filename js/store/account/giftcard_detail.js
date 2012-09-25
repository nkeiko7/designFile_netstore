$(document).ready(function(){
  $(".toggleBtn").click(function () {
  	$(".toggleBtn").toggle();
    $("#expiredList").toggle();
  });
});