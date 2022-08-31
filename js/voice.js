const voice = document.querySelector(".js-window"),
  voice_btn = document.querySelector(".voice"),
  voice_cancel = document.querySelector(".voice-cancel"),
  voice_window = document.querySelector("#voiceWindow"),
  wrap = document.querySelector("body");

const HIDDEN_VO = "hidden";

function handleClick(event) {
  hasClass = voice_window.classList.contains(HIDDEN_VO);

  if(hasClass) {
    voice_window.classList.remove(HIDDEN_VO);
    overlay.classList.remove(HIDDEN);
  }
  else {
    voice_window.classList.add(HIDDEN_VO);
    overlay.classList.add(HIDDEN);
  }
}

function init() {
  voice_btn.addEventListener("click", handleClick);
  voice_cancel.addEventListener("click", handleClick);
}

init();
