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

  $(".offer-home-slider").slick({
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".about-slider").slick({
    arrows: false,
    slidesToShow: 3,
    rtl: dir_lang,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 772,
        settings: { centerPadding: "30px", slidesToShow: 1 },
      },
    ],
  });
  AOS.init();
});
