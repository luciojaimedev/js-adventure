import { $prevBtn, $nextBtn, $carousel } from "../dom.js";

let i = 0;

export const slider = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".prev")) {
      $carousel[i].classList.remove("active");
      i--;

      if (i < 0) i = $carousel.length - 1;

      $carousel[i].classList.add("active");
    }

    if (e.target.closest(".next")) {
      $carousel[i].classList.remove("active");
      i++;

      if (i >= $carousel.length) i = 0;

      $carousel[i].classList.add("active");
    }
  });
};
