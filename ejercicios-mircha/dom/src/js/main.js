import { handleHamburger, closeHamburger } from "./ui/hamburger.js";
import { startClock, stopClock } from "./ui/clock.js";
import { startAlarm, stopAlarm } from "./ui/alarm.js";
import { initBall } from "./ui/ball.js";
import { countdown } from "./ui/countdown.js";
import { scrollToTop, hideScrollBtn } from "./ui/scroll-btn.js";
import { $scrollBtn, $darkmodeBtn, $form } from "./dom.js";
import {
  darkmodeHandler,
  darkmodeRenderUI,
  isDarkmode,
} from "./ui/darkmode.js";
import { geoLocalization } from "./ui/geolocalization.js";

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
});

document.addEventListener("submit", (e) => {
  if (e.target.matches(".responsive-test-form")) {
    e.preventDefault();
    responsiveWindow = window.open(
      $form.website.value,
      "responsive-test",
      `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`
    );
  }
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

  initBall(20);

  countdown(
    "countdown",
    "May 03, 2026, 00:00:00",
    "Feliz cumpleaños a miiii :D"
  );
  geoLocalization();
});

window.addEventListener("scroll", (e) => {
  hideScrollBtn($scrollBtn);
});
