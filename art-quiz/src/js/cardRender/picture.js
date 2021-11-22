import deleteNodes from "../renderDelete/deletePage";
import renderCard from "./card";
import renderHTML from "../renderDelete/renderPage";

let dataObj = {};

const refreshPage = () => {
  const { html, selector, obj, choice } = dataObj;
  const btnTicket = document.querySelector(".ticket__inner");
  const picWriter = document.querySelector(".writer > div");
  deleteNodes(btnTicket);
  deleteNodes(picWriter);
  const newValue = obj.choice + 1;
  obj.choice = newValue;
  renderImage(html, selector, obj, choice);
};

const createListener = async (data) => {
  const getBtn = document.querySelector(".writer__box");
  const getEvent = (event) => {
    let result;
    const { target } = event;
    if (target.src.includes(data.imageNum)) {
      result = renderCard(data, true);
    } else {
      result = renderCard(data, false);
    }
    const ticket = document.querySelector(".ticket");
    renderHTML([ticket], [result]);
    const btnSelector = document.querySelector(".picture__btn");
    btnSelector.addEventListener("click", refreshPage);
  };

  getBtn.addEventListener("click", getEvent);
};

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

const templateImg = (data) => {
  let html = "";

  data.forEach((el) => {
    html += ` <div class="writer__wrapper">
    <img
      src="https://raw.githubusercontent.com/JohanL1bert/art-picture/main/img/${el}.jpg"
      alt=""
      class="writer__img"
    />
    </div>
    </div> `;
  });

  return html;
};

const getData = async () => {
  const resultData = await fetch(
    `https://raw.githubusercontent.com/JohanL1bert/art-picture/main/data.json`
  ).then((response) => response.json());
  return Promise.all(resultData).then((value) => value.map((el) => el));
};

const filterObj = async (data, number) => {
  const newArray = [];
  newArray.push(number);
  while (newArray.length !== 4) {
    const numberImg = Math.floor(Math.random() * (241 - 0)) + 0;
    if (numberImg !== number) {
      newArray.push(+data[numberImg].imageNum);
    }
  }

  return newArray;
};

const renderImage = async (html, selector, obj, choice) => {
  dataObj = {
    html,
    selector,
    obj,
    choice,
  };
  const authorPicture = obj.author[obj.choice];
  const rightChoice = obj.array[obj.choice]; // 120
  const templateString = `${authorPicture}. Какую картину нарисованал он?`;
  const templateHtml = html.writer.replace(/(SomeQuestion)/, templateString);
  const selectorWriter = document.querySelector(`${selector.writer}`);
  renderHTML([selectorWriter], [templateHtml]);
  const boxSelector = document.querySelector(".writer__box");

  const dataJSON = await getData();
  const arrayImg = await filterObj(dataJSON, rightChoice);
  const randomArray = shuffle(arrayImg);
  const splitedTemplateImg = templateImg(randomArray);
  renderHTML([boxSelector], [splitedTemplateImg]);

  await createListener(dataJSON[rightChoice]);
};

export default renderImage;

/* const selectorWriter = document.querySelector(`${selector.writer}`);
  renderHTML([selectorWriter], [templateHtml]); */

/* <div class="writer__wrapper">
<img
  src="./assets/img/category/static.png"
  alt=""
  class="writer__img"
/>
</div>
</div> */
