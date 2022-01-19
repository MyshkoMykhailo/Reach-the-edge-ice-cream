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
            breakpoint: 768,
            settings: 'unslick',
          },
        ],
      });
    