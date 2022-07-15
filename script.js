const navBar = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-item-link");
const openNavBtn = document.querySelector(".mobile-nav-btn");

openNavBtn.addEventListener("click", () => {
  navBar.style.transform = "translateY(0)";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.style.transform = "translateY(-50rem)";
  });
});

document.querySelector("main").addEventListener("click", () => {
  navBar.style.transform = "translateY(-50rem)";
});
