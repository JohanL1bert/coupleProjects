const weatherSection = document.querySelector('.weather');

const weatherIcon = weatherSection.querySelector('.weather-icon');
const errorInput = weatherSection.querySelector('.weather-error');
const wind = weatherSection.querySelector('.wind');
const humidity = weatherSection.querySelector('.humidity');
const temp = weatherSection.querySelector('.temperature');
const weatherDesc = weatherSection.querySelector('.weather-description');
const city = weatherSection.querySelector('.city');


const setLocalStorage = () => {
    if (city.value == '') {
        city.value = 'Minsk';
    }
    localStorage.setItem('city', `${city.value}`)
}

const getLocalStorage = () => {
    if(localStorage.getItem('city')) {
        const getName = localStorage.getItem('city');
        city.value = `${getName}`;
    }
}


export const getWeather = async(lang) => {
    lang = lang;
    const cityVal = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Minsk'}&lang=${lang}&appid=3dcea47eb95f064189c725e938950c79&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    descriptionWeather(data, lang);
}

//setTimeout(getWeather, 1000);

const descriptionWeather = (data, lang) => {  
    console.log(data)
    if (lang == 'en') {
        city.value = data.name;
        weatherDesc.textContent = `${data.weather[0].description}`;
        wind.textContent = `Wind speed: ${data.wind.speed} m/s`
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } else {
        city.value = data.name;
        weatherDesc.textContent = `${data.weather[0].description}`;
        wind.textContent = `Скорость ветра: ${data.wind.speed} m/s`
        humidity.textContent = `Влажность: ${data.main.humidity}%`;
    }
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temp.textContent = `${Math.floor(data.main.temp)}°C`
}


window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);