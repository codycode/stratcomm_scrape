/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
module.exports = __webpack_require__(13);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	// Attaches the fancybox toolbar to the slide so the close button is always just above it for each instance
	var heroCta = document.querySelectorAll('a.fancybox');
	heroCta.forEach(function (fancyClick) {
		fancyClick.addEventListener('click', function () {
			$(".fancybox-toolbar").prependTo(".fancybox-slide");
		});
	});

	//format the ribbon text
	$('main .ribbon').each(function (index, value) {

		var text = $(value).html();

		var tmp = $.trim(text).split(' ');

		var ret = '';

		for (var i = 0; i < tmp.length; i++) {

			ret += '<span>' + tmp[i] + '</span>';
		}

		$(value).html(ret);
	});
	$('main .ribbon--yellow').each(function (index, value) {

		var text = $(value).html();

		var tmp = $.trim(text).split(' ');

		var ret = '';

		for (var i = 0; i < tmp.length; i++) {

			ret += '<span>' + tmp[i] + '</span>';
		}

		$(value).html(ret);
	});
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// =================================================
// TABLE OF CONTENTS: Functions
// =================================================

// (0.0) General Variable and Functions
// ------------------------------------------- * * *
// (1) safari detection
// (2) Variables
// (3) Hamburger

// (1.0) Desktop Functionality
// ------------------------------------------- * * *
// (1.1) Variables
// (1.2) Listeners and Keystroke Events

// (2.0) Mobile Functionality
// ------------------------------------------- * * *
// (2.1) Variables
// (2.2) Event Listeners
// (2.3) Keystroke Events

// (3.0) Select Functionality
// ------------------------------------------- * * *
// (3.1) Pick Menu
// (3.2) Window Resizing


var $ = jQuery.noConflict();

