import './css/style.scss';
import { ToysPage } from './components/toysPage';
import { ToysSettingFilter } from './components/toysSettings';

const run = () => {
    const toysArray = new ToysPage();
    void toysArray.prerender();
    toysArray.prerenderSlider();
    const newSetting = new ToysSettingFilter();
    newSetting.cycleSettings();
};

run();
