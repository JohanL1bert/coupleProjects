const smoothScroll = () => {
    const links = document.querySelectorAll('a.header__link, a.footer__link');

    links.forEach(element => element.addEventListener('click', e => {
        e.preventDefault()
        const id = element.getAttribute('href');
        console.log(id)
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
    }))
}

    
smoothScroll();

console.log(`
1. Верстка валидная +10
2. Верстка семантическая +23. Button не хватает.
✔ header (1)
✔ main (1)
✔ footer (1)
✔ section (7)
✔ h1 (1)
✔ h2 (7)
✔ h3 (7)
✔ nav (2)
✔ ul (3)
✔ ul > li > a (17)
✘ button (expected - 13, actual - 5)
✔ input[type="radio"] (3)
✔ input[type="number"] (2)
✔ input[type="range"] (2)
✔ All images have "alt" attribute

3. Футер вроде в пределах нормы +5
Велком едет +0
Visiting есть небольшие отклонения. В пределах 10px +5
Explore вроде всё хорошо +5
Видео поехало +0
Галерея местами едет +2
Тикетс картинка и заголовок норм. Радио кнопки и эмаунт поехали +2
Контакст вроде норм +5
Футер уехал отдыхать +0
Итог 24

4. Формы покупки билетов нет +0
5. Всё есть, с опаской разве что контент едет при маленьком экране +18
6. Плавная прокрутка по якорям +5
Параллакс +5
Клики по кнопке открывают панораму гугл +5
Итог +15
7. +0

Итогово баллов: 
90

`)