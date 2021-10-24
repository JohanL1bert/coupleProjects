import greeting from "../greetings/greet.js";



const body = document.querySelector('body');

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

let globalBackgroundValue;

const filterDay = () => {
    const timeDay = greeting();
    const getReg = timeDay.match(/\w+/gi)[1];
    return getReg;
}

const randomNumber = () => {
    let number = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    globalBackgroundValue = number;
    return number;
}

const changeBg = () => {
    const timeDay = filterDay();
    const number = randomNumber();
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/JohanL1bert/ImageDay/main/images/${timeDay}/${number}.jpg')`;
}

changeBg();


//Рандомный бэкграунд

const getSlideNext = () => {
    console.log(globalBackgroundValue)
    globalBackgroundValue++;
    const getDay = filterDay();
    if (globalBackgroundValue > 20) {
        globalBackgroundValue = 1;
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/JohanL1bert/ImageDay/main/images/${getDay}/${globalBackgroundValue}.jpg')`;
    }

    body.style.backgroundImage = `url('https://raw.githubusercontent.com/JohanL1bert/ImageDay/main/images/${getDay}/${globalBackgroundValue}.jpg')`;
}

const getSlidePrev = () => {
    globalBackgroundValue--;
    const getDay = filterDay();
    if (globalBackgroundValue < 1) {
        globalBackgroundValue = 20;
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/JohanL1bert/ImageDay/main/images/${getDay}/${globalBackgroundValue}.jpg')`;
    }

    body.style.backgroundImage = `url('https://raw.githubusercontent.com/JohanL1bert/ImageDay/main/images/${getDay}/${globalBackgroundValue}.jpg')`;
}


slideNext.addEventListener('click', getSlideNext)

slidePrev.addEventListener('click', getSlidePrev);

