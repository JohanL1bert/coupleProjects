const playerVideo = document.querySelector('.journey__wrapper');
const videoMain = playerVideo.querySelector('.journey__video-main');
const playButton = playerVideo.querySelector('.journey__arrow');

const videoRange = playerVideo.querySelector('.img__line-video');
const miniPlayButton = playerVideo.querySelector('.img__arrow');
const soundRange = playerVideo.querySelector('.img__btn-line');
const soundButton = playerVideo.querySelector('.img__btn-sound');
const fullScreenButton = playerVideo.querySelector('.img__exit');
const getThumb = document.getElementById('track');


//FIXME: Пока не нужна эта секция
//const sectionVideo = document.querySelector('.video');

const docElement = document.documentElement;

const togglePlay = () => {
    if (videoMain.paused) {
        videoMain.play();
        removeButton();
    } else {
        videoMain.pause();
        removeButton();
    }
}

const removeButton = () => {
    if (playButton.className == 'journey__arrow') {
        playButton.classList.add('journey__arrow-active');
    } else {
        playButton.classList.remove('journey__arrow-active');
    }
}



const videoButtonUpdate = () => {
    if (miniPlayButton.getAttribute('src') == './assets/img/journey/arrow__group.png') {
        miniPlayButton.setAttribute('src', './assets/img/journey/pause-button.png');
    } else {
        miniPlayButton.setAttribute('src', './assets/img/journey/arrow__group.png');
    }
}

const activeFullScreen = () => {
    if (videoMain.classList.contains('journey__video-main-active')) {
        videoMain.classList.remove('journey__video-main-active');
    } else {
        videoMain.classList.add('journey__video-main-active');
    }
}

const toggleFullScreenButton = () => {
    if (document.fullscreenElement === null) {
        playerVideo.requestFullscreen();
        activeFullScreen();
    } else {
        document.exitFullscreen();
        activeFullScreen();
    }

}


fullScreenButton.addEventListener('click', toggleFullScreenButton);

//FIXME: работать только в секции видео
document.addEventListener('keydown', event => {
    if (event.code == 'KeyF') {
        toggleFullScreenButton();
    }
})

document.addEventListener('keydown', event => {
    if(event.code == 'Space') {
        togglePlay();
    }
} )




//TODO: доработать
//Video Range
const updateVideoRange = () => {
    videoRange['videoRange.name'] = videoRange.value;
}

const updateVideoProgress = (event) => {
    const subscribe = (event.offsetX / videoRange.offsetWidth) * videoMain.duration;
    console.log(subscribe);
    videoMain.currentTime = subscribe;

}

const videoRangeLine = () => {
    const percent = videoMain.currentTime / videoMain.duration;
    videoRange.style.background = `linear-gradient(to right, #ff0000 0%, #eb0303 ${percent * 100}%, #fff ${percent * 100}%, #fff 100%)`;
}


//videoRange.addEventListener('change', updateVideoRange);
videoRange.addEventListener('mousemove', updateVideoRange);

//Sound Range

const updateSoundRange = () => {
    
}


videoMain.addEventListener('play', videoButtonUpdate);
videoMain.addEventListener('pause', videoButtonUpdate);
miniPlayButton.addEventListener('play', videoButtonUpdate);
miniPlayButton.addEventListener('pause', videoButtonUpdate);
miniPlayButton.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
videoMain.addEventListener('click', togglePlay);
videoMain.addEventListener('timeupdate', videoRangeLine);
videoRange.addEventListener('click', updateVideoProgress);
