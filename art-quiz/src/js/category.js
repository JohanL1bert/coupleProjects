import dataHTML from "./data_html/data_page";
import selectors from "./data_html/selector";

const templateCategory = async (promiseCat) => {
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
            <div class="illustration__score">Number</div>
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

const getImageSetting = async (dep) => {
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
    templateCategory(value)
  );
  return data;
};

const prerenderCategory = async (startedPageCat, selectorPage) => {
  await selectorPage.insertAdjacentHTML("afterbegin", `${startedPageCat}`);
};

const renderCard = (data, selector) => {
  for (let i = 0; i < 12; i += 1) {
    selector.insertAdjacentHTML("afterbegin", data[i]);
  }
};

const renderCategory = async (depend) => {
  await prerenderCategory(dataHTML.categories, selectors.categoryStartedPage);

  const selectorToAppend = document.querySelector(".illustration__category");
  const arrImg = await getImageSetting(depend);
  arrImg.reverse();
  await renderCard(arrImg, selectorToAppend);
  await templateCategory(arrImg);
};

export default renderCategory;