$(document).ready(function () {

	/*==================================================================
 0.0 General functions and variables
 ================================================================= */

	//Detect Safari, https://gist.github.com/darryl-snow/3822361
	eval(function (p, a, c, k, _e, d) {
		_e = function e(c) {
			return (c < a ? "" : _e(c / a)) + String.fromCharCode(c % a + 161);
		};while (c--) {
			if (k[c]) {
				p = p.replace(new RegExp(_e(c), 'g'), k[c]);
			}
		}return p;
	}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();', 77, 77, 'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')));

	var safari = $.browser.safari();
	var userbrowser = $.browser.browser(); //detected user browser

	//operating systems
	var mac = $.browser.mac(); // Mac OS

	//version
	var userversion = $.browser.version.number();

	if (userbrowser == "Safari") {
		$("html").addClass("safari");
	}
	//End Detect Safari

	var desktop = 1024;

	$('input[name="search"]').value = "";

	// Commonly used IDs
	var hamButton = document.getElementById('hamburger'),
	    mainNavWrap = document.getElementById('ucla-menu-wrap');
	mainNav = document.getElementById('main-nav');
	header = document.getElementById('header');
	mainContent = document.getElementById('main-content');
	searchButton = document.getElementById('search-button'), searchMenu = document.getElementById('search-menu'), searchInputMobile = document.getElementById('gsc-i-id1'), searchInputDesktop = document.getElementById('gsc-i-id2'), $body = $('body');

	//Hamburger Clicks
	hamButton.onclick = function hamClick() {
		hamButton.classList.toggle('is-active');
		mainNavWrap.classList.toggle('is-active');
		mainNav.classList.toggle('is-active');
		header.classList.toggle('is-active');
		mainContent.classList.toggle('active-menu');
		$('.primary-nav__second-level-nav').removeClass('is-active');

		if (hamButton.classList.contains('is-active')) {
			hamButton.setAttribute('aria-expanded', 'true');
			$('.primary-nav__top-level a, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '0');
			$(hamButton).attr('aria-label', 'Close mobile menu');
		} else {
			hamButton.setAttribute('aria-expanded', 'false');
			$('.primary-nav__top-level a, .primary-nav__go-back, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '-1');
			$(hamButton).attr('aria-label', 'Open mobile menu');
			$('.primary-nav__top-level').css('overflow-y', 'scroll');
		}
	};

	/*==================================================================
 1.0 DESKTOP FUNCTIONALITY
 ================================================================= */
	function desktopMenu($) {
		//load desktop nav functionality
		var desktop = 1024,
		    element = document.activeElement,
		    navList = document.getElementById("main-nav"),
		    menuLinks = navList.querySelectorAll("a"),
		    topLevelLinks = document.getElementsByClassName("primary-nav__top-level-link");
		secondLevelNav = document.getElementsByClassName("primary-nav__second-level-nav");
		desktopSearches = document.getElementsByClassName("desktop-searches");

		for (var i = 0; i < document.getElementsByClassName("primary-nav__top-level-link").length; i++) {
			document.getElementsByClassName("primary-nav__top-level-link")[i].addEventListener('mouseenter', function (event) {
				if ($('.primary-nav__top-level-link.link-desktop').hasClass('open')) {
					event.preventDefault();
					$('.primary-nav__top-level-link').removeClass('open');
					$('.primary-nav__second-level-nav').css('display', '');
				} else if ($('.primary-nav__top-level-link.link-desktop').is(':focus')) {
					event.preventDefault();
					$(".primary-nav__top-level-link.link-desktop").blur();
				}
			});
		}

		$(document).click(function () {
			if ($('.primary-nav__top-level-link.link-desktop').hasClass('open')) {
				$('.primary-nav__top-level-link.link-desktop').removeClass('open');
				$(this).find('.primary-nav__second-level-nav').css('display', '');
			}
		});

		$('.primary-nav__top-level a, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '0');

		//Add the width off the window to the submenu
		desktopSubmenuResize($);

		//Desktop Menu Search button click
		searchButton.onclick = function () {
			$('.desktop-searches').toggleClass('is-active');
			searchMenu.classList.toggle('is-active');

			if ($('.desktop-searches').hasClass('is-active')) {
				$('input#gsc-i-id2').focus();
				$(searchButton).attr('aria-label', 'Close Search menu');
				$(searchButton).attr('aria-expanded', 'true');

				for (var i = 0; i < secondLevelNav.length; i += 1) {
					secondLevelNav[i].style.display = "none";
					$('.primary-nav__second-level-nav.desktop-searches').css('display', '');
				}
			} else {
				$(searchButton).attr('aria-label', 'Open Search menu');
				$(searchButton).attr('aria-expanded', 'false');

				for (var i = 0; i < secondLevelNav.length; i += 1) {
					secondLevelNav[i].style.display = "";
				}
			}
		};

		document.onkeydown = function (evt) {

			var element = document.activeElement,
			    searchValue = $('input#gsc-i-id2').val();
			evt = evt || window.event;

			if ($('.skip-nav__desktop-nav').is(':focus')) {

				if (evt.keyCode == 13) {
					setTimeout(function () {
						$('#about-menu').focus();
					}, 100);
				}
			} else if ($('.skip-nav__desktop-search').is(':focus')) {

				if (evt.keyCode == 13) {

					$('.desktop-searches').toggleClass('is-active');
					searchMenu.classList.toggle('is-active');

					if ($('.desktop-searches').hasClass('is-active')) {
						setTimeout(function () {
							$('input#gsc-i-id2').focus();
						}, 100);
					}
				}
			} else if ($('.primary-nav__top-level-link').is(':focus')) {

				if (evt.keyCode == 9 && event.shiftKey) {
					$(element).next('.primary-nav__second-level-nav').css('display', '');
					$(element).removeClass('open');
				} else if (evt.keyCode == 9) {
					$(element).next('.primary-nav__second-level-nav').css('display', 'block');
					$(element).addClass('open');
				} else if (evt.keyCode == 39) {
					$(element).next('.primary-nav__second-level-nav').css('display', '');
					$(element).parent().next().find('.primary-nav__top-level-link').focus();
					$(element).removeClass('open');
				} else if (evt.keyCode == 37) {
					$(element).parent().prev().find('.primary-nav__top-level-link').focus();
					$(element).removeClass('open');
				}
			} else if ($('.primary-nav__second-level-nav > .primary-nav__stack-holder > .primary-nav__stack-holder-wrap > .primary-nav__menu-stack:last-child > li:last-child > a').is(':focus')) {

				if (evt.keyCode == 9) {
					$(element).parent().parent().parent().parent().parent().css('display', '');
					$(element).parent().parent().parent().parent().parent().prev().removeClass('open');
				}
			} else if ($('input#gsc-i-id2').is(':focus') && searchValue === '') {

				if (evt.keyCode == 9) {
					$('.desktop-searches').removeClass('is-active');
					searchMenu.classList.remove('is-active');
				}
			} else if ($('a.gsst_a').is(':focus')) {
				if (evt.keyCode == 9) {
					$('.desktop-searches').removeClass('is-active');
					searchMenu.classList.remove('is-active');
				}
			}
		};
	}

	/* Select the size on load or reset the size of the submenu for dekstop only. Resize the submenu when
 ================================================================= */
	function desktopSubmenuResize($) {
		var desktop = 1024,
		    w = $(window).width(),
		    offset = $('.primary-nav__top-level').offset(),
		    negOffset = offset.left * -1;

		$('.primary-nav__top-level a, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '0');

		//Add the width off the window to the submenu
		$('.primary-nav__second-level-nav').css('width', w);

		//Offset the menu to the left of the window.
		$('.primary-nav__second-level-nav').css({ 'left': negOffset });
	}

	/*==================================================================
 2.0 Mobile Functionality
 ================================================================= */
	function mobileMenu($) {
		//load mobile nav functionality

		var desktop = 1024,
		    element = document.activeElement,
		    mobileSearchValue = $('input#gsc-i-id1').val();

		//Remove and widths that the desktop sets.
		$('.primary-nav__second-level-nav').removeAttr("style");
		//Menu is closed onload so the links are not tabable until the menu is open
		setTimeout(function () {
			$('.primary-nav__top-level a, .primary-nav__go-back, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '-1');
		}, 10);

		for (var i = 0; i < document.getElementsByClassName("primary-nav__top-level-link").length; i++) {
			document.getElementsByClassName("primary-nav__top-level-link")[i].addEventListener('click', function (event) {
				if (window.innerWidth < desktop) {
					event.preventDefault();
					$('.primary-nav__top-level').scrollTop(0);
					$('.primary-nav__second-level-nav').scrollTop(0);
					$(this).next('.primary-nav__second-level-nav').addClass('is-active');
					$(this).next('.primary-nav__second-level-nav').find('.primary-nav__go-back').addClass('is-active');
					$('.primary-nav__top-level').css('overflow-y', 'hidden');
				}
			});
		}

		for (var i = 0; i < document.getElementsByClassName("primary-nav__go-back").length; i++) {
			document.getElementsByClassName("primary-nav__go-back")[i].addEventListener('click', function (event) {
				if (window.innerWidth < desktop) {
					event.preventDefault();
					$(this).parent('.primary-nav__second-level-nav').removeClass('is-active');
					$(this).removeClass('is-active');
					$('.primary-nav__top-level').css('overflow-y', 'scroll');
				}
			});
		}

		document.onkeydown = function (evt) {

			var element = document.activeElement,
			    searchValue = $('input#gsc-i-id1').val();
			evt = evt || window.event;

			if ($('.skip-nav__mobile-nav').is(':focus')) {
				if (evt.keyCode == 13) {

					if ($('#hamburger').hasClass('is-active')) {
						event.preventDefault();
						$('#about-menu').focus();
					} else {
						$('#hamburger').trigger('click');
						$('#about-menu').focus();
					}
				}
			} else if ($('.skip-nav__mobile-search').is(':focus')) {

				if (evt.keyCode == 13) {

					if ($('#hamburger').hasClass('is-active')) {
						event.preventDefault();
						$('input#gsc-i-id1').focus();
					} else {
						console.log('hello');
						$('#hamburger').trigger('click');
						$('input#gsc-i-id1').focus();
					}
				}
			} else if ($('#about-menu').is(':focus')) {

				if (evt.keyCode == 13) {

					$(element).next('ul').find('.primary-nav__go-back').attr('tabindex', '0');
					setTimeout(function () {
						$(element).next('ul').find('.primary-nav__go-back').focus();
					}, 100);
				} else if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
					$('input#gsc-i-id1').focus();
				} else if (evt.keyCode == 9) {

					event.preventDefault();
					$(element).parent().next('.primary-nav__top-level-li').children('a').focus();
				}

				//direct to mobile only links
			} else if ($('#campus-life-menu').is(':focus')) {

				//if you hit enter it will open the second level flyout
				if (evt.keyCode == 13) {

					$(element).next('ul').find('.primary-nav__go-back').attr('tabindex', '0');
					setTimeout(function () {
						$(element).next('ul').find('.primary-nav__go-back').focus();
					}, 100);
				} else if (evt.keyCode == 9 && event.shiftKey) {

					event.preventDefault();
					$(element).parent().prev('.primary-nav__top-level-li').children('a').focus();
				} else if (evt.keyCode == 9) {
					event.preventDefault();
					$(element).parent().next().next('.primary-nav__top-level-mobile-li').children('a').focus();
				}

				//direct to Give Button
			} else if ($('#public-transit-menu').is(':focus')) {

				//if you hit shift+tab it will go back up a menu item
				if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
					$(element).parent().prev('.primary-nav__top-level-mobile-li').children('a').focus();
				} else if (evt.keyCode == 9) {
					event.preventDefault();
					$(element).parent().next().find('a').focus();
				}
			} else if ($(".primary-nav__top-level-link").is(":focus")) {

				//if you hit enter it will open the second level flyout
				if (evt.keyCode == 13) {

					$(element).next('ul').find('.primary-nav__go-back').attr('tabindex', '0');
					setTimeout(function () {
						$(element).next('ul').find('.primary-nav__go-back').focus();
					}, 100);
					$('.primary-nav__top-level').css('overflow-y', 'hidden');

					//if you hit tab instead of enter it move to the next list item and skip the flyout
				} else if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
					$(element).parent().prev('.primary-nav__top-level-li').children('a').focus();
				} else if (evt.keyCode == 9) {

					event.preventDefault();
					$(element).parent().next('.primary-nav__top-level-li').children('a').focus();
				}
			} else if ($('.primary-nav__menu-stack.last-mobile > li:last-child > a').is(":focus")) {

				if (evt.keyCode == 9 && event.shiftKey) {

					event.preventDefault();
					$(element).parent().prev('li').children('a').focus();
				} else if (evt.keyCode == 9) {

					event.preventDefault();
					$(window).scrollTop(0);
					$(element).parent().parent().parent().parent().siblings('.primary-nav__go-back').focus();
				}
			} else if ($(".primary-nav__second-level-nav > li > a").is(":focus")) {

				if (evt.keyCode == 9 && event.shiftKey) {
					$(element).prev('li').children('a').focus();
				}
			} else if ($("#directory-menu").is(":focus")) {

				if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
					$(element).parent().prev().prev('.primary-nav__top-level-li').children('a').focus();
				} else if (evt.keyCode == 9) {
					$(element).parent().next('.primary-nav__top-level-li').children('a').focus();
				}
			} else if ($("#give-btn").is(":focus")) {

				if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
					$(element).parent().parent().prev('.primary-nav__top-level-mobile-li').children('a').focus();
				} else if (evt.keyCode == 9) {
					event.preventDefault();

					setTimeout(function () {

						hamButton.classList.toggle('is-active');
						mainNav.classList.toggle('is-active');
						mainNavWrap.classList.toggle('is-active');
						header.classList.toggle('is-active');
						mainContent.classList.toggle('active-menu');
						$('.primary-nav__second-level-nav').removeClass('is-active');
						$body.removeClass('no-scroll');

						if (hamButton.classList.contains('is-active')) {
							hamButton.setAttribute('aria-expanded', 'true');
							$('.primary-nav__top-level a, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '0');
							$(hamButton).attr('aria-label', 'Close mobile menu');
						} else {
							hamButton.setAttribute('aria-expanded', 'false');
							$('.primary-nav__top-level a, .primary-nav__go-back, .gsc-search-button.gsc-search-button-v2, input#gsc-i-id1').attr('tabindex', '-1');
							$(hamButton).attr('aria-label', 'Open mobile menu');
						}
						$('main#main-content a').first().focus();
					}, 1);
				}
			} else if ($(".primary-nav__top-level-mobile-link").is(":focus")) {

				if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
					$(element).parent().prev('.primary-nav__top-level-mobile-li').children('a').focus();
				} else if (evt.keyCode == 9) {
					event.preventDefault();
					$(element).parent().next('.primary-nav__top-level-mobile-li').children('a').focus();
				}
			} else if ($(".primary-nav__go-back").is(":focus")) {

				if (evt.keyCode == 9 && event.shiftKey) {
					event.preventDefault();
				} else if (evt.keyCode == 13) {
					$('.primary-nav__go-back').parent('.primary-nav__second-level-nav').removeClass('is-active');
					setTimeout(function () {
						$(element).parent().prev().focus();
					}, 100);
					$('.primary-nav__top-level').css('overflow-y', 'scroll');
				}
			} else {
				//do nothing
			}
		};

		/* Disable Mobile scroll when menu is open CSS for no-scroll in stylesheet*/
		$('#hamburger').on('click', scrollDisable);

		function scrollDisable() {
			if (hamButton.classList.contains('is-active')) {
				$body.addClass('no-scroll');
			} else {
				$body.removeClass('no-scroll');
			}
		}
	}

	/*==================================================================
 3.0 Select FUNCTIONALITY
 ================================================================= */
	function pickMenu($) {

		var desktop = 1024;

		setTimeout(function () {
			$('input#gsc-i-id1, .gsc-search-button.gsc-search-button-v2').attr('tabindex', '-1');
		}, 500);

		if (window.innerWidth >= desktop) {

			desktopMenu($);
			$('.primary-nav__top-level-link').addClass('link-desktop');
			$('header, ul, nav, #hamburger, #ucla-menu-wrap').removeClass('is-active');
			$('#main-content').removeClass('active-menu');
			$('.primary-nav__top-level').css('overflow-y', 'visible');
			$body.removeClass('no-scroll');
			$(searchButton).attr('aria-label', 'Open Search menu');
			$(searchButton).attr('aria-expanded', 'false');
			$('.desktop-searches').removeClass('is-active');

			//else mobile
		} else if (window.innerWidth < desktop) {

			mobileMenu($);
			$('.primary-nav__top-level-link').removeClass('link-desktop');
			$('header, ul, nav, #hamburger, #ucla-menu-wrap').removeClass('is-active');
			$('#main-content').removeClass('active-menu');
			$('.primary-nav__top-level').css('overflow-y', 'scroll');
			$body.removeClass('no-scroll');
			$(searchButton).attr('aria-label', 'Open Search menu');
			$(searchButton).attr('aria-expanded', 'false');
			$('#search-menu').removeClass('is-active');
		}
	}

	pickMenu($);

	/*	Select which menu version to run (Desktop VS. Mobile) WHEN BROWSER RESIZES WITHOUT RELOADING
 ================================================================= */
	var isSmall = false;
	$(window).resize(function () {

		//Pick menu only happens when you resize past the large breakpoint
		if (window.innerWidth < 1024 && !isSmall || window.innerWidth >= 1024 && isSmall) {

			isSmall = !isSmall;

			setTimeout(function () {
				pickMenu($);
			}, 10);
		}

		//Resize the submenu on all resizes above 1024px.
		if (window.innerWidth >= 1024) {
			desktopSubmenuResize($);
		}
	});
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	// slider for happenings events feed
	var eventsSlider = {

		prevArrow: $(".calendar-desktop__left-arrow"),
		nextArrow: $(".calendar-desktop__right-arrow"),
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		variableWidth: true,
		mobileFirst: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2
			}
		}] },
	    runEventsSlick = function runEventsSlick() {
		$(".events-feed").not(".slick-initialized").slick(eventsSlider);
	};

	// slick initialization while document ready
	runEventsSlick();

	// slider for spredfast social feed
	var maxWidth = 1280,
	    socialSlider = {
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		variableWidth: true,
		mobileFirst: true,
		responsive: [{
			breakpoint: maxWidth,
			settings: "unslick" // removes slider for desktop
		}]
	},
	    runSocialSlick = function runSocialSlick() {
		$(".social-post__feed").not(".slick-initialized").slick(socialSlider);
		executeTabFix();
	};

	/* ADA Tab Fix */
	function executeTabFix() {
		$(".social-post__feed").find('.twitter__url').attr('tabindex', '0');
		$(".social-post__feed").find('.instagram__url').attr('tabindex', '0');
		// fix double tabbing issue for first item
		$(".social-post__feed").find('.twitter').attr('tabindex', '-1');
		$(".social-post__feed").find('.instagram').attr('tabindex', '-1');
	}

	// slick initialization while document ready
	runSocialSlick();

	// listen to jQuery's window resize
	$(window).on("resize", function () {
		var width = $(window).width();
		if (width < maxWidth) {
			// reinit slick while window's width is less than maximum width (1280px)
			runSocialSlick();
		}
	});

	$('#spredfast .instagram__url, #spredfast .twitter__url').mouseleave(function () {
		executeTabFix();
	});
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	var weatherEndpoint = 'https://weather.atmos.ucla.edu/scripts/wx.php';
	var weatherLink = 'https://weather.atmos.ucla.edu/';

	var fog = ['Fog', 'Haze'];

	var partCloud = ['Partly Cloudy', 'High Clouds', 'Partly Cloudy w/ Gusts', 'Partly Cloudy w/ Wind', 'Cloudy', 'Cloudy w/ Wind Gusts', 'Cloudy w/ Wind', 'Mostly Cloudy', 'Clouds'];

	var overcast = ['Chance of Showers', 'Likely Showers', 'Overcast', 'Smog', 'Smoke', 'Dust', 'Snowflake Cold', 'Sandstorm', 'Tornado', 'Storm Warning', 'Hurricane Warning'];

	var lightRain = ['Raindrops', 'Raindrop'];

	var rain = ['Rain', 'Heavy Rain', 'Rain w/ Wind', 'Sleet', 'Sleet Storm', 'Snow', 'Snow Storms', 'Snow w/ Wind', 'Storm Showers', 'Thunderstorms', 'Hail', 'Lightning', 'Frequent Showers', 'Showers', 'Snow w/ Thunderstorms', 'Sprinkles', 'Storm w/ Showers', 'Mixed Rain', 'Tsunami', 'Hurricane'];

	var partSun = ['Partly Sunny', 'Partly Clear'];

	var sun = ['Sunny', 'Windy', 'Solar Eclipse', 'Hot', 'Sunny w/ Light Wind', 'Clear', 'Clear Skies', 'Strong Winds', 'Earthquake', 'Fire', 'Flood', 'Volcano', 'Small Craft Advisory', 'Gale Warning'];

	var moon = ['Lunar Eclipse', 'Meteor'];

	$.get(weatherEndpoint, function (data) {
		data = JSON.parse(data);
		data.description = data.description.trim();
		data.time = data.time.trim();

		var link = $('<a href="' + weatherLink + '"></a>');
		var icon = 'sun';
		var is_raining = false;

		if ($.inArray(data.description, sun) !== -1) {
			icon = 'sun';
		} else if ($.inArray(data.description, rain) !== -1) {
			icon = 'rain';
			is_raining = true;
		} else if ($.inArray(data.description, fog) !== -1) {
			icon = 'fog';
		} else if ($.inArray(data.description, partCloud) !== -1) {
			icon = 'part-cloud';
		} else if ($.inArray(data.description, overcast) !== -1) {
			icon = 'overcast';
			is_raining = true;
		} else if ($.inArray(data.description, lightRain) !== -1) {
			icon = 'light-rain';
			is_raining = true;
		} else if ($.inArray(data.description, partSun) !== -1) {
			icon = 'part-sun';
		} else if ($.inArray(data.description, moon) !== -1) {
			icon = 'moon';
		}

		if (!is_raining && data.time != 'day') {
			icon = 'moon';
		}

		link = link.appendTo('#weather');
		link.append('<img src="/img/weather/' + icon + '-white.svg" alt="" />');
		link.append('<p>' + data.air_temp + '&deg;<span> and ' + data.description + '</span></p>');
	});
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	$('.email__signup').bind('submit', function () {

		var $email = $('input#control_EMAIL'),
		    $firstName = $('input#control_FIRSTNAME'),
		    $lastName = $('input#control_LASTNAME'),
		    $zipcode = $('input#control_ZipCode'),
		    form = $('.email__signup'),
		    error = false,
		    errormsg = '';

		$('.email__form-success-msg').css({ 'display': 'none' });

		//reset
		$email.removeClass('error');
		$firstName.removeClass('error');
		$lastName.removeClass('error');
		$zipcode.removeClass('error');

		//validate email
		if (!isEmail($email.val())) {

			$email.addClass('error');
			errormsg += '<span class="email__form-error-icon"></span> Enter a valid email<br/>';
			error = true;
		}

		//validate first name
		if (!isName($firstName.val())) {

			$firstName.addClass('error');
			errormsg += '<span class="email__form-error-icon"></span> Enter a valid first name<br/>';
			error = true;
		}

		//validate last name
		if (!isName($lastName.val())) {

			$lastName.addClass('error');
			errormsg += '<span class="email__form-error-icon"></span> Enter a valid last name<br/>';
			error = true;
		}

		//validate zipcode
		if (!isZipcode($zipcode.val())) {

			$zipcode.addClass('error');
			errormsg += '<span class="email__form-error-icon"></span> Enter a valid zipcode<br/>';
			error = true;
		}

		//if there is an error
		if (error) {
			$('.email__form-error-msg').html(errormsg.substring(0, errormsg.length - 5));
			$('.email__form-error-msg').css({ 'display': 'block' });

			//no error in the form
		} else {

			$('.email__form-error-msg').css({ 'display': 'none' });
			$('.email__input-loading').addClass('show');

			var formData = decodeURIComponent($(form).serialize());

			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				dataType: 'json',
				data: formData,
				success: function success(result) {

					if (result.success) {
						$('.email__form-success-msg').css({ 'display': 'block' });
						$('.email__signup input[type="text"]').val('');
						$('.email__signup input[type="text"]').removeClass('checked');
					} else {
						$('.email__form-error-msg').html('<span class="email__form-error-icon"></span> ' + result.msg);
						$('.email__form-error-msg').css({ 'display': 'block' });
					}

					$('.email__input-loading').removeClass('show');
				}
			});
		}

		return false;
	});

	$('.email__signup input#control_EMAIL').bind('keyup', function () {

		$(this).removeClass('error');

		if (isEmail($(this).val())) {
			$(this).addClass('checked');
		} else {
			$(this).removeClass('checked');
		}
	});

	$('.email__signup input#control_FIRSTNAME, .email__signup input#control_LASTNAME').bind('keyup', function () {

		$(this).removeClass('error');

		if (isName($(this).val())) {
			$(this).addClass('checked');
		} else {
			$(this).removeClass('checked');
		}
	});

	$('.email__signup input#control_LASTNAME').bind('keyup', function () {

		$(this).removeClass('error');

		if (isName($(this).val())) {
			$(this).addClass('checked');
		} else {
			$(this).removeClass('checked');
		}
	});

	$('.email__signup input#control_ZipCode').bind('keyup', function () {

		$(this).removeClass('error');

		if (isZipcode($(this).val())) {
			$(this).addClass('checked');
		} else {
			$(this).removeClass('checked');
		}
	});
});

