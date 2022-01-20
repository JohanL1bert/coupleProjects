import './components/scssSettings/fonts.scss';
import './components/garage/garage.scss';
import './components/winners/winners.scss';
import './global.scss';
import { Router } from './components/routing';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';

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
        this.garagePage.initialEmptyGarage();
        this.renderPageGarage();
        this.renderPageWinner();
        this.garagePage.getAllListener();
    }

    public renderPageGarage() {
        const btnGaragePage = this.router.getHTMLElement('navigation__garage');

        btnGaragePage.addEventListener('click', this.garagePage.renderPageWithRemove.bind(this.garagePage));
    }

    public renderPageWinner() {
        const bntWinnerPage = this.router.getHTMLElement('navigation__winners');
        bntWinnerPage.addEventListener('click', this.winnersPage.renderWinners.bind(this.winnersPage));
    }
}

const newApp: Router = new Router();
const garage: Garage = new Garage(newApp);
const winners: Winners = new Winners(newApp);
const app = new App(newApp, garage, winners);
app.root();
