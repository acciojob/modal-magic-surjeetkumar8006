const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