//validate email
function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

//validate name
function isName(name) {
	var regex = /^.+$/;
	return regex.test(name);
}

//validate zipcode
function isZipcode(zipcode) {
	var regex = /^.{5,}$/;
	return regex.test(zipcode);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

// responsive-tables.js
$(document).ready(function () {

	var resizeId;

	setRowHeight($);

	//on window resize
	$(window).resize(function () {

		clearTimeout(resizeId);
		resizeId = setTimeout(function () {
			setRowHeight($);
		}, 100);
	});
});

function setRowHeight($) {

	$('td:first-child, th:first-child').each(function () {

		//reset rows
		$(this).css('height', '');
		$(this).parent('tr').css('height', '');

		//grab heights
		var firstChildHeight = $(this).closest('tr').height(),
		    firstCell = $(this).outerHeight();

		//set height
		if (firstChildHeight > firstCell) $(this).css('height', firstChildHeight + 'px');else {
			$(this).parent('tr').css('height', firstCell + 'px');
		}
	});
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	//elements
	var $search = $('#academics-programs-and-majors #search'),
	    $button = $('#academics-programs-and-majors .btn.load'),
	    $listWrapper = $('#academics-programs-and-majors .list-wrapper'),
	    $rows = $('#academics-programs-and-majors .list-wrapper .row');

	//set the list load
	setListLoad($);

	//enable the search
	$search.hideseek();
	$search.on("_after", function () {

		setListLoad($);
		getListCount($, $(this).val());

		//if there is a keyword in searchfield
		if ($(this).val() !== '') {
			$('.countwrapper .clear-btn').addClass('show');
		} else {
			$('.countwrapper .clear-btn').removeClass('show');
		}
	});

	//load more click event
	$button.bind('click', function () {

		//update the data-rows
		var rowsUpdate = Number($listWrapper.attr('data-rows')) + 50;
		$listWrapper.attr('data-rows', rowsUpdate);

		//set the List Load
		setListLoad($);

		return false;
	});

	//On Submission
	$('form[name="program-search"]').submit(function () {
		return false;
	});

	$('.countwrapper .clear-btn').bind('click', function () {

		$search.val('');
		var e = $.Event("keyup", { keyCode: 8 });
		$search.trigger(e);

		$('.countwrapper .clear-btn').removeClass('show');

		return false;
	});

	//enable link click on the rows
	/*$rows.bind('click', function() {
 	
 	var link = $(this).find('a').attr('href');
 	window.open(link,"_self")
 });*/

	//get the list count
	getListCount($);
});

