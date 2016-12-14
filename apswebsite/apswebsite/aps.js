$("body").on("click", "img", function() {
	console.log("CLICK!");

	if ($(this).hasClass("zoom")) {
		$(this).css({height: "50%", width: "50%"}).removeClass("zoom");
	} else {
		$("img.zoom").css({height: "50%", width: "50%"}).removeClass("zoom");
		$(this).css({height: "50%", width: "50%"}).addClass("zoom");
}});