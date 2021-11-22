import renderHTML from "../renderDelete/renderPage";
import renderCategory from "../category";
import deleteNodes from "../renderDelete/deletePage";
/* import mainPageWork from "../main"; */

const homePage = () => {
  const pointNode = document.querySelector(".point__inner");
  const writeNode = document.querySelector(".writer > div");
  deleteNodes(pointNode, writeNode);
  window.location.reload();
};

const categoryPage = (choice) => {
  const pointNode = document.querySelector(".point__inner");
  const writeNode = document.querySelector(".writer > div");
  deleteNodes(pointNode, writeNode);
  renderCategory(choice);
};

const renderPointCard = (number, data) => {
  const template = `
    <div class="point__inner">
    <div class="point__box">
      <div class="point__img">
        <img
          src="./assets/img/card/win-cup.png"
          alt=""
          class="point__image"
        />
      </div>
      <div class="point__status">
        <div class="point__text">Congratulations!</div>
        <div class="point__number">${number} / 10</div>
      </div>
      <div class="point__button">
        <div class="point__home">Home</div>
        <div class="point__next">Next</div>
      </div>
    </div>
    </div>`;

  const pointSelector = document.querySelector(".point");
  renderHTML([pointSelector], [template]);

  const home = document.querySelector(".point__home");
  const next = document.querySelector(".point__next");
  home.addEventListener("click", homePage);
  next.addEventListener("click", () => categoryPage(data.choice));
};

export default renderPointCard;
