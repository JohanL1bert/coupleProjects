const dataHTML = {
  mainPage: ` 
  <div class="container">
    <div class="art__wrapper">
      <div class="art__name">
      <div class="art__box">
        Art Quiz
        </div>
      </div>
      <div class="art__quiz">
        <div class="artist__quiz">
          <div class="artist__button">
            <div class="artist__text">Artist quiz</div>
          </div>
        </div>
        <div class="picture__quiz">
          <div class="picture__button">
            <div class="picture__text">Pictures quiz</div>
          </div>
        </div>
      </div>
    </div>
    </div>`,

  footer: `<div class="footer__wrapper">
        <div class="footer__logo"></div>
        <div class="footer__product">Johan Liebert</div>
        <div class="footer__github">2021</div>
        </div>`,

  settings: `    <div class="container">
  <div class="setting__wrapper">
    <div class="setting__header">
      <div class="setting__inner">
        <div class="setting__arrow">
          <img
            src="./assets/img/settings/Vector.png"
            alt="get back to main page"
            class="arrow"
          />
        </div>
        <div class="setting__text">Setting</div>
      </div>
      <div class="button__close">
        <img
          src="./assets/img/settings/closeButton.png"
          alt="button close setting"
          class="close"
        />
      </div>
    </div>
    <div class="setting__volume">
      <div class="volume__inner">
        <div class="volume__text">Volume</div>
        <div class="volume__line">
          <input type="range" id="volume" name="vol" min="0" max="10" />
        </div>
        <div class="volume__sound">
          <div class="volume__off">
            <img
              src="./assets/img/settings/soundOf.png"
              alt="icon volume off"
              class="volume__bottom"
            />
          </div>
          <div class="volume__on">
            <img
              src="./assets/img/settings/soundOn.png"
              alt="icon volume on"
              class="volume__up"
            />
          </div>
        </div>
      </div>
      <div class="time__inner">
        <div class="time__game">
          Time game
          <div class="time__state">On</div>
          <input type="checkbox" id="switch" />
          <label for="switch" class="switch__time"></label>
        </div>
        <div class="time__answer">
          <div class="answer">Time to answer</div>
          <div class="time__bottom">
            <div class="time__minus">-</div>
            <div class="time__text">20</div>
            <div class="time__plus">+</div>
          </div>
        </div>
      </div>
      <div class="setting__selection">
        <div class="save__inner">
          <div class="default__button">
            <div class="default__save">Default</div>
          </div>
          <div class="setting__button">
            <div class="setting__save">Save</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  categories: `   
  <div class="container">
  <div class="categories__inner">
    <div class="categories__footer">
      <div class="categories__text">
        <div class="categories__heading">Art Quiz</div>
        <div class="categories__name">Home</div>
      </div>
      <div class="categories__setting">
        <img
        class="setting__img"
        src="./assets/img/header/carbon_settings.png"
        alt="setting button"
      />
      </div>
    </div>
    <div class="illustration__category">
    </div
    </div>
  </div>`,
  header: `
  <div class="container">
  <div class="header__wrapper">
    <div class="header__setings">
      <img
        class="setting__img"
        src="./assets/img/header/carbon_settings.png"
        alt="setting button"
      />
    </div>
  </div>
  </div>`,
  questionPage: `        <div class="container">
  <div class="picture__inner">
    <div class="picture__timer">
      <div class="picture__time">20</div>
    </div>
  <div class="picture__box">
    <div class="picture__quest">
      <p class="picture__text">Кто автор данной картини</p>
    </div>
    <img src="./assets/img/0full.jpg" alt="" class="picture" />
  </div>
  <div class="picture__authors">
  </div>
</div>`,
  authorPage: `
  <div class="authors__inner">
    <div class="author">template</div>
  </div>`,
  writer: `        <div class="container">
  <div class="writer__inner">
    <div class="writer__timer">
      <div class="writer__time">20</div>
    </div>
    <div class="writer__text">
      <div class="writer__question">SomeQuestion</div>
    </div>
    <div class="writer__box">
  </div>
    </div>
  `,
};

export default dataHTML;
