const greetContainer = document.querySelector(".greeting-container");
const greetingSelector = greetContainer.querySelector(".greeting");
const inputName = greetContainer.querySelector(".name");

const dateObj = () => {
  return new Date();
};

export const filter = () => {
  const getDate = dateObj();
  const time = getDate.getHours() + "." + getDate.getMinutes();

  if (time >= 6.0 && time <= 11.59) {
    return "Good morning";
  } else if (time >= 12.0 && time <= 17.59) {
    return "Good afternoon";
  } else if (time >= 18.0 && time <= 23.59) {
    return "Good evening";
  } else if (time >= 0.0 && time <= 5.59) {
    return "Good night";
  }
};

const filterRus = () => {
  const getDate = dateObj();
  const time = getDate.getHours() + "." + getDate.getMinutes();

  if (time >= 6.0 && time <= 11.59) {
    return "Доброе утро";
  } else if (time >= 12.0 && time <= 17.59) {
    return "Добрый день";
  } else if (time >= 18.0 && time <= 23.59) {
    return "Добрый вечер";
  } else if (time >= 0.0 && time <= 5.59) {
    return "Спокойной ночи";
  }
};

export const greeting = (lang) => {
  let getGreeting;
  if (lang == "en") {
    getGreeting = filter();
  } else {
    getGreeting = filterRus();
  }

  greetingSelector.innerHTML = getGreeting;
  return getGreeting;
};

const setLocalStorage = () => {
  const name = inputName.value;
  localStorage.setItem("name", `${name}`);
};

const getLocalStorage = () => {
  if (localStorage.getItem("name")) {
    const getName = localStorage.getItem("name");
    inputName.value = `${getName}`;
  }
};

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
