import timeCallback from './calendar_time/calendar_time.js';
import {greeting} from './greetings/greet.js';
import {getJsonData, quoteBtn} from './quotes/quotes_generator.js';
import {toggleLanguage, languageChoice} from './settings/setting.js';
import {toggleSwitchBg, checkCloseBtn, settingBtn, closeBtn} from './settings/seting_popup.js';
import {getWeather} from './weather_widget/weather.js';
import {toggleSettingLanguage } from './translater/translate.js';
import {checkBtn, radioBtn} from './settings/setting_checkbox.js';
import changeBg from './background_img/bg_image.js';
import {getLinkUnsplash, getLinkFlicker} from './background_img/api_bg.js';
import {myRate }from './rating.js';

myRate();

//Language
let language;
document.addEventListener('DOMContentLoaded', () => {
    let getLanguage = toggleLanguage();
    language = getLanguage;
    toggleSettingLanguage(language);
    getJsonData(language);
})

//Render first Time
window.onload = () => {
    getWeather(language);
}

quoteBtn.addEventListener('click', (event) => {
    getJsonData(language);
});

languageChoice.addEventListener('click', () => {
    let getLanguage = toggleLanguage();
    language = getLanguage;
    //Weather
    getWeather(language);
    //Change language
    quoteBtn.addEventListener('click', (event) => {
        getJsonData(language);
    });
    //rerenederName
    toggleSettingLanguage(language);

    //Render when trigger change
    getJsonData(language);
});


const globalTimeCallback = () => {
    timeCallback(language);
    greeting(language)
}

//TimeChange and day
setInterval(globalTimeCallback, 1000);


// Check Popup
settingBtn.addEventListener('click', toggleSwitchBg);
closeBtn.addEventListener('click', checkCloseBtn);

//Change API 
//
changeBg();
let checkBox = checkBtn();


const checker = () => {
    let result = checkBtn();
    checkBox = result;
}

radioBtn.forEach(el => el.addEventListener('click', checker));

const checkApi = () => {
    if (checkBox == 'Github') {
        changeBg();
    } else if (checkBox == 'Unsplash') {
        getLinkUnsplash();
    } else {
        getLinkFlicker();
    }
}

radioBtn.forEach(el => el.addEventListener('click', checkApi))