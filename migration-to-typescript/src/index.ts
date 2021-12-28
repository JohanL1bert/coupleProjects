import App from './components/app/app';
import AppController from './components/controller/controller';
import { AppView } from './components/view/appView';
import './global.css';

const appController = new AppController();
const appView = new AppView();

const app = new App(appController, appView);
app.start();
