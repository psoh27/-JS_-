const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector("#todo-list");
let Alltodo = [];

function saveTodo() {
  localStorage.setItem("Alltodo", JSON.stringify(Alltodo));
}
function removeTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  Alltodo = Alltodo.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}
function showTodo(newList) {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.classList.add("animate__bounceIn");
  li.id = newList.id;
  const span = document.createElement("span");
  span.innerText = newList.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", removeTodo);
  if (todoList.childElementCount > 9) {
    return;
  }
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}
function todoFormSubmit(event) {
  event.preventDefault();
  const newList = todoInput.value;
  todoInput.value = "";
  const newListObj = {
    text: newList,
    id: Date.now(),
  };
  Alltodo.push(newListObj);
  showTodo(newListObj);
  saveTodo();
}
todoForm.addEventListener("submit", todoFormSubmit);

const savedTodos = localStorage.getItem("Alltodo");
if (savedTodos !== null) {
  const parseTodo = JSON.parse(savedTodos);
  Alltodo = parseTodo;
  parseTodo.forEach(showTodo);
}
