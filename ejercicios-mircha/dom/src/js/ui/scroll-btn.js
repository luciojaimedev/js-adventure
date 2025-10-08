import { $scrollBtn } from "../dom.js";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const hideScrollBtn = (btn) => {
  if (window.pageYOffset < 400) {
    btn.classList.add("hidden");
  } else {
    btn.classList.remove("hidden");
  }
};
