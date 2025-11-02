const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal_close");
const modalBtns = document.querySelectorAll("#btn-get");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modalBtns.forEach((btn) => btn.addEventListener("click", openModal));
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function showModalByScroll() {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

setTimeout(openModal, 10000);
