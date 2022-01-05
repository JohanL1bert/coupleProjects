import {
    SettingObjectBool,
    IsliderYear,
    IsliderCount,
    IshapeColorSize,
    IdataMain,
    EsortedValue,
    IvalueObject,
    CallbackType,
} from './interface/templayTypes';
import { ToysPage } from './toysPage';
import * as noUiSlider from 'nouislider';

class SwitchValue {
    mainObject: SettingObjectBool;
    sortObject: string;

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

    public secondFilteredData(data: Array<string>) {
        const valueObject: IvalueObject = {
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
            if (el in valueObject) {
                arrayValue.push(valueObject[el as keyof IvalueObject]);
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

        //Как затипизировать при string[] и условие filtereObject === ''. Ошибка string[] has no overlap with string
        for (const k in filteredObject) {
            if (filteredObject[k as keyof IshapeColorSize].length === 0)
                delete filteredObject[k as keyof IshapeColorSize];
        }

        return filteredObject;
    }

    public sortCheckbox(data: IdataMain[]) {
        return data.filter((el: Pick<IdataMain, 'favorite'>) => el['favorite'] === true);
    }

    //interface или пустой массив
    public filterSelectOption(sortedValue: string, data: IdataMain[]) {
        if (data.length === 0) {
            return data;
        }
        if (sortedValue === EsortedValue.SortNameMax) {
            const value = data.sort((a: Pick<IdataMain, 'name'>, b: Pick<IdataMain, 'name'>) =>
                a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
            );
            return value;
        } else if (sortedValue === EsortedValue.SortNameMin) {
            const value = data.sort((a: Pick<IdataMain, 'name'>, b: Pick<IdataMain, 'name'>) =>
                a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0
            );
            return value;
        } else if (sortedValue === EsortedValue.SortMax) {
            const value = data.sort(
                (a: Pick<IdataMain, 'year'>, b: Pick<IdataMain, 'year'>) => Number(a.year) - Number(b.year)
            );
            return value;
        } else if (sortedValue === EsortedValue.SortMin) {
            const value = data.sort(
                (a: Pick<IdataMain, 'year'>, b: Pick<IdataMain, 'year'>) => Number(b.year) - Number(a.year)
            );
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

    public async imgFetcher(num: number | string) {
        const imgNum = fetch(
            `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/assets/toys/${num}.png`
        );
        return (await imgNum).url;
    }

    public renderHTML(data: IdataMain[]) {
        const allData = data.map((el) => {
            const num = this.imgFetcher(el.num);
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

    //Массив дат или пустой массив
    public SortInput(array: IdataMain[]) {
        const secondFilteredArray: IdataMain[] = [];
        array.map((el) => {
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
        if (dataFromJson === undefined) {
            throw new Error('data from JSON is Undefined');
        }

        //Разобраться // Не особо понял почему здесь именны интерфейс IShape подходит. По сути массив строк тоже должен пройти
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

    public getBtnHTML() {
        const formBtn = document.querySelector('.form__name');
        const colorBtn = document.querySelector('.color__name');
        const sizeBtn = document.querySelector('.size__name');
        return [formBtn, colorBtn, sizeBtn];
    }

    public getSortBtnHTML() {
        const sortReset = document.querySelector('.sort__reset');
        const sortSave = document.querySelector('.sort__save');
        return [sortReset, sortSave];
    }

    public getInputFormHTML() {
        const inputForm = document.getElementById('search__data') as HTMLInputElement;
        return inputForm;
    }

    public getSelectFormHTML() {
        const selectForm = document.querySelector('.sort__letter') as HTMLElement;
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

    public getCardContainer() {
        const toysInner = document.querySelector('.toys__inner') as HTMLElement;
        return toysInner;
    }

    public nodeRemove() {
        const [...valueDOM] = document.querySelectorAll('.toys__box');
        valueDOM.map((el: Element) => el.remove());
    }

    //Как-то получилось  - убрал деструктиризацию в return (...args: Keyboardevent) и написад тип callBack, который ивент принимает. this получается
    //не учитывается? У меня тип только один параметр принимает.
    public debounceDecorator(fn: CallbackType, ms: number) {
        let isCooldown: ReturnType<typeof setTimeout>;
        //Не уверен что тут массив эвентов
        return (args: KeyboardEvent) => {
            const funCall = () => {
                return fn.apply(this, [args]);
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

    public saveResetMethod(event: Event) {
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
            const resetInputForm = this.getInputFormHTML();
            resetInputForm.value = '';
            this.inputObject = '';
            //Обновляем слайдер лет
            const getSliderYear: noUiSlider.target = document.querySelector('.slider__year') as HTMLElement;
            getSliderYear.noUiSlider?.set([1940, 2020]); //Object is possibly undefined. нЕ понимаю как правильно затипизировать слайдер из библиотеки
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
            //Обнуляем баскет
            const headerBasket = document.querySelector('.header__basket__amount') as HTMLElement;
            headerBasket.innerHTML = '0';
            this.dataSet = [];

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
            const sortForm = super.sortForm(target) as string; //string | undefined
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
        const [minimum, maximum] = eventHandler; //Не знаю правильно ли так делать. Приходит по идеи массив строк, но не получается его затипизировать. Это связнно наверное с типом слайдера
        const minNum: number = Math.round(+minimum); //Получается просто дыра в типах. Пришло неизвестно что, но дальше мне это никуда возвращать не нужно
        const maxNum: number = Math.round(+maximum);
        this.sliderCount['min'] = minNum;
        this.sliderCount['max'] = maxNum;
        void this.filterAllObj();
    }

    public sliderOnChangeYear<T>(eventHandler: Array<T>): void {
        const [minimum, maximum] = eventHandler;
        const minNum: number = Math.round(+minimum);
        const maxNum: number = Math.round(+maximum);
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

    public async getDataJS(url: string) {
        try {
            const dataJSON = await fetch(
                `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/data.json`
            ).then((response) => response.json() as Promise<IdataMain[]>);

            let arrayOfCount = '';

            dataJSON.forEach((element) => {
                if (url === element.num) {
                    arrayOfCount = element.count;
                }
            });
            return arrayOfCount;
        } catch (err) {
            console.warn(err, 'err in getDataJS');
        }
    }

    private deleteImgFromTree() {
        const getAllImg: NodeListOf<HTMLImageElement> = document.querySelectorAll('map > img');
        getAllImg.forEach((item) => item.remove());
    }

    public async cloneCard() {
        /* const result = this.dataSet.map((el: any) => this.getImg(el)); */

        this.deleteImgFromTree();

        const arrayFrom = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
        let url;
        let dataCount: string[];
        let iterator: Array<string>;
        if (this.dataSet.length === 0) {
            const result = arrayFrom.map((el: string) => this.imgFetcher(el));
            const imgUrl = Promise.all(result);
            const count = arrayFrom.map((el) => this.getDataJS(el));
            const promiseDataCount = Promise.all(count).catch((err) => console.warn(err, 'count is undefined'));
            dataCount = (await promiseDataCount) as string[]; //ПРиходит void (string| undefined)[]. Без as не пропускает

            dataCount.forEach((item) => {
                if (item === undefined) {
                    console.warn('item is undefined if === 0');
                }
            });

            url = await imgUrl;
            iterator = dataCount;
        } else {
            const result = this.dataSet.map((el: string) => this.imgFetcher(el));
            const imgUrl = Promise.all(result);
            const count = this.dataSet.map((el: string) => this.getDataJS(el));
            const promiseDataCount = Promise.all(count);
            dataCount = (await promiseDataCount) as string[];
            //Нужна проверка массив строк или массив undefined. Пока так написал
            dataCount.forEach((item) => {
                if (item === undefined) {
                    console.warn('item is undefined');
                }
            });

            url = await imgUrl;
            iterator = dataCount;
        }

        for (let i = 0; i < url.length; i++) {
            const card: HTMLElement = document.createElement('div');
            card.classList.add('tree__toys__card');
            let cleanerIterate = i;
            for (let j = 0; j < Number(iterator[i]); j++) {
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
            void this.cloneCard();
        } else {
            ribbon.classList.add('ribbon__active');
            this.dataSet.push(card);
            const value = Number(headerBasket.textContent as string);
            headerBasket.innerHTML = String(value + 1);
            treeContainer.replaceChildren();
            this.renderPlayCard();
            void this.cloneCard();
        }
    }

    public getDataNum(event: Event) {
        const target = event.target as HTMLElement;
        const cardBox = target.closest('.toys__box') as HTMLElement;
        this.isDataSetExist(cardBox);
    }

    private addListener() {
        const arrayBtn = this.getBtnHTML();
        const saveClearBtn = this.getSortBtnHTML();
        const inputForm = this.getInputFormHTML();
        const selectForm = this.getSelectFormHTML();
        const selectorCheckbox = this.checkBox();
        const cardContainer = this.getCardContainer();

        arrayBtn.forEach((el) => {
            if (el === null || el === undefined) {
                throw new Error('el in arrayBtn is undefined or null');
            }

            el.addEventListener('click', this.sortedValue.bind(this));
        });
        saveClearBtn.forEach((el) => {
            if (el === null || el === undefined) {
                throw new Error('el in saveClearBtn is undefined or null');
            }
            el.addEventListener('click', this.saveResetMethod.bind(this));
        });
        this.inputFormSort = this.debounceDecorator(this.inputFormSort, 2000);
        inputForm.addEventListener('keyup', this.inputFormSort);
        selectForm.addEventListener('change', this.selectOptionsForm.bind(this));
        selectorCheckbox?.addEventListener('change', this.favoriteCheckbox.bind(this));
        this.sliderSelector();
        this.sliderChgangeYear();
        cardContainer.addEventListener('click', this.getDataNum.bind(this));
        void this.cloneCard();
    }

    public cycleSettings() {
        this.addListener();
    }
}
