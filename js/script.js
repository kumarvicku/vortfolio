(function($) {
	
	"use strict";

	loader();
	/*====================================
	*     LOADER
	======================================*/
	function loader(_success) {
	    var obj = document.querySelector('.preloader'),
	    inner = document.querySelector('.preloader_inner'),
	    prog_bar = document.querySelector('.loader-bar'),
	    page = document.querySelector('.page-wrapper');
	    obj.classList.add('show');
	    page.classList.remove('show');
	    var w = 0,
	        t = setInterval(function() {
	            w = w + 1;
	            inner.textContent = w+'%';
	            prog_bar.style.width = w+'%';
	            if (w === 100){
	                obj.classList.remove('show');
	                page.classList.add('show');
	                clearInterval(t);
	                w = 0;
	                if (_success){
	                    return _success();
	                }
	             $('body').addClass('isLoaded');
	            }
	        },10);
	}

	if($('header').length){
		jQuery(window).on('scroll', function() {
	        if ($(this).scrollTop() > 30) {
	            $('header').addClass('fixed-header');
	        } else {
	            $('header').removeClass('fixed-header');
	        }
	    });
	}

	//Sidenav Toggle
	if($('.sidenav-bar').length){
		$('.sidenav-bar .navigation li.dropdown').append('<span class="dropdown-btn fa fa-angle-down"></span>');

		//Dropdown Button
		$('.sidenav-bar .navigation li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var ParentBox = $(this).parent('li');
			if($(ParentBox).hasClass('show')===true){
				$(ParentBox).removeClass('show');
			}else{
				$('.sidenav-bar .navigation li.dropdown').removeClass('show');
				$(this).parent('li').addClass('show');
			}
		});
	
		$(".sidenav-bar .side-nav .navigation li.dropdown > ul").slideUp();

		//Dropdown Button
		$('.sidenav-bar .side-nav .navigation li.dropdown > .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(400);
			$(this).parent().siblings().find("ul").slideUp(400);
		});

		//Show Sidebar Button
		$('.sec-icon, .nav-toggler').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('active-side-nav');
		});

		//Dropdown Button
		$('.hidden-bar .cross-icon, .menu-backdrop').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('active-side-nav');
		});
	}

	// Projects Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			mouseDrag:false,
			navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{
					items:1,
					margin:30
				},
				600:{
					items:1,
					margin:30
				},
				800:{
					items:2,
					margin:30
				},
				1024:{
					items:2,
					margin:30
				},
			}
		});    		
	}

	//Clients Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			center:true,
			mouseDrag:false,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				},
			}
		});    		
	}

	//Clients Carousel
	if ($('.resume-carousel').length) {
		$('.resume-carousel').owlCarousel({
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			center:true,
			mouseDrag:false,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				},
			}
		});    		
	}


		//Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:60,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
				},
			}
		});    		
	}



	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//Default Masonary
	function defaultMasonry() {
		if($('.masonry-items-container').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-items-container');
	
			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.masonry-item'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.on('resize', function(){

				$container.isotope({ 
					itemSelector: '.masonry-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}

	defaultMasonry();


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Projects Tabs
	if($('.project-tab').length){
		$('.project-tab .project-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .project-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	//Projects Tabs
	if($('.resume-tabs').length){
		$('.resume-tabs .resume-tab-btns .resume-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.resume-tabs .resume-tab-btns .resume-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.resume-tabs .resume-tabs-content .resume-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

    /*
    * Plugin intialization
    */
	if($('#pagepiling').length) {
	    $('#pagepiling').pagepiling({
	        menu: '#menu',
	        anchors: ['Home', 'About', 'Resume', 'Skills','Certifications',  'Projects' , 'Contact'],
	        direction: 'vertical',
	        keyboardScrolling:false,
	        navigation: {
	            'position': 'left',
	            'tooltips': ['Home', 'About', 'Resume', 'Skills', 'Certifications', 'Projects','Contact']
	        },
	        
	        afterLoad: function(anchorLink, index){
             $('#pp-nav li a').on('click', function(){
                    $('header').removeClass('fixed-header');
             });

            //section 2
            if(index == 2){
                 //Progress Bar
                if($('.progress-line').length){

                    $('.progress-line').appear(function(){
                        var el = $(this);
                        var percent = el.data('width');
                        $(el).css('width',percent+'%');
                    },{accY: 0});
                }
            }

            jQuery('.pp-scrollable').on('scroll', function() {
                if ($(this).scrollTop() > 50) {
                    $('header').addClass('fixed-header');
                } else {
                    $('header').removeClass('fixed-header');
                }
            });

            if(index>1){
                $('.pp-scrollable').scrollTop('0');
                $('body').removeClass('active-side-nav');
				$('.nav-toggler').removeClass('open');

            }else{
                $('body').removeClass('active-side-nav');
				$('.nav-toggler').removeClass('open');
            }
        }
	    });
	}

    //Contact Form Validation
	if($('#email-form').length){
		$('#submit').click(function(){
			
            var o = new Object();
            var form = '#email-form';
			
			var username = $('#email-form .username').val();
			var email = $('#email-form .email').val();
			var subject = $('#email-form .subject').val();
			
			if(username == '' || email == '' || subject == '')
			{
				$('#email-form .response').html('<div class="failed">Please fill the required fields.</div>');
				return false;
			}
            
            $.ajax({
                url:"sendemail.php",
                method:"POST",
                data: $(form).serialize(),
                beforeSend:function(){
                    $('#email-form .response').html('<div class="text-info"><img src="images/icons/preloader.gif"> Loading...</div>');
                },
                success:function(data){
                    $('form').trigger("reset");
                    $('#email-form .response').fadeIn().html(data);
                    setTimeout(function(){
                        $('#email-form .response').fadeOut("slow");
                    }, 5000);
                },
                error:function(){
                    $('#email-form .response').fadeIn().html(data);
                }
            });
        });
	}

	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {

	});

	$(window).on('resize', function() {
		floatText();
		defaultMasonry();
	});



})(window.jQuery);