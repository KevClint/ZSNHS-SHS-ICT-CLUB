// Simple menu (mobile)
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  if (!links) return;
  links.style.display = links.style.display === "flex" ? "none" : "flex";
}

// Gallery & Lightbox logic
const items = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const downloadLink = document.getElementById("downloadLink");
const titleEl = document.getElementById("lightboxTitle");
let currentIndex = -1;

function openAt(index) {
  const it = items[index];
  if (!it) return;
  const src = it.dataset.src || it.querySelector("img").src;
  const title =
    it.dataset.title || it.querySelector(".caption")?.textContent || "";
  lightboxImg.src = src;
  titleEl.textContent = title;
  downloadLink.href = src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  currentIndex = index;
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  currentIndex = -1;
}

function prev() {
  if (currentIndex > 0) openAt(currentIndex - 1);
}
function next() {
  if (currentIndex < items.length - 1) openAt(currentIndex + 1);
}

// click handlers for open buttons & image clicks
document.addEventListener("click", (e) => {
  const btn = e.target.closest('[data-action="open"]');
  if (btn) {
    const parent = btn.closest(".gallery-item");
    openAt(items.indexOf(parent));
    return;
  }
  const img = e.target.closest(".gallery-item img");
  if (img) {
    const parent = img.closest(".gallery-item");
    openAt(items.indexOf(parent));
  }
});

document
  .getElementById("closeLightbox")
  .addEventListener("click", closeLightbox);
document.getElementById("prevBtn").addEventListener("click", prev);
document.getElementById("nextBtn").addEventListener("click", next);

// close on backdrop click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// keyboard nav
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }
});
