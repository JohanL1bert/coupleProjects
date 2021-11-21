const renderCard = ({ author, name, imageNum, year }, status) => {
  let statusBtn;
  if (status === true) {
    statusBtn = "../../assets/img/card/win-button.png";
  } else {
    statusBtn = "../../assets/img/card/loose-button.png";
  }
  const template = `
    <div class="ticket__inner">
    <div class="ticket__box">
      <div class="ticket__img">
        <img
          src="https://raw.githubusercontent.com/JohanL1bert/art-picture/main/img/${imageNum}.jpg"
          alt=""
          class="ticket__image"
        />
        <div class="winner__status">
          <img
            src="${statusBtn}"
            alt=""
            class="winner__button"
          />
        </div>
      </div>
      <div class="picture__name">${author}</div>
      <div class="picture__creature">${name}, ${year}</div>
      <div class="picture__btn">Next</div>
    </div>
  </div>`;

  return template;
};

export default renderCard;
