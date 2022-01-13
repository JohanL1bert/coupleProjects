const wrapperSlider = document.querySelector(".img__explore-wrapper");
const beforeImg = document.querySelector(".explore__before");
const afterImg = document.querySelector(".explore__after");
const slider = document.querySelector(".explore__slider");

let isActive = false;

//через z-index как-то сделать
const activePosition = (x) => {
  let position = Math.max(0, Math.min(x, wrapperSlider.offsetWidth));
  //Ширина для дива
  beforeImg.style.width = `${position}px`;
  slider.style.left = `${position - 20}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

wrapperSlider.addEventListener("mouseup", (event) => {
  isActive = false;
});

wrapperSlider.addEventListener("mousedown", (event) => {
  isActive = true;
});

wrapperSlider.addEventListener("mouseleave", () => {
  isActive = false;
});

document.addEventListener("DOMContentLoaded", (event) => {
  let defaultSize = 443.5;
  activePosition(defaultSize);
});

wrapperSlider.addEventListener("mousemove", (event) => {
  if (!isActive) return;

  let x = event.pageX;

  x -= wrapperSlider.getBoundingClientRect().left;
  activePosition(x);
  pauseEvents(event);
});