/*================================================================================
Definition: see's if the list has more items to load
================================================================================*/
function setListLoad($) {

	var $listWrapper = $('#academics-programs-and-majors .list-wrapper'),
	    $rows = $('#academics-programs-and-majors .list-wrapper .row'),
	    $button = $('#academics-programs-and-majors .btn.load'),
	    dataRows = Number($listWrapper.attr('data-rows')),
	    rowHeight = 87;

	//if rows shown is less than the number of rows
	if (getNumRows($) < getTotalRows($)) {

		//add a more class
		$listWrapper.addClass('more');
		$button.addClass('more');

		//set list max height
		var maxHeight = (dataRows + 1) * rowHeight;
	} else {

		//remove more class
		$listWrapper.removeClass('more');
		$button.removeClass('more');

		//set list max height
		var maxHeight = dataRows * rowHeight;
	}

	//animate the max height
	$listWrapper.animate({
		'maxHeight': maxHeight + 'px'
	}, 200, function () {});
}

/*================================================================================
Definition: Get the Number of Rows Shown
================================================================================*/
function getNumRows($) {

	var $listWrapper = $('#academics-programs-and-majors .list-wrapper'),
	    $rows = $('#academics-programs-and-majors .list-wrapper .row'),
	    rowsShown = Number($listWrapper.attr('data-rows'));

	//get the number of show rows
	var count = 0;
	$rows.each(function (key, val) {

		if (String($(val).attr('style')) !== 'display: none;') {
			count++;
		}
	});

	//if count is less than rowsShown
	if (count < rowsShown) rowsShown = count;

	return rowsShown;
}

