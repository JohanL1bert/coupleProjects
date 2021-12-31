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
    constructor(toysPage: ToysPage, newSetting: ToysSettingFilter, playPage: AudioTree) {
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

const toys = new ToysPage();
const settings = new ToysSettingFilter();
const playPage = new AudioTree();

const app = new Router(toys, settings, playPage);
app.defaultRender();
app.navigation();

/* console.log(`
Не сделанно:
1. Выбранные настройки сохраняются в local storage и отображаются при перезагрузке страницы. Если музыка сохранилась включённой, 
она начинает играть при первом клике. Есть кнопка сброса настроек, которая очищает local storage -10 
2. повешенные на ёлку игрушки можно снимать с ёлки, при этом они возвращаются в свой слот -10
Частично не сделано
3. когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается, когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот -4

Снимать можно и количество меняется, но возвращать из ёлки нельзя. Поэтому слоты не увеличиваются
Баги: 
1. Если поставить игрушку на ёлку и изменить фильтры, игрушки останутся на ёлку, но в слот прилят новые игрушки. По id это будут те же самые игрушки, они будут просто перемещатся по ёлке.
2. Снять игрушки с ёлки уже нельзя, только перезагрузка страницы

Замечания: кнопка запуска снега после включния дизейблится на 1.1 секунду. Только после пройденого времени можно еще раз запустить снег.
Игрушки немного захардкоджены под экраном поэтому чутка слезать будут при уменьшении экрана.

Всё остально сделанно и вроде проблем нет.`);
 */
