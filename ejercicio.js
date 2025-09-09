const $toDoListInputText = document.getElementById("input-text");
const $deleteAllBtn = document.getElementById("delete-all-button");
const $addTaskBtn = document.getElementById("add-task-button");
const $themeToggler = document.querySelector(".header-logo");
const $themeElements = document.querySelectorAll(".theme-element");
const $toDoListMain = document.querySelector(".to-do-list-main");
const $toDoListSortBtn = document.getElementById("filter-button");

const THEME = "theme";
const CHECK = "check-done";

let toDoList = JSON.parse(localStorage.getItem("tasks")) || [];

let isDarkMode = false;

const handleDarkMode = () => (isDarkMode = !isDarkMode);
const handleCheck = (array) => {
  array;
};

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(toDoList));
};

const addTask = (text, array) => {
  if (text.value.trim().length === 0 || text.value.trim().length > 30)
    return alert(
      "Se admiten unicamente tareas entre 1 a 30 letras (contando espacios)"
    );

  if (text)
    array.push({
      name: text.value.trim(),
      id: new Date().getTime(),
      isDone: false,
    });

  text.value = "";
  saveTasks();
};

const deleteAllTasks = (array) => {
  array.splice(0, array.length);

  saveTasks();
};

const sortTasks = (array) => {
  array.reverse();
  renderUI(toDoList);
  saveTasks();
};

const updateThemeUI = (state, element, logo) => {
  element.forEach((el) => el.classList.toggle(THEME, state));
  if (state) {
    logo.src = "/images/gintoki-serious.jpg";
  } else {
    logo.src = "/images/gintoki-crazy.jpg";
  }
};

const updateCheckUI = (state, element) => {
  element.classList.toggle(CHECK, state);
};

const deleteAllUI = (array, button) => {
  if (array.length !== 0) button.disabled = false;
  else button.disabled = true;
};

deleteAllUI(toDoList, $deleteAllBtn);

const renderUI = (array) => {
  $toDoListMain.innerHTML = "";

  array.forEach((toDo) => {
    const $newDiv = document.createElement("div");
    const $newCheckButton = document.createElement("button");
    const $newEditButton = document.createElement("button");
    const $newDeleteButton = document.createElement("button");

    $newDiv.innerHTML = `<p id="${toDo.id}">${toDo.name}</p>`;
    $newCheckButton.classList.add("to-do-list-check");
    $newEditButton.innerHTML = "Edit";
    $newEditButton.classList.add("to-do-list-edit");
    $newDeleteButton.innerHTML = "Delete";
    $newDeleteButton.classList.add("to-do-list-delete");

    $toDoListMain.appendChild($newDiv);
    $newDiv.insertAdjacentElement("afterbegin", $newCheckButton);
    $newDiv.appendChild($newEditButton);
    $newDiv.appendChild($newDeleteButton);
  });
};

$themeToggler.addEventListener("click", () => {
  handleDarkMode();
  updateThemeUI(isDarkMode, $themeElements, $themeToggler);
});

$addTaskBtn.addEventListener("click", () => {
  addTask($toDoListInputText, toDoList);
  deleteAllUI(toDoList, $deleteAllBtn);
  renderUI(toDoList);
});

$deleteAllBtn.addEventListener("click", () => {
  deleteAllTasks(toDoList);
  deleteAllUI(toDoList, $deleteAllBtn);
  renderUI(toDoList);
});

$toDoListInputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask($toDoListInputText, toDoList);
    deleteAllUI(toDoList, $deleteAllBtn);
    renderUI(toDoList);
  }
});

$toDoListSortBtn.addEventListener("click", () => {
  sortTasks(toDoList);
});

renderUI(toDoList);

const $toDoListCheck = document.querySelectorAll("to-do-list-check");

$toDoListCheck.addEventListener("click", () => {
  handleCheck();
  updateCheckUI(isDone, $toDoListCheck);
});

// const toDos = [
//   {
//     text: "lavar la ropa",
//     id: "x",
//     isDone: false,
//   },
//   {
//     text: "dormir",
//     id: "y",
//     isDone: false,
//   },
//   {
//     text: "colgar la ropa",
//     id: "z",
//     isDone: false,
//   },
// ];

// const encontrarID = (array) => {
//   array.forEach((obj) => {
//     console.log(obj);
//   });
// };

// encontrarID(toDos);
