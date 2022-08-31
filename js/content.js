const content_item = document.querySelector(".content-item"),
  item_img = document.querySelector(".content-item-img");

const SHOW_AN = "js-show";

function handleEnter(event) {
  hasClass = content_item.classList.contains(SHOW_AN);

  if(event.target.tagName === "IMG") {
    if(!hasClass){
      content_item.classList.add(SHOW_AN);
    }
  }
  if(hasClass){
    content_item.classList.remove(SHOW_AN);
  }
}

function handleClick(event) {
  if(event.target.name === "video") {
    alert("미구현");
  }
}

function init() {
  item_img.addEventListener("mouseover", handleEnter);
  wrap.addEventListener("click", handleClick);
}

init();
