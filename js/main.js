/* this event is change to css propierty -> scroll-behavior. */

$(document).scroll(function() {
    
    $("nav").addClass('navbarMove').fadeIn();
    if($(this).scrollTop() == 0) {
        $("nav").removeClass('navbarMove');
    }
});