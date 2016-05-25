setTimeout(function() {
    jQuery('.homeslideshow').owlCarousel({
        items: 1,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'
        ]
    });

    jQuery('.productslider .owl-carousel').owlCarousel({
        lazyLoad: false,
        loop: false,
        margin: 10,
        navText: [
            '<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            600: {
                items: 3,
                nav: true,
                dots: false
            },
            1000: {
                items: 5,
                nav: true,
                dots: false
            },
            2000: {
                items: 5,
                nav: true,
                dots: false
            }
        }

    });
    jQuery('.brandslider .owl-carousel').owlCarousel({
        lazyLoad: false,
        loop: false,
        margin: 10,
        navText: [
            '<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            600: {
                items: 3,
                nav: true,
                dots: false
            },
            1000: {
                items: 5,
                nav: true,
                dots: false
            },
            2000: {
                items: 5,
                nav: true,
                dots: false
            }
        }
    });
}, 400)