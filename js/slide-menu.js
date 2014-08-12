jQuery(document).ready(function(){
	$(".button-slide-menu").on("click", function (){
							$(".slide-menu").toggleClass("slide-menu-show");
							$(".fog-hover").toggleClass("fog");					
		});
	$(".fog-hover").on("click", function (){
							$(".slide-menu").toggleClass("slide-menu-show");
							$(".fog-hover").toggleClass("fog");
	});
});