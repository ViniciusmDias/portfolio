function scroll (selector) {

    $(selector).click(function (event) {


        console.log("fui clicado");
        
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate ({
            scrollTop: $(target).offset().top

        }, 1000)
    });

}

scroll('a[href*=projects]');
scroll('a[href*=skills]');
scroll('a[href*=jobs]');
scroll('a[href*=contact]');
scroll('a[href*=main]');

