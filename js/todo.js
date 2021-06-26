const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") 위랑 같은뜻
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("sapn");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); //li를 ul 자식으로 만들어 출력시키기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //들어오는 값을 new todo에 저장 아래에서 값을 비워도 상관없음.

  toDoInput.value = ""; //값을 주기 엔터누르면 값 없어짐
  paintToDo(newTodo); //newTodo에 저장된 text값이 인자로  paintoDo에 넣어서 호출
}
toDoForm.addEventListener("submit", handleToDoSubmit);
