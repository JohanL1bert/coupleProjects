import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import { IdataMain } from './interface/templayTypes';

export class ToysPage {
    private createLocalStorage() {
        const setLocalStorage = () => {
            const objFavoritesToys = {};
            const saveSettingObj = {
                isFormBall: false,
                isFormBell: false,
                isFormCone: false,
                isFormSnowFlake: false,
                isFormToy: false,
                isColorWhite: false,
                isColorYellow: false,
                isColorRed: false,
                isColorBlue: false,
                isColorGreen: false,
                isSizeBig: false,
                isSizeMedium: false,
                isSizeSmall: false,
            };

            if (localStorage.getItem('objFavoritesToys') === null) {
                localStorage.setItem('objFavoritesToys', JSON.stringify(objFavoritesToys));
            }
            if (localStorage.getItem('saveSettingObj') === null) {
                localStorage.setItem('saveSettingObj', JSON.stringify(saveSettingObj));
            }
        };
        window.addEventListener('load', setLocalStorage);
    }
    public prerenderSlider() {
        const getCountSlider = document.querySelector('.slider__count') as HTMLElement;
        const getYearSlider = document.querySelector('.slider__year') as HTMLElement;
        noUiSlider.create(getCountSlider, {
            range: {
                min: 1,
                max: 12,
            },

            step: 1,

            // Handles start at ...
            start: [1, 12],

            // ... must be at least 300 apart
            /* margin: 0, */

            // ... but no more than 600
            /*             limit: 600, */

            // Display colored bars between handles
            connect: true,

            // Put '0' at the bottom of the slider
            /* direction: 'rtl', */

            // Move handle on tap, bars are draggable
            /* behaviour: 'tap-drag', */

            tooltips: wNumb({ decimals: 0 }),
        });

        noUiSlider.create(getYearSlider, {
            range: {
                min: 1940,
                max: 2020,
            },

            step: 10,

            // Handles start at ...
            start: [1940, 2020],

            // ... must be at least 300 apart
            margin: 0,

            // ... but no more than 600
            limit: 600,

            // Display colored bars between handles
            connect: true,

            // Put '0' at the bottom of the slider
            /* direction: 'rtl', */

            // Move handle on tap, bars are draggable
            behaviour: 'tap-drag',
            tooltips: wNumb({ decimals: 0 }),
        });
    }

    public async dataFetcher() {
        try {
            const dataJSON: IdataMain[] = await fetch(
                `https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/data.json`
            ).then((response) => response.json() as Promise<IdataMain[]>);
            return dataJSON;
        } catch (err) {
            console.warn('getData fetch error');
            //ts заставляет вернуть что-то даже если выбросилась ошибка, при условие если мы возвращает что-то явно
        }
    }

    private async getImg(num: string) {
        try {
            const imgNum = fetch(`https://raw.githubusercontent.com/JohanL1bert/christmas-assets/main/toys/${num}.png`);
            return (await imgNum).url;
        } catch (err) {
            console.warn('getImg fetch error');
        }
    }

    public async prerender() {
        const data = this.dataFetcher();

        const allData = data.then((value) => {
            if (value === undefined) {
                throw new Error('value is undefined');
            }

            return value.map(async (el) => {
                const num = this.getImg(el.num);
                return num.then((num) => {
                    return `
        <div class="toys__box" data-num="${el.num}">
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
                            Цвет: <span class="color__view">${el.color}</span>
                        </div>
                        <div class="toys__size">
                            Размер: <span class="size__view">${el.size}</span>
                        </div>
                        <div class="toys__liked">
                            Любимая: <span class="liked__toy">${el.favorite == true ? 'да' : 'нет'}</span>
                        </div>
                        </div>
                        <div class="toys__img">
                            <div class="ribbon"></div>
                            <img
                            class="toys__img__garland"
                            src="${String(num)}"
                                alt="toy garland"
                                 />
                        </div>
                         </div>
                    </div>
    `;
                });
            });
        });
        const hookHTML = document.querySelector('.toys__inner') as HTMLElement;
        const allDataHTML = await allData;
        Promise.all(allDataHTML)
            .then((valueData) => hookHTML?.insertAdjacentHTML('afterbegin', valueData.join('')))
            .catch((err) => console.warn(err, 'PromiseAll is undefined'));
    }
}
