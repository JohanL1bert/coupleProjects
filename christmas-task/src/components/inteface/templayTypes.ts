//Интерфейсы
export interface SettingObjectBool {
    [key: string]: boolean;
}

export interface IsliderYear {
    min: number;
    max: number;
}

export interface IsliderCount {
    min: number;
    max: number;
}

export interface IshapeColorSize {
    shape: string[];
    color: string[];
    size: string[];
}

export interface IdataMain {
    color: string;
    count: string;
    favorite: boolean;
    name: string;
    num: string;
    shape: string;
    size: string;
    year: string;
}

export enum EsortedValue {
    SortNameMax = 'sort-name-max',
    SortNameMin = 'sort-name-min',
    SortMax = 'sort-max',
    SortMin = 'sort-min',
}

export interface IvalueObject {
    isFormBall: string;
    isFormBell: string;
    isFormCone: string;
    isFormSnowFlake: string;
    isFormToy: string;
    isColorWhite: string;
    isColorYellow: string;
    isColorRed: string;
    isColorBlue: string;
    isColorGreen: string;
    isSizeBig: string;
    isSizeMedium: string;
    isSizeSmall: string;
}
