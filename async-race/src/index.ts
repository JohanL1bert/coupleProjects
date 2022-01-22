import './components/scssSettings/fonts.scss';
import './components/garage/garage.scss';
import './components/winners/winners.scss';
import './global.scss';
import { UpdateManager } from './components/routing';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import { SingletonReproducer, StateManager } from './components/state';
import { AdvancedApi } from './components/API/api';
import { IcreateCar, TColorText, IcreateCarArry } from './components/interfaces/interface';

class Manager {
    updateManager: UpdateManager;
    garagePage: Garage;
    winnersPage: Winners;
    state: StateManager;
    api: AdvancedApi;
    templateColor: string;
    templateName: string;
    templateNameUpdate: string;
    templateUpdateColor: string;
    constructor(
        updateManager: UpdateManager,
        garagePage: Garage,
        winnersPage: Winners,
        state: StateManager,
        api: AdvancedApi
    ) {
        this.updateManager = updateManager;
        this.garagePage = garagePage;
        this.winnersPage = winnersPage;
        this.state = state;
        this.api = api;
        this.templateColor = 'input__color';
        this.templateName = 'input__name';
        this.templateNameUpdate = 'input__update';
        this.templateUpdateColor = 'update__color';
    }

    public randomModelCar() {
        const brandCars = this.state.brandsCars;
        const modelCars = this.state.modelsCars;
        const fakeArr = Array.from(Array(100).keys());
        const getValueName = fakeArr.map((_, i) => {
            const color = this.updateManager.randomColor();
            const firstNumber = this.updateManager.randomInterval();
            const secondNumber = this.updateManager.randomInterval();
            const obj = {
                name: `${brandCars[firstNumber]}-${modelCars[secondNumber]}`,
                color: color,
            };

            const res = this.api.createCar(obj).then((value) => this.api.errorHandlerUndefined(value));
            return res;
        });
        return getValueName;
    }

    public EventCreateCar() {
        const btnCreateCar = this.updateManager.getHTMLElement('input__button');

        btnCreateCar.addEventListener('click', () => {
            const textContent = this.updateManager.getInputFromInput(this.templateName);
            const getColor = this.updateManager.getColorFromInput(this.templateColor);
            const carObj: TColorText = {
                name: textContent,
                color: getColor,
            };

            this.state.mainObject.objectColorName = {
                name: textContent,
                color: getColor,
            };

            this.api
                .createCar(carObj)
                .then((value) => this.api.errorHandlerUndefined(value))
                .then((value) => this.garagePage.renderCarItem(value))
                .catch((err: Error) => err);
        });
    }

    public EventUpdateCar() {
        const btnUpdateCar = this.updateManager.getHTMLElement('update__button');
        btnUpdateCar.addEventListener('click', () => {
            const textContent = this.updateManager.getInputFromInput(this.templateNameUpdate);
            const getColor = this.updateManager.getColorFromInput(this.templateUpdateColor);
            const carObj: TColorText = {
                name: textContent,
                color: getColor,
            };

            this.state.mainObject.updateColorName = {
                name: textContent,
                color: getColor,
            };

            const id = this.state.mainObject.selectedCar;
            const element = document.querySelector(`[data-value="${id}"]`);
            if (element === null || element === undefined) {
                return;
            }

            const parent = this.updateManager.getHTMLElement('garage__items');

            this.api
                .updateCar(id, carObj)
                .then((value) => this.api.errorHandlerUndefined(value))
                .then((value) => {
                    this.garagePage.renderCarItem(value);
                    const lastChild = parent.lastElementChild as HTMLElement;
                    parent.replaceChild(lastChild, element);
                })
                .catch((err: Error) => err);
        });
    }

    public EventRaceCar() {
        const btnRaceCar = this.updateManager.getHTMLElement('race__button');
        btnRaceCar.addEventListener('click', () => {
            void this.api.getCars(1, 1);
        });
    }

    public EventResetCar() {
        const btnRaceReset = this.updateManager.getHTMLElement('race__reset');
        btnRaceReset.addEventListener('click', () => {
            void this.api.raceResetCar();
        });
    }

    public EventGenerateManyCar() {
        const btnGenerateCar = this.updateManager.getHTMLElement('race__generate');
        btnGenerateCar.addEventListener('click', () => {
            const value = this.randomModelCar();
            value.map((item) =>
                item.then((value) => {
                    this.garagePage.renderCarItem(value);
                })
            );
            Promise.all(value)
                .then((_) => this.getCarListner())
                .catch((err: Error) => console.log(`${err.message} in promise all when generate many carr`));
        });
    }

    public EventSelectCar() {
        const getBtnCarSelect = this.updateManager.getAllHTMLElement('car__select');
        getBtnCarSelect.forEach((item) => {
            item.addEventListener('click', () => {
                console.log('selectCar', item);
                const value = this.updateManager.closestAttribute();
                const number = value?.getAttribute('data-value');
                this.state.mainObject.selectedCar = Number(number);
            });
        });
    }

    public EventStartCarMove() {
        const getBtnCarMove = this.updateManager.getAllHTMLElement('car__start');
        getBtnCarMove.forEach((item) => {
            item.addEventListener('click', () => {
                console.log('eventStarMove', item);
                const value = this.updateManager.closestAttribute();
                const idElement = Number(value);
                this.state.mainObject.selectedCar = idElement;
            });
        });
    }

