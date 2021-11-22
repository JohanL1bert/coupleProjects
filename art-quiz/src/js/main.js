import deleteNodes from "./renderDelete/deletePage";
import renderCategory from "./category";
import pageRender from "./main_page/head__page";
import dataHTML from "./data_html/data_page";
import selectors2 from "./data_html/selector2.json";
import renderSetting from "./settingRender/setting";

let categoryName;
let buttonClick;
/* let settingBtn; */
const artistQuizBtn = document.querySelector(".artist__button");
const pictureButton = document.querySelector(".picture__button");
const settingSelector = document.querySelector(".header__setings");

const filterClick = (nameBtn) => {
  if (nameBtn === "artist__button") {
    return "author";
  }
  return "picture";
};

const nodes = () => {
  const node = document.querySelector(".art");
  const child = node.firstElementChild;
  const header = document.querySelector(".header");
  const headerChild = header.firstElementChild;
  return [child, headerChild];
};

const renderMainPage = () => {
  const fatherNode = document.querySelector(".categories");
  const node = fatherNode.firstElementChild;
  deleteNodes(node);
  pageRender(dataHTML, selectors2);
  const artistBtn = document.querySelector(".artist__button");
  const pictureBtn = document.querySelector(".picture__button");
  artistBtn.addEventListener("click", buttonClick);
  pictureBtn.addEventListener("click", buttonClick);
};

buttonClick = (event) => {
  const name = filterClick(event.srcElement.className);
  const child = nodes();
  deleteNodes(...child);
  renderCategory(name);

  categoryName = document.querySelector(".categories__name");
  categoryName.addEventListener("click", renderMainPage);
};

const buttonSetting = () => {
  const child = nodes();
  deleteNodes(...child);
  renderSetting(dataHTML.settings, selectors2.setting);
};

const setLocalStorage = () => {
  const objStorage = {
    isTimerWork: false,
    timeSecond: 20,
    isMusicWork: false,
    isCorrectAnswer: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ],
  };
  if (localStorage.getItem("objStorage") === null) {
    localStorage.setItem("objStorage", JSON.stringify(objStorage));
  }
};

const getLocalStorage = () => {
  localStorage.getItem("objStorage");
};

artistQuizBtn.addEventListener("click", buttonClick);
pictureButton.addEventListener("click", buttonClick);
settingSelector.addEventListener("click", buttonSetting);

window.addEventListener("load", setLocalStorage);
window.addEventListener("load", getLocalStorage);
