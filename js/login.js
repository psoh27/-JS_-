const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const welcome = document.querySelector("#welcome");

function FormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  welcoming(username);
}

function welcoming(username) {
  loginForm.classList.add("hidden");
  welcome.innerText = `안녕하세요, ${username}님!`;
  welcome.classList.remove("hidden");
}

const SavedName = localStorage.getItem("username");

if (SavedName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", FormSubmit);
} else {
  welcoming(SavedName);
}
