const totalPrice = document.querySelector('.amount__price');

const seniorButton = document.querySelector('.senior__group');
const seniorCount = document.querySelector('.senior__field');

const basicButton = document.querySelector('.basic__group');
const basicCount = document.querySelector('.basic__btn-field');


let numb = 0;
let inputNumberSeniour = 0;
let inputBasicNumber = 0;
let total;
let totalBasic;


const permanentEx = 'permanent exhibition';
const temporaryEx = 'temporary exhibition';
const combinedEx = 'combined Admission';

//FIXME: пофиксить чайлноды

//TODO: Секция кнопки Сеньйор
const plus = seniorButton.childNodes[5];
plus.addEventListener('click', () => {
    total = +totalPrice.textContent;
    total += 10;
    totalPrice.textContent = total;
    ++inputNumberSeniour;
    seniorCount.value = inputNumberSeniour;
})

const minus = seniorButton.childNodes[1];

minus.addEventListener('click', () => {
    if (seniorCount.value <= 0) return;
    total = +totalPrice.textContent;
    total -= 10;
    totalPrice.textContent = total;
    --inputNumberSeniour;
    seniorCount.value = inputNumberSeniour;
})

//TODO: Секция бейзик кнопки

const plusBasic = basicButton.childNodes[5];
plusBasic.addEventListener('click', () => {
    totalBasic = +totalPrice.textContent;
    totalBasic += 20;
    totalPrice.textContent = totalBasic;
    ++inputBasicNumber;
    basicCount.value = inputBasicNumber;
})

const minusBasic = basicButton.childNodes[1];

minusBasic.addEventListener('click', () => {
    if (basicCount.value <= 0) return;
    totalBasic = +totalPrice.textContent;
    totalBasic -= 20;
    totalPrice.textContent = totalBasic;
    --inputBasicNumber;
    basicCount.value = inputBasicNumber;
    
})






const permanent = document.getElementById('permanent');
const temporary = document.getElementById('temporary');
const combined = document.getElementById('combined');

//FIXME: костыль
/* const filterForMinus = (arr) => {
    console.log('arr', arr)
    return arr
}; */

const filterTicketsType = (arr) => {
    let checkedBtn;
    arr.forEach(el => {
        if (el.checked) checkedBtn = el; 
    })
    changeValueGroup(checkedBtn);

}

const changeValueGroup = (element) => {
    let revert;
    if (element.value == 'permanent') {
        revert = (+basicCount.value * 20) + (+seniorCount.value * 10);
        totalPrice.textContent = revert;
    }
    if (element.value == 'temporary') {
        revert = (+basicCount.value * 25) + (+seniorCount.value * 12.5);
        totalPrice.textContent = revert;

    }
    if (element.value == 'combined') {
        revert = (+basicCount.value * 40) + (+seniorCount.value * 20);
        totalPrice.textContent = revert;
    }

}

const getAllType = () => {
    const permanent = document.getElementById('permanent');
    const temporary = document.getElementById('temporary');
    const combined = document.getElementById('combined');
    filterTicketsType([permanent, temporary, combined]);
}

permanent.addEventListener('click', getAllType);
temporary.addEventListener('click', getAllType);
combined.addEventListener('click', getAllType);














/* let seniourNumber = seniorButton.childNodes[3];

const preloadNumber = () => {
    numb += 1;
    seniourNumber.textContent = numb;
    console.log(seniourNumber.textContent)
}



const plus = seniorButton.childNodes[5];
plus.addEventListener('click', () => {
    seniorPlus += 20;

    totalPrice.textContent = seniorPlus;
    preloadNumber();
    seniourMinus = seniorPlus;
})

const minus = seniorButton.childNodes[1];

minus.addEventListener('click', () => {
    if (seniourMinus == 0) return;

    seniourMinus -= 20;
    seniorPlus -= 20;
    totalPrice.textContent = seniourMinus;
    preloadNumber();
}) */
