import './components/scssSettings/fonts.scss';
import './components/garage/garage.scss';
import './components/winners/winners.scss';
import './global.scss';
import { App } from './components/routing';
import { Garage } from './components/garage/garage';

const newApp: App = new App();
const garage: Garage = new Garage(newApp);

newApp.root();
garage.initialEmptyGarage();
