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
        const arrayOfTags: Array<string> = ['table', 'thead', 'tr', 'th', 'tbody' /* 'td' */];
        const arrayOfClassName: TArrayClassName = [['table']];
        const [tableElement, theadeElement, trElement, thElement, tbodyElement /* tdElement, */, ,] =
            this.creater.createHTMLElementArray(arrayOfTags, arrayOfClassName);

        const parentNode = this.creater.getHTMLElement('winners__page');
        this.creater.appendToChild(parentNode, tableElement);
        this.creater.appendToChild(tableElement, theadeElement);
        this.creater.appendToChild(theadeElement, trElement);

        tableElement.setAttribute('border', '5');
        const arrayOfTh = this.creater.cloneNodeCustom(thElement, 5);

        trElement.append(...arrayOfTh);
        const arrayEl = document.querySelectorAll('th');
        const toArray = Array.from(arrayEl);
        this.creater.AddTextContentMultiple(toArray, ['Number', 'Car', 'Name', 'Winner', 'Best Time (second)']);
        this.creater.appendToChild(tableElement, tbodyElement);
    }

    public renderDataOfWinners(data: any) {
        console.log(data);
        /* console.log('data', data); */
        /* console.log(data); */
        const element = data.map((item: any) => {
            /* console.log(item.id); */
            return `<tr>
                <td>${item.id}</td>
                <td>${this.creater.createSVG(item.color)}</td>
                <td>${item.name}</td>
                <td>${item.wins}</td>
                <td>${item.bestTime}</td>`;
        });

        const getTBody = document.querySelector('tbody') as HTMLElement;
        const destArr: any = [...element];
        getTBody.innerHTML = destArr;
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
}
