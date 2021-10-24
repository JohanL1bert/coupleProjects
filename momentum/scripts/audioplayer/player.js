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


//Play Range
const imageBorder = document.querySelector('.image-border');
const playRange = document.querySelector('.player-slider');

const playDuration = document.querySelector('.play-duration');

let isPlay = false;
let stateSound = 0;


const playAudio = () => {
    btnPlayState();
    audio.src = playList[stateSound].src;
    audio.play();
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
        stateSound ++;
    }
    toggleBorder();
    changeSrcImg();
    trackDuration();
    //Перерендер
    playAudioBtn();
    
}

const prevMusic = () => {
    if (stateSound <= 0) {
        stateSound = 7;
    } else {
        stateSound --;
    }
    toggleBorder();
    changeSrcImg();
    trackDuration();
    //Перенедр
    playAudioBtn();
    
}


next.addEventListener('click', nextMusic);
prev.addEventListener('click', prevMusic);

//Длительность и ренджи
const showProgressBar = () => {

}

const playMusicRange = (event) => {
    const {duration, currentTime} = event.srcElement;
    changeTimeMusic(currentTime, duration);

}

const changeTimeMusic = (currentTime, duration) => {
    console.log(currentTime)
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);


    playDuration.textContent = `${'0' + minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    //playDuration.textContent = progress;
}

//playMusicRange();
audio.addEventListener('timeupdate', playMusicRange)



const toggleBorder = () => {
    if (imageWrapper.classList.contains('active')){
        imageWrapper.classList.remove('active');
        setTimeout(() => {
            imageWrapper.classList.add('active')
        }, 0.5)
    }
}


audio.addEventListener('ended', next)


/* 
    //Create img
    const setImg = new Image();
    setImg.src = `${playList[stateSound].img}`;
    //set class to img
    setImg.classList.add('image-animation');
    imageWrapper.appendChild(setImg); */