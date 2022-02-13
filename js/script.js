$(document).ready(function() {
	new WOW().init();

	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeToggle(300);
           $(".navgition").toggleClass("reset-left");
           $(".menu-bars .bars").toggleClass("open-bars");
           $("body").toggleClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $(".menu-bars .bars").toggleClass("open-bars");
           $(".menu-bars .bars").toggleClass("close-bars");
           $("body").removeClass("overflow");
       });
   	}
       $("#menu-id").click(function () {
        $(".menu-bars .bars").toggleClass("open-bars");
        $(".menu-bars .bars").toggleClass("close-bars");
      });

    $(".new-address-select").select2();
});











	
	
		
	
		

