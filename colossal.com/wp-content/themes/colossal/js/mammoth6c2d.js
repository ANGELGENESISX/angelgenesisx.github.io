$(document).ready(function() {


	if ($( window ).width() >= 768) {
		// Scrollmagic
		var controller = new ScrollMagic.Controller();

		var mammothHeight = $('#section-3').height() + 300;
		console.log(mammothHeight);
		// create a scene
		new ScrollMagic.Scene({
			triggerElement: "#sticky-element",
			triggerHook: "onLeave",
			triggerHook: 0.2,
			duration: mammothHeight, 
		})
		.setPin('#sticky-element', {pushFollowers: false}) // pins the element for the the scene's duration
		.addTo(controller); // assign the scene to the controller

	}


});