const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".menu-list-items");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

function openMobileMenu() {
  mobileMenu.classList.toggle("toggle-mobile-menu");
  openBtn.classList.toggle("make-disappear");
  closeBtn.classList.toggle("make-appear");
}

menuBtn.addEventListener("click", () => {
  openMobileMenu();
});
