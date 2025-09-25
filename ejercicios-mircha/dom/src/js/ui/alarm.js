import { $audio, $playAlarmBtn } from "../dom.js";

let alarmTimeout;

export const startAlarm = () => {
  $audio.src = "src/assets/sounds/alarm.mp3";
  $audio.loop = true;

  alarmTimeout = setTimeout(() => {
    $audio.play();
  }, 2000);

  $playAlarmBtn.disabled = true;
};

export const stopAlarm = () => {
  clearTimeout(alarmTimeout);
  $audio.pause();
  $audio.currentTime = 0;
  $playAlarmBtn.disabled = false;
};
