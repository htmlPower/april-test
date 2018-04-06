$(document).ready(function($){
///Фиксация хэдера + перемещение табов
	window.onscroll = function(){ 
		var nav = $('.header__top'); 
		if(document.body.clientWidth<='767'){ 
			if ($(this).scrollTop() > 300) { 
				nav.addClass('header__top--fixed'); 
				$('.main-nav__cart-block').appendTo('.header__entry'); 
			} else { 
				nav.removeClass('header__top--fixed'); 
				$('.main-nav__cart-block').appendTo('.cart-place'); 
			} 
		} else{
			if ($(this).scrollTop() > 140) { 
				nav.addClass('header__top--fixed'); 
				$('.main-nav__catalog').appendTo('.fixed-tabs'); 
				$('.main-nav__cart-block').appendTo('.header__entry'); 
			} else { 
				nav.removeClass('header__top--fixed'); 
				$('.main-nav__catalog').appendTo('.tabs-place'); 
				$('.main-nav__cart-block').appendTo('.cart-place'); 
				} 
			} 
		};

///Показ табов
	$(function () {
    var tabContainers = $('.nav-tabs > div');
    tabContainers.hide().filter(':first').show();
    $('.tablinks').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('.tablinks').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
	});

///Затемнение фона при открытии табов
	var on = 0; 
	function loadPopup() {
		if(on == 0) {
			$("#shadow").css("opacity", "0.4");
			$(".main-nav__catalog-btn").addClass("main-nav__catalog-btn--active");
			$("#tabs-item").fadeIn("normal");
			$("#shadow").fadeIn("normal"); 
			on = 1;
		} else if (on == 1) {
			$(".main-nav__catalog-btn").removeClass("main-nav__catalog-btn--active");
			$("#tabs-item").fadeOut("normal");
			$("#shadow").fadeOut("normal");
			on = 0;
 		}
	};

	function off() {
		if(on == 1) {
			$("#tabs-item").fadeOut("normal");
			$("#shadow").fadeOut("normal");
			on = 0;
		}
	}

	$("#show-tabs-item").click(function() {
		loadPopup();
	});

	$("#shadow").click(function() {
		off();
	});

///Галлерея
	$('.item-gallery__element--sm').on('click', function(e) {
		e.preventDefault();
		var url = $(this).children('a').attr('href');
		$(this).removeClass('item-gallery__element--hidden').addClass('active').siblings().removeClass('active').addClass('item-gallery__element--hidden');
		$('#galleryBig').animate({
			opacity: 0
		}, 100, function() {
			$('#galleryBig').attr('src', url);
			$('#galleryBig').animate({
				opacity: 1
			}, 100);
		});
	});

///Мобильное меню
	$('.nav-toggle').on('click', function(){
  		$('#menu').toggleClass('active');
	});
});