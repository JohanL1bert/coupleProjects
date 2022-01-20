import { Router } from '../routing';
import { TArrayClassName, TCarItem, TGarageSet } from '../interfaces/interface';

class CreatorGarage {
    creater: Router;
    baseUrl: string;
    constructor(creater: Router) {
        this.creater = creater;
        this.baseUrl = `http://127.0.0.1:3000`;
    }

    public renderMainWrapper() {
        const arrayOfTags: Array<string> = ['main', 'div', 'div', 'div' /* 'section', 'div' */];
        const arrayOfClassName: TArrayClassName = [
            ['main'],
            ['container'],
            ['main__inner'],
            ['main__border'],
            /*             ['garage'],
            ['garage__inner'], */
        ];

        const [
            mainElement,
            containerElement,
            mainInnerElement,
            mainBorderElement,
            /*             sectionGarageElement,
            divGarageInnerElement, */
        ] = this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        //FIXME: Remove later
        /*         const mainElement = this.creater.createHTMLElement('main', ['main']);
        const containerElement = this.creater.createHTMLElement('div', ['container']);
        const mainInnerElement = this.creater.createHTMLElement('div', ['main__inner']);
        const mainBorderElement = this.creater.createHTMLElement('div', ['main__border']);
        const sectionGarageElement = this.creater.createHTMLElement('section', ['garage']);
        const divGarageInnerElement = this.creater.createHTMLElement('div', ['garage__inner']); */

        //Append
        const headerEl = this.creater.getHTMLElement('header');
        this.creater.appendToNeighbor(headerEl, mainElement);
        this.creater.appendToChild(mainElement, containerElement);
        this.creater.appendToChild(containerElement, mainInnerElement);
        this.creater.appendToChild(mainInnerElement, mainBorderElement);
        /*         this.creater.appendToChild(mainBorderElement, sectionGarageElement);
        this.creater.appendToChild(sectionGarageElement, divGarageInnerElement); */
    }

    public renderStatus() {
        const arrayOfTags: Array<string> = ['section', 'div', 'div', 'div', 'div', 'div', 'span', 'span', 'div'];
        const arrayOfClassName: TArrayClassName = [
            ['garage'],
            ['garage__inner'],
            ['garage__wrapper'],
            ['race'],
            ['race__flag'],
            ['race__info'],
            ['race__text'],
            ['span__winner'],
            ['garage__settings'],
        ];

        const [
            sectionGarageElement,
            divGarageInnerElement,
            divGarageWrapperElement,
            divRaceElement,
            divRaceFlagElement,
            divRaceInfoElement,
            spanRaceTextelement,
            spanRaceWinnerElement,
            divGarageSettingsElement,
        ] = this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        //FIXME: Delete later
        /*         const divGarageWrapperElement = this.creater.createHTMLElement('div', ['garage__wrapper']);
        const divRaceElement = this.creater.createHTMLElement('div', ['race']);
        const divRaceFlagElement = this.creater.createHTMLElement('div', ['race__flag']);
        const divRaceInfoElement = this.creater.createHTMLElement('div', ['race__info']);
        const spanRaceTextelement = this.creater.createHTMLElement('span', ['race__text']);
        const spanRaceWinnerElement = this.creater.createHTMLElement('span', ['span_winner']);
        const divGarageSettingsElement = this.creater.createHTMLElement('div', ['garage__settings']); */

        this.creater.AddTextContentToHTMLElement(spanRaceTextelement, 'Winner:');
        this.creater.AddTextContentToHTMLElement(spanRaceWinnerElement, 'Number one');

        //Append
        const mainBorderElement = this.creater.getHTMLElement('main__border');
        this.creater.appendToChild(mainBorderElement, sectionGarageElement);
        this.creater.appendToChild(sectionGarageElement, divGarageInnerElement);
        this.creater.appendToChild(divGarageInnerElement, divGarageWrapperElement);
        this.creater.appendToChild(divGarageWrapperElement, divRaceElement);
        this.creater.appendToChild(divRaceElement, divRaceFlagElement);
        this.creater.appendToChild(divRaceElement, divRaceInfoElement);
        this.creater.appendToChild(divRaceInfoElement, spanRaceTextelement);
        this.creater.appendToChild(spanRaceTextelement, spanRaceWinnerElement);
        this.creater.appendToNeighbor(divRaceElement, divGarageSettingsElement);
    }

