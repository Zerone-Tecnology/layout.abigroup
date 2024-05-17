$(function() {

	$('.slider-main').owlCarousel({
	  loop: true,
		items: 1,
	})

	$('.slider-service').owlCarousel({
		items: 1,
	  loop: true,
		nav: true,
		margin: 15,
	})
	
	$('.slider-project').owlCarousel({
		items: 2,
	  loop: true,
		nav: true,
		margin: 15,
	})

	$('.slider-reviews').owlCarousel({
		items: 1,
	  loop: true,
		nav: true,
		margin: 15,
	})

});
