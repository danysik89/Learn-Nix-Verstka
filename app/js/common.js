$(function() {

	


	//Resize Window
	function onResize(){
			$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize();carouselService();};

});


$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
})