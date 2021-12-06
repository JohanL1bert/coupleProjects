import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(
            'https://nodenews.herokuapp.com/', //Изначально бралось отсюда 'https://newsapi.org/v2/', но так работает только локально
            {
                apiKey: /* '7f4f7f705d514982ac0b5f707bf3f827' */ '9c6f2bdddb0741d494c4eb2d6886c076', // получите свой ключ https://newsapi.org/
            }
        );
    }
}

export default AppLoader;