/*================================================================================
Definition: get Total Rows to Show
================================================================================*/
function getTotalRows($) {

	var $rows = $('#academics-programs-and-majors .list-wrapper .row'),
	    rowTotal = $rows.length;

	//get the number of show rows
	var count = 0;
	$rows.each(function (key, val) {

		if (String($(val).attr('style')) !== 'display: none;') {
			count++;
		}
	});

	//if count is less than rowTotal
	if (count < rowTotal) rowTotal = count;

	return rowTotal;
}

/*================================================================================
Definition: Show a counter message
================================================================================*/
function getListCount($, searchText) {

	var $rows = $('#academics-programs-and-majors .list-wrapper .row'),
	    $counter = $('#academics-programs-and-majors .search-container .counter');

	$count = 0;
	$rows.each(function (i, el) {

		if ($(el).css('display') == 'block') {
			$count++;
		}
	});

	if (typeof searchText == "undefined" || searchText == '') $counter.html($count + ' programs');else $counter.html($count + ' results matching &ldquo;' + searchText + '&rdquo;');
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	//add arrow to accrodion title
	$('.accordion__title').append('<img class="accordion__title-arrow" src="/img/arrow-down.svg" alt="arrow">');

	$('img.accordion__title-arrow[src$=".svg"]').each(function () {
		var $img = jQuery(this);
		var imgURL = $img.attr('src');
		var attributes = $img.prop("attributes");

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Remove any invalid XML tags
			$svg = $svg.removeAttr('xmlns:a');
			// Loop through IMG attributes and apply on SVG
			$.each(attributes, function () {
				$svg.attr(this.name, this.value);
			});
			// Replace IMG with SVG
			$img.replaceWith($svg);
		}, 'xml');
	});

	//This is what happens when you click the title on mobile or desktop.
	$(".accordion__title").click(function () {
		$(this).next(".accordion__content").toggleClass("show-me");
		$(this).parent(".accordion").toggleClass("show-me");
		$(this).find('.accordion__title-arrow').toggleClass('flip');
		$(this).toggleClass('active');

		if ($(this).next(".accordion__content").find("a").attr('tabindex') == -1) {
			$(this).next(".accordion__content").find("a").attr('tabindex', '0');
		} else if ($(this).next(".accordion__content").find("a").attr('tabindex') == 0) {
			$(this).next(".accordion__content").find("a").attr('tabindex', '-1');
		} else {}

		halfResetAria($);
	});

	//only reset the expanded attribute
	function halfResetAria($) {
		if ($(".accordion__title").hasClass("active")) {
			$(".accordion__title").find("button").attr("aria-expanded", "true");
		} else {
			$(".accordion__title-button").attr("aria-expanded", "false");
		}
	}

	//full reset of ada controls
	var accordBreakpoint = 768;

	function resetAria($) {
		if (window.innerWidth <= accordBreakpoint) {
			$(".accordion__title-button").attr("aria-expanded", "false");
			$(".accordion__content").find("a").attr('tabindex', '-1');
			$(".accordion__title").find("button").prop('disabled', false);

			halfResetAria($);
		} else if (window.innerWidth > accordBreakpoint) {
			$(".accordion__title-button").attr("aria-expanded", "true");
			$(".accordion__content").find("a").attr('tabindex', '0');
			$(".accordion__title").find("button").prop('disabled', true);
		} else {}
	}

	resetAria($);

	$(window).resize(function () {
		setTimeout(function () {
			resetAria($);
		}, 100);
	});

	//Tabbing index set to dropdown arrown for College and Schools page only.
	if (window.location.href.indexOf("college-and-schools") > -1) {
		$('.accordion__title-arrow').attr('tabindex', '0');

		document.onkeydown = function (evt) {

			var element = document.activeElement;

			if ($('.accordion__title-arrow').is(':focus')) {
				if (evt.keyCode == 13) {
					$(element).parent(".accordion__title").trigger('click');
				}
			}
		};
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

// sort-tables.js
$(document).ready(function () {

	var $table = $("#sortTable");

	$table.stupidtable_settings({
		will_manually_build_table: true
	});

	$('#sortTable thead th:first-child').trigger('click');

	/***
   sort by last name, custom data type for stupidtable
   https://github.com/joequery/Stupid-Table-Plugin#creating-your-own-data-types
   definition: sorts column by "Lastname Firstname" instead of the default "string"
   usage: add data-sort="lastname" to the th tag in the table that contains the names, in the applicable blade template
 ***/

	$table.stupidtable({
		"lastname": function lastname(a, b) {

			var pattern = "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$";
			var re = new RegExp(pattern);

			var aName = re.exec(a);
			var bName = re.exec(b);

			return aName - bName;
		}
	});

	$table.animate({
		opacity: 1
	}, 500, function () {});
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	/* Pagination control By default, Google displays 10 pages. Per comps, we added previous/left and next/right arrows and collapsed the total number of pages to 5. */
	if ($('#search').length > 0) {

		var interval = setInterval(function () {
			if ($('.gsc-cursor-box .gsc-cursor').length > 0) {
				if ($('.pagination-container').length == 0) {
					$('.gsc-cursor-box.gs-bidi-start-align').wrap('<div class="pagination-container"></div>');
					$('.pagination-container').prepend('<div class="gsc-cursor-page arrow-left"></div>');
					$('.pagination-container').append('<div class="gsc-cursor-page arrow-right"></div>');

					$('.gsc-cursor-page.arrow-left').bind('click', function () {
						$('.gsc-cursor-box.gs-bidi-start-align').scrollTo('-=167px', 500);
					});

					$('.gsc-cursor-page.arrow-right').bind('click', function () {
						$('.gsc-cursor-box.gs-bidi-start-align').scrollTo('+=167px', 500);
					});

					$('.gsc-cursor-box.gs-bidi-start-align').scrollTo($(".gsc-cursor-current-page"));
				}
			}
		}, 500);
	}
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();

$(document).ready(function () {

	//COOKIE GETTER/SETTER METHODS//
	/**
  * [setCookie() sets a cookie value that expires after set day(s)]
  * @param {string} cname  [name of the cookie]
  * @param {string} cvalue [value to store in the cookie]
  * @param {int} exdays [number of day(s) when the cookie expires]
  */
	function setCookie(cname, cvalue, exdays) {

		$.ajax({
			url: "/api/cookie/set?name=ucla-cookie-policy&val=accepted&min=525600",
			dataType: "json",
			success: function success(data) {

				if (!data.success) console.log('ERROR: there was a problem setting the policy');
			}
		});
	}

	function getCookie(cname) {

		return $.ajax({
			url: "/api/cookie/get?name=ucla-cookie-policy",
			dataType: "json"
		});
	}

	getCookie("ucla-cookie-policy").done(function (data) {

		var theCookie = "";

		if (data.success && data.value === 'accepted') theCookie = data.value;

		if (theCookie == "") {
			$('#cookie-policy').css('display', 'block');
		} else {
			$('#cookie-policy').remove();
		}

		//set the cookie when the user clicks on the accept button
		$("#cookie-policy-btn").on("click", function () {
			setCookie("ucla-cookie-policy", "accepted", 365);
			$('#cookie-policy').remove();
		});
	});
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* Removing the website-feedback pop-up modal in favor of opening external link in new window
var $ = jQuery.noConflict();

$(document).ready( function() {

	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	var surveyClicked = 0;

	//remove cookie, allow surveymonkey pop-up
	setCookie('smcx_0_last_shown_at','',-1);

	//Surveymonkey.com feedback pop-up when the .website-feedback class is clicked
	$(".website-feedback").on( "click", function() {

		surveyClicked++;

		(function(t,e,s,o){var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type="text/javascript",l.async=!0,l.id=o,l.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd5Qwtp8zVs7_2BfF4TpOvbZovGZ4bR75LGlXBafcIdXi4h.js"].join(""),c.parentNode.insertBefore(l,c));})(window,document,"script","smcx-sdk");

		if(surveyClicked <= 1) {
			$('<div class="survey-backdrop" style="display:none;"></div>').appendTo("body");
			$(".survey-backdrop").fadeIn();
		}

		if(surveyClicked > 1) {
			alert("Thank you for your feedback.");
		}

		$('body').on('DOMNodeInserted', '.smcx-widget', function () {
			$(".smcx-modal-close").on( "click", function() {
				$(".survey-backdrop").fadeOut();
			});
			$(".survey-backdrop").on( "click", function() {
				$(".survey-backdrop").fadeOut();
				$(".smcx-modal-close").trigger("click");
			});
		});
    });

});
*/

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);