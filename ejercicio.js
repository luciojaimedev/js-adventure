const $toDoListInputText = document.getElementById("to-do-list-input-text");
const $toDoListButton = document.getElementById("to-do-list-button");
const $toDoListMain = document.getElementById("to-do-main");

const toDoListTasks = [];

const pushInputTextToArray = (array, input) => {
  array.push(input.value);
};

const renderUI = (array) => {
  $toDoListMain.innerHTML = "";

  array.forEach((el) => {
    const $newDiv = document.createElement("div");
    $newDiv.innerText = el;
    $toDoListMain.appendChild($newDiv);
  });
};

$toDoListButton.addEventListener("click", () => {
  pushInputTextToArray(toDoListTasks, $toDoListInputText);
  renderUI(toDoListTasks);
});
