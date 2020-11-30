(function ($) {
    "use strict";

    $(window).on('load', function(){
        
        /*isotope and packery*/
        $('.category-items').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid-item'
        });

        /*isotope and packery*/
        $('.category-items2').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid_item'
        });

        /*isotope and packery for home5*/
        $('.single-new-item5').isotope({
            // layoutMode: 'packery',
            itemSelector: '.grid-item'
        });

        /*portfolio sorting*/



    /*----------------------------
    Brand Curosel Owl Active
    ------------------------------ */
    $('.brand-slider').owlCarousel({
        loop:false,
        margin:30,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        dotsSpeed: 2000,
        navSpeed: 2000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        nav:true,
        // items: 6,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplaySpeed:2000,
        smartSpeed: 2000,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            300:{
                items:2,
            },
            479:{
                items:2,
            },
            600:{
                items:3,
            },
            991:{
                items:4,
            },
            1000:{
                items:6
            }
        }
    });

    /*----------------------------
    brand Slider1 Active
    ------------------------------ */


  
   

    // top item slider for homepage5
   
    // Mobile Menu active
    $('nav#mobile-menu-active').meanmenu();



    $(document).ready(function() {
     
      $("#owl-demo").owl-carousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
		  autoPlay:true,
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });


        
})(jQuery);