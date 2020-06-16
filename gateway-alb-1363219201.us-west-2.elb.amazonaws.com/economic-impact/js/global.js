/* :::::::::::::::::::::::::::::::::::::::::::::::::::

	GLOBAL SCRIPTS

:::::::::::::::::::::::::::::::::::::::::::::::::::*/

// DROPDOWN MENU
function dropDownMenu() {

	var dropdownLinks = $(".dropdown-link");
	var dropdownWrapper = $(this).next(".dropdown-wrapper");
	var dropdownSpacer = $("#dropdown-spacer");

	//if all dropdown menus are closed
	if ( !($(dropdownLinks).hasClass("selected")) ) {
		$(this).addClass("selected");
		$(dropdownSpacer).animate({
			height: "115"
		}, "fast");
		$(dropdownWrapper).slideDown("fast");
	}
	//if $(this) dropdown menu is open
	else if ( $(this).hasClass("selected") ) {
		$(this).removeClass("selected");
		$(dropdownSpacer).animate({
			height: "0"
		}, "fast");
		$(dropdownWrapper).slideUp("fast");
	}
	//if another dropdown menu is open
	else if ( $(dropdownLinks).not(this).hasClass("selected") ) {
		$(dropdownLinks).removeClass("selected");
		$(this).addClass("selected");
		$(".dropdown-wrapper").hide();
		$(dropdownWrapper).show();
	}

	//don't follow the link
	return false;
}




