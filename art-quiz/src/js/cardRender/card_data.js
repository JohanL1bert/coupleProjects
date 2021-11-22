import renderHTML from "../renderDelete/renderPage";

const templateHTML = () => `<div class="grand__inner">
  <div class="grand__box">
    <div class="grand__start">
      <img
        src="./assets/img/card/stars.png"
        alt=""
        class="grand__img"
      />
    </div>
    <div class="grand__text">
      Grand <br />
      result
    </div>
    <div class="grand__congratulations">Congratulations</div>
    <div class="grand__button">Next</div>
  </div>
  </div>`;

const renderGrand = () => {
  const selector = document.querySelector(".grand");
  const html = templateHTML();
  renderHTML([selector], [html]);
};

export default renderGrand;
