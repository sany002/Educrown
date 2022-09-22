// =========================== Menu =============================
var menuBar = document.getElementById("menu-bar");
var menu = document.getElementById("menu");

menuBar.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// =========================== Menu =============================

// =========================== navar when scroll =========================

var nav = document.getElementById("nav");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 0) {
    nav.style.backgroundColor = "#333";
  } else {
    nav.style.backgroundColor = "transparent";
  }
}
// ============================= navar when scroll ==============================

// ============================= hero section  ==============================

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
// ============================= hero section ================================

// ============================= courses section ================================

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
// ========================== courses section ===========================

// ========================== back to top =============================
var scroll = document.getElementById("top");
window.addEventListener("scroll", topFunction);

function topFunction() {
  if (window.pageYOffset >= 305) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// ============================ back to top ===============================

// ============================ Testmonial ================================
var slider = new Swiper(".mySlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// ============================ Testmonial =============================

// ============================ slider =============================
$(".myslide").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnFocus: false,
  speed: 1500,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// ============================= slider =============================

// ============================  Animation on scroll ========================

window.addEventListener("load", () => {
  AOS.init({
    duration: 2000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // counter
  new PureCounter();

});
// ========================  Animation on scroll ========================
