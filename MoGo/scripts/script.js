$( function() {


	/* Fixed Header*/

	let header = $("#header"),
			intro = $("#intro"),
			introH = intro.innerHeight(),
			scrollPos = $(window).scrollTop();
			nav = $("#nav");

	checkScroll(scrollPos, introH);

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight(),
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

function checkScroll() {
	if ( scrollPos > introH ) {
			header.addClass("fixed");
	} else {
			header.removeClass("fixed");
	}
};

/*Nav Toggle*/

	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});


	$(".pic_item").on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

});