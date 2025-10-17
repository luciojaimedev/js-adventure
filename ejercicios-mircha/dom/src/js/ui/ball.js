export function initBall(step = 10) {
  const container = document.querySelector('[data-id="field"]');
  const ball = document.querySelector('[data-id="ball"]');

  let x = (container.offsetWidth - ball.offsetWidth) / 2;
  let y = (container.offsetHeight - ball.offsetHeight) / 2;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "w") y -= step;
    if (e.key === "ArrowDown" || e.key === "s") y += step;
    if (e.key === "ArrowLeft" || e.key === "a") x -= step;
    if (e.key === "ArrowRight" || e.key === "d") x += step;

    const maxX = container.offsetWidth - ball.offsetWidth;
    const maxY = container.offsetHeight - ball.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    setTimeout(() => {
      ball.classList.add("scale-ball");
    }, 100);

    setTimeout(() => {
      ball.classList.remove("scale-ball");
    }, 180);
  });
}
