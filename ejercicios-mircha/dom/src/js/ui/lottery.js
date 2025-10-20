import {
  $lotteryBox,
  $lotteryButton,
  $deleteLotteryButton,
  $lotteryMsg,
} from "../dom.js";

export const lotteryArr = [];

export const sortOutLottery = () => {
  document.addEventListener("input", (e) => {
    if (e.target === $lotteryBox) {
      const parsedNames = $lotteryBox.value
        .split(/[\n,;]+/)
        .map((n) => n.trim())
        .filter((n) => n);

      lotteryArr.splice(0, lotteryArr.length, ...parsedNames);
    }
  });

  // escuchar clicks
  document.addEventListener("click", (e) => {
    if (e.target === $lotteryButton) {
      if (lotteryArr.length === 0) {
        $lotteryMsg.innerHTML = `<p>No hay participantes! Introduzca nombres para el sorteo</p>`;
        return;
      }

      const lotteryWinnerIndex = Math.floor(Math.random() * lotteryArr.length);
      const lotteryWinner = lotteryArr[lotteryWinnerIndex];
      $lotteryMsg.innerHTML = `El ganador es <b style="text-transform: capitalize;">${lotteryWinner}</b>!!!`;
    }

    if (e.target === $deleteLotteryButton) {
      lotteryArr.splice(0, lotteryArr.length);
      $lotteryBox.value = "";
      $lotteryMsg.innerHTML = "";
    }
  });
};

export const clearLotteryParticipants = (arr) => {
  arr.splice(0, arr.length);
  $lotteryBox.value = "";
  $lotteryMsg.innerHTML = "";
};
