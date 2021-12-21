const openModal = document.querySelectorAll(".more");
//console.log(openModal);
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");
for (btn of openModal) {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}
modal.addEventListener("click", (event) => {
  if (event.target === modalClose || event.target === overlay) {
    modal.classList.add("hidden");
  }
});
