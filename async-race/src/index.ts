import './components/scssSettings/fonts.scss';
import './components/garage/garage.scss';
import './components/winners/winners.scss';
import './global.scss';
import { Router } from './components/routing';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import axios from 'axios';

class App {
    router: Router;
    garagePage: Garage;
    winnersPage: Winners;
    constructor(router: Router, garagePage: Garage, winnersPage: Winners) {
        this.router = router;
        this.garagePage = garagePage;
        this.winnersPage = winnersPage;
    }

    public root() {
        this.router.root();
        this.renderPage();
        this.garagePage.initialEmptyGarage();
        this.getAllListener();
    }

    public renderPage() {
        const btnGaragePage = this.router.getHTMLElement('navigation__garage');
        const bntWinnerPage = this.router.getHTMLElement('navigation__winners');

        btnGaragePage.addEventListener('click', this.garagePage.initialEmptyGarage.bind(this.garagePage));
        //bntWinnerPage.addEventListener('click', this.garagePage.initialEmptyGarage.bind(this.winnersPage));
    }

    //TODO: Может лучше вынести в класс где гараж весь функционал
    public EventCreateCar() {
        const btnCreateCar = this.router.getHTMLElement('input__button');
        btnCreateCar.addEventListener('click', () => {
            void this.router.createCar();
        });
    }

    public EventUpdateCar() {
        const btnUpdateCar = this.router.getHTMLElement('update__button');
        btnUpdateCar.addEventListener('click', () => {
            void this.router.UpdateCar();
        });
    }

    public EventRaceCar() {
        const btnRaceCar = this.router.getHTMLElement('race__button');
        btnRaceCar.addEventListener('click', () => {
            void this.router.raceAllCar();
        });
    }

    public EventResetCar() {
        const btnRaceReset = this.router.getHTMLElement('race__reset');
        btnRaceReset.addEventListener('click', () => {
            void this.router.raceResetCar();
        });
    }

    public EventGenerateManyCar() {
        const btnGenerateCar = this.router.getHTMLElement('race__generate');
        btnGenerateCar.addEventListener('click', () => {
            void this.router.raceResetCar();
        });
    }

    public EventStartCarMove() {
        const getBtnCarMove = this.router.getHTMLElement('car__start');
        getBtnCarMove.addEventListener('click', () => {
            void this.router.startCar();
        });
    }

    public EventReturCarToPrevPosition() {
        const getBtnCarToPrevPosition = this.router.getHTMLElement('car__back');
        getBtnCarToPrevPosition.addEventListener('click', () => {
            void this.router.removeCarToPreviousPos();
        });
    }

    public EventSelectCar() {
        const getBtnCarSelect = this.router.getHTMLElement('car__select');
        getBtnCarSelect.addEventListener('click', () => {
            void this.router.selectCar();
        });
    }

    public EventRemoveCar() {
        const getBtnCarRemove = this.router.getHTMLElement('car__remove');
        getBtnCarRemove.addEventListener('click', () => {
            void this.router.removeCar();
        });
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
    }
}

const newApp: Router = new Router();
const garage: Garage = new Garage(newApp);
const winners: Winners = new Winners(newApp);
const app = new App(newApp, garage, winners);
app.root();
