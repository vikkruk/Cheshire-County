"use strict";

// Swiper Reviews
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,

  breakpoints: {
    890: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper Pricing
const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: false,
    },

    810: {
      slidesPerView: 2,
      loop: false,
    },

    0: {
      slidesPerView: 1,
      loop: false,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Swiper Tabs
const swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: true,
});

//Navbar - Burger

// const burger = document.querySelector(".burger");
// const sideMenu = document.getElementById("side-menu");
// const links = document.getElementsByClassName("nav-link");
// burger.addEventListener("click", () => {
//   sideMenu.classList.toggle("visible");
//   burger.classList.toggle("rotate");
//   document.querySelector("main").classList.toggle("zindex");
//   for (let y of links) {
//     y.classList.remove("selected-link");
//   }
// });

// for (let x of links) {
//   x.addEventListener("click", function () {
//     for (let i = 0; i < links.length; i++) {
//       links[i].classList.remove("selected-link");
//     }

//     this.classList.add("selected-link");
//   });
// }

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 767) {
//     sideMenu.classList.remove("visible");
//     burger.classList.remove("rotate");
//   }
// });

// Tabs

const buttons = document.getElementsByClassName("tab-btn");
for (let z of buttons) {
  z.addEventListener("click", function () {
    for (let q of buttons) {
      q.classList.remove("tab-selected");
    }
    let index = this.getAttribute("index");
    swiper3.slideTo(index, 1000);
    this.classList.add("tab-selected");
  });
}
