import { $darkmodeBtn } from "../dom.js";

let isDarkmode = false;

export const darkmodeHandler = () => {
  isDarkmode = !isDarkmode;
};

export const darkmodeRenderUI = () => {
  document.documentElement.classList.toggle("dark", isDarkmode);
  $darkmodeBtn.textContent = isDarkmode ? "😎" : "🌚";
  localStorage.setItem("darkmode", JSON.stringify(isDarkmode));
};

export { isDarkmode };
