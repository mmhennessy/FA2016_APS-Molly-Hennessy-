$(document).ready(function(){

	console.log("This is the file aps.js speaking.");

	$("body").on("click","img",function() {

			console.log("CLICK!");

			//This function will zoom in on an image AND and the class .zoom to that image
			//That class is used to track if a zoomed image is the image that was clicked


			if ($(this).hasClass("zoom")) {
				$(this).css({height: "200px", width: "300px"}).removeClass("zoom");
			} else {
				$("img.zoom").css({height: "200px", width: "300px"}).removeClass("zoom");
				$(this).css({height: "400px", width: "600px"}).addClass("zoom");
			}



	});

	// $("a").click(function resise(e){
	// 	$this.css ({
	// 		height: "400px", width: "600px"
	// 	});
	// 	});
	//
	// $("b").click(function resise(e){
	// 	$this.css ({
	// 		height: "400px", width: "600px"
	// 	});
	// 	});
	//
	//
	// $("c").click(function resise(e){
	// 	$this.css ({
	// 		height: "400px", width: "600px"
	// 	});
	// 	});
	//
	//
	// $("d").click(function resise(e){
	// 	$this.css ({
	// 		height: "400px", width: "600px"
	// 	});
	// 	});


});
