$(document).ready(function () {
	window.onresize = function (event) {
		document.location.reload(true);
	};

$(".accordion-header").click(function() {
   if ($(this).hasClass("header-active")) {
    /* $(".accordion-content:visible")
       .hide("slow")
       .prev()
       .removeClass("header-active");

     $("span i")
       .removeClass("fa-angle-up")
       .addClass("fa-angle-down");*/
     $(this)
       .removeClass("header-active")
       .next()
       .hide("slow");

     $(this)
       .find("span i")
       .addClass("fa-angle-down")
       .removeClass("fa-angle-up");
   } else {
     $(this)
       .addClass("header-active")
       .next()
       .show("slow");

     $(this)
       .find("span i")
       .removeClass("fa-angle-down")
       .addClass("fa-angle-up");
   }
});
	
$( ".panel, #footer" ).mouseenter(function() {
        if ($('#footer-info').hasClass("active")) {
            $('.fa-info-circle').click();
        }
    });

	$( "#header-info" ).mouseleave(function() {	
		$('.fa-list-alt').click();
	});


	$( "#header-contain, #footer" ).mouseenter(function() {
		if ($('.menu-tab').hasClass('active')) {
			$('.menu-tab').click();
		}
	});

	$('.menu-tab').click(function () {
		$('.menu-hide').toggleClass('show');
		$(".nav-overlay").fadeToggle(850);
		$('.menu-tab').toggleClass('active');
		$(".menu-tab").prop('disabled', true);
          setTimeout(function(){ $(".menu-tab").prop('disabled', false); }, 1000);
		$(".accordion-content")
       .hide("slow")
       .prev()
       .removeClass("header-active");

     	$("nav span i")
       .removeClass("fa-angle-up")
       .addClass("fa-angle-down");
	});
	
	//sub navigation
	$('.has-sub-nav').mouseover(function () {
		$('.sub-nav').addClass("show-sub-nav");
	$('.has-sub-nav').mouseleave(function () {
		$('.sub-nav').removeClass("show-sub-nav");
	});
	
	});

	$('a').click(function () {
		$('.menu-hide').removeClass('show');
		$('.menu-tab').removeClass('active');
		$(".nav-overlay").fadeOut(1000);
	});


	$("nav ul li a").click(function () {
		$("nav ul li").removeClass("activeItem");
		$(this).toggleClass("activeItem");
		$(".nav-overlay").fadeOut(1000);

	});

$("#footer-toggle").click(function () {    
        $('#footer-info')
        .slideToggle()
        .toggleClass('active');
    });
	$(".fa-list-alt").click(function () {	
		$('#header-info').slideToggle();
	});
});