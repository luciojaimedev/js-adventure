const $toDoListInputText = document.getElementById("input-text");
const $deleteAllBtn = document.getElementById("delete-all-button");
const $addTaskBtn = document.getElementById("add-task-button");
const $themeToggler = document.querySelector(".header-logo");
const $themeElements = document.querySelectorAll(".theme-element");
const $toDoListMain = document.querySelector(".to-do-list-main");
const $toDoListSortBtn = document.getElementById("filter-button");

const THEME = "theme";

const toDoList = JSON.parse(localStorage.getItem("tasks")) || [];

let isDarkMode = false;

const handleDarkMode = () => (isDarkMode = !isDarkMode);

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(toDoList));
};

const addTask = (text, array) => {
  if (text.value.trim().length === 0 || text.value.trim().length > 30)
    return alert(
      "Se admiten unicamente tareas entre 1 a 15 letras (contando espacios)"
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

const deleteAllUI = (array, button) => {
  if (array.length !== 0) button.disabled = false;
  else button.disabled = true;
};

deleteAllUI(toDoList, $deleteAllBtn);

const renderUI = (array) => {
  $toDoListMain.innerHTML = "";

  array.forEach((toDo) => {
    const $newDiv = document.createElement("div");
    $newDiv.innerHTML = `<p id=${toDo.id}>${toDo.name}</p>`;
    $toDoListMain.appendChild($newDiv);
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
  console.log(toDoList);
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
    deleteAllUI(toDoList, $deleteAllBtn);
  }
});

$toDoListSortBtn.addEventListener("click", () => {
  sortTasks(toDoList);
});

renderUI(toDoList);
