import { $clock, $playClockBtn } from "../dom.js";

let clockTime;

export const startClock = () => {
  clockTime = setInterval(() => {
    let clockHour = new Date().toLocaleTimeString();
    $clock.innerHTML = `<h3>${clockHour}</h3>`;
  }, 1000);

  $playClockBtn.disabled = true;
};

export const stopClock = () => {
  clearInterval(clockTime);
  $playClockBtn.disabled = false;
};
