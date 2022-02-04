"use strict";

// Swiper Reviews
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  speed: 1000,

  breakpoints: {
    890: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
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
  speed: 1000,

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
buttons[0].classList.add("tab-selected");
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

// NAVBAR

const burger = document.querySelector(".burger");
const sideMenu = document.getElementById("side-menu");
const links = document.getElementsByClassName("nav-link");
const topLinks = document.getElementsByClassName("top-link");

// Burger
burger.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
  burger.classList.toggle("rotate");
  for (let y of links) {
    y.classList.remove("selected-link");
  }
});

// Burger closes on click outside of side-menu
let ignoreClickOnMeElement = document.getElementById("side-menu");
let ignoreClickOnMeElement2 = document.querySelector(".burger");
document.addEventListener("click", function (event) {
  let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  let isClickInsideElement2 = ignoreClickOnMeElement2.contains(event.target);

  if (
    !isClickInsideElement &&
    !isClickInsideElement2 &&
    sideMenu.classList.contains("visible")
  ) {
    sideMenu.classList.remove("visible");
    burger.classList.remove("rotate");
  }
});

// Top links
for (let y of topLinks) {
  y.addEventListener("click", function () {
    for (let i = 0; i < topLinks.length; i++) {
      topLinks[i].classList.remove("top-link-selected");
    }
    this.classList.add("top-link-selected");
  });
}

// Side links
for (let x of links) {
  x.addEventListener("click", function () {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("selected-link");
    }

    this.classList.add("selected-link");
  });
}

// Removing selected classes on window events (resize, scroll, keydow, keyup)
window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    sideMenu.classList.remove("visible");
    burger.classList.remove("rotate");
    for (let p of topLinks) {
      p.classList.remove("top-link-selected");
    }
  }
});

window.addEventListener("wheel", removeSelected);
window.addEventListener("keydown", removeSelected);
window.addEventListener("keyup", removeSelected);

function removeSelected() {
  for (let x of links) {
    x.classList.remove("selected-link");
  }
  for (let y of topLinks) {
    y.classList.remove("top-link-selected");
  }
}

// Scrolling to top on logo-click

const logoTop = document.getElementById("logo-top");
logoTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  for (let x of links) {
    x.classList.remove("selected-link");
  }
  for (let y of topLinks) {
    y.classList.remove("top-link-selected");
  }
});
