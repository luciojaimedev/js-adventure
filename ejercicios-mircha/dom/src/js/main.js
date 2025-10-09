import { handleHamburger, closeHamburger } from "./ui/hamburger.js";
import { startClock, stopClock } from "./ui/clock.js";
import { startAlarm, stopAlarm } from "./ui/alarm.js";
import { initBall } from "./ui/ball.js";
import { countdown } from "./ui/countdown.js";
import { scrollToTop, hideScrollBtn } from "./ui/scroll-btn.js";
import {
  $scrollBtn,
  $darkmodeBtn,
  $websiteInput,
  $widthInput,
  $heightInput,
} from "./dom.js";
import {
  darkmodeHandler,
  darkmodeRenderUI,
  isDarkmode,
} from "./ui/darkmode.js";
import { inputValues, testInputs } from "./ui/responsive-test.js";

document.addEventListener("click", (e) => {
  if (e.target.matches('[data-menu="hamburger-btn"]')) {
    handleHamburger();
    return;
  }

  if (e.target.closest(".hamburger-drawer")) return; // si clickea dentro del menú, no se cierra
  closeHamburger();

  if (e.target.matches('[data-id="activate-clock"]')) startClock();
  if (e.target.matches('[data-id="deactivate-clock"]')) stopClock();

  if (e.target.matches('[data-id="activate-alarm"]')) startAlarm();
  if (e.target.matches('[data-id="deactivate-alarm"]')) stopAlarm();

  if (e.target.matches(".scroll-btn")) scrollToTop();

  if (e.target.matches(".darkmode-btn")) {
    darkmodeHandler();
    darkmodeRenderUI();
  }

  //   if (e.target.matches('[data-id="submit-btn"]')) {
  //     console.log($websiteInput.value);
  //     console.log($widthInput.value);
  //     console.log($heightInput.value);
  //   }
  // });
});

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = JSON.parse(localStorage.getItem("darkmode"));

  if (!savedMode) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    darkmodeHandler();
    $darkmodeBtn.textContent = isDarkmode ? "😎" : "🌚";
  }
  initBall(10);
  countdown(
    "countdown",
    "May 03, 2026, 00:00:00",
    "Feliz cumpleaños a miiii :D"
  );
});

window.addEventListener("scroll", (e) => {
  hideScrollBtn($scrollBtn);
});