    public renderGarageCreateCar() {
        //TODO: /Инпуты дописать классы

        const arrayOfTags: Array<string> = ['div', 'input', 'input', 'button'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__settings__input'],
            ['inputClass'],
            ['input__color'],
            ['input__button'],
        ];

        const [divGarageSettingsInputElement, inputTextElement, inputColorElement, buttonInputButtonelement] =
            this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName) as TGarageSet;
        /*         const divGarageSettingsInputElement = this.creater.createHTMLElement('div', ['garage__settings__input']);
        const inputTextElement = this.creater.createHTMLElement('input', ['inputCLass']) as HTMLInputElement;
        const inputColorElement = this.creater.createHTMLElement('input', ['input__color']) as HTMLInputElement;
        const buttonInputButtonelement = this.creater.createHTMLElement('button', [
            'input__button',
        ]) as HTMLButtonElement; */

        inputTextElement.type = 'text';

        inputColorElement.type = 'color';

        this.creater.AddTextContentToHTMLElement(buttonInputButtonelement, 'create');

        const divGarageElement = this.creater.getHTMLElement('garage__settings');
        //Append
        this.creater.appendToChild(divGarageElement, divGarageSettingsInputElement);
        this.creater.appendToChild(divGarageSettingsInputElement, inputTextElement);
        this.creater.appendToChild(divGarageSettingsInputElement, inputColorElement);
        this.creater.appendToChild(divGarageSettingsInputElement, buttonInputButtonelement);
    }

    public renderGarageUpdate() {
        const arrayOfTags: Array<string> = ['div', 'input', 'input', 'button'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__settings__update'],
            ['input__element'],
            ['update__color'],
            ['update__button'],
        ];

        const [divGarageSettingsUpdateElement, inputTextElement, inputUpdateColorElement, buttonUpdateButtonElement] =
            this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName) as TGarageSet;

        //Секция Update
        /*         const divGarageSettingsUpdateElement = this.creater.createHTMLElement('div', ['garage__settings__update']);
        //Еще один инпут должен быть
        const inputTextElement = this.creater.createHTMLElement('input', ['input__element']) as HTMLInputElement;
        const inputUpdateColorElement = this.creater.createHTMLElement('input', ['update__color']) as HTMLInputElement;
        const buttonUpdateButtonElement = this.creater.createHTMLElement('button', ['update__button']); */

        inputTextElement.type = 'text';
        inputUpdateColorElement.type = 'color';

        this.creater.AddTextContentToHTMLElement(buttonUpdateButtonElement, 'update');

        const divGarageElement = this.creater.getHTMLElement('garage__settings');
        this.creater.appendToChild(divGarageElement, divGarageSettingsUpdateElement);
        this.creater.appendToChild(divGarageSettingsUpdateElement, inputTextElement);
        this.creater.appendToChild(divGarageSettingsUpdateElement, inputUpdateColorElement);
        this.creater.appendToChild(divGarageSettingsUpdateElement, buttonUpdateButtonElement);
    }

    public renderGarageSettingsBtn() {
        const arrayOfTags: Array<string> = ['div', 'button', 'button', 'button'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__settings__race'],
            ['race__button'],
            ['race__reset'],
            ['race__generate'],
        ];

        const [
            divGarageSettingRaceElement,
            buttonRaceButtonElement,
            buttonRaceResetElement,
            buttonRaceGenerateElement,
        ] = this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName) as [
            HTMLElement,
            HTMLButtonElement,
            HTMLButtonElement,
            HTMLButtonElement
        ];

        //Секция Кнопок рейс
        /*         const divGarageSettingRaceElement = this.creater.createHTMLElement('div', ['garage__settings__race']);
        const buttonRaceButtonElement = this.creater.createHTMLElement('button', ['race__button']) as HTMLButtonElement;
        const buttonRaceResetElement = this.creater.createHTMLElement('button', ['race__reset']) as HTMLButtonElement;
        const buttonRaceGenerateElement = this.creater.createHTMLElement('button', [
            'race__generate',
        ]) as HTMLButtonElement;
 */
        this.creater.AddTextContentToHTMLElement(buttonRaceButtonElement, 'race');
        this.creater.AddTextContentToHTMLElement(buttonRaceResetElement, 'reset');
        this.creater.AddTextContentToHTMLElement(buttonRaceGenerateElement, 'generate cars');

        const divGarageElement = this.creater.getHTMLElement('garage__settings');
        this.creater.appendToChild(divGarageElement, divGarageSettingRaceElement);
        this.creater.appendToChild(divGarageSettingRaceElement, buttonRaceButtonElement);
        this.creater.appendToChild(divGarageSettingRaceElement, buttonRaceResetElement);
        this.creater.appendToChild(divGarageSettingRaceElement, buttonRaceGenerateElement);
    }

    public renderCarGarage() {
        const arrayOfTags: Array<string> = ['div', 'div', 'span', 'div', 'span', 'div'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__border'],
            ['garage__info'],
            ['garage__count'],
            ['carage__page'],
            ['garage__page__count'],
            ['garage__items'],
        ];

        const [
            divGarageBorderElement,
            divGarageInfoElement,
            spanGarageCountElement,
            divGaragePage,
            spanGaragePageCountElement,
            divGarageItesmElement,
        ] = this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        //Секция Гаража
        /*         const divGarageBorderElement = this.creater.createHTMLElement('div', ['garage__border']);
        const divGarageInfoElement = this.creater.createHTMLElement('div', ['garage__info']);
        const spanGarageCountElement = this.creater.createHTMLElement('span', ['garage__count']);
        const divGaragePage = this.creater.createHTMLElement('div', ['garage__page']);
        const spanGaragePageCountElement = this.creater.createHTMLElement('span', ['garage__page__count']);
        const divGarageItesmElement = this.creater.createHTMLElement('div', ['garage__items']); */

        const divGarageElement = this.creater.getHTMLElement('garage__inner');
        this.creater.appendToNeighbor(divGarageElement, divGarageBorderElement);
        this.creater.appendToChild(divGarageBorderElement, divGarageInfoElement);
        this.creater.appendToChild(divGarageInfoElement, spanGarageCountElement);

        this.creater.appendToChild(divGarageBorderElement, divGaragePage);
        this.creater.appendToChild(divGaragePage, spanGaragePageCountElement);

        this.creater.appendToChild(divGarageBorderElement, divGarageItesmElement);
    }

    public renderCarItem() {
        const arrayOfTags: Array<string> = [
            'div',
            'div',
            'button',
            'button',
            'p',
            'div',
            'div',
            'button',
            'button',
            'div',
            'div',
            'div',
            'div',
        ];

        const arrayOfClassName: TArrayClassName = [
            ['car'],
            ['car__setting'],
            ['car__select'],
            ['car__remove'],
            ['car__name'],
            ['car__race'],
            ['car__move'],
            ['car__start'],
            ['car__back'],
            ['car__track'],
            ['car__item'],
            ['car__finish'],
            ['car__ground'],
        ];

        const [
            divCarElement,
            carSettingElement,
            buttonCarSelectElement,
            buttonCarRemoveElement,
            pCarNameElement,
            divCarRaceElement,
            divCarMove,
            buttonCarStartElement,
            buttonCarBackElement,
            divCarTrackElement,
            divCarItemElement,
            divCarFinishElement,
            divCarGroundElement,
        ] = this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName) as TCarItem;

        //FIXME: Remove later
        /*         const divCarElement = this.creater.createHTMLElement('div', ['car']);
        const carSettingElement = this.creater.createHTMLElement('div', ['car__setting']);
        const buttonCarSelectElement = this.creater.createHTMLElement('button', ['car__select']) as HTMLButtonElement;
        const buttonCarRemoveElement = this.creater.createHTMLElement('button', ['car__remove']) as HTMLButtonElement;
        const pCarNameElement = this.creater.createHTMLElement('p', ['car__name']);
        const divCarRaceElement = this.creater.createHTMLElement('div', ['car__race']);
        const divCarMove = this.creater.createHTMLElement('div', ['car__move']);
        const buttonCarStartElement = this.creater.createHTMLElement('button', ['car__start']);
        const buttonCarBackElement = this.creater.createHTMLElement('button', ['car__back']);
        const divCarTrackElement = this.creater.createHTMLElement('div', ['car__track']);
        const divCarItemElement = this.creater.createHTMLElement('div', ['car__item']);
        const divCarFinishElement = this.creater.createHTMLElement('div', ['car__finish']);
        const divCarGroundElement = this.creater.createHTMLElement('div', ['car__ground']); */

        this.creater.AddTextContentToHTMLElement(buttonCarStartElement, 'X');
        this.creater.AddTextContentToHTMLElement(buttonCarBackElement, 'Y');
        this.creater.AddTextContentToHTMLElement(buttonCarSelectElement, 'Select');
        this.creater.AddTextContentToHTMLElement(buttonCarRemoveElement, 'Remove');

        const divGarageItemsElement = this.creater.getHTMLElement('garage__items');
        this.creater.appendToChild(divGarageItemsElement, divCarElement);
        this.creater.appendToChild(divCarElement, carSettingElement);
        this.creater.appendToChild(divCarElement, divCarRaceElement);

        //Car Settings
        this.creater.appendToChild(divCarElement, buttonCarSelectElement);
        this.creater.appendToChild(divCarElement, buttonCarRemoveElement);
        this.creater.appendToChild(divCarElement, pCarNameElement);

        //car race
        this.creater.appendToChild(divCarRaceElement, divCarMove);
        this.creater.appendToChild(divCarRaceElement, divCarGroundElement);

        //car move
        this.creater.appendToChild(divCarMove, buttonCarStartElement);
        this.creater.appendToChild(divCarMove, buttonCarBackElement);
        this.creater.appendToChild(divCarMove, divCarTrackElement);
        //
        this.creater.appendToChild(divCarTrackElement, divCarItemElement);

        this.creater.appendToChild(divCarMove, divCarFinishElement);
    }
}

