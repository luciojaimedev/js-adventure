import { handleHamburger, closeHamburger } from "./ui/hamburger.js";
import { startClock, stopClock } from "./ui/clock.js";
import { startAlarm, stopAlarm } from "./ui/alarm.js";

document.addEventListener("click", (e) => {
  if (e.target.matches('[data-menu="btn"]')) {
    handleHamburger();
    return;
  }

  if (e.target.closest(".hamburger-drawer")) return; // si clickea dentro del menú, no se cierra
  closeHamburger();

  if (e.target.matches('[data-id="activate-clock"]')) startClock();
  if (e.target.matches('[data-id="deactivate-clock"]')) stopClock();

  if (e.target.matches('[data-id="activate-alarm"]')) startAlarm();
  if (e.target.matches('[data-id="deactivate-alarm"]')) stopAlarm();
});
