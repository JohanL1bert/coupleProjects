import { Router } from '../routing';
import { TArrayClassName } from '../interfaces/interface';

class CreateWinners {
    creater: Router;
    constructor(creater: Router) {
        this.creater = creater;
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

    public createTable() {}
}

export class Winners extends CreateWinners {
    constructor(creater: Router) {
        super(creater);
    }
}
