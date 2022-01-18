import { Router } from '../routing';

class CreatorGarage {
    creater: Router;
    constructor(creater: Router) {
        this.creater = creater;
    }

    public renderMainWrapper() {
        const mainElement = this.creater.createHTMLElement('main', ['main']);
        const containerElement = this.creater.createHTMLElement('div', ['container']);
        const mainInnerElement = this.creater.createHTMLElement('div', ['main__inner']);
        const mainBorderElement = this.creater.createHTMLElement('div', ['main__border']);
        const sectionGarageElement = this.creater.createHTMLElement('section', ['garage']);
        const divGarageInnerElement = this.creater.createHTMLElement('div', ['garage__inner']);

        //Append
        const headerEl = this.creater.getHTMLElement('header');
        this.creater.appendToNeighbor(headerEl, mainElement);
        this.creater.appendToChild(mainElement, containerElement);
        this.creater.appendToChild(containerElement, mainInnerElement);
        this.creater.appendToChild(mainInnerElement, mainBorderElement);
        this.creater.appendToChild(mainBorderElement, sectionGarageElement);
        this.creater.appendToChild(sectionGarageElement, divGarageInnerElement);
    }

    public renderStatus() {
        const divGarageWrapperElement = this.creater.createHTMLElement('div', ['garage__wrapper']);
        const divRaceElement = this.creater.createHTMLElement('div', ['race']);
        const divRaceFlagElement = this.creater.createHTMLElement('div', ['race__flag']);
        const divRaceInfoElement = this.creater.createHTMLElement('div', ['race__info']);
        const spanRaceTextelement = this.creater.createHTMLElement('span', ['race__text']);
        const spanRaceWinnerElement = this.creater.createHTMLElement('span', ['span_winner']);
        const divGarageSettingsElement = this.creater.createHTMLElement('div', ['garage__settings']);

        this.creater.AddTextContentToHTMLElement(spanRaceTextelement, 'Winner:');
        this.creater.AddTextContentToHTMLElement(spanRaceWinnerElement, 'Number one');

        //Append
        const divGarageInnerElement = this.creater.getHTMLElement('garage__inner');
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
        const divGarageSettingsInputElement = this.creater.createHTMLElement('div', ['garage__settings__input']);
        const inputTextElement = this.creater.createHTMLElement('input', ['inputCLass']) as HTMLInputElement;
        const inputColorElement = this.creater.createHTMLElement('input', ['input__color']) as HTMLInputElement;
        const buttonInputButtonelement = this.creater.createHTMLElement('button', [
            'input__button',
        ]) as HTMLButtonElement;

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
        //Секция Update
        const divGarageSettingsUpdateElement = this.creater.createHTMLElement('div', ['garage__settings__update']);
        //Еще один инпут должен быть
        const inputTextElement = this.creater.createHTMLElement('input', ['input__element']) as HTMLInputElement;
        const inputUpdateColorElement = this.creater.createHTMLElement('input', ['update__color']) as HTMLInputElement;
        const buttonUpdateButtonElement = this.creater.createHTMLElement('button', ['update__button']);

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
        //Секция Кнопок рейс
        const divGarageSettingRaceElement = this.creater.createHTMLElement('div', ['garage__settings__race']);
        const buttonRaceButtonElement = this.creater.createHTMLElement('button', ['race__button']) as HTMLButtonElement;
        const buttonRaceResetElement = this.creater.createHTMLElement('button', ['race__reset']) as HTMLButtonElement;
        const buttonRaceGenerateElement = this.creater.createHTMLElement('button', [
            'race__generate',
        ]) as HTMLButtonElement;

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
        //Секция Гаража
        const divGarageBorderElement = this.creater.createHTMLElement('div', ['garage__border']);
        const divGarageInfoElement = this.creater.createHTMLElement('div', ['garage__info']);
        const spanGarageCountElement = this.creater.createHTMLElement('span', ['garage__count']);
        const divGaragePage = this.creater.createHTMLElement('div', ['garage__page']);
        const spanGaragePageCountElement = this.creater.createHTMLElement('span', ['garage__page__count']);
        const divGarageItesmElement = this.creater.createHTMLElement('div', ['garage__items']);

        const divGarageElement = this.creater.getHTMLElement('garage__inner');
        this.creater.appendToNeighbor(divGarageElement, divGarageBorderElement);
        this.creater.appendToChild(divGarageBorderElement, divGarageInfoElement);
        this.creater.appendToChild(divGarageInfoElement, spanGarageCountElement);

        this.creater.appendToChild(divGarageBorderElement, divGaragePage);
        this.creater.appendToChild(divGaragePage, spanGaragePageCountElement);

        this.creater.appendToChild(divGarageBorderElement, divGarageItesmElement);
    }

    public renderCarItem() {
        const divCarElement = this.creater.createHTMLElement('div', ['car']);
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
        const divCarGroundElement = this.creater.createHTMLElement('div', ['car__ground']);

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
}
