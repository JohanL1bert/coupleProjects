import deleteNodes from "../renderDelete/deletePage";
import dataHTML from "../data_html/data_page";
import selectors2 from "../data_html/selector2.json";

const deleTeFilter = () => {
  const setting = document.querySelector(".settings");
  const settingChild = setting.firstElementChild;
  deleteNodes(settingChild);
};

const buttonState = (minus, plus, time) => {
  const changeTime = (event) => {
    let value;
    if (event.srcElement.className === "time__minus") {
      if (time.textContent > 5 && time.textContent <= 30) {
        value = time.textContent;
        value -= 5;
        time.textContent = value;
      }
    } else if (time.textContent < 30 && time.textContent >= 5) {
      console.log(time.textContent);
      value = +time.textContent;
      value += 5;
      time.textContent = value;
    }
  };
  minus.addEventListener("click", changeTime);
  plus.addEventListener("click", changeTime);
};

const filterSelectors = () => {
  const BtnClose = document.querySelector(".button__close");
  const settingArrow = document.querySelector(".setting__arrow");
  const btnMinus = document.querySelector(".time__minus");
  const btnPlus = document.querySelector(".time__plus");
  const timeBtn = document.querySelector(".time__text");
  const defaultBtn = document.querySelector(".default__button");
  const saveBtn = document.querySelector(".setting__button");
  return [
    BtnClose,
    settingArrow,
    btnMinus,
    btnPlus,
    timeBtn,
    defaultBtn,
    saveBtn,
  ];
};

const renderSetting = (html, selector) => {
  const data = document.querySelector(`${selector}`);
  data.insertAdjacentHTML("afterbegin", html);

  const eventListenersState = () => {
    const [, settingArrow, btnMinus, btnPlus, timeBtn, defaultBtn, aveBtn] =
      filterSelectors();
    buttonState(btnMinus, btnPlus, timeBtn);
  };
  eventListenersState();
};

export default renderSetting;
