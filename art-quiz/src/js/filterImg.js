const filterImg = (name) => {
  switch (name) {
    case "Portrait":
      return {
        name: "Portrait",
        array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        choice: 0,
        author: [
          "Павел Федотов",
          "Эдгар Дега",
          "Веронезе",
          "Илья Репин",
          "Константин Маковский",
          "Василий Перов",
          "Микеланджело",
          "Пьер Огюст Ренуар",
          "Ян Вермеер",
          "Василий Поленов",
        ],
      };
    case "Landscape":
      return {
        name: "Landscape",
        array: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        choice: 10,
        author: [
          "Фёдор Васильев",
          "Илья Репин",
          "Веронезе",
          "Виктор Васнецов",
          "Клод Лоррен",
          "Илья Репин",
          "Жан Фрагонар",
          "Архип Куинджи",
          "Пабло Пикассо",
          "Поль Гоген",
        ],
      };
    case "Still Life":
      return {
        name: "Still Life",
        array: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        choice: 20,
        author: [
          "Бартоломео Мурильо",
          "Питер Брейгель",
          "Ян ван Эйк",
          "Питер Брейгель",
          "Константин Маковский",
          "Рембрандт",
          "Рафаэль",
          "Василий Суриков",
          "Иван Шишкин",
          "Василий Суриков",
        ],
      };
    case "Graphic":
      return {
        name: "Graphic",
        array: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        choice: 30,
        author: [
          "Владимир Боровиковский",
          "Рене Магритт",
          "Веласкес",
          "Иван Богданов",
          "Рембрандт",
          "Джон Уильям Уотерхаус",
          "Пьер Огюст Ренуар",
          "Бартоломео Мурильо",
          "Василий Перов",
          "Николай Богданов-Бельский",
        ],
      };
    case "Antique":
      return {
        name: "Antique",
        array: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        choice: 40,
        author: [
          "Виктор Васнецов",
          "Анри Матисс",
          "Эдвард Мунк",
          "Марк Шагал",
          "Василий Перов",
          "Иероним Босх",
          "Карл Лемох",
          "Жан Фрагонар",
          "Франсуа Буше",
          "Иван Шишкин",
        ],
      };
    case "Avant-Garde":
      return {
        name: "Avant-Garde",
        array: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
        choice: 50,
        author: [
          "Густав Климт",
          "Виктор Васнецов",
          "Вильгельм фон Каульбах",
          "Веронезе",
          "Андрей Рублев",
          "Василий Суриков",
          "Тициан",
          "Веласкес",
          "Эдуард Мане",
          "Сальвадор Дали",
        ],
      };
    case "Renaissance":
      return {
        name: "Renaissance",
        array: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
        choice: 60,
        author: [
          "Пьер Огюст Ренуар",
          "Александр Маковский",
          "Веласкес",
          "Антонис ван Дейк",
          "Пабло Пикассо",
          "Джованни Беллини",
          "Леонардо да Винчи",
          "Веласкес",
          "Бартоломео Мурильо",
          "Теодор Жерико",
        ],
      };
    case "Surrealism":
      return {
        name: "Surrealism",
        array: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
        choice: 70,
        author: [
          "Иван Шишкин",
          "Жан Этьен Лиотар",
          "Рембрандт",
          "Илья Репин",
          "Алексей Венецианов",
          "Иван Богданов",
          "Анри де Тулуз-Лотрек",
          "Тициан",
          "Веласкес",
          "Тициан",
        ],
      };
    case "Kitsch":
      return {
        name: "Kitsch",
        array: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
        choice: 80,
        author: [
          "Карл Брюллов",
          "Василий Верещагин",
          "Леонардо да Винчи",
          "Алексей Саврасов",
          "Тициан",
          "Жан Батист Грёз",
          "Пабло Пикассо",
          "Илья Репин",
          "Михаил Нестеров",
          "Рафаэль",
        ],
      };
    case "Minimalist":
      return {
        name: "Minimalist",
        array: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
        choice: 90,
        author: [
          "Василий тропинин",
          "Караваджо",
          "Василий Перов",
          "Леонардо да Винчи",
          "Жан Батист Грёз",
          "Адольф Вильям Бугро",
          "Кузьма Петров-Водкин",
          "Густав Климт",
          "Иван Шишкин",
          "Жан-Леон Жером",
        ],
      };
    case "Avangard":
      return {
        name: "Avangard",
        array: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
        choice: 100,
        author: [
          "Василий Суриков",
          "Исаак Левитан",
          "Гейнсборо",
          "Алексей Венецианов",
          "Тициан",
          "Василий Кандинский",
          "Василий Поленов",
          "Луи Лагрене",
          "Сальвадор Дали",
          "Ян Вермеер",
        ],
      };
    default:
      return {
        name: "Industrial",
        array: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119],
        choice: 110,
        author: [
          "Анри Руссо",
          "Василий Поленов",
          "Эдвард Мунк",
          "Карл Брюллов",
          "Илья Репин",
          "Ян Вермеер",
          "Иван Айвазовский",
          "Винсент ван Гог",
          "Валентин Серов",
          "Караваджо",
        ],
      };
  }
};

export default filterImg;
