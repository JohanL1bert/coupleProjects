import { JSONData, SettingObject, ValueObject } from './inteface/templayTypes';
import { ToysPage } from './toysPage';

class SwitchValue {
    constructor() {}

    public filterSwitchCase(data: string) {
        switch (data) {
            case 'ball':
                return ['isFormBall', 'ball'];
            case 'bell':
                return ['isFormBell', 'bell'];
            case 'cone':
                return ['isFormCone', 'cone'];
            case 'snowFlakes':
                return ['isFormSnowFlake', 'snowFlakes'];
            case 'toy':
                return ['isFormToy', 'toy'];
            case 'white':
                return ['isColorWhite', 'white'];
            case 'yellow':
                return ['isColorYellow', 'yellow'];
            case 'red':
                return ['isColorRed', 'red'];
            case 'blue':
                return ['isColorBlue', 'blue'];
            case 'green':
                return ['isColorGreen', 'green'];
            case 'big':
                return ['isSizeBig', 'big'];
            case 'medium':
                return ['isSizeMedium', 'medium'];
            default:
                return ['isSizeSmall', 'small;'];
        }
    }

    public getFilteredData(data: any) {
        const valueOject: any = {
            isFormBall: 'шар',
            isFormBell: 'колокольчик',
            isFormCone: 'шишка',
            isFormSnowFlake: 'снежинка',
            isFormToy: 'фигурка',
            isColorWhite: 'белый',
            isColorYellow: 'желтый',
            isColorRed: 'красный',
            isColorBlue: 'синий',
            isColorGreen: 'зелёный',
            isSizeBig: 'большой',
            isSizeMedium: 'средний',
            isSizeSmall: 'малый',
        };

        const arrayValue: any = [];

        data.map((el: any) => {
            if (el in valueOject) {
                arrayValue.push(valueOject[el]);
            }
        });

        return arrayValue;
    }

    public returnData(data: any) {
        if (data.length > 0) {
            return data;
        } else {
            const arrayData = [
                'шар',
                'колокольчик',
                'шишка',
                'снежинка',
                'фигурка',
                'белый',
                'жетый',
                'красный',
                'синий',
                'зелёный',
                'большой',
                'средний',
                'малый',
            ];
            return arrayData;
        }
    }

    public filterSelectOption(data: any) {
        if (data === 'sort-name-max') {
        } else if (data === 'sort-name-min') {
        } else if (data === 'sort-max') {
        } else if (data === 'sort-min') {
        }
    }
}

class ValueFilter extends SwitchValue {
    constructor() {
        super();
    }

    private async getImg(num: any) {
        const imgNum = fetch(
            `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/assets/toys/${num}.png`
        );
        return (await imgNum).url;
    }

    public renderHTML(data: any) {
        const allData = data.map((el: any) => {
            const num = this.getImg(el.num);
            return num.then((num) => {
                return `
        <div class="toys__box">
            <h3 class="toys__name">${el.name}</h3>
                <div class="toys__wrapper">
                    <div class="toys__description">
                        <div class="toys__number">
                            Количество <span class="toys__amount">${el.count}</span>
                        </div>
                        <div class="toys__year">
                            Год покупки: <span class="year__number">${el.year}</span>
                        </div>
                        <div class="toys__form">
                            Форма: <span class="form__view">${el.shape}</span>
                        </div>
                        <div class="toys__color">
                            Цвет: <span class="color__view">${el.color}</span>
                        </div>
                        <div class="toys__size">
                            Размер: <span class="size__view">${el.size}</span>
                        </div>
                        <div class="toys__liked">
                            Любимая: <span class="liked__toy">${el.favorite}</span>
                        </div>
                        </div>
                        <div class="toys__img">
                            <img
                            class="toys__img__garland"
                            src="${num}"
                                alt="toy garland"
                                 />
                        </div>
                         </div>
                    </div>
    `;
            });
        });
        const hookHTML = document.querySelector('.toys__inner');
        Promise.all(allData).then((valueData: any) => hookHTML?.insertAdjacentHTML('afterbegin', valueData.join('')));
    }

    public filterArray(objectData: any) {
        const arrayValue = [];
        for (const key in objectData) {
            if (objectData[key] === true) arrayValue.push(key);
        }
        return arrayValue;
    }

    public async filterAllObj(...args: any) {
        const [data, mainObject, inputData, selectOptionData] = [...args];
        const dataFromMainObject = this.filterArray(mainObject);
        const valueFilteredFromData = this.getFilteredData(dataFromMainObject);
        const arrayDataFiltered = this.returnData(valueFilteredFromData);
        const data1 = await data;
        const firstFilteredArray: any = [];
        const secondFilteredArray: any = [];

        arrayDataFiltered.map((elementValue: any) => {
            return data1.filter((jsonData: any) => {
                for (const key in jsonData) {
                    if (jsonData[key] === elementValue) {
                        firstFilteredArray.push(jsonData);
                    }
                }
            });
        });
        const setObj = new Set(firstFilteredArray);
        const array = Array.from(setObj);
        /* if (inputData != undefined) {
            array.filter((el: any) => {
                for (const key in el) {
                    if (key === 'name' || key === 'shape' || key === 'size' || key === 'color') {
                        if (el[key].includes(inputData)) {
                            secondFilteredArray.push(el);
                        }
                    }
                }
            });
            this.renderHTML(secondFilteredArray);
        } else {
            this.renderHTML(array);
        } */

        //Переписать нормально. Нужно изменять массив и как-то от условий отталкиватся
        //Отлфильтровать нужно уже отфильтрвованный массив
        /* array.filter((el: any) => console.log(el)); */
    }

