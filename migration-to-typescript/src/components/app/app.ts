import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    view: AppView;
    controller: AppController;
    constructor(controller: AppController, view: AppView) {
        this.controller = controller;
        this.view = view;
    }

    public start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
