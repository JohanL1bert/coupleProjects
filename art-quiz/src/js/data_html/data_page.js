const dataHTML = {
  mainPage: ` 
    <div class="art__wrapper">
      <div class="art__name">
      <div class="art__box">
      
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
    </div>`,

  footer: `<div class="footer__wrapper">
        <div class="footer__logo"></div>
        <div class="footer__product">Johan Liebert</div>
        <div class="footer__github">2021</div>
        </div>`,

  settings: `        <div class="setting__wrapper">
  <div class="settiing__header">
    <div class="setting__inner">
      <div class="setting__arrow"></div>
      <div class="setting__text"></div>
    </div>
    <div class="button__close"></div>
  </div>
  <div class="setting__volume">
    <div class="volume__inner">
      <div class="volume__text">Volume</div>
      <div class="volume__line"></div>
      <div class="volume__sound">
        <div class="volume__off"></div>
        <div class="volume__on"></div>
      </div>
    </div>
    <div class="time__inner">
      <div class="time__game">
        <div class="time__state"></div>
        <label for="switch" class="switch__time"></label>
        <input type="checkbox" role="switch" id="switch" />
      </div>
      <div class="time__answer">
        <div button="time__minus"></div>
        <div class="time__text"></div>
        <div button="time__plus"></div>
      </div>
    </div>
    <div class="setting__selection">
      <div class="save__inner">
        <div class="save__setting"></div>
        <div class="save__default"></div>
      </div>
    </div>`,
};

export default dataHTML;
