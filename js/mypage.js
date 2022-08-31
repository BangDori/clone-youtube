const mypage = document.querySelector("#mypageWindow"),
  mypage_btn = document.querySelector(".my-page");

function handleClick(event) {
  hasClass = mypage.classList.contains(HIDDEN);

  if(event.target.name === "my-page") {
    if(hasClass) {
      mypage.classList.remove(HIDDEN);
    }
  }

  if(!hasClass) {
    mypage.classList.add(HIDDEN);
  }
}

function init() {
  wrap.addEventListener("click", handleClick);
}

init();
