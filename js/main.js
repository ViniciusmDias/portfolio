/* this event is change to css propierty -> scroll-behavior. */

$(document).scroll(function() {
    
    $("header").addClass('navbarMove').fadeIn();
    if($(this).scrollTop() == 0) {
        $("header").removeClass('navbarMove');
    }
});


