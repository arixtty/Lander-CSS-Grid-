var mobileBtn = document.querySelector(".nav__btn");
var menu = document.querySelector(".nav__menu");
var overlay = document.querySelector(".overlay");

mobileBtn.addEventListener("click", function() {
  if (menu.className !== "nav__menu open") {
    menu.className += " open";
    overlay.className += " open";
  } else {
    menu.className = "nav__menu";
    overlay.className = "overlay";
  }
});

mobileBtn.addEventListener("touchend", function() {
    if (menu.className !== "nav__menu open") {
      menu.className += " open";
      overlay.className += " open";
    } else {
      menu.className = "nav__menu";
      overlay.className = "overlay";
    }
  });

window.addEventListener("click", function(event) {
  if (event.target === overlay) {
    menu.className = "nav__menu";
    overlay.className = "overlay";
  }
});

window.addEventListener("touchend", function(event) {
    if (event.target === overlay) {
      menu.className = "nav__menu";
      overlay.className = "overlay";
    }
  });

$(document).ready(function() {
  $(".gallery__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
