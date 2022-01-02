interface JSON {
    num: string;
    name: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
}

export interface JSONData {
    [key: string]: Array<JSON>;
}

export type Callback<T> = (data: T) => void;

export interface SettingObject {
    [key: string]: boolean;
}

export interface SortObject {
    [key: string]: string;
}

export interface rangeObject {
    min: number;
    max: number;
}

export interface ObjectValue {
    shape: string;
    color: string;
    size: string;
}

//Интерфейсы
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
