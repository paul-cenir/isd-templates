$( document ).ready(function() {
    var selector = "community";
    var arrows = false;
    var dots = true;
    
    
    $('.comp-'+selector+'-slider-container').slick({
		dots: dots,
		infinite: true,
		slidesToShow: 3,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
		arrows: arrows,
		prevArrow: '<span class="ai-font-arrow-b-p slick-prev"></span>',
		nextArrow: '<span class="ai-font-arrow-b-n slick-next"></span>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 481,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

	//If you need custom next/prev 

	//prev slick
	$(".custom-slick-prev").on("click",function () {
		$('.comp-'+selector+'-slider-container').slick('slickPrev');
	});

	//next slick
	$(".custom-slick-next").on("click",function () {
		$('.comp-'+selector+'-slider-container').slick('slickNext');
	});

});