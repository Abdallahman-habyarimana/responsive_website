jQuery(document).ready(function () {
  "use strict";
  $(".slider").ripples({
    dropRadius: 12,
    perturbance: 0.01,
  });
  /*
  $(".text").typed({
    strings: [
      "<strong>I love</strong><strong class='primary'> codinds.</strong>",
      " and to share !!!!",
    ],
    typeSpeed: 0,
    loop: true,
  });
*/
  // dom : document object model
  // Add background color when scroll
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("secondary");
    } else if ($("nav").hasClass("secondary")) {
      $("nav").removeClass("secondary");
    }
  });

  $(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },

    // other options
  });

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $('a.smooth-scroll').click(function (event) {

    event.preventDefault();

    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top -  -2
    }, 1250, "easeInOutExpo");
  })

  new WOW().init();

});
