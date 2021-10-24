export const settingBtn = document.querySelector('.settings-border');
const modalWindow = document.querySelector('.popup-body');

export const closeBtn = document.querySelector('.close');

export const toggleSwitchBg = () => {
    modalWindow.classList.toggle('popup-active');
}

export const checkCloseBtn = () => {
    if (modalWindow.classList.contains('popup-active')) {
        modalWindow.classList.remove('popup-active');
    }
}


