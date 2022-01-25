import { UpdateManager } from '../routing';
import { TArrayClassName, TCarItem, TGarageSet, TColorText, IcreateCar } from '../interfaces/interface';
import { StateManager } from '../state';

class CreatorGarage {
    updateManager: UpdateManager;
    baseUrl: string;
    state: StateManager;
    constructor(updateManager: UpdateManager, state: StateManager) {
        this.updateManager = updateManager;
        this.baseUrl = `http://127.0.0.1:3000`;
        this.state = state;
    }

    public renderMainWrapper() {
        const arrayOfTags: Array<string> = ['main', 'div', 'div', 'div'];
        const arrayOfClassName: TArrayClassName = [['main'], ['container'], ['main__inner'], ['main__border']];

        const [mainElement, containerElement, mainInnerElement, mainBorderElement] =
            this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        const headerEl = this.updateManager.getHTMLElement('header');
        this.updateManager.appendToNeighbor(headerEl, mainElement);
        this.updateManager.appendToChild(mainElement, containerElement);
        this.updateManager.appendToChild(containerElement, mainInnerElement);
        this.updateManager.appendToChild(mainInnerElement, mainBorderElement);
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
        ] = this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        this.updateManager.AddTextContentToHTMLElement(spanRaceTextelement, 'Winner:');
        this.updateManager.AddTextContentToHTMLElement(spanRaceWinnerElement, '');

