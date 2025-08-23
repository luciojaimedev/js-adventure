const $toDoListInputText = document.getElementById("to-do-list-input-text");
const $toDoListButton = document.getElementById("to-do-list-button");
const $toDoListButtonDelete = document.getElementById(
  "to-do-list-button-delete"
);
const $toDoListMain = document.getElementById("to-do-main");

const toDoListTasks = [];

const deleteToDoList = (array) => {
  array.length = 0;
  $toDoListButtonDelete.disabled = true;
  console.log(array);
};

const pushInputTextToArray = (array, input) => {
  if (input.value.trim() === "")
    return alert("No se puede agregar una tarea vacia");

  array.push(input.value.trim());
  input.value = "";
  console.log(array);
};

const renderUI = (array) => {
  $toDoListMain.innerHTML = "";
  if (!array.length) return;
  array.forEach((el) => {
    const $newDiv = document.createElement("div");
    $newDiv.innerText = el;
    $newDiv.classList.add("to-do-tasks");
    $toDoListMain.appendChild($newDiv);
  });
};

const updateDeleteButtonUI = (array) =>
  array.length
    ? ($toDoListButtonDelete.disabled = false)
    : ($toDoListButtonDelete.disabled = true);

$toDoListInputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    pushInputTextToArray(toDoListTasks, $toDoListInputText);
    updateDeleteButtonUI(toDoListTasks);
    renderUI(toDoListTasks);
  }
});

$toDoListButton.addEventListener("click", () => {
  pushInputTextToArray(toDoListTasks, $toDoListInputText);
  updateDeleteButtonUI(toDoListTasks);
  renderUI(toDoListTasks);
});

$toDoListButtonDelete.addEventListener("click", () => {
  deleteToDoList(toDoListTasks);
  updateDeleteButtonUI(toDoListTasks);
  renderUI(toDoListTasks);
});
