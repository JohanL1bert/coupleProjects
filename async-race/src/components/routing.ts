export class App {
    private mainBody: HTMLElement;

    constructor() {
        this.mainBody = document.getElementById('root') as HTMLElement;
    }

    private createHTMLElement(element: string, classElement: string[]) {
        const createdElement = document.createElement(`${element}`);
        createdElement.classList.add(...classElement);
        return createdElement;
    }

    private classListRemoveFromElement() {}

    private appendToChild(elementToAppend: HTMLElement, appendChildElement: HTMLElement) {
        elementToAppend.appendChild(appendChildElement);
    }

    private AddTextContentToHTMLElement() {}

    public getHTMLElement(elementName: string) {
        const getElement = document.querySelector(`.${elementName}`) as HTMLElement;
        if (getElement === null) {
            throw new Error(`${elementName}, null is element`);
        }
        return getElement;
    }

    public getAllHTMLElement(elementArray: string) {}

    private createHeader() {
        const headerElement = this.createHTMLElement('header', ['header']);
        const containerElement = this.createHTMLElement('div', ['container']);
        const headerInnerElement = this.createHTMLElement('div', ['header__inner']);
        const navElement = this.createHTMLElement('nav', ['navigation']);
        const ulElement = this.createHTMLElement('ul', ['navigation__menu']);
        const liElement = this.createHTMLElement('li', ['navigation__garage']);
        const aElement = this.createHTMLElement('a', ['navigation__garage__link']);
        const liElementWinners = this.createHTMLElement('li', ['navigation__winners']);
        const aElementWinners = this.createHTMLElement('a', ['navigation__winners__link']);

        //Append Section
        this.appendToChild(this.mainBody, headerElement);
        this.appendToChild(headerElement, containerElement);
        this.appendToChild(containerElement, headerInnerElement);
        this.appendToChild(headerInnerElement, navElement);

        //Navigation
        this.appendToChild(navElement, ulElement);
        this.appendToChild(ulElement, liElement);
        this.appendToChild(liElement, aElement);
        //
        this.appendToChild(ulElement, liElementWinners);
        this.appendToChild(liElementWinners, aElementWinners);
    }

    private createFooter() {
        const footerElement = this.createHTMLElement('footer', ['footer']);
        const containerElement = this.createHTMLElement('div', ['container']);
        const footerInnerElement = this.createHTMLElement('div', ['main__footer__inner']);
        const footerCreator = this.createHTMLElement('div', ['footer__creator']);
        const pCopyrightElement = this.createHTMLElement('p', ['copyright']);
        const pYearelement = this.createHTMLElement('p', ['year__create']);
        const aGithubElement = this.createHTMLElement('a', ['github__link']);

        const foooterLogoElement = this.createHTMLElement('div', ['footer__logo']);

        //Append Section
        this.appendToChild(this.mainBody, footerElement);
        this.appendToChild(footerElement, containerElement);
        this.appendToChild(containerElement, footerInnerElement);
        this.appendToChild(footerInnerElement, footerCreator);
        this.appendToChild(footerCreator, pCopyrightElement);
        this.appendToChild(footerCreator, pYearelement);
        this.appendToChild(footerCreator, aGithubElement);

        this.appendToChild(footerInnerElement, foooterLogoElement);
    }

    public buttonGar() {
        console.log('13');
    }

    public buttonWin() {
        console.log('9123');
    }

    private createMain() {
        const mainElement = this.createHTMLElement('main', ['main']);
        const containerElement = this.createHTMLElement('div', ['container']);
        const mainInnerElement = this.createHTMLElement('div', ['main__inner']);

        const buttonGarage = this.getHTMLElement('navigation__garage');
        const buttonWinners = this.getHTMLElement('navigation__winners');

        buttonGarage.addEventListener('click', this.buttonGar);
        buttonWinners.addEventListener('click', this.buttonWin);
    }

    public root() {
        this.createHeader();
        this.createFooter();
        this.createMain();
    }
}
