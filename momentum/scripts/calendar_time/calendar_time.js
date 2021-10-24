const timeClass = document.querySelector('.time');
const dateClass = document.querySelector('.date');

const dateObj = () => {
    return new Date();
}

const getTime = () => {
    const time = dateObj();
    const timeNow = time.toLocaleTimeString();
    timeClass.innerHTML = timeNow;
}

const getDate = (lang) => {
    const date = dateObj();

    const options = { weekday: 'long', month: 'long', day: 'numeric'}
    const fullDate = date.toLocaleString(`${lang}`, options);
    dateClass.innerHTML = fullDate;
}

const timeCallback = (lang) => {
    getTime();
    getDate(lang);
}

export default timeCallback;

