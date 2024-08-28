
function AddTodo() {
  const val = document.querySelector("input").value;

  const newDivEl = document.createElement("div");
  const spanEl = document.createElement("span");
  const buttonEl = document.createElement("button");

  spanEl.innerHTML = val;
  buttonEl.innerHTML = "delete";

  newDivEl.appendChild(spanEl);
  newDivEl.appendChild(buttonEl);

  document.querySelector("body").appendChild(newDivEl)
}