$(document).ready(function(){
	$('tbody').colorize();

/*
	$('select').change(function() {
		location.href="#"+this[this.selectedIndex].value;
	});
*/

	$('.pageTop').click(function () {
		$(this).blur();
		$('html,body').animate({ scrollTop: 0 }, 100);
		return false;
	});

	$('select').change(function() {
		var $target = $(document.getElementById(this[this.selectedIndex].value));
		var targetOffset = $target.offset().top;
		$('html,body').animate({scrollTop: targetOffset}, 100);
		return false;
	});


});



