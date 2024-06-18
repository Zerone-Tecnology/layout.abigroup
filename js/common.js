$(function() {

	$('.reviews .btn-more').on('click', function(){
		vl = $(this).parent().find('.r-text');
		vl.toggleClass('active');
	})

	$('.mobile-menu').on('click', function(){
		$('#mmenu-wrap').addClass('active');
	});
	$('.btn-mmenu-close').on('click', function(){
		$('#mmenu-wrap').removeClass('active');
	});
	$('.has-child').on('click', function(){
		$(this).find('ul').toggleClass('active');
	});

	filterSelection("all")

	// Add active class to the current button (highlight it)
	var btnContainer = document.getElementById("blockItems");
	if(btnContainer){
		var btns = btnContainer.getElementsByClassName("f-item");
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function(){
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			});
		}
	}

	$('.btn-popup').magnificPopup({
		type: 'inline',
	});

	window.onscroll = function(){
		var hTop = $('.header-wrap').offset().top;
		 if(hTop > 100){
			$('.mainmenu-wrap').addClass('fixed');
		 } else {
			$('.mainmenu-wrap').removeClass('fixed');
		 }
	}


	if ( $(window).width() < 768 ) {
		$('.partners .block-wrap').addClass('slider-mobile owl-carousel owl-theme')
	}

	$('.slider-mobile').owlCarousel({
	  loop: true,
		items: 1,
	});

	$('.slider-main').owlCarousel({
	  loop: true,
		items: 1,
	});

	$('.slider-service').owlCarousel({
		items: 1,
	  loop: true,
		nav: true,
		margin: 15,
	});
	
	$('.slider-project').owlCarousel({
		items: 2,
	  loop: true,
		nav: true,
		margin: 15,
		responsiveClass: true,
		responsive:{
			0: {
				items: 1,
				nav: false,
			},
			960:{
				items: 2,
				nav: true,
			}
		}
	});

	$('.slider-reviews').owlCarousel({
		items: 1,
	  loop: true,
		nav: true,
		margin: 15,
		responsiveClass: true,
		responsive:{
			0: {
				nav: false,
			},
			960:{
				nav: true,
			}
		}
	});

	$('.slider-cert').owlCarousel({
		items: 4,
	  loop: true,
		nav: true,
		margin: 15,
		responsiveClass: true,
		responsive:{
			0: {
				items: 1,
				nav: false,
			},
			520:{
				items: 2
			},
			960:{
				items: 3,
				nav: true,
			},
			1024:{
				items: 4,
			}
		}
	});
	
	var owl = $('.owl-carousel');

	owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
	});

	$('.img-popup').magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		},
	});

});

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("f-block");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	}
	element.className = arr1.join(" ");
}