import {
    SettingObjectBool,
    IsliderYear,
    IsliderCount,
    IshapeColorSize,
    IdataMain,
    EsortedValue,
    IvalueObject,
} from './inteface/templayTypes';
import { ToysPage } from './toysPage';
import * as noUiSlider from 'nouislider';

class SwitchValue {
    mainObject: SettingObjectBool;
    sortObject: string;

    inputObject: string;
    favoriteObject: boolean;
    sliderYear: IsliderYear;
    sliderCount: IsliderCount;
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

        this.sortObject = '';
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

    public secondFilteredData(data: string[]) {
        const valueOject: IvalueObject = {
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

        const filteredObject: IshapeColorSize = {
            shape: [],
            color: [],
            size: [],
        };

        data.map((el: string) => {
            if (el in valueOject) {
                arrayValue.push(valueOject[el as keyof IvalueObject]);
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

        for (const k in filteredObject) {
            if (filteredObject[k as keyof IshapeColorSize].length === 0)
                delete filteredObject[k as keyof IshapeColorSize];
        }

        return filteredObject;
    }

    public sortCheckbox(data: IdataMain[]) {
        return data.filter((el) => el['favorite'] === true);
    }

    public filterSelectOption(sortedValue: string, data: IdataMain[]) {
        if (sortedValue === 'sort-name-max') {
            const value = data.sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
            return value;
        } else if (sortedValue === 'sort-name-min') {
            const value = data.sort((a, b) => (a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0));
            return value;
        } else if (sortedValue === 'sort-max') {
            const value = data.sort((a, b) => Number(a.year) - Number(b.year));
            return value;
        } else if (sortedValue === 'sort-min') {
            const value = data.sort((a, b) => Number(b.year) - Number(a.year));
            return value;
        }
    }

    public sortSliderByCount(dataJSON: IdataMain[]) {
        return dataJSON.filter(
            (el: Pick<IdataMain, 'count'>) =>
                this.sliderCount['min'] <= Number(el['count']) && this.sliderCount['max'] >= Number(el['count'])
        );
    }

    public sortSliderByYear(dataJSON: IdataMain[]) {
        return dataJSON.filter(
            (el: Pick<IdataMain, 'year'>) =>
                this.sliderYear['min'] <= Number(el['year']) && this.sliderYear['max'] >= Number(el['year'])
        );
    }
}

class ValueFilter extends SwitchValue {
    constructor() {
        super();
    }

    private async getImg(num: number | string) {
        const imgNum = fetch(
            `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/assets/toys/${num}.png`
        );
        return (await imgNum).url;
    }

    public renderHTML(data: IdataMain[]) {
        const allData = data.map((el) => {
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
        const hookHTML = document.querySelector('.toys__inner') as HTMLElement;
        if (hookHTML === undefined) {
            throw new Error('hookHTMK is undefined');
        }

        Promise.all(allData)
            .then((valueData) => hookHTML.insertAdjacentHTML('afterbegin', valueData.join('')))
            .catch((err) => console.warn(err, 'PromiseAll is undefined'));
    }

    public filterArray(objectData: SettingObjectBool) {
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

    public SortInput(array: IdataMain[]) {
        const secondFilteredArray: IdataMain[] = [];
        array.filter((el) => {
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
        /*      const valueFilteredFromData = this.getFilteredData(dataFromMainObject); //если приходит пустой массив, отдаем целый объект Пока не нужно, как и то что ниже
        const arrayDataFiltered = this.returnData(valueFilteredFromData); */
        const dataFromJson = await data;

        if (dataFromJson === undefined) {
            throw new Error('data from JSON is Undefined');
        }

        //Разобраться
        function filterPlainArray(array: IdataMain[], filters: IshapeColorSize) {
            const getValue = (value: string) => (typeof value === 'string' ? value.toUpperCase() : value);
            const filterKeys = Object.keys(filters);

            return array.filter((item: IdataMain) =>
                /*итемы из Idatamain*/
                /* validates all filter criteria*/
                filterKeys.every((key: string) => {
                    // ignores an empty filter
                    if (!filters[key as keyof IshapeColorSize].length) return true;
                    return filters[key as keyof IshapeColorSize].find(
                        (filter: string) => getValue(filter) === getValue(item[key as keyof IshapeColorSize])
                    );
                })
            );
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
        const jsonData = toys.dataFetcher();
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

    public sortSize(target: HTMLButtonElement) {
        if (target instanceof HTMLButtonElement) {
            target.classList.toggle('active');
            return target.dataset.filter;
        }
    }

    public sortForm(target: HTMLButtonElement) {
        if (target instanceof HTMLButtonElement) {
            target.classList.toggle('active');
            return target.dataset.filter;
        }
    }

    public sortColor(target: HTMLButtonElement) {
        if (target instanceof HTMLButtonElement) {
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
        valueDOM.map((el: Element) => el.remove());
    }

    public debounceDecorator(fn: any, ms: number) {
        let isCooldown: ReturnType<typeof setTimeout>;
        return (...args: KeyboardEvent[]) => {
            const funCall = () => {
                return fn.apply(this, args);
            };

            clearTimeout(isCooldown);
            isCooldown = setTimeout(funCall, ms);
        };
    }

    public inputFormSort(event: KeyboardEvent) {
        const inputData = (<HTMLInputElement>event.target).value;
        this.inputObject = inputData;
        void this.filterAllObj();
    }
}

export class ToysSettingFilter extends ValueFilter {
    constructor() {
        super();
    }

    public saveResetFun(event: Event) {
        const target = event.target as HTMLButtonElement;
        const formSelectors = document.querySelectorAll('.form__btn');
        const colorSelectorBtn = document.querySelectorAll('.color__btn');
        const sizeSelectorBtn = document.querySelectorAll('.size__btn');
        const splitArray = [...formSelectors, ...colorSelectorBtn, ...sizeSelectorBtn];
        if (target.classList.contains('sort__reset')) {
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
            const getSliderYear: noUiSlider.target = document.querySelector('.slider__year') as HTMLElement;
            getSliderYear.noUiSlider?.set([1940, 2020]);
            this.sliderYear['min'] = 1940;
            this.sliderYear['max'] = 2020;
            //обновляем слайдер количества
            const getCountSlider: noUiSlider.target = document.querySelector('.slider__count') as HTMLElement;
            getCountSlider.noUiSlider?.set([1, 12]);
            this.sliderCount['min'] = 1;
            this.sliderCount['max'] = 12;
            //
            const checkbox = document.querySelector('.liked__toys') as HTMLInputElement;
            checkbox.checked = false;
            this.favoriteObject = false;
            void this.filterAllObj();
        }
        if (target.classList.contains('sort__save')) {
            console.log('Она не работет. Сорри хВ');
        }
    }

    public selectOptionsForm(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        this.sortObject = value;
        void this.filterAllObj();
    }

    public sortedValue(event: Event) {
        const target = event.target as HTMLButtonElement;
        if (target.classList.contains('form__btn')) {
            const sortForm = super.sortForm(target) as string;
            const isValueResult = super.filterSwitchCase(sortForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            void this.filterAllObj();
        }
        if (target.classList.contains('color__btn')) {
            const colorForm = super.sortColor(target) as string;
            const isValueResult = super.filterSwitchCase(colorForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            void this.filterAllObj();
        }
        if (target.classList.contains('size__btn')) {
            const sizeForm = super.sortSize(target) as string;
            const isValueResult = super.filterSwitchCase(sizeForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            void this.filterAllObj();
        }
    }

    //Переписать через дженерик и checked target
    public favoriteCheckbox(event: Event) {
        const ischecked = (<HTMLInputElement>event.target).checked;
        this.favoriteObject = Boolean(ischecked);
        void this.filterAllObj();
    }

    public sliderOnChangeCount<T>(eventHandler: Array<T>): void {
        const [minimum, maximum] = eventHandler;
        const minNum = Math.round(+minimum);
        const maxNum = Math.round(+maximum);
        this.sliderCount['min'] = minNum;
        this.sliderCount['max'] = maxNum;
        void this.filterAllObj();
    }

    public sliderOnChangeYear<T>(eventHandler: Array<T>): void {
        const [minimum, maximum] = eventHandler;
        const minNum = Math.round(+minimum);
        const maxNum = Math.round(+maximum);
        this.sliderYear['min'] = minNum;
        this.sliderYear['max'] = maxNum;
        void this.filterAllObj();
    }

    public sliderChgangeYear() {
        const getSliderYear: noUiSlider.target = document.querySelector('.slider__year') as HTMLElement;
        getSliderYear.noUiSlider?.on('change', this.sliderOnChangeYear.bind(this));
    }

    public sliderSelector() {
        const getCountSlider: noUiSlider.target = document.querySelector('.slider__count') as HTMLElement;
        getCountSlider.noUiSlider?.on('change', this.sliderOnChangeCount.bind(this));
    }

    private addListener() {
        const arrayBtn = this.getBtn();
        const saveClearBtn = this.sortBtn();
        const inputForm = this.inputForm();
        const selectForm = this.selectForm();
        const selectorCheckbox = this.checkBox();
        arrayBtn.forEach((el) => el?.addEventListener('click', this.sortedValue.bind(this)));
        saveClearBtn.forEach((el) => el?.addEventListener('click', this.saveResetFun.bind(this)));
        this.inputFormSort = this.debounceDecorator(this.inputFormSort, 2000);
        inputForm?.addEventListener('keyup', this.inputFormSort);
        selectForm?.addEventListener('change', this.selectOptionsForm.bind(this));
        selectorCheckbox?.addEventListener('change', this.favoriteCheckbox.bind(this));
        this.sliderSelector();
        this.sliderChgangeYear();
    }

    public cycleSettings() {
        this.addListener();
    }
}
