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

const getDate = () => {
    const date = dateObj();

    const options = { weekday: 'long', month: 'long', day: 'numeric'}
    const fullDate = date.toLocaleString('en', options);
    dateClass.innerHTML = fullDate;
}

const timeCallback = () => {
    getTime();
    getDate();
}

export default timeCallback;

