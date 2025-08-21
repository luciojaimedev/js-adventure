const $toggleButton = document.querySelector(".toggle-button");
const $themeElements = document.querySelectorAll(".theme");

const THEME = "dark-mode";

let isDarkMode = false;

const handleDarkMode = () => (isDarkMode = !isDarkMode);

const updateThemeUI = (state, $elementList) => {
  $elementList.forEach((el) => el.classList.toggle(THEME, state));
};

const updateButtonUI = (state, $button) => {
  $button.innerText = state ? "Default Theme" : "Dark Mode Theme";
  $button.ariaLabel = state ? "Turn off Dark Theme" : "Turn on Dark Theme";
};

$toggleButton.addEventListener("click", () => {
  handleDarkMode();
  updateThemeUI(isDarkMode, $themeElements);
  updateButtonUI(isDarkMode, $toggleButton);
});
