import { SettingObject, SortObject, rangeObject } from './interface/templayTypes';
import { ToysPage } from './toysPage';

class SwitchValue {
    mainObject: SettingObject;
    sortObject: SortObject;

    inputObject: string;
    favoriteObject: boolean;
    sliderYear: any;
    sliderCount: any;
    dataSet: any;
    constructor() {
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

        this.sortObject = {
            isSort: 'sort-name-max',
        };
        this.inputObject = '';
        this.favoriteObject = false;
        this.sliderYear = {
            min: 1940,
            max: 2020,
        };
        this.sliderCount = {
            min: 1,
            max: 12,
        };
        this.dataSet = [];
    }

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

    public secondFilteredData(data: any) {
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

        const arrayValue: string[] = [];

        const filteredObject: any = {
            shape: [],
            color: [],
            size: [],
        };

        data.map((el: any) => {
            if (el in valueOject) {
                arrayValue.push(valueOject[el]);
            }
        });

        for (const key of arrayValue) {
            if (key === 'шар' || key === 'колокольчик' || key === 'шишка' || key === 'снежинка' || key === 'фигурка') {
                filteredObject['shape'].push(key);
            } else if (
                key === 'белый' ||
                key === 'желтый' ||
                key === 'красный' ||
                key === 'синий' ||
                key === 'зелёный'
            ) {
                filteredObject['color'].push(key);
            } else if (key === 'большой' || key === 'средний' || key === 'малый') {
                filteredObject['size'].push(key);
            }
        }

        for (let k in filteredObject) {
            if (filteredObject[k] == '') delete filteredObject[k];
        }

        return filteredObject;
    }

