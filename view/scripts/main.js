$("#button_to_main a").click(function() {
	$("html, body").animate(
		{scrollTop: $("#main").offset().top}, 'slow');
});