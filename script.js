const navBar = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".nav-item-link");
const openNavBtn = document.querySelector(".mobile-nav-btn");

// Navigation behavior
openNavBtn.addEventListener("click", () => {
  navBar.classList.toggle("nav-open");
});

// Hides navigation when link clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navBar.classList.contains("nav-open")) {
      navBar.classList.toggle("nav-open");
    }
  });
});

// Hides navigation when main clicked
document.querySelector("main").addEventListener("click", () => {
  navBar.classList.remove("nav-open");
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
