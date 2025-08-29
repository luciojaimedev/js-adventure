const $toDoListInputText = document.getElementById("input-text");
const $deleteAllBtn = document.getElementById("delete-all-button");
const $addTaskBtn = document.getElementById("add-task-button");
const $themeToggler = document.querySelector(".header-logo");
const $themeElements = document.getElementById("theme-element");

const THEME = "theme";

let isDarkMode = false;

const handleDarkMode = () => (isDarkMode = !isDarkMode);

const updateThemeUI = (state, element) => {
  element.forEach((el) => el.classList.toggle(THEME, state));
};

// const updateLogoUI = (state, logo) => {
//     logo.classList.toggle()
// };

$themeToggler.addEventListener("click", () => {
  handleDarkMode();
  updateThemeUI(isDarkMode, $themeElements);
});
