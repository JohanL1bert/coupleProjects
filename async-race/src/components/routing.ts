import { IcreateCar, TArrayClassName } from '../components/interfaces/interface';
import hexRgb, { RgbaObject } from 'hex-rgb';

class Creater {
    private mainBody: HTMLElement;
    baseUrl: string;
    garage: string;
    engine: string;
    constructor() {
        this.mainBody = document.getElementById('root') as HTMLElement;
        this.baseUrl = `http://127.0.0.1:3000`;
        this.garage = `${this.baseUrl}/garage`;
        this.engine = `${this.baseUrl}/engine`;
    }

    public createHTMLElement(element: string, classElement: string[]) {
        const createdElement = document.createElement(`${element}`);
        createdElement.classList.add(...classElement);
        return createdElement;
    }

    public createHTMLElementArray(elementName: string[], classList: string[][]) {
        return elementName.map((className, index) => {
            const element = document.createElement(`${className}`);
            const getClassName = classList[index];
            element.classList.add(...getClassName);
            return element;
        });
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

    public removeChildNode(node: HTMLElement) {
        node.replaceChildren();
    }

    public hexToRgbColor(value: string) {
        const rgbColor: RgbaObject = hexRgb(value);
        return rgbColor;
    }

    public changeColor() {
        const getElement = this.getHTMLElement('car__item');
    }

    private createHeader() {
        const arrayOfTags: Array<string> = ['header', 'div', 'div', 'nav', 'ul', 'li', 'a', 'li', 'a'];
        const arrayOfClassName: TArrayClassName = [
            ['header'],
            ['container'],
            ['header__inner'],
            ['navigation'],
            ['navigation__menu'],
            ['navigation__garage'],
            ['navigation__garage__link'],
            ['navigation__winners'],
            ['navigation__winners__link'],
        ];

        const [
            headerElement,
            containerElement,
            headerInnerElement,
            navElement,
            ulElement,
            liElement,
            aElement,
            liElementWinners,
            aElementWinners,
        ] = this.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        //FIXME: Remove later
        /*         const headerElement = this.createHTMLElement('header', ['header']);
        const containerElement = this.createHTMLElement('div', ['container']);
        const headerInnerElement = this.createHTMLElement('div', ['header__inner']);
        const navElement = this.createHTMLElement('nav', ['navigation']);
        const ulElement = this.createHTMLElement('ul', ['navigation__menu']);
        const liElement = this.createHTMLElement('li', ['navigation__garage']);
        const aElement = this.createHTMLElement('a', ['navigation__garage__link']);
        const liElementWinners = this.createHTMLElement('li', ['navigation__winners']);
        const aElementWinners = this.createHTMLElement('a', ['navigation__winners__link']); */

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
        const arrayofTags: Array<string> = ['foooter', 'div', 'div', 'div', 'p', 'p', 'a'];
        const arrayOfClassName: TArrayClassName = [
            ['footer'],
            ['container'],
            ['main__footer__inner'],
            ['footer__creator'],
            ['copyright'],
            ['year__create'],
            ['github__link'],
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

        //FIXME: Remove later
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

    public getColorFromCreateInput() {
        const inputColor = this.getHTMLElement('input__color') as HTMLInputElement;
        const color = inputColor.value;
        return color;
    }

    public randomColor() {}

    public randomModelCar() {
        const modelsCars: Array<string> = [
            'Roadster',
            'S',
            'X',
            '3',
            'Y',
            'Cybertruck',
            'X5',
            'X7',
            'X3',
            'X6',
            'GT4',
            'FXX',
            '599 GTO',
            'Enzo',
            '458 Italia',
            '250 GTO',
            'Priora',
            '4x4',
            'Rio',
            'Focus',
            'Kalina',
            'Vesta',
            'Spark',
            'Lacetti',
            'Nexia',
            'Matiz',
            'Cobalt',
            'Captiva',
            'A7',
            'A5',
            'A3',
            'A8',
            'TT',
            'Corolla',
            'Camry',
            'RAV4',
            'Impreza',
            'WRX',
            'ES',
            'LS',
            'RX',
            'GX',
            'LX',
            'GS',
            'LC500',
            'Gallardo',
            'Aventador',
            '911',
            'Cayenne',
            'FX37',
        ];
    }

    public randomName() {
        const brandsCars: Array<string> = [
            'Audi',
            'Alfa Romeo',
            'Alpina',
            'Aston Martin',
            'Axon',
            'Ford',
            'Ferrari',
            'Fiat',
            'GAZ',
            'GMC',
            'Honda',
            'Hummer',
            'Hyundai',
            'Infiniti',
            'Isuzu',
            'JAC',
            'Jaguar',
            'Jeep',
            'Kamaz',
            'Lada',
            'Lexus',
            'Lotus',
            'MAN',
            'Maybach',
            'MAZ',
            'Mazda',
            'McLaren',
            'Nissan',
            'Opel',
            'Paccar',
            'Pagani',
            'Pontiac',
            'Porsche',
            'Renault',
            'Å koda',
            'Smart',
            'Subaru',
            'Suzuki',
            'Tesla',
            'Toyota',
            'UAZ',
            'Volvo',
            'ZAZ',
            'XPeng',
            'TVR',
            'Saab',
            'RAM',
            'Chevrolet',
            'Mazzanti',
            'Daewoo',
        ];
    }

    //Переписать. Добавить енумы. Возвращать что-то явно
    public async errorHandler(res: Response) {
        if (res.ok) {
            return res.json();
        }

        if (res.status === 404) {
            throw new Error(res.statusText);
        }

        if (res.status === 400) {
            throw new Error(res.statusText);
        }

        if (res.status === 429) {
            throw new Error(res.statusText);
        }

        if (res.status === 500) {
            throw new Error(res.statusText);
        }
    }

    //Testins Нужно подумать куда лучше это вынести
    public async createCar(carObj: Pick<IcreateCar, 'name' | 'color'>) {
        try {
            const response = await fetch(`${this.garage}`, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify(carObj),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as IcreateCar; //Переписать
            console.log(res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async updateCar(id: number, carObj: Pick<IcreateCar, 'name' | 'color'>) {
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'PUT',
                cache: 'no-cache',
                body: JSON.stringify(carObj),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async raceAllCar() {
        await console.log('race all');
        try {
        } catch (err) {}
    }

    public async raceResetCar() {
        try {
        } catch (err) {}
    }

    public async generateCar() {
        /* const response = await fetch(`${this.baseUrl}`); */
    }

    public async startCar(id: number) {
        try {
            const response = await fetch(`${this.engine}?id=${id}&status=started`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async removeCarToPreviousPos(id: number) {
        try {
            const response = await fetch(`${this.engine}?id=${id}&status=stopped`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async selectCar(id: number) {
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'GET',
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log(res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async removeCar(id: number) {
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'DELETE',
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log(res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }
}
