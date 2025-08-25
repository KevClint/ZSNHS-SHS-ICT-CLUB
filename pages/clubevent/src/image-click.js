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
