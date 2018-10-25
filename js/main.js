/* this event is change to css propierty -> scroll-behavior. */

$(document).scroll(function() {
    
    $("nav").addClass('navbarMove').fadeIn();
    if($(this).scrollTop() == 0) {
        $("nav").removeClass('navbarMove');
    }
});

$( document ).resize(function() {
    $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  });

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
document.addEventListener('resize', function(event){
    
});