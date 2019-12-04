$(document).ready(function () {
	
/*Uses Swipe functionality for Horizontal scrolling on mobile views*/	
$(".fix").swipe({ 
	swipeLeft:swipe2, 
	swipeRight:swipe2
			});
	 function swipe2(event, phase, direction, distance) {
		 if (phase == "right"){
			 $("#button-prev").click();
		 }
		 else if (phase == "left"){
			 $("#button-next").click();
		 }

      }

/*Prevents horizantol nav button from being clicked during horizotal scroll animations and breaking the layout*/	
    $(".nav-button").click(function (event) {
          //event.preventDefault();
          //do something
          $(".nav-button").prop('disabled', true);
          setTimeout(function(){ $(".nav-button").prop('disabled', false); }, 1000);
    });
/*sets what buttons are shown on page load based on which section the user is on*/		
		var str = window.location.href;
		var res = str.match(/([#])\w+/g);
		var section = str.match(/[^I]\s?A{0}$/gm);
		var outerContent = $('.panel');
		var innerContent = $('.panel > div');
		if (res == null) {
			window.location = "#homeA";
			$("#homeA").addClass("active");
			$('#button-prev, #button-prev-header').hide();
		} else {
			var end = res.toString();
			$(".sub").removeClass("active");
			$(end).addClass("active");
			if (section == "A") {
				/*If user is on colomn A, don't scroll*/
				$('#button-prev, #button-prev-header').hide();
				$('#button-next, #button-next-header').show();
			} else if (section == "B") {
				/*If user is on colomn B, scroll to B on page load*/
				$('#button-prev, #button-prev-header').show();
				$('#button-next, #button-next-header').show();
				outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
			} else if (section == "C") {
				/*If user is on colomn C, scroll to C on page load*/
				$('#button-prev, #button-prev-header').show();
				$('#button-next, #button-next-header').hide();
				outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 1);
			}
		}
});

function sectionTransform(){

	"use strict";
	$('.sub').each(function () {
		if ($(this).hasClass("active")) {
			var sectionMarker = $(this).attr('id');
			var sectionHeader = "";

			if (sectionMarker == "homeA") {
				sectionHeader = "HOME";
			}
			else if (sectionMarker == "homeB") {
				sectionHeader = "HOME CONTENT";
			}
			else if (sectionMarker == "homeC") {
				sectionHeader = "HOME LINKS";
			}
			else if (sectionMarker == "admissionsA") {
				sectionHeader = "ADMISSIONS";
			}
			else if (sectionMarker == "admissionsB") {
				sectionHeader = "ADMISSIONS CONTENT";
			}
			else if (sectionMarker == "admissionsC") {
				sectionHeader = "ADMISSIONS LINKS";
			}
			else if (sectionMarker == "academicsA") {
				sectionHeader = "ACADEMICS";
			}
			else if (sectionMarker == "academicsB") {
				sectionHeader = "ACADEMICS CONTENT";
			}
			else if (sectionMarker == "academicsC") {
				sectionHeader = "ACADEMICS LINKS";
			}
			else if (sectionMarker == "financialA") {
				sectionHeader = "FINANCIAL";
			}
			else if (sectionMarker == "financialB") {
				sectionHeader = "FINANCIAL CONTENT";
			}
			else if (sectionMarker == "financialC") {
				sectionHeader = "FINANCIAL LINKS";
			}
			else if (sectionMarker == "studentA") {
				sectionHeader = "STUDENT";
			}
			else if (sectionMarker == "studentB") {
				sectionHeader = "STUDENT CONTENT";
			}
			else if (sectionMarker == "studentC") {
				sectionHeader = "STUDENT LINKS";
			}
			else if (sectionMarker == "newsA") {
				sectionHeader = "NEWS";
			}
			else if (sectionMarker == "newsB") {
				sectionHeader = "NEWS CONTENT";
			}
			else if (sectionMarker == "newsC") {
				sectionHeader = "NEWS LINKS";
			}
			else if (sectionMarker == "aboutA") {
				sectionHeader = "ABOUT";
			}
			else if (sectionMarker == "aboutB") {
				sectionHeader = "ABOUT CONTENT";
			}
			else if (sectionMarker == "aboutC") {
				sectionHeader = "ABOUT LINKS";
			}
			
			$(".section-marker h1").html(sectionHeader);


			$(this).find(".sub_content").addClass('main-heading-secondary');
		} else {
			$(this).find(".sub_content").removeClass("main-heading-secondary");
		}

	});

}

$(document).ready(function () {
	sectionTransform();
});

$(window).on('hashchange', function () {
	sectionTransform();
});

$("#nav_logo").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#homeA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});

$("#nav_home").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#homeA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_home_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#homeB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_home_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#homeC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next , #button-next-header').hide();
});
$("#nav_admissions").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#admissionsA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_admissions_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#admissionsB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_admissions_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#admissionsC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').hide();
});
$("#nav_academics").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#academicsA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_academics_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#academicsB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_academics_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#academicsC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').hide();
});
$("#nav_financial").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#financialA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_financial_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#financialB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_financial_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#financialC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').hide();
});
$("#nav_student").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#studentA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_student_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#studentB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_student_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#studentC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').hide();
});
$("#nav_news").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#newsA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_news_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#newsB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_news_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#newsC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').hide();
});
$("#nav_about").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#aboutA").addClass("active");
	$('#button-prev, #button-prev-header').hide();
	$('#button-next, #button-next-header').show();
});
$("#nav_about_content").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#aboutB").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').show();
});
$("#nav_about_links").click(function () {
	"use strict";
	$(".sub").removeClass("active");
	$("#aboutC").addClass("active");
	$('#button-prev, #button-prev-header').show();
	$('#button-next, #button-next-header').hide();
});

