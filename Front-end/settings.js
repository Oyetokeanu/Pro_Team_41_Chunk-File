const toggleCurrentPassword = document.querySelector(
  "#toggle-current-password"
);
const currentPassword = document.querySelector("#current-password");
const toggleNewPassword = document.querySelector("#toggle-new-password");
const newPassword = document.querySelector("#new-password");

toggleCurrentPassword.addEventListener("click", (e) => {
  const type =
    currentPassword.getAttribute("type") === "password" ? "text" : "password";
  currentPassword.setAttribute("type", type);
  toggleCurrentPassword.classList.toggle("hide");
});

toggleNewPassword.addEventListener("click", (e) => {
  const type =
    newPassword.getAttribute("type") === "password" ? "text" : "password";
  newPassword.setAttribute("type", type);
  toggleNewPassword.classList.toggle("hide");
});

const dropDown = document.querySelector(".change-password h4 + span img");
dropDown.addEventListener("click", () => {
  const dropDownContainer = dropDown.parentElement.parentElement;
  dropDownContainer.classList.toggle("show-form");
});

const deleteAccountModal = document.querySelector("#delete-account-modal");
const btnDeleteAccount = document.querySelector(".right .btn-danger");
const cancelDeleteAccount = document.querySelector(".modal .cancel");

function toggleModal() {
  deleteAccountModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === deleteAccountModal) {
    toggleModal();
  }
}

btnDeleteAccount.addEventListener("click", toggleModal);
cancelDeleteAccount.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
