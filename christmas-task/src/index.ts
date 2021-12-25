import './css/style.scss';
import { ToysPage } from './components/toysPage';
import { ToysSettingFilter } from './components/toysSettings';
import { AudioTree } from './components/treePage';

class Router {
    headerMain: HTMLElement;
    headerNavTree: HTMLElement;
    mainBtn: HTMLButtonElement;
    mainPage: HTMLElement;
    settingPage: HTMLElement;
    treePage: HTMLElement;
    formInput: HTMLFormElement;
    headerTree: HTMLElement;
    toysPage: ToysPage;
    newSetting: ToysSettingFilter;
    playPage: AudioTree;
    constructor() {
        this.headerMain = document.querySelector('.header__nav__toys') as HTMLElement;
        this.headerNavTree = document.querySelector('.header__nav__tree') as HTMLElement;
        this.mainBtn = document.querySelector('.main__btn') as HTMLButtonElement;
        this.mainPage = document.querySelector('.main') as HTMLElement;
        this.settingPage = document.querySelector('.setting') as HTMLElement;
        this.treePage = document.querySelector('.tree__page') as HTMLElement;
        this.formInput = document.querySelector('form') as HTMLFormElement;
        this.headerTree = document.querySelector('.header__tree') as HTMLElement;
        this.toysPage = new ToysPage();
        this.newSetting = new ToysSettingFilter();
        this.playPage = new AudioTree();
    }

    public hideMainPage(event: Event) {
        const target = event.target as HTMLElement;
        if (target.classList.value === 'header__nav__toys') {
            this.mainPage.style.display = 'none';
            this.treePage.style.display = 'none';
            this.settingPage.style.display = 'block';
            this.formInput.style.display = 'block';
        } else if (target.classList.value === 'header__nav__tree') {
            this.mainPage.style.display = 'none';
            this.settingPage.style.display = 'none';
            this.formInput.style.display = 'none';
            this.treePage.style.display = 'block';
        } else if (target.classList.value === 'header__tree') {
            this.settingPage.style.display = 'none';
            this.formInput.style.display = 'none';
            this.treePage.style.display = 'none';
            this.mainPage.style.display = 'block';
        } else {
            this.mainPage.style.display = 'none';
            this.treePage.style.display = 'none';
            this.formInput.style.display = 'block';
            this.settingPage.style.display = 'block';
        }
    }

    public defaultRender() {
        this.toysPage.prerender();
        this.toysPage.prerenderSlider();
        this.newSetting.cycleSettings();
        this.playPage.cycleToys();
    }

    public navigation() {
        this.headerMain.addEventListener('click', this.hideMainPage.bind(this));
        this.headerNavTree.addEventListener('click', this.hideMainPage.bind(this));
        this.mainBtn.addEventListener('click', this.hideMainPage.bind(this));
        this.headerTree.addEventListener('click', this.hideMainPage.bind(this));
    }
}

const app = new Router();
app.defaultRender();
app.navigation();
