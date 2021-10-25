export const settingBtn = document.querySelector('.settings-border');
const modalWindow = document.querySelector('.popup-body');
const border = document.querySelector('.image-border');
const soundBtn = document.querySelector('.play-sound');
const playBtn = document.querySelector('.player-settings');
const imgBord = document.querySelector('.image-animation');

export const closeBtn = document.querySelector('.close');

export const toggleSwitchBg = () => {
    modalWindow.classList.toggle('popup-active');
    imgBord.classList.toggle('active');
    imgBord.classList.toggle('second');
    border.classList.toggle('active');
    soundBtn.classList.toggle('active');
    playBtn.classList.toggle('active');
}

export const checkCloseBtn = () => {
    if (modalWindow.classList.contains('popup-active')) {
        imgBord.classList.remove('active');
        imgBord.classList.remove('second');
        modalWindow.classList.remove('popup-active');
        border.classList.remove('active');
        soundBtn.classList.remove('active');
        playBtn.classList.remove('active');
    }
}


