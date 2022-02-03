"use strict";

// Swiper Reviews
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
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
  loop: false,
  spaceBetween: 30,
  slidesPerView: 3,

  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },

    810: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

// Swiper Tabs
const swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 300,
});

// Tabs

const buttons = document.getElementsByClassName("tab-btn");
for (let z of buttons) {
  z.addEventListener("click", function () {
    for (let q of buttons) {
      q.classList.remove("tab-selected");
    }
    const index = this.getAttribute("index");
    this.classList.add("tab-selected");
    swiper3.slideTo(index, 1000);
  });
}

// Navbar - Burger

const burger = document.querySelector(".burger");
const sideMenu = document.getElementById("side-menu");
const links = document.getElementsByClassName("nav-link");
const topLinks = document.getElementsByClassName("top-link");
burger.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
  burger.classList.toggle("rotate");
  for (let y of links) {
    y.classList.remove("selected-link");
  }
});

for (let y of topLinks) {
  y.addEventListener("click", function () {
    for (let i = 0; i < topLinks.length; i++) {
      topLinks[i].classList.remove("top-link-selected");
    }
    this.classList.add("top-link-selected");
  });
}

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
    for (let p of topLinks) {
      p.classList.remove("top-link-selected");
    }
  }
});
