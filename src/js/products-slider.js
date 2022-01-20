$('.slider-products-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 767.5,
            settings: 'unslick',
          },
        ],
      });
    