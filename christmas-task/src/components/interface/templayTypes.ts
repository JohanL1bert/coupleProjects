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
