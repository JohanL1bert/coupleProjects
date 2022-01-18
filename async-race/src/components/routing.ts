class Creater {
    private mainBody: HTMLElement;
    constructor() {
        this.mainBody = document.getElementById('root') as HTMLElement;
    }

    public createHTMLElement(element: string, classElement: string[]) {
        const createdElement = document.createElement(`${element}`);
        createdElement.classList.add(...classElement);
        return createdElement;
    }

    public createHTMLElementArray(elementName: string[], classList: string[][]) {
        const arr = elementName.map((className, index) => {
            const element = document.createElement(`${className}`);
            const getClassName = classList[index];
            element.classList.add(...getClassName);
            return element;
        });
        return arr;
    }

    public classListRemoveFromElement() {}

    public appendToChild(elementToAppend: HTMLElement, appendChildElement: HTMLElement) {
        elementToAppend.insertAdjacentElement('beforeend', appendChildElement);
    }

    public AddTextContentToHTMLElement(element: HTMLElement, text: string) {
        element.textContent = text;
    }

    public getHTMLElement(elementName: string) {
        const getElement = document.querySelector(`.${elementName}`) as HTMLElement;
        if (getElement === null) {
            throw new Error(`${elementName}, null is element`);
        }
        return getElement;
    }

    public appendToNeighbor(firstElement: HTMLElement, secondELement: HTMLElement) {
        firstElement.insertAdjacentElement('afterend', secondELement);
    }

    public getAllHTMLElement(elementArray: string[]) {}

    public removeNodes(nodes: HTMLElement[]) {
        nodes.map((el) => el.remove());
    }

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

        //textContent
        this.AddTextContentToHTMLElement(aElement, 'Go to Garage');
        aElement.setAttribute('href', '#');

        this.AddTextContentToHTMLElement(aElementWinners, 'Go to Winners');

        aElementWinners.setAttribute('href', '#');

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
        const arrayofTags = ['foooter', 'div', 'div', 'div', 'p', 'p', 'a'];
        const arrayOfClassName = [
            ['footer'],
            ['container'],
            ['main__footer__inner'],
            ['footer__creator'],
            ['copyright', 'xd'],
            ['year__create', 'igor'],
            ['github__link', 'someAnoter', 'etx'],
        ];

        const [
            footerElement,
            containerElement,
            footerInnerElement,
            footerCreator,
            pCopyrightElement,
            pYearelement,
            aGithubElement,
        ] = this.createHTMLElementArray(arrayofTags, arrayOfClassName);

        /*         const footerElement = this.createHTMLElement('footer', ['footer']);
        const containerElement = this.createHTMLElement('div', ['container']);
        const footerInnerElement = this.createHTMLElement('div', ['main__footer__inner']);
        const footerCreator = this.createHTMLElement('div', ['footer__creator']);
        const pCopyrightElement = this.createHTMLElement('p', ['copyright']);
        const pYearelement = this.createHTMLElement('p', ['year__create']);
        const aGithubElement = this.createHTMLElement('a', ['github__link']); */

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

    public root() {
        this.createHeader();
        this.createFooter();
    }
}

export class Router extends Creater {
    constructor() {
        super();
    }
}
