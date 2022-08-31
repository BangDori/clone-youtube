const category = document.querySelector(".lnbNav");

const SHOWING_CL = "lnbNav-item";

function handleClick(event){
  if(event.target.className !== "lnbNav") {
    const every = category.children;
    for(let i = 0; i < every.length; i++) {
      every[i].classList.remove(SHOWING_CL);
    }
    event.target.classList.add(SHOWING_CL);
  }
}

function init() {
  category.addEventListener("click", handleClick);
}

init();
