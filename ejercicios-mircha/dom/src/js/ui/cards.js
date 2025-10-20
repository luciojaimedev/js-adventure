export const cardFilter = (input, selector) => {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      console.log(e.target.value);
      document.querySelectorAll(selector).forEach((el) => {
        if (
          el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          el.classList.remove("filter");
          return;
        } else {
          el.classList.add("filter");
          return;
        }
      });
    }
  });
};
