const search = document.querySelector(".js-search"),
  body = document.querySelector("body"),
  searchForm = document.querySelector(".search-form"),
  searchBox = document.querySelector(".search-box"),
  search_query = document.querySelector("#search_query"),
  searchCancel = document.querySelector(".search-form-cancel");

const SHOWING = "showing-search";
const SHOWING_BR = "showing-border";
const ERASING_BR = "erasing-border";
const SHOWING_OL = "showing-outline";
const SHOWING_CN = "showing-cancel";

function loadCancel(){
  if(search_query.value !== "") {
    searchCancel.classList.add(SHOWING_CN);
  }
  else {
    searchCancel.classList.remove(SHOWING_CN);
  }
}

function handleClickBorder(event){
  if(event.target.name == "search_query") {
    search.classList.add(SHOWING);
    searchBox.classList.add(SHOWING_BR, SHOWING_OL);
    searchForm.classList.add(ERASING_BR);
  } else {
    search.classList.remove(SHOWING);
    searchBox.classList.remove(SHOWING_BR, SHOWING_OL);
    searchForm.classList.remove(ERASING_BR);
  }
}

function handleClickCancel() {
  search_query.value = "";
}

function init() {
  loadCancel();
  setInterval(loadCancel, 100);
  body.addEventListener("click", handleClickBorder);
  searchCancel.addEventListener("click", handleClickCancel);
}

init();
