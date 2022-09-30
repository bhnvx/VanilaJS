const InputText = document.querySelector("#input-form input");
const ButtonForm = document.querySelector("#input-form button");

function onInputBtnCLick() {
  console.log("Click");
}

ButtonForm.addEventListener("click", onInputBtnCLick);
