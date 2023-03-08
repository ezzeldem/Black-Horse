$(document).ready(function () {
  // web lang
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  $(".header-box .right-box #close").click(function () {
    $(".header-section .header-box").fadeOut();
    $("body").css("overflow-y", "unset");
  });
  $(".header-section .right-box .menu-icon i").click(function () {
    $(".header-section .header-box").fadeIn();
    $("body").css("overflow-y", "hidden");
  });

  $(".offer-slider").slick({
    arrows: false,
    slidesToShow: 4,
    rtl: dir_lang,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 772,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  });
  AOS.init();
});
