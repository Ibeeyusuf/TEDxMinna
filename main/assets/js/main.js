"use strict";

document.addEventListener("DOMContentLoaded", function () {

  $(function ($) {

    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // Click to Scroll Top
    var ScrollTop = $(".scrollToTop");
    var lastScrollTop = 0;
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop < lastScrollTop) {
        $(ScrollTop).fadeIn();
      } else {
        $(ScrollTop).fadeOut();
      }
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
      lastScrollTop = scrollTop;
    });

    // scroll down Button
    var scrollButton = document.querySelector('#scrollButton');
    var bannerHeight = document.querySelector('.banner-section').clientHeight;
    if(scrollButton){
      scrollButton.addEventListener('click', function() {
        window.scrollTo({
          top: window.scrollY + bannerHeight,
          behavior: 'smooth'
        });
      });
    }

    // sidebar close open
    var activeItem = $(".bottom-area .active-item");
    var inActiveItem = $(".bottom-area .inactive-item");
    activeItem.css("display", "none");
    inActiveItem.css("display", "block");    

    // Sticky Header
    var fixed_top = $(".header-section");
    if ($(window).scrollTop() > 50) {
      fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else {
      fixed_top.removeClass("animated fadeInDown header-fixed");
    }
    
    // window on scroll function
    $(window).on("scroll", function () {

      // Sticky Header
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }

      // sidebar content visible
      let sidebarHeight = document.querySelector('.side-menubar');
      if(sidebarHeight){
        sidebarHeight = $(".side-menubar")[0].clientHeight;
        if ($(this).scrollTop() < sidebarHeight-200) {
          activeItem.css("display", "none");
          inActiveItem.css("display", "block");
        } else {
          activeItem.css("display", "block");
          inActiveItem.css("display", "none");
        }
      }      

      // Odometer Init 
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });

    });

    // newsletter Toggle
    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('active');
      $(this).parents('.single-item').siblings().removeClass('active');
    });

    // target Items Remove from anywhere click
    var targetBox = $('.target-item');
    $(document).on('click', function(event) {      
      if (!targetBox.is(event.target) && !targetBox.has(event.target).length) {
        targetBox.removeClass('active');
      }
    });

    // Dropdown Active Remove
    $(".close-btn").on('click', function () {
      $('.single-item').removeClass('active');
    });

    // Input Increase and Decrease
    var minVal = 1, maxVal = 20;
    $(".increaseQty, .decreaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(() => $(".clicked").removeClass("clicked"), 100);
      var value = +$parentElm.find(".qtyValue").val();
      if ($(this).hasClass('increaseQty') && value < maxVal) value++;
      if ($(this).hasClass('decreaseQty') && value > minVal) value--;
      $parentElm.find(".qtyValue").val(value);
    });

    // Circle Text
    const text = document.querySelector(".circle-text.first p");
    const text2 = document.querySelector(".circle-text.second p");
    if (text) {
      text.innerHTML = text.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 6.7}deg)">${char}</span>`
      ).join('');
    }
    if (text2) {
      text2.innerHTML = text2.innerText.split('').map(
        (char, i) =>
          `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
      ).join('');
    }

    // Animation Item VisualViewport 
    function enableRevealEffect() {
      const targetsAos = document.querySelectorAll('.reveal-single');
      const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-init');
          } else {
            entry.target.classList.remove('reveal-init');
          }
        });
      };
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });
      targetsAos.forEach(target => {
        observer.observe(target);
      });
    }enableRevealEffect();

    // Function to update the countdown for all elements
    function updateCountdown() {
      const countdownElements = document.querySelectorAll(".countdown");
      countdownElements.forEach(element => {
        let showDays = element.querySelector(".showDays");
        let showHours = element.querySelector(".showHours");
        let showMinutes = element.querySelector(".showMinutes");
        let showSeconds = element.querySelector(".showSeconds");
        const targetDateString = element.getAttribute("data-date");
        const [day, month, year] = targetDateString.split("-");
        const targetDate = new Date(`${year}-${month}-${day}T00:00:00Z`).getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const formattedCountdown = `${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
        showDays.innerHTML = String(days).padStart(2, '0');
        showHours.innerHTML = String(hours).padStart(2, '0');
        showMinutes.innerHTML = String(minutes).padStart(2, '0');
        showSeconds.innerHTML = String(seconds).padStart(2, '0');
        if (distance < 0) {
          element.innerText = "Countdown Finished";
        }
      });
    }
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // comments-area
    $('.comments-area .reply-btn').on('click', function () {
      $(this).closest(".comments-area").find("form").slideToggle();
    });

    // popular-coupons
    $('.popular-coupons .showDetails').on('click', function () {
      $(this).closest(".single-box").find(".details-area").slideToggle();
    });

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });    

    // Box Style 
    const targetBtn = document.querySelectorAll('.box-style')
    if (targetBtn) {
      targetBtn.forEach((element) => {
        element.addEventListener('mousemove', (e) => {
          const x = e.offsetX + 'px';
          const y = e.offsetY + 'px';
          element.style.setProperty('--x', x);
          element.style.setProperty('--y', y);
        })
      })
    }

    // Password Show Hide
    $('.show-hide-pass').on('click', function () {
      var passwordInput = $($(this).siblings("input"));
      if (passwordInput.attr("type") == "password") {
        passwordInput.attr("type", "text");
      } else {
        passwordInput.attr("type", "password");
      }
    });

    // magnific-popup
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    // gridGallery
    $('.popup_img').magnificPopup({
        type:'image',
        gallery:{
            enabled: true
        }
    });
    
    // Navbar Auto Active Class 
    var curUrl = $(location).attr('href');
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass('active');
    targetClass.parents('.menu-link').addClass('active-parents');
    targetClass.parents('.menu-item').addClass('active-parents');
    targetClass.parents('.menu-item').addClass('onHovered');
    $('.active-parents > button').addClass('active');
    $('.active-parents > button').addClass('onHovered');

    // navbar custom
    $('.navbar-toggle-btn').on('click', function () {
      $('.navbar-toggle-item').slideToggle(300);
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });
    $('.menu-item button').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
      $(this).toggleClass('onHovered');
    });
    $('.sub-menus').each(function() {
      if ($(this).parent('.menu-item').hasClass('active-parents')) {
        $(this).css("display", "block");
      }
    });

    // mega Menu Window
    megaMenuWindow();
    $(window).on('resize', function() {
      megaMenuWindow();
    });
    function megaMenuWindow() {
      if ($(window).width() < 992) {
        $('.mega-sub-menu').removeClass('sub-menu');
      } else {
        $('.mega-sub-menu').addClass('sub-menu');
      }
    }

    // Sidebar Active Page in Viewport
    let iconCapWidget = document.querySelector('.active-parents');
    if(iconCapWidget){
      iconCapWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // collapse toggle 
    var bodyCollapse = $(".header-section.collapse-header");
    function toggleSidebar() {
      $('.header-section .sidebar-icon, .sidebar-wrapper .close-btn').off('click');
      $('.header-section .sidebar-icon, .sidebar-wrapper .close-btn').on('click', function () {
        bodyCollapse.toggleClass("body-collapse");
        $(".collapse-section").toggleClass("body-collapse");
      });
      if ($(window).width() > 1199) {
        bodyCollapse.addClass('body-collapse');
      } else {
        bodyCollapse.removeClass('body-collapse');
      }
    }toggleSidebar();
    $(window).on('resize', function() {
      toggleSidebar();
    });
  
    // Grid List Activator
    const $gridButton = $('.grid-list-btn .grid-active');
    const $listButton = $('.grid-list-btn .list-active');
    const $gridTemplate = $('.grid-list-template');
    function toggleView(view) {
      if (view === 'grid') {
        $gridTemplate.removeClass('active');
        $gridButton.addClass('active');
        $listButton.removeClass('active');
      } else {
        $gridTemplate.addClass('active');
        $listButton.addClass('active');
        $gridButton.removeClass('active');
      }
    }
    $gridButton.on('click', function() {
        toggleView('grid');
    });
    $listButton.on('click', function() {
        toggleView('list');
    }); toggleView('grid');

    // Current Year
    $(".currentYear").text(new Date().getFullYear());

    // sidebar-toggler
    var primarySidebar = $('.sidebar-toggler .sidebar-head');
    $('.sidebar-toggler .toggler-btn').on('click', function () {
      $(this).closest('.sidebar-head').toggleClass('active');
      if (!$('.sidebar-head').hasClass('active')) {
        setTimeout(function () {
          primarySidebar.css("height", "24px");
        }, 550);
      } else {
        primarySidebar.css("height", "100%");
      }
    });

    // sidebar-toggler
    $('.section-sidebar .right-sidebar-btn, .right-sidebar .close-btn').on('click', function () {
      $('.right-sidebar').toggleClass('active');
    });
    
    // Social Item Remove
    $('.social-hide-btn').on('click', function () {
      $(this).parents(".img-area").toggleClass('active');
      if ($('.img-area').hasClass("active")) {
        $('.active .social-hide-btn i').html("remove");
      } else {
        $('.social-hide-btn i').html("add");
      }
    });
    
    // Mouse Follower
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
      follower.animate(
        [{
          opacity: 1,
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          easing: "ease-in-out"
        }],
        {
          duration: 3000,
          fill: "forwards"
        }
      );
      dot.animate(
        [{
          opacity: 1,
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          easing: "ease-in-out"
        }],
        {
          duration: 1500,
          fill: "forwards"
        }
      );
    });

    // Mouse Follower Hide Function
    $("a, button").on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('hide-cursor');
    });

    var terElement = $('h1, h2, h3, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-head');
      $(this).toggleClass('highlight-cursor-head');
    });
    
    var terElement = $('p');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-para');
      $(this).toggleClass('highlight-cursor-para');
    });

    // Custom Tabs
    $(".tabLinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singleTab");
      targetTab.find(".tabLinks .nav-links").each(function () {
        var navBtn = targetTab.find(".tabLinks .nav-links");
        navBtn.on('click', function () {
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabContent = targetTab.find(".tabContents .tabItem");
          $(tabContent).removeClass('active');
          $(tabContent).eq(indexNum).addClass('active');
        });
      });
    });

    // progress-area
    let progressBars = $('.progress-area');
    let observer = new IntersectionObserver(function(progressBars) {
      progressBars.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          let width = $(entry.target).find('.progress-bar').attr('aria-valuenow');
          let count = 0;
          let time = 1000 / width;
          let progressValue = $(entry.target).find('.progress-value');
          setInterval(() => {
            if (count == width) {
              clearInterval();
            } else {
              count += 1;
              $(progressValue).text(count+'%')
            }
          }, time);
          $(entry.target).find('.progress-bar').css({"width": width + "%", "transition": "width 1s linear"});
        }else{
          $(entry.target).find('.progress-bar').css({"width": "0%", "transition": "width 1s linear"});
        }
      });
    });
    progressBars.each(function() {
      observer.observe(this);
    });
    $(window).on('unload', function() {
      observer.disconnect();
    });

    // on click to Collapse from
    $('.update-address').hide();
    $('.change-address').on('click', function () {
        var $nextElement = $(this).next('.update-address');
        if ($nextElement.is(':visible')) {
            $nextElement.slideUp();
        } else {
            $nextElement.slideDown();
        }
    });

    // custom Accordion
    $('.accordion-single .header-area').on('click', function () {
      var $accordion = $(this).closest(".accordion-single");
      var $contentArea = $(this).next(".content-area");
      if ($accordion.hasClass("active")) {
        $accordion.removeClass("active");
        $contentArea.slideUp();
      } else {
        $(".accordion-single").removeClass("active");
        $(".accordion-single .content-area").slideUp();
        $accordion.addClass("active");
        $contentArea.slideDown();
      }
    });
    $(".accordion-single.active").each(function() {
      $(this).find(".content-area").slideDown();
    });
    
    // Function to filter items
    function applyFilter(filterItem) {
      var filter = filterItem.data('filter');
      $('.filter-list .filter-links').removeClass('active');
      filterItem.find('.filter-links').addClass('active');
      var singleFilter = filterItem.closest('.singleFilter');
      var tabItem = singleFilter.find('.filterItems');
      var filterTags = filter.split(' ');
      tabItem.find('> div').removeClass('active');
      if (filter === '*') {
        tabItem.find('> div').addClass('active');
      } else {
        tabItem.find('> div').each(function() {
          var itemTags = $(this).data('tag').split(' ');
          for (var i = 0; i < filterTags.length; i++) {
            if (itemTags.includes(filterTags[i])) {
              $(this).addClass('active');
              break;
            }
          }
        });
      }
    }
    $('.filter-item.active').each(function() {
      applyFilter($(this));
      $('.filter-item.active').find('.filter-links').addClass('active');
    });
    $('.filter-list li').each(function(index) {
      $(this).on('click', function () {
        applyFilter($(this));
      });
    });

    // hover add active 
    $('.hover-active .single-item').on('mouseenter', function () {
      $(this).addClass('active');
      $('.hover-active .single-item').not(this).removeClass('active');
    });

    // data background
    $("[data-bg]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-bg") + ")"
      );
    });

    // data mask
    $("[data-mask]").each(function () {
      $(this).css("mask-image", "url(" + $(this).attr("data-mask") + ")");
    });

    // Find full date
    if(document.querySelector('.todayMonthNumber')){
      const today = new Date();
      const todayDate = String(today.getDate()).padStart(2, '0');
      const todayMonthNumber = String(today.getMonth() + 1).padStart(2, '0');
      const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
      const todayMonthName = monthFormatter.format(today);
      const todayYear = today.getFullYear();
      document.querySelector('.todayDate').textContent = todayDate;
      document.querySelector('.todayMonthNumber').textContent = todayMonthNumber;
      document.querySelector('.todayMonthName').textContent = todayMonthName;
      document.querySelector('.todayYear').textContent = todayYear;
    }
  });

});