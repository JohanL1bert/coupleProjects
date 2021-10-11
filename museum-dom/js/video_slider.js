const prevBtn = document.querySelector('.slider__button-left');
const nextBtn = document.querySelector('.slider__button-right');
const sliderDots = document.querySelectorAll('.slider__item');


var sliderVideo = tns({
		container: '.journey__items',
        "items": 3,
        "slideBy": 1,
        "mouseDrag": true,
        "swipeAngle": true,
        "speed": 400,
        "navPosition": 'bottom',
        "controlsPosition": 'bottom',
        "mode": 'carousel',
        "controls": false,
        "nav": false,
	});

const checkSliderAction = () => {
    let result;
     sliderDots.forEach((el, index) => {
         if (el.classList.contains('slider__item-active')){
             result = el
         }
     })

     return result;
}

const addSliderClass = (object, idObject) => {
    const getSliderDots = document.getElementById(`${idObject}`);
    getSliderDots.classList.add('slider__item-active');

}

const minusDota = (i) => {
    addClassToSlider(i);

}

const plusDots = (i) => {
    console.log(i)

    if (i.id == 50) {
        i.id = '10';
        addSliderClass(i, i.id)
    }
    i.id = (+i.id) + 10;

    addSliderClass(i, i.id)

}

const prevVideo = () => {
    sliderVideo.goTo('prev');
}

const nextVideo = () => {
    sliderVideo.goTo('next');
}

prevBtn.addEventListener('click', prevVideo);
nextBtn.addEventListener('click', nextVideo);

const addClassToSlider = (x) => {
    x.classList.add('slider__item-active');

}

const checkSliderActive = () => {
    sliderDots.forEach((el) => {
        if (el.classList.contains('slider__item-active')) el.classList.remove('slider__item-active');
    });
}


sliderDots.forEach(x => x.addEventListener('click', (event) => {
    checkSliderActive();
    if (event.target.id == 10) {
        sliderVideo.goTo('0');
        addClassToSlider(x);
    }
    if (event.target.id == 20) {
        sliderVideo.goTo('1');;
        addClassToSlider(x);
    }
    if (event.target.id == 30) {
        sliderVideo.goTo('2');
        addClassToSlider(x);
    } 
    if (event.target.id == 40) {
        sliderVideo.goTo('3');
        addClassToSlider(x);
    }
    if (event.target.id == 50) {
        sliderVideo.goTo('4');
        addClassToSlider(x);
    }
}));
