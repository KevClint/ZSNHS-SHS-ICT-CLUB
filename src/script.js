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

// Clicking the event image and it will full screen
function openModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  caption.textContent = alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};



