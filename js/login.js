const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const welcome = document.querySelector("#welcome");
const plan = document.querySelector("#todo");
const main = document.querySelector("#main");

function FormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  welcoming(username);
}

function welcoming(username) {
  loginForm.classList.add("hidden");
  welcome.innerText = `Good Day, ${username}!`;
  welcome.classList.remove("hidden");
  plan.classList.remove("hidden");
}

const SavedName = localStorage.getItem("username");

if (SavedName === null) {
  plan.classList.add("hidden");
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", FormSubmit);
} else {
  welcoming(SavedName);
}
