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
        this.renderPage();
        this.garagePage.initialEmptyGarage();
    }

    public renderPage() {
        const btnGaragePage = this.router.getHTMLElement('navigation__garage');
        const bntWinnerPage = this.router.getHTMLElement('navigation__winners');

        btnGaragePage.addEventListener('click', this.garagePage.initialEmptyGarage.bind(this.garagePage));
        //bntWinnerPage.addEventListener('click', this.garagePage.initialEmptyGarage.bind(this.winnersPage));
    }
}

const newApp: Router = new Router();
const garage: Garage = new Garage(newApp);
const winners: Winners = new Winners(newApp);
const app = new App(newApp, garage, winners);
app.root();
