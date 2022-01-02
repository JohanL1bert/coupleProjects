import {
    SettingObject,
    SortObject,
    IsliderYear,
    IsliderCount,
    IshapeColorSize,
    IdataMain,
    EsortedValue,
} from './interface/templayTypes';
import { ToysPage } from './toysPage';

class SwitchValue {
    mainObject: SettingObject;
    sortObject: SortObject;

    inputObject: string;
    favoriteObject: boolean;
    sliderYear: IsliderYear;
    sliderCount: IsliderCount;
    dataSet: Array<string>;
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

        for (const k in filteredObject) {
            if (filteredObject[k] == '') delete filteredObject[k];
        }

        return filteredObject;
    }

    public sortCheckbox(data: IdataMain[]) {
        return data.filter((el: Pick<IdataMain, 'favorite'>) => el['favorite'] === true);
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

    public filterSelectOption(sortedValue: SortObject, data: any) {
        console.log(data);
        if (sortedValue.isSort === EsortedValue.SortNameMax) {
            const value = data.sort((a: any, b: any) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
            return value;
        } else if (sortedValue.isSort === EsortedValue.SortNameMin) {
            const value = data.sort((a: any, b: any) => (a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0));
            return value;
        } else if (sortedValue.isSort === EsortedValue.SortMax) {
            const value = data.sort((a: any, b: any) => a.year - b.year);
            return value;
        } else if (sortedValue.isSort === EsortedValue.SortMin) {
            const value = data.sort((a: any, b: any) => b.year - a.year);
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

    public async getImg(num: number | string) {
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
                            <div class="ribbon ${+this.dataSet.includes(el.num) ? 'ribbon__active' : ''}"></div>
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
        array.map((el: any) => {
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
        const selectForm = document.querySelector('.sort__letter') as HTMLElement;
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
        const toysInner = document.querySelector('.toys__inner') as HTMLElement;
        return toysInner;
    }

    public nodeRemove() {
        const [...valueDOM] = document.querySelectorAll('.toys__box');
        valueDOM.map((el: Element) => el.remove());
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

    public inputFormSort(event: KeyboardEvent) {
        const inputData = (<HTMLInputElement>event.target).value;
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
            //Обнуляем баскет
            const headerBasket = document.querySelector('.header__basket__amount') as HTMLElement;
            headerBasket.innerHTML = '0';
            this.dataSet = [];

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
            const sortForm = super.sortForm(target) as string; //string | undefined
            const isValueResult = super.filterSwitchCase(sortForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            this.filterAllObj();
        }
        if (target.classList.contains('color__btn')) {
            const colorForm = super.sortColor(target) as string;
            const isValueResult = super.filterSwitchCase(colorForm);
            const toggleValue = super.toggle(this.mainObject[isValueResult[0]]);
            this.mainObject[isValueResult[0]] = toggleValue;
            this.filterAllObj();
        }
        if (target.classList.contains('size__btn')) {
            const sizeForm = super.sortSize(target) as string;
            const isValueResult = super.filterSwitchCase(sizeForm);
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

    public createToysCard() {
        const createContainer = document.createElement('div');
        createContainer.classList.add('tree__toys__card');
        const createImg = document.createElement('img');
        createImg.classList.add('gragn__img');
        const createTextContainer = document.createElement('div');
        createTextContainer.classList.add('img__count');
        const createSpan = document.createElement('span');
        createSpan.classList.add('count');
    }

    public renderPlayCard() {
        this.createToysCard();
    }

    public renderCardToys(card: HTMLElement) {
        const container = document.querySelector('.tree__toys__container') as HTMLElement;
        container.appendChild(card);
    }

    public async getDataJS(url: any) {
        const dataJSON = await fetch(
            `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/data.json`
        ).then((response) => response.json());

        const urls = await url;
        for (const key in dataJSON) {
            if (urls == dataJSON[key].num) {
                return dataJSON[key].count;
            }
        }
    }

    public async cloneCard() {
        /* const result = this.dataSet.map((el: any) => this.getImg(el)); */

        const arrayFrom = Array.from({ length: 20 }, (_, i) => i + 1);
        let url;
        let dataCount: any;
        let iterator;
        if (this.dataSet.length === 0) {
            const result = arrayFrom.map((el: number) => this.getImg(el));
            const imgUrl = Promise.all(result);
            const count = arrayFrom.map((el: any) => this.getDataJS(el));
            dataCount = Promise.all(count);
            dataCount = await dataCount;
            url = await imgUrl;
            iterator = dataCount;
        } else {
            const result = this.dataSet.map((el: string) => this.getImg(el));
            const imgUrl = Promise.all(result);
            const count = this.dataSet.map((el: string) => this.getDataJS(el));
            dataCount = Promise.all(count);
            dataCount = await dataCount;
            url = await imgUrl;
            iterator = dataCount;
        }

        for (let i = 0; i < url.length; i++) {
            const card: HTMLElement = document.createElement('div');
            card.classList.add('tree__toys__card');
            let cleanerIterate = i;
            for (let j = 0; j < iterator[i]; j++) {
                const createImg: HTMLImageElement = document.createElement('img');
                createImg.classList.add('dragn__img');
                createImg.src = url[i];
                createImg.dataset.number = `${i}-${cleanerIterate++}`;
                createImg.draggable = true;
                card.appendChild(createImg);
            }
            cleanerIterate = 0;
            const createPTag = document.createElement('p');
            createPTag.classList.add('img__count');
            const counterSpan = document.createElement('span');
            counterSpan.classList.add('count');
            counterSpan.textContent = `${dataCount[i]}`;
            createPTag.appendChild(counterSpan);
            card.appendChild(createPTag);
            this.renderCardToys(card);
        }
    }

    public isDataSetExist(cardBox: HTMLElement) {
        const ribbon = cardBox.querySelector('.ribbon') as HTMLElement;
        const headerBasket = document.querySelector('.header__basket__amount') as HTMLElement;
        /* const toysCount = cardBox.querySelector('.toys__amount') as HTMLElement; */
        const treeContainer = document.querySelector('.tree__toys__container') as HTMLElement;
        const card = cardBox.dataset.num;
        if (card === undefined) {
            throw new Error('card dataSet undefined');
        }

        const result = this.dataSet.includes(card);
        if (result) {
            this.dataSet = this.dataSet.filter((el: string) => el !== card);
            ribbon.classList.remove('ribbon__active');
            const value = Number(headerBasket.textContent as string);
            headerBasket.innerHTML = String(value - 1);
            treeContainer.replaceChildren();
            this.renderPlayCard();
            this.cloneCard();
        } else {
            ribbon.classList.add('ribbon__active');
            this.dataSet.push(card);
            const value = Number(headerBasket.textContent as string);
            headerBasket.innerHTML = String(value + 1);
            treeContainer.replaceChildren();
            this.renderPlayCard();
            this.cloneCard();
        }
    }

    public getDataNum(event: any) {
        const target = event.target as HTMLElement;
        const cardBox = target.closest('.toys__box') as HTMLElement;
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
        inputForm.addEventListener('keyup', this.inputFormSort);
        selectForm.addEventListener('change', this.selectOptionsForm.bind(this));
        selectorCheckbox?.addEventListener('change', this.favoriteCheckbox.bind(this));
        this.sliderSelector();
        this.sliderChgangeYear();
        cardContainer.addEventListener('click', this.getDataNum.bind(this));
        this.cloneCard();
    }

    public cycleSettings() {
        this.addListener();
    }
}
