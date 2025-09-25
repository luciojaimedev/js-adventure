import { $hamburgerDrawer, $hamburgerBtn } from "../dom.js";

let isHamburgerOpen = false;

export const handleHamburger = () => {
  isHamburgerOpen = !isHamburgerOpen;
  updateDrawerUI($hamburgerDrawer, isHamburgerOpen);
  updateHamburgerBtnUI($hamburgerBtn, isHamburgerOpen);
};

const updateDrawerUI = (section, state) => {
  section.classList.toggle("hamburger-drawer--open", state);
};

const updateHamburgerBtnUI = (button, state) => {
  button.innerHTML = state ? "X" : "l l l";
};

export const closeHamburger = () => {
  if (isHamburgerOpen) {
    isHamburgerOpen = false;
    updateDrawerUI($hamburgerDrawer, isHamburgerOpen);
    updateHamburgerBtnUI($hamburgerBtn, isHamburgerOpen);
  }
};
