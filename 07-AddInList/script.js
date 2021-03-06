const todoList = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

const todoData = [];

function addTodo(todoText) {
  todoData.push(todoText);
  const li = document.createElement("li");
  li.innerHTML = todoText;
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoData));
}

form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value);
};
