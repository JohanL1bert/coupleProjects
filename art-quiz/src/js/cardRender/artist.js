import deleteNodes from "../renderDelete/deletePage";
import renderHTML from "../renderDelete/renderPage";
import renderCard from "./card";
import playMusic from "../music/playMusic";
import renderGrand from "./card_data";
import renderPointCard from "./point";
import setLocalData from "../data/localStash";

let dataObj = {};
const answerChoice = [];
let iterator = 0;
let rightAnswer = 0;

const filterObj = async (data, choice) => {
  const newArray = [];
  newArray.push(data[choice]);
  while (newArray.length !== 4) {
    const number = Math.floor(Math.random() * (241 - 0)) + 0;
    if (number !== choice) {
      newArray.push(data[number]);
    }
  }

  return newArray;
};

const refreshPage = () => {
  const { data, sel, obj, choice } = dataObj;
  obj.choice += 1;
  const newValue = obj.choice;
  obj.choice = newValue;

  const btnSelector = document.querySelector(".ticket__inner");
  const picSelector = document.querySelector(".picture__question > div");
  iterator += 1;
  if (iterator > 9) {
    setLocalData(answerChoice, dataObj);
    answerChoice.length = 0;
    iterator = 0;
    deleteNodes(btnSelector);
    if (iterator === 9) {
      renderGrand();
    } else {
      renderPointCard(rightAnswer, dataObj);
      rightAnswer = 0;
    }
  } else {
    renderArtist(data, sel, obj, choice);
    deleteNodes(btnSelector, picSelector);
  }
};

const clearObj = (obj) => `${obj.choice}full`;

const createListener = async (data) => {
  const { author } = data;
  const getBtn = document.querySelector(".picture__authors");
  const getEvent = (event) => {
    let result;
    const { target } = event;
    if (target.textContent !== author) {
      playMusic(false);
      result = renderCard(data, false);
      answerChoice.push(false);
    } else {
      result = renderCard(data, true);
      playMusic(true);
      answerChoice.push(true);
      rightAnswer += 1;
    }

    const ticket = document.querySelector(".ticket");
    renderHTML([ticket], [result]);
    const btnSelector = document.querySelector(".picture__btn");
    btnSelector.addEventListener("click", refreshPage);
  };
  getBtn.addEventListener("click", getEvent);
};

const getData = async () => {
  const resultData = await fetch(
    `https://raw.githubusercontent.com/JohanL1bert/art-picture/main/data.json`
  ).then((response) => response.json());
  return Promise.all(resultData).then((value) => value.map((el) => el));
};

const filterMain = async (page, url, selector) => {
  const regexImg = /..assets.*g/;
  const newPage = page.replace(regexImg, url);
  renderHTML([selector], [newPage]);
};

const createImg = async (html, key, selector) => {
  const resultImg = await fetch(
    `https://raw.githubusercontent.com/JohanL1bert/art-picture/main/full/${key}.jpg`
  );
  await filterMain(html, resultImg.url, selector);
};

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const createQuestion = (picture) => {
  const selector = document.querySelector(`${picture}`);
  return selector;
};
const filterQuestion = async (html, nameArray) => {
  const nameArr = nameArray.map((el) => el.author);
  const shuffleArray = shuffle(nameArr);
  const regexTemplate = /(template)+/;
  const str = shuffleArray.reduce((acc, curr) => {
    const value = html.replace(regexTemplate, curr);
    return acc + value;
  }, "");
  return str;
};

const renderArtist = async (data, selector, objData, choice) => {
  dataObj = {
    data,
    sel: selector,
    obj: objData,
    choice,
  };

  const rightChoice = dataObj.obj.choice;
  const keyImg = clearObj(objData);
  const { questionPage, authorPage } = data;
  const { pictureQuestion, authorQuetsion } = selector;
  const mainPageSetting = document.querySelector(`${pictureQuestion}`);
  const obj = await getData();
  const array = await filterObj(obj, rightChoice);
  const nextRenderCard = obj[rightChoice];
  await createImg(questionPage, keyImg, mainPageSetting);
  const template = await filterQuestion(authorPage, array);
  const selectorAuthor = createQuestion(authorQuetsion);
  renderHTML([selectorAuthor], [template]);
  await createListener(nextRenderCard);
};

export default renderArtist;
