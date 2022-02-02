"use strict";

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
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
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Navbar - Burger

const burger = document.querySelector(".burger");
const sideMenu = document.getElementById("side-menu");
const links = document.getElementsByClassName("nav-link");
burger.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
  burger.classList.toggle("rotate");
  for (let y of links) {
    y.classList.remove("selected-link");
  }
});

for (let x of links) {
  x.addEventListener("click", function () {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("selected-link");
    }

    this.classList.add("selected-link");
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    sideMenu.classList.remove("visible");
    burger.classList.remove("rotate");
  }
});

// Tabs

function changeTab(index) {
  const pages = document.getElementsByClassName("tabs-content");
  const tabPlaceholder = document.getElementById("tabs-placeholder");

  for (let i = 0; i < pages.length - 1; i++) {
    pages[i].classList.remove("visible-tab");
    tabPlaceholder.classList.add("not-visible-tab");
  }

  setTimeout(() => {
    pages[index].classList.add("visible-tab");
  }, 100);
}