    public EventReturCarToPrevPosition() {
        const getBtnCarToPrevPosition = this.updateManager.getAllHTMLElement('car__back');
        getBtnCarToPrevPosition.forEach((item) => {
            item.addEventListener('click', () => {
                console.log('removeCarToBack', item);
                const value = this.updateManager.closestAttribute();
            });
        });
    }

    public EventRemoveCar() {
        const getBtnCarRemove = this.updateManager.getAllHTMLElement('car__remove');
        getBtnCarRemove.forEach((item) => {
            item.addEventListener('click', () => {
                console.log('eventRemovCar', item);
                const value = this.updateManager.closestAttribute();
            });
        });
    }

    public EventInputCreaterContent() {
        const getInputText = this.updateManager.getHTMLElement(this.templateName);

        getInputText.addEventListener('change', () => {
            const textContent = this.updateManager.getInputFromInput(this.templateName);
            const getColor = this.updateManager.getColorFromInput(this.templateColor);
            this.state.mainObject.objectColorName = {
                name: textContent,
                color: getColor,
            };
        });
    }

    public EventInputCreateColor() {
        //FIXME: Переписать
        const templateString = 'input__color';
        const getColorValue = this.updateManager.getHTMLElement(templateString);

        getColorValue.addEventListener('change', () => {
            const hexColor = this.updateManager.getColorFromInput(templateString);
            const colorRgb = this.updateManager.hexToRgbColor(hexColor);
        });
    }

    public EventInputUpdateColor() {
        const getInputText = this.updateManager.getHTMLElement(this.templateUpdateColor);

        getInputText.addEventListener('change', () => {
            const textContent = this.updateManager.getInputFromInput(this.templateNameUpdate);
            const getColor = this.updateManager.getColorFromInput(this.templateUpdateColor);
            this.state.mainObject.objectColorName = {
                name: textContent,
                color: getColor,
            };
        });
    }

    public EventInputUpdateContent() {
        const getInputText = this.updateManager.getHTMLElement(this.templateNameUpdate);

        getInputText.addEventListener('change', () => {
            const textContent = this.updateManager.getInputFromInput(this.templateNameUpdate);
            const getColor = this.updateManager.getColorFromInput(this.templateUpdateColor);
            this.state.mainObject.updateColorName = {
                name: textContent,
                color: getColor,
            };
        });
    }

    public renderPageGarage() {
        const btnGaragePage = this.updateManager.getHTMLElement('navigation__garage');

        btnGaragePage.addEventListener('click', () => {
            this.garagePage.renderPageWithRemove();

            /*             //пЕРЕПИСАТЬ
            this.renderPageWinner();
            this.getSettingListener();
            //Нужны данные чтобы рендерит все листенеры
            /*  this.getAllListener(); */
        });
    }

    public renderPageWinner() {
        const bntWinnerPage = this.updateManager.getHTMLElement('navigation__winners');
        bntWinnerPage.addEventListener('click', () => {
            this.winnersPage.renderWinners();
            /* this.renderPageGarage(); */
            //TODO: Рендерить листенеры на странице таблицы
        });
    }

    public getCarListner() {
        this.EventSelectCar();
        this.EventRemoveCar();
        this.EventStartCarMove();
        this.EventReturCarToPrevPosition();
    }

    public getSettingListener() {
        this.EventCreateCar();
        this.EventUpdateCar();
        this.EventInputCreaterContent();
        this.EventInputCreateColor();
        this.EventRaceCar();
        this.EventResetCar();
        this.EventGenerateManyCar();
    }

    public getAllListener() {
        this.EventCreateCar();
        this.EventUpdateCar();
        this.EventRaceCar();
        this.EventResetCar();
        this.EventGenerateManyCar();
        this.EventStartCarMove();
        this.EventReturCarToPrevPosition();
        this.EventSelectCar();
        this.EventRemoveCar();
        this.EventInputCreaterContent();
        this.EventInputCreateColor();
    }

    public preloadCarItem() {
        try {
            const arr: Array<number> = [1, 2, 3, 4];
            const arrObj: Promise<IcreateCar>[] = arr.map(async (item) => {
                const res = await this.api.getCar(item);
                const getObj = this.api.errorHandlerUndefined(res);
                this.garagePage.renderCarItem(getObj);
                return getObj;
            });
            Promise.all(arrObj)
                .then((_) => {
                    this.renderPageGarage();
                    this.renderPageWinner();
                    this.getAllListener();
                })
                .catch((err: Error) => console.warn(err));
        } catch (err) {
            throw new Error('err in preloadCar');
        }
    }

    public preLoad() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateManager.createHeaderFooter();
            this.garagePage.renderMainWrapper();
            this.garagePage.renderStatus();
            this.garagePage.renderGarageCreateCar();
            this.garagePage.renderGarageUpdate();
            this.garagePage.renderGarageSettingsBtn();
            this.garagePage.renderCarGarage();
            this.preloadCarItem();
        });
    }

    public root() {
        this.preLoad();
    }
}

const getInstanceOfStateManager = SingletonReproducer.getInstance();
const api = new AdvancedApi(getInstanceOfStateManager);

const newApp: UpdateManager = new UpdateManager(getInstanceOfStateManager);
const garage: Garage = new Garage(newApp, getInstanceOfStateManager);
const winners: Winners = new Winners(newApp, getInstanceOfStateManager);
const app = new Manager(newApp, garage, winners, getInstanceOfStateManager, api);
app.root();
