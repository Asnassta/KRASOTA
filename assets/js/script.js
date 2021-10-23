$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(this).toggleClass("active");
		$(".header__nav").toggleClass('active');
	});
	/*==========/menu-toggle=========*/


  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header__nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset 
    }, 500);
  });
/*=========/smooth scroll=============*/



   /*===========Slider============*/
  $('.news__slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.news__arrows .slider-arrows__arrow_prev'),
  nextArrow: $('.news__arrows .slider-arrows__arrow_next'),
});
  /*===========/slider============*/



  

    $('.gallery').owlCarousel({
    center: true,
    smartSpeed:500,
    items:2,
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    onInitialized: carouselInitialized,
    onResize:resizedD
    });

	
});




function carouselInitialized()
{
  
  w = $('.owl-carousel .owl-item.center img').width()+50;
  if($(window).width() < 767) { 
      w = $('.owl-carousel .owl-item.center img').width()+30;
    }
 
  m = (w/2);

 $('.owl-nav').css('width', w+'px');
 $('.owl-nav').css('margin-left', '-'+m+'px');
 
 }
 

function resizedD()
{
  carouselInitialized();
setTimeout(carouselInitialized, 10);
}


