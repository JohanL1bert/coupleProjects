export const radioBtn = document.querySelectorAll('.radio-button');


const checkArray = {
    0: 'Github',
    1: 'Flick',
    2: 'Unsplash'
}


export const checkBtn = () => {
    let check;
    radioBtn.forEach((el, index) => {
        if (el.checked) {
            check = checkArray[index];
        }
    })
    return check;
}


