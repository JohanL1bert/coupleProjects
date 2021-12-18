import { JSONData } from '../components/inteface/templayTypes';
import noUiSlider from 'nouislider';
/* import '../../node_modules/nouislider/distribute/nouislider.css'; */

export class ToysPage {
    constructor() {}
    private createLocalStorage() {
        const setLocalStorage = () => {
            const objFavoritesToys = {};
            const saveSettingObj = {};

            if (localStorage.getItem('objFavoritesToys') === null) {
                localStorage.setItem('objFavoritesToys', JSON.stringify(objFavoritesToys));
            }
            if (localStorage.getItem('saveSettingObj') === null) {
                localStorage.setItem('saveSettingObj', JSON.stringify(saveSettingObj));
            }
        };
        window.addEventListener('load', setLocalStorage);
    }
    private prerenderSlider() {}
    public prerender() {
        const generateArray = [...Array(60).keys()].map((i) => i + 1);

        return generateArray.map(async (el): Promise<string> => {
            const response = fetch(
                `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/assets/toys/${el}.png`
            );
            return (await response).url;
        });
    }

    public async getData() {
        const dataJSON = await fetch(
            `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/data.json`
        ).then((response) => response.json());
        return dataJSON;
    }

    public async createToysBox(urls: Promise<string>[], dataJSON: any) {
        const htmlTemplate = document.querySelector('.toys__inner');
        const arrayImg: string[] = [];

        for (const key of urls) {
            const url = await key;
            arrayImg.push(url);
        }
        const dataHTML = dataJSON.then((value: any) => {
            return value.map((el: any, i: number) => {
                return `
                <div class="toys__box">
                    <h3 class="toys__name">${el.name}</h3>
                        <div class="toys__wrapper">
                            <div class="toys__description">
                                <div class="toys__number">
                                    Количество <span class="toys__amount">${el.count}</span>
                                </div>
                                <div class="toys__year">
                                    Год покупки: <span class="year__number">${el.year}</span>
                                </div>
                                <div class="toys__form">
                                    Форма: <span class="form__view">${el.shape}</span>
                                </div>
                                <div class="toys__color">
                                    Размер: <span class="color__view">${el.color}</span>
                                </div>
                                <div class="toys__size">
                                    Размер: <span class="size__view">${el.size}</span>
                                </div>
                                <div class="toys__liked">
                                    Любимая: <span class="liked__toy">${el.favorite}</span>
                                </div>
                                </div>
                                <div class="toys__img">
                                    <img
                                    class="toys__img__garland"
                                    src="${arrayImg[i]}"
                                        alt="toy garland"
                                         />
                                </div>
                                 </div>
                            </div>
            `;
            });
        });
        dataHTML.then((data: any) => htmlTemplate?.insertAdjacentHTML('afterbegin', data.join('')));
    }
}
