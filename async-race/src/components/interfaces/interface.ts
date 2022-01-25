export type TArrayClassName = Array<string[]>;

export type TGarageSet = [HTMLElement, HTMLInputElement, HTMLInputElement, HTMLButtonElement];

export type TCarItem = [
    HTMLElement,
    HTMLElement,
    HTMLButtonElement,
    HTMLButtonElement,
    HTMLElement,
    HTMLElement,
    HTMLElement,
    HTMLButtonElement,
    HTMLButtonElement,
    HTMLElement,
    HTMLElement,
    HTMLElement,
    HTMLElement
];

export interface IcreateCarArry {
    [key: string | number]: string | number;
}

export interface IcreateCar extends IcreateCarArry {
    name: string;
    color: string;
    id: number;
}

export type TColorText = Pick<IcreateCar, 'name' | 'color'>;

export type TVelocity = {
    velocity: number;
    distance: number;
};

export interface IWinner {
    id: number;
    wins: number;
    time: number;
}

export interface ICurrentData {
    garageCount: number;
    pageCount: number;
    cars: Array<number>;
    winnerState?: string;
}

export interface ITableObject extends IcreateCar {
    wins: number;
    bestTime: number;
}
