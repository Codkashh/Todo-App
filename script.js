let ctr = 1; 
function deleteTodo(index){
  const element = document.getElementById(index);
  element.parentNode.removeChild(element);
}
function AddTodo(){
  const inputEle = document.querySelector("input");
  const val = inputEle.value;

  const newDivEl = document.createElement("div");
  newDivEl.setAttribute("id", ctr);
  newDivEl.innerHTML = "<div>" + val + "</div> <button onclick='deleteTodo(" + ctr + ")'> delete </button>";

  document.querySelector("body").appendChild(newDivEl)
  ctr++;
}