export class Garage extends CreatorGarage {
    constructor(creater: Router) {
        super(creater);
    }

    public initialEmptyGarage() {
        this.renderMainWrapper();
        this.renderStatus();
        this.renderGarageCreateCar();
        this.renderGarageUpdate();
        this.renderGarageSettingsBtn();
        this.renderCarGarage();
        this.renderCarItem();
    }

    public renderPageWithRemove() {
        const mainBorderNode = this.creater.getHTMLElement('main__border');
        this.creater.removeChildNode(mainBorderNode);
        this.renderStatus();
        this.renderGarageCreateCar();
        this.renderGarageUpdate();
        this.renderGarageSettingsBtn();
        this.renderCarGarage();
        this.renderCarItem();
        this.getAllListener();
    }

    public EventCreateCar() {
        const btnCreateCar = this.creater.getHTMLElement('input__button');
        btnCreateCar.addEventListener('click', () => {
            void this.creater.createCar();
        });
    }

    public EventUpdateCar() {
        const btnUpdateCar = this.creater.getHTMLElement('update__button');
        btnUpdateCar.addEventListener('click', () => {
            void this.creater.UpdateCar();
        });
    }

    public EventRaceCar() {
        const btnRaceCar = this.creater.getHTMLElement('race__button');
        btnRaceCar.addEventListener('click', () => {
            void this.creater.raceAllCar();
        });
    }

