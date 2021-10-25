import playList from "./audio_list.js";
//Player btn
const playerControls = document.querySelector('.player-controls');
const next = playerControls.querySelector('.play-next');
const playPause = playerControls.querySelector('.play');
const prev = playerControls.querySelector('.play-prev');

const playListSelector = document.querySelector('.play-list');

//PlayerDuration
const playerSettings = document.querySelector('.play-time');

//Image animation
const imageWrapper = document.querySelector('.image-animation');
const audio = new Audio();
audio.volume = 0.2;

//Play Range
const imageBorder = document.querySelector('.image-border');
const playRange = document.querySelector('.player-slider');

const playDuration = document.querySelector('.play-duration');

//Sound duraion
const soundDuration = document.querySelector('.slider-sound');

let isPlay = false;
let stateSound = 0;

//Памахити
const activeStateList = () => {
    rerenderActiveList();
    playListSelector.childNodes[stateSound].classList.add('item-active');

}

const rerenderActiveList = () => {
    playListSelector.childNodes.forEach(el => el.classList.remove('item-active'));
}

audio.src = playList[stateSound].src;
const playAudio = () => {
    btnPlayState();
    audio.play();
    activeStateList();
    isPlay = true;
}

const pauseAudio = () => {
    btnPlayState();
    audio.pause();
    isPlay = false;
}

const playAudioBtn = () => {
    if (!playPause.classList.contains('pause')) {
        playPause.classList.add('pause')
        isPlay = true;
    }
    audio.src = playList[stateSound].src;
    audio.play();
}

const btnPlayState = () => {
    playPause.classList.toggle('pause');

}

const statePlay = () => {
    isPlay == false ? playAudio() : pauseAudio();
}

//TODO: Создаем список
const createElement = () => {
    playList.forEach((el) => {
        const li = document.createElement('li');
        li.classList.add('play-item')
        li.textContent = el.title;
        playListSelector.appendChild(li);
    })
}

createElement()
//TODO: создаем спаны и длителньость

const changeSrcImg = () => {
    imageWrapper.src = playList[stateSound].img;
}

const trackDuration = () => {
    changeSrcImg();
    //create duration
    const trackDuration = playerSettings.querySelector('.play-duration-change');
    trackDuration.textContent = playList[stateSound].duration;

    //add active class
}

trackDuration();

playPause.addEventListener('click', statePlay);

const nextMusic = () => {
    if (stateSound == 7) {
        stateSound = 0;
    } else {
        stateSound++;
    }
    toggleBorder();
    changeSrcImg();
    trackDuration();
    activeStateList();
    //Перерендер
    playAudioBtn();

}

const prevMusic = () => {
    if (stateSound <= 0) {
        stateSound = 7;
    } else {
        stateSound--;
    }
    toggleBorder();
    changeSrcImg();
    trackDuration();
    activeStateList();
    //Перенедр
    playAudioBtn();

}


next.addEventListener('click', nextMusic);
prev.addEventListener('click', prevMusic);

//Длительность и ренджи
const playMusicRange = (event) => {
    const { currentTime, duration } = event.srcElement;
    changeTimeMusic(currentTime, duration);
    updateProgressBar(currentTime, duration);

}

const updateProgressBar = (currentTime, duration) => {
    let val = Math.floor((100 / duration) * currentTime);
    playRange.value = val;

}

const changeTimeMusic = (currentTime, duration) => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);

    playDuration.textContent = `${'0' + minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    //playDuration.textContent = progress;
}


audio.addEventListener('timeupdate', playMusicRange)



const toggleBorder = () => {
    if (imageWrapper.classList.contains('active')) {
        imageWrapper.classList.remove('active');
        setTimeout(() => {
            imageWrapper.classList.add('active')
        }, 0.5)
    }
}


audio.addEventListener('ended', nextMusic);


//sound Change

const soundChange = (event) => {
    let music = event.target.value / 100;
    audio.volume = music;
}

const rangeSound = () => {
    let result = Math.floor((playRange.value * audio.duration) / 100);
    audio.currentTime = result;
}

soundDuration.addEventListener('change', soundChange);
playRange.addEventListener('change', rangeSound);
