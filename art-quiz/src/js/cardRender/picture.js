import deleteNodes from "../renderDelete/delete-page";
import renderCard from "./card";
import renderHTML from "../renderDelete/render-page";
import renderGrand from "./card_data";
import playMusic from "../music/play-music";
import setLocalData from "../data/local-stash";
import numberCorrectAnswer from "../data/number-answer";
import renderPointCard from "./point";

let dataObj = {};
const answerChoice = [];

const refreshPage = () => {
  const { html, selector, obj, choice } = dataObj;
  const btnTicket = document.querySelector(".ticket__inner");
  const picWriter = document.querySelector(".writer > div");
  const newValue = obj.choice + 1;
  obj.choice = newValue;
  if (obj.choice > 9) {
    setLocalData(answerChoice, dataObj);
    const result = numberCorrectAnswer(answerChoice);
    answerChoice.length = 0;
    deleteNodes(btnTicket);
    if (result === 9) {
      renderGrand();
    } else {
      renderPointCard(result, dataObj);
    }
  } else {
    renderImage(html, selector, obj, choice);
    deleteNodes(btnTicket);
    deleteNodes(picWriter);
  }
};

const createListener = async (data) => {
  const getBtn = document.querySelector(".writer__box");
  const getEvent = (event) => {
    let result;
    const { target } = event;
    if (target.src.includes(data.imageNum)) {
      playMusic(true);
      result = renderCard(data, true);
      answerChoice.push(true);
    } else {
      result = renderCard(data, false);
      playMusic(false);
      answerChoice.push(false);
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
  const templateString = `Какую картину нарисовал ${authorPicture}?`;
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
