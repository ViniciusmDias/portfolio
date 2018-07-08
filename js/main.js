/* this event is change to css propierty -> scroll-behavior. */

// var scroll = function (selector) {

//     $(selector).click(function (event) {


//         console.log("fui clicado");
        
//         event.preventDefault();
//         var target = $(this).attr('href');

//         $('html, body').animate ({
//             scrollTop: $(target).offset().top

//         }, 1000)
//     });

// }
$(document).scroll(function() {
    
    $("header").addClass('navbarMove').fadeIn();
    if($(this).scrollTop() == 0) {
        $("header").removeClass('navbarMove');
    }


});


