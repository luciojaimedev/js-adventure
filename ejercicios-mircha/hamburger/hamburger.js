const $hamburgerDrawer = document.querySelector(".hamburger-drawer");
const $hamburgerBtn = document.querySelector('[data-menu="btn"');

let isHamburgerOpen = false;

const handleHamburger = () => (isHamburgerOpen = !isHamburgerOpen);

const updateDrawerUI = (section, state) => {
  section.classList.toggle("hamburger-drawer--open", state);
};

const updateHamburgerBtnUI = (button, state) =>
  state ? (button.innerHTML = "X") : (button.innerHTML = "|||");

document.addEventListener("click", (e) => {
  if (e.target.matches('[data-menu="btn"]')) {
    handleHamburger();
    updateDrawerUI($hamburgerDrawer, isHamburgerOpen);
    updateHamburgerBtnUI($hamburgerBtn, isHamburgerOpen);
    console.log(isHamburgerOpen);
  }
});
