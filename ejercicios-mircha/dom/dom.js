const $hamburgerDrawer = document.querySelector(".hamburger-drawer");
const $hamburgerBtn = document.querySelector('[data-menu="btn"');
const $playClockBtn = document.querySelector('[data-id="activate-clock"]');
const $stopClockBtn = document.querySelector('[data-id="deactivate-clock"]');
const $clock = document.querySelector('[data-id="clock"]');

let isHamburgerOpen = false;
let clockTime;

const handleHamburger = () => (isHamburgerOpen = !isHamburgerOpen);

const updateDrawerUI = (section, state) => {
  section.classList.toggle("hamburger-drawer--open", state);
};

const updateHamburgerBtnUI = (button, state) =>
  state ? (button.innerHTML = "X") : (button.innerHTML = "l l l");

document.addEventListener("click", (e) => {
  if (e.target.matches('[data-menu="btn"]')) {
    handleHamburger();
    updateDrawerUI($hamburgerDrawer, isHamburgerOpen);
    updateHamburgerBtnUI($hamburgerBtn, isHamburgerOpen);
    return;
  }

  if (isHamburgerOpen) {
    isHamburgerOpen = false;
    updateDrawerUI($hamburgerDrawer, isHamburgerOpen);
    updateHamburgerBtnUI($hamburgerBtn, isHamburgerOpen);
  }

  if (e.target.matches('[data-id="activate-clock"]')) {
    clockTime = setInterval(() => {
      let clockHour = new Date().toLocaleTimeString();
      $clock.innerHTML = `<h3>${clockHour}</h3>`;
    }, 1000);

    e.target.disabled = true;
  }

  if (e.target.matches('[data-id="deactivate-clock"]')) {
    clearInterval(clockTime);
    $playClockBtn.disabled = false;
  }
});
