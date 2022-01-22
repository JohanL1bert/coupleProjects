import { UpdateManager } from '../routing';
import { TArrayClassName } from '../interfaces/interface';
import { StateManager } from '../state';

class CreateWinners {
    creater: UpdateManager;
    state: StateManager;
    constructor(creater: UpdateManager, state: StateManager) {
        this.creater = creater;
        this.state = state;
    }

    public createSectionWinners() {
        const arrayOfTags: Array<string> = ['section', 'div', 'div', 'span', 'div'];
        const arrayOfClassName: TArrayClassName = [
            ['winners'],
            ['winner__inner'],
            ['winners__status'],
            ['winners__count'],
            ['winners__page'],
        ];

        const [
            sectionWinnersElement,
            divWinnersInnerElement,
            divWinenrStatusElement,
            spanWinnerCountElement,
            divWinnerPageElement,
        ] = this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        const mainBorderElement = this.creater.getHTMLElement('main__border');

        this.creater.appendToChild(mainBorderElement, sectionWinnersElement);
        this.creater.appendToChild(sectionWinnersElement, divWinnersInnerElement);
        this.creater.appendToChild(divWinenrStatusElement, spanWinnerCountElement);
        this.creater.appendToChild(divWinnersInnerElement, divWinnerPageElement);
    }

    public createTable() {
        const arrayOfTags: Array<string> = ['table', 'thead', 'tr', 'th' /* 'tbody', 'td' */];
        const arrayOfClassName: TArrayClassName = [['table']];
        const [tableElement, theadeElement, trElement, thElement /* tbodyElement, tdElement */, ,] =
            this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        const parentNode = this.creater.getHTMLElement('winners__page');
        this.creater.appendToChild(parentNode, tableElement);
        this.creater.appendToChild(tableElement, theadeElement);
        this.creater.appendToChild(theadeElement, trElement);

        tableElement.setAttribute('border', '5');
        this.creater.cloneNodeCustom(thElement, 5);

        const value = this.creater.cloneNodeCustom(thElement, 5);
        trElement.append(...value);
        const arrayEl = this.creater.getAllHTMLElement('th');
        const toArray = Array.from(arrayEl);
        this.creater.AddTextContentMultiple(toArray, ['Number', 'Car', 'Name', 'Winner', 'Best Time (second)']);
        //
        /*       this.creater.appendToChild(tableElement, tbodyElement);
        this.creater.appendToChild(tbodyElement, tdElement);
        this.creater.appendToChild(tbodyElement, tdElement);
        this.creater.appendToChild(tbodyElement, tdElement);
        this.creater.appendToChild(tbodyElement, tdElement);
        this.creater.appendToChild(tbodyElement, tdElement); */
    }
}

export class Winners extends CreateWinners {
    constructor(creater: UpdateManager, state: StateManager) {
        super(creater, state);
    }

    public renderWinners() {
        const mainBorderNode = this.creater.getHTMLElement('main__border');
        this.creater.removeChildNode(mainBorderNode);
        this.createSectionWinners();
        this.createTable();
    }

    //Перенести в роутинг
    /*  public async getWinners() {
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

    public async getWinenr() {
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

    public async createWinner() {
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

    public async deleteWinner() {
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

    public async updateWinner() {
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
    } */
}
