"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const closeMod = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModal = function (close) {
  return close.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

closeModal(btnCloseModal);
closeModal(overlay);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key == "Escape") closeMod();
});
