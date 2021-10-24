import timeCallback from './calendar_time/calendar_time.js';
import {greeting} from './greetings/greet.js';
import {getJsonData, quoteBtn} from './quotes/quotes_generator.js';
import {toggleLanguage, languageChoice} from './settings/setting.js';
import {toggleSwitchBg, checkCloseBtn, settingBtn, closeBtn} from './settings/seting_popup.js';
import {getWeather} from './weather_widget/weather.js';
import {toggleSettingLanguage } from './translater/translate.js';


//Language
let language;
document.addEventListener('DOMContentLoaded', () => {
    let getLanguage = toggleLanguage();
    language = getLanguage;
    toggleSettingLanguage(language);
    getJsonData(language);
})

//Отрисовувем первоначальный ренден
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

    //Когда меняется триггер нужно перерендировать без кнопки
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

