import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9c6f2bdddb0741d494c4eb2d6886c076', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