    public sortCheckbox(data: any) {
        return data.filter((el: any) => el['favorite'] === true);
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
                'желтый',
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

    public filterSelectOption(sortedValue: any, data: any) {
        if (sortedValue === 'sort-name-max') {
            const value = data.sort((a: any, b: any) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
            return value;
        } else if (sortedValue === 'sort-name-min') {
            const value = data.sort((a: any, b: any) => (a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0));
            return value;
        } else if (sortedValue === 'sort-max') {
            const value = data.sort((a: any, b: any) => a.year - b.year);
            return value;
        } else if (sortedValue === 'sort-min') {
            const value = data.sort((a: any, b: any) => b.year - a.year);
            return value;
        }
    }

    public sortSliderByCount(dataJSON: any) {
        return dataJSON.filter(
            (el: any) => this.sliderCount['min'] <= el['count'] && this.sliderCount['max'] >= el['count']
        );
    }

    public sortSliderByYear(dataJSON: any) {
        return dataJSON.filter(
            (el: any) => this.sliderYear['min'] <= el['year'] && this.sliderYear['max'] >= el['year']
        );
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
        <div class="toys__box" data-num="${el.num}">
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
                            Любимая: <span class="liked__toy">${el.favorite == true ? 'да' : 'нет'}</span>
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

    private checkerInput() {
        const idField = document.getElementById('search__data') as HTMLInputElement;
        idField.value = 'Ничего не найдено';
    }

    public SortInput(array: any) {
        const secondFilteredArray: any = [];
        array.filter((el: any) => {
            for (const key in el) {
                if (key === 'name' || key === 'shape' || key === 'size' || key === 'color') {
                    if (el[key].toLowerCase().includes(this.inputObject.toLowerCase())) {
                        secondFilteredArray.push(el);
                    }
                }
            }
        });

        const filtredFromDuplicate = new Set(secondFilteredArray);
        const filtredeArray = Array.from(filtredFromDuplicate);
        if (filtredeArray.length === 0) {
            this.checkerInput();
        }
        return filtredeArray;
    }

    public async filterAllObj() {
        this.nodeRemove();
        const data = this.getJSON();
        const mainObject = this.mainObject;
        const dataFromMainObject = this.filterArray(mainObject);
        const filterData = this.secondFilteredData(dataFromMainObject);
        const valueFilteredFromData = this.getFilteredData(dataFromMainObject); //если приходит пустой массив, отдаем целый объект Пока не нужно, как и то что ниже
        const arrayDataFiltered = this.returnData(valueFilteredFromData);
        const dataFromJson = await data;

        //Разобраться
        function filterPlainArray(array: any, filters: any) {
            const getValue = (value: any) => (typeof value === 'string' ? value.toUpperCase() : value);
            const filterKeys = Object.keys(filters);

            return array.filter((item: any) => {
                // validates all filter criteria
                return filterKeys.every((key) => {
                    // ignores an empty filter
                    if (!filters[key].length) return true;
                    return filters[key].find((filter: any) => getValue(filter) === getValue(item[key]));
                });
            });
        }

        const filteredList = filterPlainArray(dataFromJson, filterData); //Фильт по значениях: Форма, Цвет, размер
        let filteredListFromSelectOption = this.filterSelectOption(this.sortObject, filteredList);
        if (filteredListFromSelectOption === undefined) {
            filteredListFromSelectOption = filteredList;
        }
        if (this.inputObject.length !== 0) {
            filteredListFromSelectOption = this.SortInput(filteredList);
        }
        if (this.favoriteObject) {
            filteredListFromSelectOption = this.sortCheckbox(filteredListFromSelectOption);
        }

        filteredListFromSelectOption = this.sortSliderByCount(filteredListFromSelectOption);

        filteredListFromSelectOption = this.sortSliderByYear(filteredListFromSelectOption);
        this.renderHTML(filteredListFromSelectOption);
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

    public inputForm() {
        const inputForm = document.getElementById('search__data') as HTMLInputElement;
        return inputForm;
    }

    public selectForm() {
        const selectForm = document.querySelector('.sort__letter');
        return selectForm;
    }

    public checkBox() {
        const checkBoxSelector = document.querySelector('.liked__toys');
        return checkBoxSelector;
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

    public getCardContainer() {
        return document.querySelector('.toys__inner');
    }

    public nodeRemove() {
        const [...valueDOM] = document.querySelectorAll('.toys__box');
        valueDOM.map((el: any) => el.remove());
    }

    public debounceDecorator(fn: any, ms: any) {
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
        this.inputObject = inputData;
        this.filterAllObj();
    }
}

export class ToysSettingFilter extends ValueFilter {
    constructor() {
        super();
    }

    public saveResetFun(event: any) {
        const formSelectors = document.querySelectorAll('.form__btn');
        const colorSelectorBtn = document.querySelectorAll('.color__btn');
        const sizeSelectorBtn = document.querySelectorAll('.size__btn');
        const splitArray = [...formSelectors, ...colorSelectorBtn, ...sizeSelectorBtn];
        if (event.target.classList.contains('sort__reset')) {
            for (const key in this.mainObject) {
                this.mainObject[key] = false;
            }
            splitArray.map((el) => {
                if (el.classList.contains('active') || el.classList.contains('active__color')) {
                    el.classList.remove('active', 'active__color');
                }
            });
            //Обнуляем ввод инпут
            const resetInputForm = this.inputForm();
            resetInputForm.value = '';
            this.inputObject = '';
            //Обновляем слайдер лет
            const getSliderYear: any = document.querySelector('.slider__year');
            getSliderYear.noUiSlider.set([1940, 2020]);
            this.sliderYear['min'] = 1940;
            this.sliderYear['max'] = 2020;
            //обновляем слайдер количества
            const getCountSlider: any = document.querySelector('.slider__count');
            getCountSlider.noUiSlider.set([1, 12]);
            this.sliderCount['min'] = 1;
            this.sliderCount['max'] = 12;
            //
            const checkbox = document.querySelector('.liked__toys') as HTMLInputElement;
            checkbox.checked = false;
            this.favoriteObject = false;
            this.filterAllObj();
        }
        if (event.target.classList.contains('sort__save')) {
            console.log('Она не работет. Сорри хВ');
        }
    }

    public selectOptionsForm(event: any) {
        const value = event.target.value;
        this.sortObject = value;
        this.filterAllObj();
    }

    public sortedValue(event: any) {
        const target = event.target;
        if (target.classList.contains('form__btn')) {
            const sortForm: any = super.sortForm(target);
            const isValueResult: any = super.filterSwitchCase(sortForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            this.filterAllObj();
        }
        if (target.classList.contains('color__btn')) {
            const colorForm: any = super.sortColor(target);
            const isValueResult: any = super.filterSwitchCase(colorForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            this.filterAllObj();
        }
        if (target.classList.contains('size__btn')) {
            const sizeForm: any = super.sortSize(target);
            const isValueResult: any = super.filterSwitchCase(sizeForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            this.filterAllObj();
        }
    }

    //Переписать через дженерик и checked target
    public favoriteCheckbox(event: Event) {
        const ischecked = (<HTMLInputElement>event.target).checked;
        this.favoriteObject = Boolean(ischecked);
        this.filterAllObj();
    }

    public sliderOnChangeCount(eventHandler: any) {
        const [minimum, maximum] = eventHandler;
        const minNum = Math.round(+minimum);
        const maxNum = Math.round(+maximum);
        this.sliderCount['min'] = minNum;
        this.sliderCount['max'] = maxNum;
        this.filterAllObj();
    }

    public sliderOnChangeYear(eventHandler: any) {
        const [minimum, maximum] = eventHandler;
        const minNum = Math.round(+minimum);
        const maxNum = Math.round(+maximum);
        this.sliderYear['min'] = minNum;
        this.sliderYear['max'] = maxNum;
        this.filterAllObj();
    }

    public sliderChgangeYear() {
        const getSliderYear: any = document.querySelector('.slider__year');
        getSliderYear.noUiSlider.on('change', this.sliderOnChangeYear.bind(this));
    }

    public sliderSelector() {
        const getCountSlider: any = document.querySelector('.slider__count');
        getCountSlider.noUiSlider.on('change', this.sliderOnChangeCount.bind(this));
    }

    public isDataSetExist(cardBox: HTMLElement) {
        const ribbon = cardBox.querySelector('.ribbon') as HTMLElement;
        const card = cardBox.dataset.num;
        const result = this.dataSet.includes(card);
        if (result) {
            this.dataSet = this.dataSet.filter((el: string) => el !== card);
            ribbon.classList.remove('ribbon__active');
        } else {
            ribbon.classList.add('ribbon__active');
            this.dataSet.push(card);
        }

        console.log(this.dataSet);
    }

    public getDataNum(event: any) {
        const cardBox = event.target.closest('.toys__box') as HTMLElement;
        this.isDataSetExist(cardBox);
    }

    private addListener() {
        const arrayBtn = this.getBtn();
        const saveClearBtn = this.sortBtn();
        const inputForm = this.inputForm();
        const selectForm = this.selectForm();
        const selectorCheckbox = this.checkBox();
        const cardContainer = this.getCardContainer();

        arrayBtn.forEach((el) => el?.addEventListener('click', this.sortedValue.bind(this)));
        saveClearBtn.forEach((el) => el?.addEventListener('click', this.saveResetFun.bind(this)));
        this.inputFormSort = this.debounceDecorator(this.inputFormSort, 2000);
        inputForm?.addEventListener('keyup', this.inputFormSort);
        selectForm?.addEventListener('change', this.selectOptionsForm.bind(this));
        selectorCheckbox?.addEventListener('change', this.favoriteCheckbox.bind(this));
        this.sliderSelector();
        this.sliderChgangeYear();
        cardContainer?.addEventListener('click', this.getDataNum.bind(this));
    }

    public cycleSettings() {
        this.addListener();
    }
}
