const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".topnav");
const homePage = document.querySelector(".home-page");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    homePage.classList.toggle("active");
}

const navLink = document.querySelectorAll(".topnav-item");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}