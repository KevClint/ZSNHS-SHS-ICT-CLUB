// small enhancement: keyboard focus style for accessibility
(function () {
  const body = document.body;
  function handleFirstTab(e) {
    if (e.key === "Tab") {
      body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
    }
  }
  window.addEventListener("keydown", handleFirstTab);
})();


const mobileNav = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

const toggleNav = () => {
  menubar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());