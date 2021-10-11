const numberItem = document.querySelector('.num__item');
const welcomeWrapper = document.querySelector('.welcome__img-wrapper');
//Текст контент работает


// 06 = 01   00 = 05
let numberSlide;

const carouselItem = document.querySelectorAll('.carousel__item');
const arrowsLeft = document.querySelector('.arrows__left');
const arrowsRight = document.querySelector('.arrows__right');


//TODO: Slider


var welcomeSlider = tns({
    container: '.welcome__img-wrapper',
    "items": 1,
    "slideBy": 1,
    "mouseDrag": true,
    "swipeAngle": true,
    "speed": 400,
    "controls": false,
    "nav": false,
});



const getNumberItem = () => {
    return document.querySelector('.num__item');
}

const changeNumberItem = () => {
    let getNumber = getNumberItem();

    getNumber = +getNumber.textContent.slice(1);
    return getNumber;
};

//FIXME: Пролетает между 4 и 1
const prevSlide = () => {
    numberSlide = changeNumberItem();
    numberSlide = numberSlide - 1;
    if (numberSlide == 0) {
        //console.log('numberSlide', `${numberSlide}`)
        numberItem.textContent = '05';
        welcomeSlider.goTo('prev');
        removeClassListActive();
        getSliderSpan(numberSlide = 4);
        return;
    }


    removeClassListActive();
    getSliderSpan(numberSlide - 1);
    welcomeSlider.goTo('prev');
    numberItem.textContent = '0' + `${numberSlide - 1}`;
}

const nextSlide = () => {
    //console.log(welcomeSlider.getInfo());
    numberSlide = changeNumberItem();

    if (numberSlide == 5) {
        numberItem.textContent = '01';
        welcomeSlider.goTo('next');
        removeClassListActive();
        getSliderSpan(numberSlide  = 0);
        return;
    }

    removeClassListActive();
    getSliderSpan(numberSlide);
    welcomeSlider.goTo('next');
    numberItem.textContent = '0' + `${numberSlide + 1}`
    
}

arrowsLeft.addEventListener('click', prevSlide);
arrowsRight.addEventListener('click', nextSlide);

const getSliderSpan = (getSlide) => {
    carouselItem[getSlide].classList.add('active');
}
//slider square
carouselItem.forEach(x => x.addEventListener('click', (event) => {
    removeClassListActive(x);
    event.target.classList.add('active');
    slideNumb(event);
    numberItem.textContent = '0' + (+event.target.id + 1);
}))


const removeClassListActive = (element) => {
    carouselItem.forEach((x, index) => {
        if (x.classList.contains('active')) x.classList.remove('active')
    })
}

const slideNumb = (e) => {
    if (e.target.id == '0') {
        welcomeSlider.goTo('0'); 
    }
    if (e.target.id == '1') {
        welcomeSlider.goTo('1');
    }
    if (e.target.id == '2') {
        welcomeSlider.goTo('2');
    }
    if (e.target.id == '3') {
        welcomeSlider.goTo('3');
    }
    if (e.target.id == '4') {
        welcomeSlider.goTo('4');
    }
}




