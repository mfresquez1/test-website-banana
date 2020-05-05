$(document).ready(function () {
  // Toggle btn
  $("#toggle-btn").click(function () {
    $(".nav-links").slideToggle(1500);
  });
  // Fixed navbar
  $(Window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 70) {
      $("#nav").addClass(".fixed-nav");
    } else {
      $("#nav").removeClass(".fixed-nav");
    }
  });
  // Smooth scroll
  $("#nav a").click(function (link) {
    link.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      "slow"
    );
  });
  // Accordion
  $("#accordion").accordion({
    animate: 1000,
  });
  // Progressbars
  $("#p-bar-1").progressbar({
    value: 35,
  });
  $("#p-bar-2").progressbar({
    value: 70,
  });
  $("#p-bar-3").progressbar({
    value: 60,
  });
  $("#p-bar-4").progressbar({
    value: 80,
  });
  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    smartSpeed: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
