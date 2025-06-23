"use strict";
document.addEventListener("DOMContentLoaded", function () {

    $(function ($) {

      /* select two init */
      $(".select-two").select2({
        allowClear: true
      });
      $('.single-select').on('click', function () {
        const singleSelect = $('.select2-container--open');
        var selectType = $(this).attr('class').split(' ')[0];
        $(singleSelect[1]).addClass(selectType);
        const computedStyle = window.getComputedStyle(this);
        const width = computedStyle.width;
        $(singleSelect[1]).find('.select2-dropdown').css('right', '-'+(width));
      });

      /* Splitting init */
      Splitting();

      // box-content
      const boxContent = document.querySelectorAll('.box-content')
      boxContent.forEach((el) => {
        const hoverContent = el.querySelector('.hover-content')
        el.addEventListener('mouseenter', (e) => {
          gsap.to(hoverContent, { autoAlpha: 1 })
        })
        el.addEventListener('mouseleave', (e) => {
          gsap.to(hoverContent, { autoAlpha: 0 })
        })
        el.addEventListener('mousemove', (e) => {
          gsap.set(hoverContent, {
            force3D: true,
            x: e.offsetX - 100, y: e.offsetY - 100 
          })
        })
      })

      // Initialize the price range slider
      $("#price-range").slider({
          range: true,
          min: 0,
          max: 1000,
          values: [100, 500],
          slide: function(event, ui) {
            $("#price-range-output").text("$" + ui.values[0] + " - $" + ui.values[1]);
          }
      });

      // Display the initial price range
      $("#price-range-output").text("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));

      // banner-carousel
      let bannerCarousel = document.querySelector('.banner-carousel');
      if(bannerCarousel){
        const swiper = new Swiper(bannerCarousel, {
          spaceBetween: 0,
          centeredSlides: true,
          effect: 'fade',
          autoplay: {
            delay: 200000,
          },
          loop: true,
          slidesPerView:1,
          allowTouchMove: true,
          disableOnInteraction: true,
          paginationClickable: true,
          pagination: {
            el: document.querySelector('.inactive-item .slider-pagination'),
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '0'+(index + 1) + "</span>";
            },
          },
        });
      }

      // banner-carousel
      let bannerCarouselSecond = document.querySelector('.banner-carousel-second');
      if(bannerCarouselSecond){
        const swiper = new Swiper(bannerCarouselSecond, {
          spaceBetween: 0,
          centeredSlides: true,
          autoplay: {
            delay: 200000,
          },
          loop: true,
          slidesPerView:1,
          allowTouchMove: true,
          disableOnInteraction: true,
          paginationClickable: true,
          navigation: {
            nextEl: bannerCarouselSecond.closest('section').querySelector('.ara-next'),
            prevEl: bannerCarouselSecond.closest('section').querySelector('.ara-prev'),
          },
        });
      }

      // banner-carousel-Third
      let bannerCarouselThird = document.querySelector('.banner-carousel-third');
      if(bannerCarouselThird){
        const swiper = new Swiper(bannerCarouselThird, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1.1,
          breakpoints: {
            1600: {
                slidesPerView: 2.2,
            },
            1200: {
                slidesPerView: 1.8,
            },
            992: {
                slidesPerView: 1.4,
            },
            768: {
                slidesPerView: 1.3,
            },
            480: {
                slidesPerView: 1.2,
            },
          }
        });
      }

      // banner-carousel-Fourth
      let bannerCarouselFourth = document.querySelector('.banner-carousel-fourth');
      if(bannerCarouselFourth){
        const swiper = new Swiper(bannerCarouselFourth, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 4,
          slidesPerView: 1,
          navigation: {
            nextEl: bannerCarouselFourth.closest('section').querySelector('.ara-next'),
            prevEl: bannerCarouselFourth.closest('section').querySelector('.ara-prev'),
          },
          breakpoints: {
            1600: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 2.8,
            },
            992: {
                slidesPerView: 2.4,
            },
            768: {
                slidesPerView: 1.5,
            },
            480: {
                slidesPerView: 1.2,
            },
          }
        });
      }

      // testimonial-carousel
      let testimonialCarousel = document.querySelector('.testimonial-carousel');
      if(testimonialCarousel){
        const swiper = new Swiper(testimonialCarousel, {
          spaceBetween: 24,
          centeredSlides: false,
          autoplay: {
            delay: 20000,
          },
          loop: true,
          slidesPerView: 1,
          allowTouchMove: true,
          disableOnInteraction: true,
          paginationClickable: true,
          navigation: {
            nextEl: testimonialCarousel.closest('section').querySelector('.ara-next'),
            prevEl: testimonialCarousel.closest('section').querySelector('.ara-prev'),
          },
        });
      }

      // carouselInfinity
      let carouselInfinity = document.querySelectorAll('.carousel-infinity');
      if (carouselInfinity.length > 0) {
        carouselInfinity.forEach(function (carousel) {
          const swiper = new Swiper(carousel, {
            spaceBetween: 0,
            centeredSlides: false,
            speed: 21000,
            autoplay: {
              delay: 0,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
            disableOnInteraction: true,
          });
        });
      }

      // carouselInfinity
      let carouselInfinitySecond = document.querySelectorAll('.carousel-infinity-second');
      if (carouselInfinitySecond.length > 0) {
        carouselInfinitySecond.forEach(function (carousel) {
          const swiper = new Swiper(carousel, {
            spaceBetween: 0,
            direction: 'vertical',
            centeredSlides: false,
            speed: 21000,
            autoplay: {
              delay: 0,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: true,
            disableOnInteraction: true,
          });
        });
      }

      // service
      let serviceCarousel = document.querySelector('.service-carousel');
      if(serviceCarousel){
        const swiper = new Swiper(serviceCarousel, {
          loop: true,
          centeredSlides: false,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          navigation: {
            nextEl: serviceCarousel.closest('section').querySelector('.ara-next'),
            prevEl: serviceCarousel.closest('section').querySelector('.ara-prev'),
          },
          breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3.2,
            },
            992: {
                slidesPerView: 2.8,
            },
            768: {
                slidesPerView: 2.2,
            },
            480: {
                slidesPerView: 1.6,
            },
          },
        });
      }

      // testimonial-carousel
      let testimonialCarouselSecond = document.querySelector('.testimonial-carousel-second');
      if(testimonialCarouselSecond){
        const swiper = new Swiper(testimonialCarouselSecond, {
          loop: true,
          centeredSlides: false,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          navigation: {
            nextEl: testimonialCarouselSecond.closest('section').querySelector('.ara-next'),
            prevEl: testimonialCarouselSecond.closest('section').querySelector('.ara-prev'),
          },
          pagination: {
            el: testimonialCarouselSecond.closest('section').querySelector('.slider-pagination'),
          },
          breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3.2,
            },
            992: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.2,
            },
            480: {
                slidesPerView: 1.6,
            },
          },
        });
      }

      // testimonial-carousel
      let testimonialCarouselThird = document.querySelector('.testimonial-carousel-third');
      if(testimonialCarouselThird){
        const swiper = new Swiper(testimonialCarouselThird, {
          loop: true,
          centeredSlides: false,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          navigation: {
            nextEl: testimonialCarouselThird.closest('section').querySelector('.ara-next'),
            prevEl: testimonialCarouselThird.closest('section').querySelector('.ara-prev'),
          },
          pagination: {
            el: testimonialCarouselThird.closest('section').querySelector('.slider-pagination'),
          },
          breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3.2,
            },
            992: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.2,
            },
            480: {
                slidesPerView: 1.6,
            },
          },
        });
      }

      // events-carousel
      let eventsCarousel = document.querySelector('.events-carousel');
      if(eventsCarousel){
        const swiper = new Swiper(eventsCarousel, {
          spaceBetween: 24,
          centeredSlides: true,
          autoplay: {
            delay: 20000,
          },
          loop: true,
          slidesPerView: 1,
          allowTouchMove: true,
          disableOnInteraction: true,
          paginationClickable: true,
          navigation: {
            nextEl: eventsCarousel.closest('section').querySelector('.ara-next'),
            prevEl: eventsCarousel.closest('section').querySelector('.ara-prev'),
          },
          breakpoints: {
            1700: {
                slidesPerView: 4.7,
            },
            1200: {
                slidesPerView: 3.6,
            },
            992: {
                slidesPerView: 3.3,
            },
            768: {
                slidesPerView: 2.7,
            },
            480: {
                slidesPerView: 1.6,
            },
          },
        });
      }

      // blog
      let blogCarousel = document.querySelector('.blog-carousel');
      if(blogCarousel){
        const swiper = new Swiper(blogCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          navigation: {
            nextEl: blogCarousel.closest('section').querySelector('.ara-next'),
            prevEl: blogCarousel.closest('section').querySelector('.ara-prev'),
          },
          breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 2.8,
            },
            992: {
                slidesPerView: 2.4,
            },
            768: {
                slidesPerView: 1.8,
            },
            480: {
                slidesPerView: 1.4,
            },
          },
        });
      }

      // event-carousel
      let eventCarousel = document.querySelector('.event-carousel');
      if(eventCarousel){
        const swiper = new Swiper(eventCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1.1,
          breakpoints: {
            1850: {
                slidesPerView: 1.4,
            },
            1600: {
                slidesPerView: 1.2,
            },
            1200: {
                slidesPerView: 1.0,
            },
            992: {
                slidesPerView: 1.6,
            },
            768: {
                slidesPerView: 1.3,
            },
            480: {
                slidesPerView: 1.0,
            },
          }
        });
      }

      // moments-carousel
      let momentsCarousel = document.querySelector('.moments-carousel');
      if(momentsCarousel){
        const swiper = new Swiper(momentsCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 200000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1.1,
          paginationClickable: true,
          navigation: {
            nextEl: momentsCarousel.closest('section').querySelector('.ara-next'),
            prevEl: momentsCarousel.closest('section').querySelector('.ara-prev'),
          },
          pagination: {
            el: momentsCarousel.closest('section').querySelector('.slider-pagination'),
          },
          breakpoints: {
            1400: {
                slidesPerView: 4.3,
            },
            1200: {
                slidesPerView: 3.2,
            },
            992: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.2,
            },
            480: {
                slidesPerView: 1.5,
            },
          },
        });
      }
      
      // shop-details-slider 
      let shopDetailCarousel = document.querySelector('.shop-details-carousel');
      let shopDetailSlider = document.querySelector('.shop-details-slider');
      if(shopDetailSlider){
        var swiper = new Swiper(shopDetailCarousel, {
          slidesPerView: 3,
          loop: true,
          spaceBetween: 12,
          watchSlidesProgress: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        });
        var swiper = new Swiper(shopDetailSlider, {
          loop: true,
          watchSlidesProgress: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          thumbs: {
            swiper: swiper,
          },
        });
      }

    });
});