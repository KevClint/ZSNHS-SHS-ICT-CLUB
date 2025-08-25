const mobileNav = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

const toggleNav = () => {
  menubar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Have a bg when scroll - header
const header = document.querySelector("header");
const headerNav = document.querySelector("nav");

// Add scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adjust "50" to the scroll position you want
    header.classList.add("scrolled");
    headerNav.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    headerNav.classList.remove("scrolled");
  }
});
