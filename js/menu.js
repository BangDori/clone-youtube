const menu = document.querySelector("body"),
  menuWindow = document.querySelector("#menuWindow"),
  overlay = document.querySelector(".overlay"),
  wrapper = document.querySelector(".wrapper");

const SHOWING_MN = "js-menu";
const OVERFLOW = "overflow"
const HIDDEN = "hidden";

function handleClick(event) {
  hasClass = menuWindow.classList.contains(SHOWING_MN);
  if(event.target.name == "menu") {
    if(hasClass) {
      menuWindow.classList.remove(SHOWING_MN);
      overlay.classList.remove(HIDDEN);
      menu.classList.add(OVERFLOW);
    }
  }

  if(event.target.className === "overlay" || event.target.name === "menu") {
    if(!hasClass) {
      menuWindow.classList.add(SHOWING_MN);
      overlay.classList.add(HIDDEN);
      menu.classList.remove(OVERFLOW);
    }
  }
}

function init() {
  menu.addEventListener("click", handleClick);
}

init();
