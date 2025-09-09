
$(document).ready(function() {
	





	// Slide Out Menu
	$('#hamburger').click(function() {

		$('#slide-out').toggleClass('active');
		$('body').toggleClass('slide-out-open');
		return false;
	});

	$('#slide-out ul li.menu-item-has-children > a').click(function() {
		$(this).find('.sub-menu').slideUp();

		if ( $(this).hasClass( "active" ) ) {
			$(this).parent().find('.sub-menu').first().slideUp();
			$(this).removeClass('active');
		} else {
			$(this).parent().find('.sub-menu').first().slideDown();
			$(this).addClass('active');
		}
		return false;
	});
	// End slide out menu

	

	setTimeout(function(){ 

		var scrollme = scrollme || {};

		scrollme;

		if (Object.keys(scrollme).length === 0) {
			// console.log('scrollme is empty');
		} else {
			scrollme.on_resize();
		}
	}, 1000);

	






	$('#step-navigation a').click(function(event) {
		event.preventDefault();

		var distance = $('.step').width();

		var step = $(this).data('step');
		var scroll = distance * step;
		console.log(scroll);

		$('#scroller .inside').animate({
			scrollLeft: scroll+"vw"
		}, "slow");

		// $('#step-navigation a').removeClass('active');
		// $(this).addClass('active');
	});



	$('#scroller .inside').scroll(function() {
		var stepWidth = $('.step').width();
		var totalWidth = stepWidth * 11;


		var currentPosition = ($('#scroller .inside').scrollLeft() + 150);
		var currentStep = 1;

		if(stepWidth * 1 < currentPosition){currentStep = 2;}
		if(stepWidth * 2 < currentPosition){currentStep = 3;}
		if(stepWidth * 3 < currentPosition){currentStep = 4;}
		if(stepWidth * 4 < currentPosition){currentStep = 5;}
		if(stepWidth * 5 < currentPosition){currentStep = 6;}
		if(stepWidth * 6 < currentPosition){currentStep = 7;}
		if(stepWidth * 7 < currentPosition){currentStep = 8;}
		if(stepWidth * 8 < currentPosition){currentStep = 9;}
		if(stepWidth * 9 < currentPosition){currentStep = 10;}
		if(stepWidth * 10 < currentPosition){currentStep = 11;}


		console.log(currentStep);

		$('#step-navigation a').removeClass('active');
		$('#step-navigation a#step-'+currentStep).addClass('active');
		$('.step-indicator span').html(currentStep);
	});





	$('#section-4 .item').click(function(event) {
		event.preventDefault();

		var id = $(this).data('id');
		
		$('#section-4 .item').removeClass('active');
		$(this).addClass('active');

		$('.heatmap-container .heatmap').removeClass('active');
		$('.heatmap-container .heatmap-'+id).addClass('active');
		// $('#step-navigation a').removeClass('active');
		// $(this).addClass('active');
	});




	

	if (typeof ScrollMagic !== 'undefined') {
		var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "200%" } });
		new ScrollMagic.Scene({ triggerElement: "#parallax1" })
			.setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
			.addTo(controller);
	}



	// Affix actions
	$(window).on('scroll', function(event) {
		var scrollValue = $(window).scrollTop();
		if (scrollValue > 150) {
			$('.site-header').addClass('affix');
			$('.page-index').addClass('affix');
		} else {
			$('.site-header').removeClass('affix');
			$('.page-index').removeClass('affix');
		}
	});

	var scrollValue = $(window).scrollTop();
	if (scrollValue > 150) {
		$('.site-header').addClass('affix');
		$('.page-index').addClass('affix');
	} else {
		$('.site-header').removeClass('affix');
		$('.page-index').removeClass('affix');
	}




	// Open page index 
	$('.group.index').click(function(event) {
		$(this).toggleClass('active')
		$('.page-index').toggleClass('active');
		// $('.page-index-dropdown').removeClass('active');
		// $('.page-section-dropdown').removeClass('active');
		// $('.group.last').toggleClass('inactive');
		return false;
	});


	// Species dropdown
	var dropdowntimer;

	$(".has-dropdown").hover(function() {
		clearTimeout(dropdowntimer);
		$(".dropdown").stop(true, true).slideDown("fast");
		$(".site-header").addClass('dropdown-active');
	}, function() {
		var $this = $(this);
		dropdowntimer = setTimeout(function() {
			$(".dropdown").stop(true, true).slideUp("fast");
			$(".site-header").removeClass('dropdown-active');
		}, 800);
	});

	$(".dropdown").hover(function() {
		clearTimeout(dropdowntimer);
	}, function() {
		var $this = $(this);
		dropdowntimer = setTimeout(function() {
			$this.stop(true, true).slideUp("fast");
			$(".site-header").removeClass('dropdown-active');
		}, 500);
	});


	// Open secondary page index 
	// $('#menu-scroll .left').click(function(event) {
	// 	$('.page-index-dropdown').toggleClass('active');
	// 	$('.page-index').removeClass('active');
	// 	$('.page-section-dropdown').removeClass('active');
	// 	return false;
	// });

	// // Open section index 
	// $('#menu-scroll .right').click(function(event) {
	// 	$('.page-index-dropdown').removeClass('active');
	// 	$('.page-index').removeClass('active');
	// 	$('.page-section-dropdown').toggleClass('active');
	// 	return false;
	// });



	// Hide menu dropdowns on scroll
	let previousScrollPosition = 0;
	let isScrolling = false;

	function debounce(func, delay) {
		let timeout;
		return function() {
			const context = this;
			const args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				func.apply(context, args);
			}, delay);
		};
	}

	window.addEventListener("scroll", debounce(function() {
		const currentScrollPosition = window.scrollY;
		if (currentScrollPosition > previousScrollPosition) {
			$('.page-index').removeClass('active');
			$('.group.last').removeClass('inactive');
			$('.page-section-dropdown').removeClass('active');
			$('.page-index-dropdown').removeClass('active');
		} else {
			$('.page-index').removeClass('active');
			$('.group.last').removeClass('inactive');
			$('.page-section-dropdown').removeClass('active');
			$('.page-index-dropdown').removeClass('active');
		}
		previousScrollPosition = currentScrollPosition;
	}, 10));





	// Determine section ID and change header
	$(document).scroll(function() {

		var scrollTop = $(this).scrollTop();

  		// iterate through each section on the page
		$('.page-section').each(function() {

			var section = $(this);
			var sectionTop = section.offset().top;
			var sectionHeight = section.outerHeight();
			var sectionBottom = sectionTop + sectionHeight;

    		// check if the user's scroll position is within the section
			if (scrollTop > sectionTop && scrollTop < sectionBottom) {
      			// get the data attribute of the section ID
				var sectionID = section.data('section-number');
				var sectionTitle = section.data('section-title');

      			// update the content of the div with the section ID
				$('.current-page-section').text(sectionTitle);
				$('.current-section-number').text(sectionID);

				$('#menu.page-sections a').removeClass('active');
				$('#menu.page-sections').find('.section-'+sectionID).addClass('active');

      		return false; // exit the loop once we find the current section
    		}
  		});
	});




	// Populate page sections nav with page section data
	$('.page-section').each(function() {

			var currentPagenumber = $('.current-page-number').html();
			var section = $(this);
			var sectionID = section.data('section-number');
			var sectionTitle = section.data('section-title');
			var sectionOffset = section.data('section-offset');

			$('#menu.page-sections').append('<a href="" data-target="'+sectionID+'" data-title="'+sectionTitle+'" data-offset="'+sectionOffset+'" class="section-'+sectionID+'"><div class="d-flex"><span>0'+currentPagenumber+'-0' + sectionID + '</span> <span>' + sectionTitle +'</span></div></a>');

	});



	// Make page sections scroll to appropriate sections
	$('#menu.page-sections a').on('click', function(event) {
		event.preventDefault();
		
		var offset = 0;

		var link = $(this);

		var target = $(this).data('target');

		if ($(this).data('offset') != 'undefined') {
			offset = offset + $(this).data('offset');
		}

		offset = offset + 3;

		var sectionTitle = $(this).data('title');

		$('.current-page-section').html(sectionTitle);
		
		$('html, body').animate({
			scrollTop: $('.page-section[data-section-number="'+target+'"]').offset().top + offset
		}, 1000);

		setTimeout( function(){ 
			$('.current-page-section').html(sectionTitle); 
			$('#menu.page-sections a').removeClass('active');
			$(link).addClass('active');
		} , 1100 )
		

	});	



	// Sticky Nav
  // var doc = document.documentElement;
  // var w = window;

  // var prevScroll = w.scrollY || doc.scrollTop;
  // var curScroll;
  // var direction = 0;
  // var prevDirection = 0;

  // var header = document.getElementById('site-header');


  // var checkScroll = function() {

  //   /*
  //   ** Find the direction of scroll
  //   ** 0 - initial, 1 - up, 2 - down
  //   */

  //   curScroll = w.scrollY || doc.scrollTop;
  //   if (curScroll > prevScroll) { 
  //     //scrolled up
  //     direction = 2;
  //   }
  //   else if (curScroll < prevScroll) { 
  //     //scrolled down
  //     direction = 1;
  //   }

  //   if (direction !== prevDirection) {
  //     toggleHeader(direction, curScroll);
  //   }

  //   prevScroll = curScroll;
  // };

  // var toggleHeader = function(direction, curScroll) {
  //   if (direction === 2 && curScroll > 52) { 

  //     //replace 52 with the height of your header in px
  //     header.classList.remove('show');
      
  //     prevDirection = direction;
  //   }
  //   else if (direction === 1) {
  //     header.classList.add('show');
  //     prevDirection = direction;
  //   }
  // };

  // window.addEventListener('scroll', checkScroll);






});




























