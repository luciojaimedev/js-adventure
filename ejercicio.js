const $toDoListInputText = document.getElementById("input-text");
const $deleteAllBtn = document.getElementById("delete-all-button");
const $addTaskBtn = document.getElementById("add-task-button");
const $themeToggler = document.querySelector(".header-logo");
const $themeElements = document.querySelectorAll(".theme-element");
const $toDoListMain = document.querySelector(".to-do-list-main");

const THEME = "theme";

const toDoList = [];

let isDarkMode = false;

const handleDarkMode = () => (isDarkMode = !isDarkMode);

const addTask = (text, array) => {
  if (text.value.trim().length === 0 || text.value.trim().length > 30)
    alert(
      "Se admiten unicamente tareas entre 1 a 15 letras (contando espacios)"
    );

  if (text) array.push(text.value.trim());

  text.value = "";
};

const deleteAllTasks = (array) => {
  array.splice(0, array.length);
};

const updateThemeUI = (state, element, logo) => {
  element.forEach((el) => el.classList.toggle(THEME, state));
  if (state) {
    logo.src = "/images/gintoki-serious.jpg";
  } else {
    logo.src = "/images/gintoki-crazy.jpg";
  }
};

const renderUI = (array) => {
  $toDoListMain.innerHTML = "";

  array.forEach((el) => {
    const $newDiv = document.createElement("div");
    $newDiv.innerHTML = `<p>${el}</p>`;
    $toDoListMain.appendChild($newDiv);
  });
};

$themeToggler.addEventListener("click", () => {
  handleDarkMode();
  updateThemeUI(isDarkMode, $themeElements, $themeToggler);
});

$addTaskBtn.addEventListener("click", () => {
  addTask($toDoListInputText, toDoList);
  renderUI(toDoList);
  console.log(toDoList);
});

$deleteAllBtn.addEventListener("click", () => {
  deleteAllTasks(toDoList);
  renderUI(toDoList);
});

$toDoListInputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask($toDoListInputText, toDoList);
    renderUI(toDoList);
    console.log(toDoList);
  }
});