/* :::::::::::::::::::::::::::::::::::::::::::::::::::

	DOM IS LOADED

:::::::::::::::::::::::::::::::::::::::::::::::::::*/
$(document).ready(function() {
	// MAIN NAV
	$(".dropdown-link").bind("click",dropDownMenu); //bind dropdown menu function

	$(".close").click(function(){ //close menu
		$('.selected').focus();
		$(".dropdown-link").removeClass('selected');
		$(this).parents(".dropdown-wrapper").slideUp("fast");
		$("#dropdown-spacer").animate({
    		height: ""
 		}, "fast");

 		return false;
	});


	// HOME IMAGE SLIDESHOW
	$('#main-slideshow').flexslider({
		slideshow: false,
		startAt: 0,
		directionNav: true,
		controlNav: false,
		controlsContainer: "#main-slideshow",
		start: function(slider) {
			$('#caption-box .total').text(slider.count);
		},
		after: function (slider) {
			$('#caption-box .current').text(slider.currentSlide + 1);
		}
	});


	// FEATURED STORIES CAROUSEL
	$('#featured-stories').tinycarousel({duration: 400});

	if ($('#logo a').css('display') == 'block') {
		$('#featured-stories').clone().removeAttr('featured-stories').attr('id','featured-stories-mobile').insertAfter('#featured-stories');
		$('#featured-stories-mobile .overview').width('105%');
	}


	// RESPONSIVE VIDEOS
	$('#main-content').fitVids();


	//::::: FANCYBOX 2.1.5 GALLERIES
	$('.gallery li a').fancybox({
		beforeShow : function() { //ADD ALT TAG TO LIGHTBOX LARGE IMAGE
	        var alt = this.element.find('img').attr('alt');
	        this.inner.find('img').attr('alt', alt);
	        this.title = alt;
		},

		maxWidth: 648,
		maxHeight: 432,

    	keys: {
    		next : {
				13 : 'left', // enter
				34 : 'left',   // page down
				39 : 'left', // right arrow
				40 : 'left'    // down arrow
			},
			prev : {
				8  : 'right',  // backspace
				33 : 'right',   // page up
				37 : 'right',  // left arrow
				38 : 'right'    // up arrow
			}
    	},
		helpers: {
			title: null, //HIDE ALT/TITLE FROM BEING DISPLAYED
			overlay : {
				css : {
					'background-image': 'url("/economic-impact/img/fancybox_overlay_ucla.png")' //SET OVERLAY COLOR TO #002256 @ 50% OPACITY
				},
				locked: false //PREVENT PAGE BEHIND LIGHTBOX FROM SCROLLING
			}
		}
	});


	// TABLE STRIPING
	$(".stripe").find("tbody tr:odd").addClass("alt");


	// iOS4 DETECTION TO REMOVE FIXED FOOTER
	if ( /iPad/i.test(navigator.userAgent) ) {
		if ( /OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent) ) {
			$('#page-wrap').css('margin-bottom','-30px');
			$('#footer').css('position','relative');
		}
	}


	//FIX ISSUE WITH YOUTUBE EMBED FLOATING ON TOP OF ALL CONTENT IN IE
	$('iframe').each(function(){
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });


	// function checkCookie() {
	// 	//var centennial_return_visit = getCookie("centennial_return_visit");
	// 	if (centennial_return_visit == "yes") {
	// 		//IF RETURN VISIT, DON'T ANIMATE CENTENNIAL BANNER
	// 	} else {
	// 		//setCookie("centennial_return_visit",'yes',1); //SET THE COOKIE
	// 		//ANIMATE THE BANNER
	// 		$('#let-there-be').delay(2000).animate({
	// 			right: '-335',
	// 			easing: 'easeInOutExpo'
	// 		});
	// 	}
	// }


	//ANIMATE FLYOUT BANNER
	$('#let-there-be-flyout').delay(800).animate({
		right: '0',
		easing: 'easeInOutExpo'
	});

	$('#let-there-be-flyout').delay(7000).animate({
		right: '-310',
		easing: 'easeInOutExpo'
	},function() {
		$(this).removeAttr('style');
			$("#let-there-be-flyout").hover(function() {
				$(this).stop().animate({
					right: '0'
				}, 500);
				// $("#let-there-be-flyout img").attr("src", function(index, attr){
			  //       return attr.replace(".png", "-hover.png");
			  //   });
			}, function() {
				$(this).stop().animate({ right: "-310" }, 500);
				// $("#let-there-be-flyout img").attr("src", function(index, attr){
			  //       return attr.replace("-hover.png", ".png");
			  //   });
			});

			$("#let-there-be-flyout")
			.focus(function() {
				$(this).animate({ right: '0'}, 500);
			})
			.focusout(function() {
				$(this).animate({ right: '-310' }, 500);
			});
	});


  //STORE USER ID into a COOKIE
	var params = getUrlParam(document.URL);
	if(params !== null && params.uclaid !==null) {
		setCookie('userid',params.uclaid,1000);
		console.log(params.uclaid);
	}


	//GETS TIME WHEN FANCYBOX LOADS//
	var startTime = Date.now();


	//COOKIE GETTER/SETTER METHODS//
	/**
	 * [setCookie() sets a cookie value that expires after set day(s)]
	 * @param {string} cname  [name of the cookie]
	 * @param {string} cvalue [value to store in the cookie]
	 * @param {int} exdays [number of day(s) when the cookie expires]
	 */
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++)
		  {
		  var c = ca[i].trim();
		  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		}
		return "";
	}


	// UNDERREPRESENTED TAKEOVER
	/*function checkTakeoverCookie() {
		var pathname = window.location.pathname;
		var adm_underrep_takeover_visited = getCookie("adm_underrep_takeover_visited");
		if (pathname == "/" && adm_underrep_takeover_visited != "yes") {
			//IF FIRST VISIT, SET COOKIE SO TAKEOVER WON'T BE DISPLAYED AGAIN
			setCookie("adm_underrep_takeover_visited",'yes',6); //SET THE COOKIE

			//::::: FANCYBOX 2.1.5
		$.fancybox({
			'maxWidth': '700px',
			'fitToView': false,
			'autoScale': false,
			'transitionIn': 'fade',
			'transitionOut': 'fade',
			'scrolling': 'no',
			'content': '<div id="fancybox-content-wrapper"><div class="fancybox-content"><p class="blue">To our admitted Bruins,<br> their families and friends</p><p>Thank you for making us better. UCLA received more applications this year than any other university in the country. More than 113,000 extraordinary high school seniors from around the world wanted to come study here. Despite the incredible caliber of these applicants, we could only accept fewer than 1 in 5. We are so thrilled with our admitted Bruins from near and far. We thank the teachers and mentors who helped guide them, and the families who shaped and supported them. But most of all, we thank the exceptional students who demonstrated, through hard work and sacrifice, that they believe in their own potential. We believe, too &mdash; in you, and in all of us together. We believe that those who join us will receive a world-class education at a place where inspiration thrives. So, for all you did to get to this moment, your Bruin family would just like to say: Thank you. We are proud of you. Congratulations to the entering Class of 2018.</p><p class="signature">Sincerely,</p><img class="logo" src="../img/underrepresented-takeover-logo.png"/></div></div>',
			afterLoad: function() {
				ga('send', 'event', 'Homepage-Takeover-Lightbox', 'viewed', 'Underrepresented-Letter');
				startTime;
				$('body.homepage .fancybox-inner').css('overflow', 'hidden');
			},
			afterClose: function() {
				var endTime = Date.now();
				var timeElapsed = endTime - startTime;
				ga('send', 'event', 'Homepage-Takeover-Lightbox', 'closed', 'Underrepresented-Letter');
				ga('send', 'timing', 'Homepage-Takeover-Lightbox', 'closed', timeElapsed, 'Underrepresented-Letter');
			},
			helpers: {
				title: null, //HIDE ALT/TITLE FROM BEING DISPLAYED
				overlay : {
					css : {
						'overflow' : 'hidden', //HIDE SCROLLBAR
						'background-image': 'url("../img/fancybox_overlay_ucla.png")' //SET OVERLAY COLOR TO #002256 @ 50% OPACITY
					},
					locked: false //PREVENT PAGE BEHIND LIGHTBOX FROM SCROLLING
				}
			}
    });
		}
	}*/

	/*window.onload = function() {
    if( window.location.href == "http://www.ucla.edu/" || window.location.href == "http://dev.www.ucla.edu/" ) {
      checkTakeoverCookie(); //CHECK THE ADM UNDERREPRESENTED TAKEOVER RETURN VISITOR
    }
  }*/
});
