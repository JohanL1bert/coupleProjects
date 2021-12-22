import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '9c6f2bdddb0741d494c4eb2d6886c076',
        });
    }
}

export default AppLoader;
