import selectors from "./data_html/selector";
import filterPic from "./filter-category";
import renderArtist from "./cardRender/artist";
import dataHTML from "./data_html/data-page";
import selectors2 from "./data_html/selector2.json";
import deleteNodes from "./renderDelete/delete-page";
import renderImage from "./cardRender/picture";
import filterImg from "./filter-img";

let choice;

const createHTMLTemplate = async (dep) => {
  let iterator = 0;
  const array = [];
  if (dep == "picture") {
    iterator = 12;
  } else {
    iterator = 0;
  }

  const obj = localStorage.getItem("objStorage");
  const objValue = JSON.parse(obj);
  for (; iterator <= 23; iterator += 1) {
    if (objValue.isCorrectAnswer[iterator]) {
      const result = objValue.isCorrectAnswer[iterator].filter(
        (el) => el === true
      );
      array.push(result);
    } else {
      array.push("");
    }
  }
  if (dep == "picture") {
    array.slice(11, 23);
  } else {
    array.slice(0, 11);
  }
  const numbers = [];
  array.map((el) => {
    if (el.length > 0) {
      numbers.push(el.length);
    } else {
      numbers.push("");
    }
  });
  return numbers;
};

const getEventPic = (event) => {
  const { currentTarget } = event;
  const picName = currentTarget.querySelector(
    ".illustration__name"
  ).textContent;
  const obj = filterImg(picName);
  const secondObj = filterPic(picName);
  if (choice == "author") {
    renderArtist(dataHTML, selectors2, obj, choice);
  } else {
    renderImage(dataHTML, selectors2, secondObj, choice);
  }
  const destroySelector = document.querySelector(".categories > div");
  deleteNodes(destroySelector);
};

const callbackEvent = async () => {
  const picCategory = document.querySelectorAll(".illustration__box");
  picCategory.forEach((el) => el.addEventListener("click", getEventPic));
};

const templateCategory = async (promiseCat, value) => {
  const portraintName = [
    "Portrait",
    "Landscape",
    "Still Life",
    "Graphic",
    "Antique",
    "Avant-Garde",
    "Renaissance",
    "Surrealism",
    "Kitsch",
    "Minimalism",
    "Avangard",
    "Industrial",
  ];
  const newArrayTempalte = [];
  for (let i = 0; i < 12; i += 1) {
    const template = `
        <div class="illustration__box">
          <div class="illustration__heading">
            <div class="illustration__name">${portraintName[i]}</div>
            <div class="illustration__score">${value[i]}</div>
          </div>
          <div class="illustration__image">
            <img src="${promiseCat[i]}" alt="" class="illustration__img">
          </div>
        </div>
        </div>`;
    newArrayTempalte.push(template);
  }
  return newArrayTempalte;
};

const getImageSetting = async (dep, val) => {
  let arrayDependency;
  if (dep === "author") {
    const id = [
      "0",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "100",
      "110",
    ];
    arrayDependency = id;
  } else {
    const id = [
      "120",
      "130",
      "140",
      "150",
      "160",
      "170",
      "180",
      "190",
      "200",
      "210",
      "220",
      "230",
    ];
    arrayDependency = id;
  }
  const promiseResult = arrayDependency.map(async (key) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/JohanL1bert/art-picture/main/img/${key}.jpg`
    );
    return response.url;
  });
  const data = Promise.all(promiseResult).then((value) =>
    templateCategory(value, val)
  );
  return data;
};

const prerenderCategory = async (startedPageCat, selectorPage) => {
  await selectorPage.insertAdjacentHTML("afterbegin", `${startedPageCat}`);
};

const renderCard = async (data, selector) => {
  for (let i = 0; i < 12; i += 1) {
    selector.insertAdjacentHTML("afterbegin", data[i]);
  }
};

const renderCategory = async (depend) => {
  choice = depend;
  await prerenderCategory(dataHTML.categories, selectors.categoryStartedPage);

  const selectorToAppend = document.querySelector(".illustration__category");
  const value = await createHTMLTemplate(choice);
  const arrImg = await getImageSetting(depend, value);
  createHTMLTemplate(choice);
  arrImg.reverse();
  await renderCard(arrImg, selectorToAppend);
  await callbackEvent();
};

export default renderCategory;
