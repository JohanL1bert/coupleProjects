const numberItem = document.querySelector(".num__item");
const welcomeWrapper = document.querySelector(".welcome__img-wrapper");
//Текст контент работает

let numberSlide = 1;

const carouselItem = document.querySelectorAll(".carousel__item");
const arrowsLeft = document.querySelector(".arrows__left");
const arrowsRight = document.querySelector(".arrows__right");

//TODO: Slider

const welcomeSlider = tns({
  container: ".welcome__img-wrapper",
  items: 1,
  slideBy: 1,
  mouseDrag: true,
  swipeAngle: true,
  speed: 400,
  controls: false,
  nav: false,
});

const getNumberItem = () => {
  return document.querySelector(".num__item");
};

const changeNumberItem = () => {
  let getNumber = getNumberItem();

  getNumber = +getNumber.textContent.slice(1);
  return getNumber;
};

const prevSlide = () => {
  numberSlide = changeNumberItem();

  if (numberSlide === 1) {
    numberItem.textContent = "05";
    welcomeSlider.goTo("prev");
    removeClassListActive();
    getSliderSpan((numberSlide = 5));
    return;
  }
  if (numberSlide > 1 && numberSlide <= 5) {
    console.log(numberSlide);
    numberSlide -= 1;
    numberItem.textContent = `0${numberSlide}`;
    welcomeSlider.goTo("prev");
    removeClassListActive();
    getSliderSpan(numberSlide);
    return;
  }
};

const nextSlide = () => {
  numberSlide = changeNumberItem();

  if (numberSlide === 5) {
    numberItem.textContent = "01";
    welcomeSlider.goTo("next");
    removeClassListActive();
    getSliderSpan((numberSlide = 1));
    return;
  }

  removeClassListActive();
  getSliderSpan(numberSlide + 1);
  welcomeSlider.goTo("next");
  numberItem.textContent = "0" + `${numberSlide + 1}`;
};

arrowsLeft.addEventListener("click", prevSlide);
arrowsRight.addEventListener("click", nextSlide);

const getSliderSpan = (getSlide) => {
  carouselItem[getSlide - 1].classList.add("active");
};
//slider square
carouselItem.forEach((x) =>
  x.addEventListener("click", (event) => {
    removeClassListActive(x);
    event.target.classList.add("active");
    slideNumb(event);
    numberItem.textContent = "0" + (+event.target.id + 1);
  })
);

const removeClassListActive = (element) => {
  carouselItem.forEach((x, index) => {
    if (x.classList.contains("active")) x.classList.remove("active");
  });
};

const slideNumb = (event) => {
  const { target } = event;
  if (target.id == "0") {
    welcomeSlider.goTo("0");
  }
  if (target.id == "1") {
    welcomeSlider.goTo("1");
  }
  if (target.id == "2") {
    welcomeSlider.goTo("2");
  }
  if (target.id == "3") {
    welcomeSlider.goTo("3");
  }
  if (target.id == "4") {
    welcomeSlider.goTo("4");
  }
};