    public EventResetCar() {
        const btnRaceReset = this.creater.getHTMLElement('race__reset');
        btnRaceReset.addEventListener('click', () => {
            void this.creater.raceResetCar();
        });
    }

    public EventGenerateManyCar() {
        const btnGenerateCar = this.creater.getHTMLElement('race__generate');
        btnGenerateCar.addEventListener('click', () => {
            void this.creater.raceResetCar();
        });
    }

    public EventStartCarMove() {
        const getBtnCarMove = this.creater.getHTMLElement('car__start');
        getBtnCarMove.addEventListener('click', () => {
            void this.creater.startCar();
        });
    }

    public EventReturCarToPrevPosition() {
        const getBtnCarToPrevPosition = this.creater.getHTMLElement('car__back');
        getBtnCarToPrevPosition.addEventListener('click', () => {
            void this.creater.removeCarToPreviousPos();
        });
    }

    public EventSelectCar() {
        const getBtnCarSelect = this.creater.getHTMLElement('car__select');
        getBtnCarSelect.addEventListener('click', () => {
            void this.creater.selectCar('4');
        });
    }

    public EventRemoveCar() {
        const getBtnCarRemove = this.creater.getHTMLElement('car__remove');
        getBtnCarRemove.addEventListener('click', () => {
            void this.creater.removeCar('1');
        });
    }

    public EventInputCreateColor() {
        const getColorValue = this.creater.getHTMLElement('input__color');
        getColorValue.addEventListener('change', () => {
            const hexColor = this.creater.getColorFromCreateInput();
            const colorRgb = this.creater.hexToRgbColor(hexColor);
            console.log(colorRgb);
            return colorRgb;
        });
    }

    public getAllListener() {
        this.EventCreateCar();
        this.EventUpdateCar();
        this.EventRaceCar();
        this.EventResetCar();
        this.EventGenerateManyCar();
        this.EventStartCarMove();
        this.EventReturCarToPrevPosition();
        this.EventSelectCar();
        this.EventRemoveCar();
        this.EventInputCreateColor();
    }
}
