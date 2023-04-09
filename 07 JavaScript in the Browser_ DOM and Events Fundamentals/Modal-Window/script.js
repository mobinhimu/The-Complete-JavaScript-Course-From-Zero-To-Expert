const modalBtn = document.querySelectorAll(".modal-btn");
const modal = document.querySelector(".modal-wrap");
const overly = document.querySelector(".overly");
const closeModal = document.querySelector(".close-modal");
// function for event
const showModal = () => {
  modal.classList.remove("hidden");
  overly.classList.remove("hidden");
};
function hideModals() {
  modal.classList.add("hidden");
  overly.classList.add("hidden");
}
// all the events here
Array.from(modalBtn).map((btn) => {
  btn.addEventListener("click", showModal);
});

closeModal.addEventListener("click", hideModals);
overly.addEventListener("click", hideModals);

document.addEventListener("keydown", (eve) => {
  (eve.key === "Escape" && hideModals()) ||
    (eve.key === "1" && showModal()) ||
    (eve.key === "2" && showModal()) ||
    (eve.key === "3" && showModal());
});
