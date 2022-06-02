const nav = document.querySelector("nav");
const navmobo = document.querySelector("nav.mobo");
const menucont = document.querySelector(".mobo-menu-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 260) {
    nav.classList.add("scroled");
  } else {
    nav.classList.remove("scroled");
  }
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 260) {
    navmobo.classList.add("scroled");
  } else {
    navmobo.classList.remove("scroled");
  }
});

const bar = document.querySelector(".icon ");
const cls = document.querySelector(".close-icon");
bar.addEventListener("click", () => {
  menucont.classList.add("active");
});
cls.addEventListener("click", () => {
  menucont.classList.remove("active");
});
