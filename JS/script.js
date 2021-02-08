/*global $, alert, console, mixitup*/

$(function () {
    'use strict';
    
    // navbar control the current link.
    $("header nav ul li a").click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    //animation for the text of the header
    $('header header .sliders .current .first').animate({top: '+=10%'}, 1000);
    
    // for the navbar to disapper the background in the top of the page.
    $(window).on("scroll", function () {
        
		var scroll = $(window).scrollTop();
        
		if (scroll <= 0) {
            
            $("header nav").css({
                background: "none",
                boxShadow: "none"
            });
            
		} else {
            
            $("header nav").css({
                background: "#fff",
                boxShadow: "3px 3px 1px rgba(0, 0, 0, .3)"
            });
            
        }
	});
    
    // for go to the position of the link in the page.
    $('header nav li a, header nav h1 a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top - 50
            
        }, 1000);
    });
    
    // for the silders in the header.
    function autoSliders() {
        
        $("header header .sliders .current").each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(2000).fadeOut(1000, function () {
                    
                    $(this).removeClass('current').next().addClass('current').fadeIn();
                    
                    autoSliders();
                    
                });
            } else {
                
                $(this).delay(2000).fadeOut(1000, function () {
                    
                    $('header header .sliders div').removeClass('current')
                        .first().addClass('current').fadeIn();
                    
                    autoSliders();
                    
                });
            }
        });
    }
    autoSliders();
    
    // Plugin Js (Portfoilo)
    
    mixitup('#Container');
    
    // For nice scroll 
    
    $("body").niceScroll({
        
        cursorcolor: "#888",
        
        cursorwidth: "10px",
        
        cursorborder: 'none',
        
        cursorborderradius: 0
    });
});