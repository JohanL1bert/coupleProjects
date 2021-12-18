import './css/style.scss';
import { ToysPage } from './components/toysPage';
import { ToysSettingFilter } from './components/toysSettings';

const run = () => {
    const toysArray = new ToysPage();
    const arrayImg = toysArray.prerender();
    const dataJSON = toysArray.getData();
    toysArray.createToysBox(arrayImg, dataJSON);
};

run();

const newSetting = new ToysSettingFilter();

newSetting.cycleSettings();
