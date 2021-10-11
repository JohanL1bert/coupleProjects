const itemScroll = document.querySelectorAll('.gallery__img');

//Нужно зафиксить высоту и анимацию

let firstArray = [itemScroll[0], itemScroll[4], itemScroll[8]];
let secondArray = [itemScroll[1], itemScroll[5], itemScroll[9]];
let preLastArray = [itemScroll[2], itemScroll[6], itemScroll[10]];
let lastArray = [itemScroll[3], itemScroll[7], itemScroll[11]];



const imgAnimation = () => {
    let screenSize = (window.innerHeight);
    let scrollTop = window.scrollY;
    

    let getResult = scrollTop / screenSize;
    if (getResult < 4.35) {
        itemScroll.forEach(el => el.classList.add('scroll-img'))
    }
    if (getResult > 4.5){
        firstArray.forEach(el => el.classList.remove('scroll-img'));
    }
    if (getResult > 5.2) {
        secondArray.forEach(el => el.classList.remove('scroll-img'));
    }
    if (getResult > 5.8) {
        preLastArray.forEach(el => el.classList.remove('scroll-img'))
    }
    if (getResult > 6.0) {
        lastArray.forEach(el => el.classList.remove('scroll-img'));
    }


};

window.addEventListener('scroll', () => {
    imgAnimation();
})

