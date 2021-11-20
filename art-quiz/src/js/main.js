import deleteNodes from "./renderDelete/deletePage";
import renderCategory from "./setting";
import pageRender from "./main_page/head__page";
import dataHTML from "./data_html/data_page";
import selectors2 from "./data_html/selector2.json";

let categoryName;
let buttonClick;
const artistQuizBtn = document.querySelector(".artist__button");
const pictureButton = document.querySelector(".picture__button");

const filterClick = (nameBtn) => {
  if (nameBtn === "artist__button") {
    return "author";
  }
  return "picture";
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
  const node = document.querySelector(".art");
  const child = node.firstElementChild;
  const header = document.querySelector(".header__wrapper");
  const haderChild = header.firstElementChild;
  deleteNodes(child, haderChild);
  renderCategory(name);

  categoryName = document.querySelector(".categories__name");
  categoryName.addEventListener("click", renderMainPage);
};

artistQuizBtn.addEventListener("click", buttonClick);
pictureButton.addEventListener("click", buttonClick);