        //Append
        const mainBorderElement = this.updateManager.getHTMLElement('main__border');
        this.updateManager.appendToChild(mainBorderElement, sectionGarageElement);
        this.updateManager.appendToChild(sectionGarageElement, divGarageInnerElement);
        this.updateManager.appendToChild(divGarageInnerElement, divGarageWrapperElement);
        this.updateManager.appendToChild(divGarageWrapperElement, divRaceElement);
        this.updateManager.appendToChild(divRaceElement, divRaceFlagElement);
        this.updateManager.appendToChild(divRaceElement, divRaceInfoElement);
        this.updateManager.appendToChild(divRaceInfoElement, spanRaceTextelement);
        this.updateManager.appendToChild(spanRaceTextelement, spanRaceWinnerElement);
        this.updateManager.appendToNeighbor(divRaceElement, divGarageSettingsElement);
    }

    public renderGarageCreateCar() {
        const arrayOfTags: Array<string> = ['div', 'input', 'input', 'button'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__settings__input'],
            ['input__name'],
            ['input__color'],
            ['input__button'],
        ];

        const [divGarageSettingsInputElement, inputTextElement, inputColorElement, buttonInputButtonelement] =
            this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName) as TGarageSet;

        inputTextElement.type = 'text';
        inputTextElement.setAttribute('placeholder', '');
        inputTextElement.setAttribute('value', '');
        const { name }: TColorText = this.state.mainObject.objectColorName;
        this.updateManager.changePlaceHolder(inputTextElement, name);
        this.updateManager.changeValueForm(inputTextElement, name);

        inputColorElement.type = 'color';

        this.updateManager.AddTextContentToHTMLElement(buttonInputButtonelement, 'create');

        const divGarageElement = this.updateManager.getHTMLElement('garage__settings');
        //Append
        this.updateManager.appendToChild(divGarageElement, divGarageSettingsInputElement);
        this.updateManager.appendToChild(divGarageSettingsInputElement, inputTextElement);
        this.updateManager.appendToChild(divGarageSettingsInputElement, inputColorElement);
        this.updateManager.appendToChild(divGarageSettingsInputElement, buttonInputButtonelement);
    }

    public renderGarageUpdate() {
        const arrayOfTags: Array<string> = ['div', 'input', 'input', 'button'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__settings__update'],
            ['input__update'],
            ['update__color'],
            ['update__button'],
        ];

        const [divGarageSettingsUpdateElement, inputTextElement, inputUpdateColorElement, buttonUpdateButtonElement] =
            this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName) as TGarageSet;

        inputTextElement.type = 'text';
        inputTextElement.setAttribute('placeholder', '');
        inputTextElement.setAttribute('value', '');
        const { name }: TColorText = this.state.mainObject.updateColorName;
        this.updateManager.changePlaceHolder(inputTextElement, name);
        this.updateManager.changeValueForm(inputTextElement, name);
        inputUpdateColorElement.type = 'color';

        this.updateManager.AddTextContentToHTMLElement(buttonUpdateButtonElement, 'update');

        const divGarageElement = this.updateManager.getHTMLElement('garage__settings');
        this.updateManager.appendToChild(divGarageElement, divGarageSettingsUpdateElement);
        this.updateManager.appendToChild(divGarageSettingsUpdateElement, inputTextElement);
        this.updateManager.appendToChild(divGarageSettingsUpdateElement, inputUpdateColorElement);
        this.updateManager.appendToChild(divGarageSettingsUpdateElement, buttonUpdateButtonElement);
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
        ] = this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName) as [
            HTMLElement,
            HTMLButtonElement,
            HTMLButtonElement,
            HTMLButtonElement
        ];

        //Секция Кнопок рейс
        this.updateManager.AddTextContentToHTMLElement(buttonRaceButtonElement, 'race');
        this.updateManager.AddTextContentToHTMLElement(buttonRaceResetElement, 'reset');
        this.updateManager.AddTextContentToHTMLElement(buttonRaceGenerateElement, 'generate cars');

        const divGarageElement = this.updateManager.getHTMLElement('garage__settings');
        this.updateManager.appendToChild(divGarageElement, divGarageSettingRaceElement);
        this.updateManager.appendToChild(divGarageSettingRaceElement, buttonRaceButtonElement);
        this.updateManager.appendToChild(divGarageSettingRaceElement, buttonRaceResetElement);
        this.updateManager.appendToChild(divGarageSettingRaceElement, buttonRaceGenerateElement);
    }

    public renderCarGarage() {
        const arrayOfTags: Array<string> = ['div', 'div', 'span', 'div', 'span', 'div'];
        const arrayOfClassName: TArrayClassName = [
            ['garage__border'],
            ['garage__info'],
            ['garage__count'],
            ['garage__page'],
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
        ] = this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        //Секция Гаража

        divGarageInfoElement.textContent = 'Garage';
        divGaragePage.textContent = 'Page';

        const divGarageElement = this.updateManager.getHTMLElement('garage__inner');
        this.updateManager.appendToNeighbor(divGarageElement, divGarageBorderElement);
        this.updateManager.appendToChild(divGarageBorderElement, divGarageInfoElement);
        this.updateManager.appendToChild(divGarageInfoElement, spanGarageCountElement);

        this.updateManager.appendToChild(divGarageBorderElement, divGaragePage);
        this.updateManager.appendToChild(divGaragePage, spanGaragePageCountElement);

        this.updateManager.appendToChild(divGarageBorderElement, divGarageItesmElement);
    }

    public renderCarItem({ name, color, id }: IcreateCar) {
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
            'span',
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
            divCarFinishElement,
            divCarGroundElement,
        ] = this.updateManager.createHTMLElementArray(arrayOfTags, arrayOfClassName) as TCarItem;

        this.updateManager.AddTextContentToHTMLElement(buttonCarStartElement, 'X');
        this.updateManager.AddTextContentToHTMLElement(buttonCarBackElement, 'Y');
        this.updateManager.AddTextContentToHTMLElement(buttonCarSelectElement, 'Select');
        this.updateManager.AddTextContentToHTMLElement(buttonCarRemoveElement, 'Remove');
        this.updateManager.AddTextContentToHTMLElement(pCarNameElement, name);

        const getSVG = this.updateManager.createSVG(color);
        divCarTrackElement.innerHTML += getSVG;

        divCarElement.setAttribute('data-value', `${id}`);

        const divGarageItemsElement = this.updateManager.getHTMLElement('garage__items');
        this.updateManager.appendToChild(divGarageItemsElement, divCarElement);
        this.updateManager.appendToChild(divCarElement, carSettingElement);
        this.updateManager.appendToChild(divCarElement, divCarRaceElement);

        //Car Settings
        this.updateManager.appendToChild(carSettingElement, buttonCarSelectElement);
        this.updateManager.appendToChild(carSettingElement, buttonCarRemoveElement);
        this.updateManager.appendToChild(carSettingElement, pCarNameElement);

        //car race
        this.updateManager.appendToChild(divCarRaceElement, divCarMove);
        this.updateManager.appendToChild(divCarRaceElement, divCarGroundElement);

        //car move
        this.updateManager.appendToChild(divCarMove, buttonCarStartElement);
        this.updateManager.appendToChild(divCarMove, buttonCarBackElement);
        this.updateManager.appendToChild(divCarMove, divCarTrackElement);
        //

        this.updateManager.appendToChild(divCarTrackElement, divCarFinishElement);
    }
}

export class Garage extends CreatorGarage {
    constructor(updateManager: UpdateManager, state: StateManager) {
        super(updateManager, state);
    }

    public renderPageWithRemove() {
        const mainBorderNode = this.updateManager.getHTMLElement('main__border');
        this.updateManager.removeChildNode(mainBorderNode);
        this.renderStatus();
        this.renderGarageCreateCar();
        this.renderGarageUpdate();
        this.renderGarageSettingsBtn();
        this.renderCarGarage();
    }

    public updateGarage() {
        const { garageCount, pageCount, winnerState } = this.state.mainObject.currentData;
        const garage = this.updateManager.getHTMLElement('garage__count');
        garage.textContent = String(`(${garageCount})`);
        const page = this.updateManager.getHTMLElement('garage__page__count');
        const spanWinner = this.updateManager.getHTMLElement('span__winner');
        spanWinner.textContent = winnerState as string;
        page.textContent = String(`${pageCount}`);
    }
}
