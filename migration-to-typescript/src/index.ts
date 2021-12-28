import App from './components/app/app';
import AppController from './components/controller/controller';
import { AppView } from './components/view/appView';
import News from './components/view/news/news';
import Sources from './components/view/sources/sources';
import './global.css';

const appController = new AppController();

const news = new News();
const sources = new Sources();
const appView = new AppView(news, sources);

const app = new App(appController, appView);
app.start();