    public async getJSON() {
        const toys = new ToysPage();
        const jsonData = toys.getData();
        const data = await jsonData;
        return data;
    }

    public getBtn() {
        const formBtn = document.querySelector('.form__name');
        const colorBtn = document.querySelector('.color__name');
        const sizeBtn = document.querySelector('.size__name');
        return [formBtn, colorBtn, sizeBtn];
    }

    public sortBtn() {
        const sortReset = document.querySelector('.sort__reset');
        const sortSave = document.querySelector('.sort__save');
        return [sortReset, sortSave];
    }

    public sliderForm() {}

    public inputForm() {
        const inputForm = document.getElementById('search__data');
        return inputForm;
    }

    public selectForm() {
        const selectForm = document.querySelector('.sort__letter');
        return selectForm;
    }

    public sortSize(target: Event) {
        if (target instanceof HTMLElement) {
            target.classList.toggle('active');
            return target.dataset.filter;
        }
    }

    public sortForm(target: Event) {
        if (target instanceof HTMLElement) {
            target.classList.toggle('active');
            return target.dataset.filter;
        }
    }

    public sortColor(target: Event) {
        if (target instanceof HTMLElement) {
            target.classList.toggle('active__color');
            return target.dataset.filter;
        }
    }

    public toggle(value: boolean) {
        if (value) return false;
        return true;
    }

    public nodeRemove() {
        const [...valueDOM] = document.querySelectorAll('.toys__box');
        valueDOM.map((el: any) => el.remove());
    }
}

export class ToysSettingFilter extends ValueFilter {
    mainObject: SettingObject;
    constructor() {
        super();
        this.mainObject = {
            isFormBall: false,
            isFormBell: false,
            isFormCone: false,
            isFormSnowFlake: false,
            isFormToy: false,
            isColorWhite: false,
            isColorYellow: false,
            isColorRed: false,
            isColorBlue: false,
            isColorGreen: false,
            isSizeBig: false,
            isSizeMedium: false,
            isSizeSmall: false,
        };
    }

    public saveResetFun(event: any) {
        if (event.target.classList.contains('sort__reset')) {
            for (const key in this.mainObject) {
                this.mainObject[key] = false;
            }
        }
        if (event.target.classList.contains('sort__save')) {
            console.log('123');
        }
    }

    private debounceDecorator(fn: any, ms: any) {
        let isCooldown: any;
        return (...args: any) => {
            const funCall = () => {
                return fn.apply(this, args);
            };

            clearTimeout(isCooldown);
            isCooldown = setTimeout(funCall, ms);
        };
    }

    public inputFormSort(event: any) {
        const inputData: any = event.target.value;
        const jsonDATA = this.getJSON();
        console.log(jsonDATA);
        this.nodeRemove();
        this.filterAllObj(jsonDATA, this.mainObject, inputData);
    }

    public inputFormData(data: string) {
        return data;
    }

    public selectOptionsForm(event: any) {
        const value = event.target.value;
        const jsonDATA = this.getJSON();
        this.nodeRemove();
        this.filterAllObj(jsonDATA, this.mainObject, value);
    }

    public sortedValue(event: any) {
        const target = event.target;
        if (target.classList.contains('form__btn')) {
            const sortForm: any = super.sortForm(target);
            const isValueResult: any = super.filterSwitchCase(sortForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            const jsonDATA = this.getJSON();
            this.nodeRemove();
            this.filterAllObj(jsonDATA, this.mainObject);
        }
        if (target.classList.contains('color__btn')) {
            const colorForm: any = super.sortColor(target);
            const isValueResult: any = super.filterSwitchCase(colorForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            const jsonDATA = this.getJSON();
            this.nodeRemove();
            this.filterAllObj(jsonDATA, this.mainObject);
        }
        if (target.classList.contains('size__btn')) {
            const sizeForm: any = super.sortSize(target);
            const isValueResult: any = super.filterSwitchCase(sizeForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            const jsonDATA = this.getJSON();
            this.nodeRemove();
            this.filterAllObj(jsonDATA, this.mainObject);
        }
    }

    private addListener() {
        const arrayBtn = this.getBtn();
        const saveClearBtn = this.sortBtn();
        const inputForm = this.inputForm();
        const selectForm = this.selectForm();
        arrayBtn.forEach((el) => el?.addEventListener('click', this.sortedValue.bind(this)));
        saveClearBtn.forEach((el) => el?.addEventListener('click', this.saveResetFun.bind(this)));
        this.inputFormSort = this.debounceDecorator(this.inputFormSort, 2000);
        inputForm?.addEventListener('keyup', this.inputFormSort);
        selectForm?.addEventListener('change', this.selectOptionsForm);
    }

    public cycleSettings() {
        this.addListener();
    }
}
