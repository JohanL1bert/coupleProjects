import './css/style.scss';
import { ToysPage } from './components/toysPage';
import { ToysSettingFilter } from './components/toysSettings';
import { TreeSetting } from './components/treePage';

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
    playPage: TreeSetting;
    constructor(toysPage: ToysPage, newSetting: ToysSettingFilter, playPage: TreeSetting) {
        this.headerMain = document.querySelector('.header__nav__toys') as HTMLElement;
        this.headerNavTree = document.querySelector('.header__nav__tree') as HTMLElement;
        this.mainBtn = document.querySelector('.main__btn') as HTMLButtonElement;
        this.mainPage = document.querySelector('.main') as HTMLElement;
        this.settingPage = document.querySelector('.setting') as HTMLElement;
        this.treePage = document.querySelector('.tree__page') as HTMLElement;
        this.formInput = document.querySelector('form') as HTMLFormElement;
        this.headerTree = document.querySelector('.header__tree') as HTMLElement;
        this.toysPage = toysPage;
        this.newSetting = newSetting;
        this.playPage = playPage;
    }

    public hideMainPage(event: Event) {
        const target = event.target as HTMLElement;
        if (target.classList.value === 'header__nav__toys') {
            this.mainPage.style.display = 'none';
            this.treePage.style.display = 'none';
            this.settingPage.style.display = 'block';
            this.formInput.style.display = 'block';
            this.headerMain.classList.add('header__active');
            this.headerNavTree.classList.remove('header__active');
        } else if (target.classList.value === 'header__nav__tree') {
            this.mainPage.style.display = 'none';
            this.settingPage.style.display = 'none';
            this.formInput.style.display = 'none';
            this.treePage.style.display = 'block';
            this.headerMain.classList.remove('header__active');
            this.headerNavTree.classList.add('header__active');
        } else if (target.classList.value === 'header__tree') {
            this.settingPage.style.display = 'none';
            this.formInput.style.display = 'none';
            this.treePage.style.display = 'none';
            this.mainPage.style.display = 'block';
            this.headerMain.classList.remove('header__active');
            this.headerNavTree.classList.remove('header__active');
        }
    }

    public defaultRender() {
        this.toysPage.prerender().catch((err) => console.warn(err, 'promise prerender err')); //можно написать void перед this.toyPage. Насколько понял, в независимо что вернется мы делает его undefined
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

const toys = new ToysPage();
const settings = new ToysSettingFilter();
const playPage = new TreeSetting();

const app = new Router(toys, settings, playPage);
app.defaultRender();
app.navigation();
