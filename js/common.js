$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

});

$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".header_menu > li").click(function () {
		if($(this).hasClass("active")){
			$(this).removeClass("active")
		}else{
			$(".header_menu > li").removeClass("active");
			$(this).addClass("active");
		}		
	});
	$('.review-carousel').owlCarousel({
		loop: true,
		// margin: 100,
		stagePadding: 100,
		nav: true,
		dots: false,
		navText: ['<img src="img/prev_arrow_yellow.png">', '<img src="img/next_arrow_yellow.png">'],
		responsive : {
			0 : {
				items : 1,
			},
			768 : {
				items : 3,
			}
		}
	})
	$('.banner-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ['<img src="img/left_arrow.png">', '<img src="img/right_arrow.png">'],
		items: 1
	})
	$('.item').click(function () {
		$(this).find("img").magnificPopup({
			animateOut: 'animate__fadeIn',
			items: {
				src: $(this).find("img").prop("src")
			},
			type: 'image'
		});
	});


	// $('.grid').masonry({
	// 	itemSelector: '.grid-item',
	// 	columnWidth: 100
	// });

	$('.open_modal').click(function () {
		$('.call_back_modal_wrapper').fadeIn("slow");
	});
	$('.close_modal_btn').click(function () {
		$('.call_back_modal_wrapper').fadeOut("slow");
	});
	$('.burger_menu').click(function(){
		$('.burger_menu').toggleClass("active");
		$('.header_menu').toggleClass("active");
		$('.header_search').toggleClass("active");
	});

});
