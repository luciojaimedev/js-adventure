export const countdown = (id, date, message) => {
  const $countdown = document.getElementById(id);
  const countdownDate = new Date(date).getTime();

  let countdownTempo = setInterval(() => {
    let nowDate = new Date().getTime();
    let limitTime = countdownDate - nowDate;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );

    $countdown.innerHTML = `<h3> Faltan ${days} dias, ${hours} horas y ${minutes} minutos con ${seconds} segundos`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `${message}`;
    }
  }, 1000);
};
