import renderHTML from "../renderDelete/render-page";
import renderCategory from "../category";
import deleteNodes from "../renderDelete/delete-page";
/* import mainPageWork from "../main"; */

const homePage = (choice) => {
  const pointNode = document.querySelector(".point__inner");
  if (choice == "author") {
    const pictureNode = document.querySelector(".picture__question > div");
    deleteNodes(pointNode, pictureNode);
    window.location.reload();
  } else {
    const writeNode = document.querySelector(".writer > div");
    deleteNodes(pointNode, writeNode);
    window.location.reload();
  }

  window.location.reload();
};

const categoryPage = (choice) => {
  const pointNode = document.querySelector(".point__inner");
  if (choice == "author") {
    const pictureNode = document.querySelector(".picture__question > div");
    deleteNodes(pointNode, pictureNode);
    renderCategory(choice);
  } else {
    const writeNode = document.querySelector(".writer > div");
    deleteNodes(pointNode, writeNode);
    renderCategory(choice);
  }
};

const renderPointCard = (number, data) => {
  const { choice } = data;
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
  home.addEventListener("click", () => homePage(choice));
  next.addEventListener("click", () => categoryPage(choice));
};

export default renderPointCard;