$("#button-next").click(function () {
	if ($("#homeA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#homeB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#homeB";
	} else if ($("#homeB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#homeC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#homeC";
	} else if ($("#admissionsA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#admissionsB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#admissionsB";
	} else if ($("#admissionsB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#admissionsC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#admissionsC";
	} else if ($("#academicsA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#academicsB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#academicsB";
	} else if ($("#academicsB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#academicsC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#academicsC";
	} else if ($("#financialA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#financialB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#financialB";
	} else if ($("#financialB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#financialC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#financialC";
	} else if ($("#studentA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#studentB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#studentB";
	} else if ($("#studentB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#studentC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#studentC";
	} else if ($("#newsA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#newsB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#newsB";
	} else if ($("#newsB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#newsC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#newsC";
	} else if ($("#aboutA").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#aboutB").addClass("active");
		$('#button-prev, #button-prev-header').show();
		window.location = "#aboutB";
	} else if ($("#aboutB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#aboutC").addClass("active");
		$('#button-next, #button-next-header').hide();
		window.location = "#aboutC";
	}
});

$("#button-prev").click(function () {
	"use strict";
	if ($("#homeB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#homeA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#homeA";
	} else if ($("#homeC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#homeB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#homeB";
	} else if ($("#admissionsB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#admissionsA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#admissionsA";
	} else if ($("#admissionsC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#admissionsB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#admissionsB";
	} else if ($("#academicsB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#academicsA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#academicsA";
	} else if ($("#academicsC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#academicsB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#academicsB";
	} else if ($("#financialB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#financialA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#financialA";
	} else if ($("#financialC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#financialB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#financialB";
	} else if ($("#studentB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#studentA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#studentA";
	} else if ($("#studentC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#studentB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#studentB";
	} else if ($("#newsB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#newsA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#newsA";
	} else if ($("#newsC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#newsB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#newsB";
	} else if ($("#aboutB").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#aboutA").addClass("active");
		$('#button-prev, #button-prev-header').hide();
		window.location = "#aboutA";
	} else if ($("#aboutC").hasClass("active")) {
		$(".sub").removeClass("active");
		$("#aboutB").addClass("active");
		$('#button-next, #button-next-header').show();
		window.location = "#aboutB";
	}
});
$(document).ready(function () {
	 if ( $(window).width() < 992 ) {
		 $('.nav-button').css("visibility","hidden");
	 }else {
		//do a little dance
	 }
});


$("#button-prev-header").click(function () {
	"use strict";
	$("#button-prev").click();
});

$("#button-next-header").click(function () {
	"use strict";
	$("#button-next").click();
});