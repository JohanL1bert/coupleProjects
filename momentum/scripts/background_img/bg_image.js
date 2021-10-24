import {filter} from '../greetings/greet.js';


const body = document.querySelector('body');

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

let globalBackgroundValue;


const filterDay = () => {
    const timeDay =  filter();
    console.log(timeDay)
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
    createBg(timeDay, number);
}


const createBg = (timeDay, number) => {
    const img = new Image();
    img.src = `url('https://raw.githubusercontent.com/JohanL1bert/ImageDay/main/images/${timeDay}/${number}.jpg')`;
    img.onLoad = () => {
        body.style.backgroundImage = img.src.slice(22,);
    }
    img.onLoad();
}

changeBg();

//Рандомный бэкграунд

const getSlideNext = () => {
    globalBackgroundValue++;
    const getDay = filterDay();
    console.log(getDay)
    if (globalBackgroundValue > 20) {
        globalBackgroundValue = 1;
        createBg(getDay, globalBackgroundValue);
    }

    createBg(getDay, globalBackgroundValue);
}

const getSlidePrev = () => {
    globalBackgroundValue--;
    const getDay = filterDay();
    if (globalBackgroundValue < 1) {
        globalBackgroundValue = 20;
        createBg(getDay, globalBackgroundValue);
    }

    createBg(getDay, globalBackgroundValue);
}


slideNext.addEventListener('click', getSlideNext)

slidePrev.addEventListener('click', getSlidePrev);

