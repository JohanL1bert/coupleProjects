import { App } from '../routing';

class CreatorGarage {
    creater: App;
    constructor(creater: App) {
        this.creater = creater;
    }

    public renderMainWrapper() {
        const mainElement = this.creater.createHTMLElement('main', ['main']);
        const containerElement = this.creater.createHTMLElement('div', ['container']);
        const mainInnerElement = this.creater.createHTMLElement('div', ['main__inner']);
        const mainBorderElement = this.creater.createHTMLElement('div', ['main__border']);
        const sectionGarageElement = this.creater.createHTMLElement('section', ['garage']);
        const divGarageInnerElement = this.creater.createHTMLElement('div', ['garage__inner']);
    }

    public renderStatus() {
        const divGarageWrapperElement = this.creater.createHTMLElement('div', ['garage__wrapper']);
        const divRaceElement = this.creater.createHTMLElement('div', ['race']);
        const divRaceFlagElement = this.creater.createHTMLElement('div', ['race__flag']);
        const divRaceInfoElement = this.creater.createHTMLElement('div', ['race__info']);
        const spanRaceTextelement = this.creater.createHTMLElement('span', ['race__text']);
        const spanRaceWinnerElement = this.creater.createHTMLElement('span', ['span_winner']);
        const divGarageSettingsElement = this.creater.createHTMLElement('div', ['garage__settings']);
        const divGarageSettingsInputElement = this.creater.createHTMLElement('div', ['garage__settings__input']);
    }

    public renderGarageCreateCar() {
        //TODO: /Инпуты дописать классы
        const inputText = this.creater.createHTMLElement('input', ['inputCLass']);
        const inputColorElement = this.creater.createHTMLElement('input', ['input__color']);
        const buttonInputButtonelement = this.creater.createHTMLElement('button', ['input__button']);
    }

    public renderGarageUpdate() {
        //Секция Update
        const divGarageSettingsUpdateElement = this.creater.createHTMLElement('div', ['garage__settings__update']);
        //Еще один инпут должен быть
        const inputUpdateColorElement = this.creater.createHTMLElement('input', ['update__color']);
        const buttonUpdateButtonElement = this.creater.createHTMLElement('button', ['update__button']);
    }

    public renderGarageSettingsBtn() {
        //Секция Кнопок рейс
        const divGarageSettingRaceElement = this.creater.createHTMLElement('div', ['garage__settings__race']);
        const buttonRaceButtonElement = this.creater.createHTMLElement('button', ['race__button']);
        const buttonRaceResetElement = this.creater.createHTMLElement('button', ['race__reset']);
        const buttonRaceGenerateElement = this.creater.createHTMLElement('button', ['race__generate']);
    }

    public renderCarGarage() {
        //Секция Гаража
        const divGarageBorderElement = this.creater.createHTMLElement('div', ['garage__border']);
        const divGarageInfoElement = this.creater.createHTMLElement('div', ['garage__info']);
        const spanGarageCountElement = this.creater.createHTMLElement('span', ['garage__count']);
        const divGaragePage = this.creater.createHTMLElement('div', ['garage__page']);
        const spanGaragePageCountElement = this.creater.createHTMLElement('span', ['garage__page__count']);
        const divGarageItesmElement = this.creater.createHTMLElement('div', ['garage__items']);
    }

    public renderCarItem() {
        const divCarElement = this.creater.createHTMLElement('div', ['car']);
        const carSettingElement = this.creater.createHTMLElement('div', ['car__setting']);
        const buttonCarSelectElement = this.creater.createHTMLElement('button', ['car__seleect']);
        const buttonCarRemoveElement = this.creater.createHTMLElement('button', ['car__remove']);
        const pCarNameElement = this.creater.createHTMLElement('p', ['car__name']);
        const divCarRaceElement = this.creater.createHTMLElement('div', ['car__race']);
        const buttonCarMove = this.creater.createHTMLElement('div', ['car__move']);
        const buttonCarStartElement = this.creater.createHTMLElement('button', ['car__start']);
        const buttonCarBackElement = this.creater.createHTMLElement('button', ['car__back']);
        const divCarTrackElement = this.creater.createHTMLElement('div', ['car__track']);
        const divCarItemElement = this.creater.createHTMLElement('div', ['car__item']);
        const divCarFinishElement = this.creater.createHTMLElement('div', ['car__finish']);
        const divCarGroundElement = this.creater.createHTMLElement('div', ['car__ground']);
    }
}

export class Garage extends CreatorGarage {
    constructor(creater: App) {
        super(creater);
    }

    public render() {}
}
