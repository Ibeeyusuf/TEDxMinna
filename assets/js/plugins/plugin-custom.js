"use strict";
document.addEventListener("DOMContentLoaded", function () {

    $(function ($) {

      /* Splitting init */
      Splitting();
        
      // inner-carousel
      let innerCarousel = document.querySelector('.inner-carousel');
      if(innerCarousel){
        const swiper = new Swiper(innerCarousel, {
          loop: true,
          speed: 6000,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          breakpoints: {
            1400: {
                slidesPerView: 4.0,
            },
            1200: {
                slidesPerView: 3.0,
            },
            800: {
                slidesPerView: 2.4,
            },
            600: {
                slidesPerView: 2.2,
            },
            400: {
                slidesPerView: 1.4,
            },
          }
        });
      }

      // inner-carousel
      let innerCarouselSecond = document.querySelector('.inner-carousel-second');
      if(innerCarouselSecond){
        const swiper = new Swiper(innerCarouselSecond, {
          loop: true,
          speed: 6000,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
            reverseDirection: true,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          breakpoints: {
            1400: {
                slidesPerView: 4.0,
            },
            1200: {
                slidesPerView: 3.0,
            },
            800: {
                slidesPerView: 2.4,
            },
            600: {
                slidesPerView: 2.2,
            },
            400: {
                slidesPerView: 1.4,
            },
          }
        });
      }
      
    });
});