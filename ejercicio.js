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
};

const pushInputTextToArray = (array, input) => {
  if (input.value.trim() === "")
    return alert("No se puede agregar una tarea vacia");
  if (input.value.length > 30) return alert("Se admiten 15 chars maximo");

  array.push(input.value.trim());
  input.value = "";
};

const getButtons = () => {
  const $toDoListAllDeleteButtons = document.querySelectorAll(
    ".task-delete-button"
  );
  const $toDoListAllEditButtons =
    document.querySelectorAll(".task-edit-button");
};

const renderUI = (array) => {
  $toDoListMain.innerHTML = "";

  if (!array.length) return;

  array.forEach((el, i) => {
    const $newDiv = document.createElement("div");
    $newDiv.innerHTML = `<p>${el}</p>`;
    $newDiv.classList.add("to-do-tasks");
    $toDoListMain.appendChild($newDiv);

    const $newDeleteButton = document.createElement("button");
    $newDeleteButton.innerText = "Borrar";
    $newDeleteButton.classList.add("task-delete-button");
    $newDeleteButton.id = `delete-${i}`;
    $newDeleteButton.addEventListener("click", () => {
      array.splice(i, 1);
      renderUI(array);
      console.log(array);
    });
    $newDiv.appendChild($newDeleteButton);

    const $newEditButton = document.createElement("button");
    $newEditButton.innerText = "Editar";
    $newEditButton.classList.add("task-edit-button");
    $newEditButton.id = `edit-${i}`;
    $newEditButton.addEventListener("click", () => {
      const editPrompt = prompt("Introduzca la nueva tarea", el);
      array.splice(i, 1, editPrompt);
      renderUI(array);
    });
    $newDiv.appendChild($newEditButton);
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
    getButtons();
  }
});

$toDoListButton.addEventListener("click", () => {
  pushInputTextToArray(toDoListTasks, $toDoListInputText);
  updateDeleteButtonUI(toDoListTasks);
  renderUI(toDoListTasks);
  getButtons();
});

$toDoListButtonDelete.addEventListener("click", () => {
  deleteToDoList(toDoListTasks);
  updateDeleteButtonUI(toDoListTasks);
  renderUI(toDoListTasks);
});
