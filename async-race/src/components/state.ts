import { IcreateCar, ICurrentData } from './interfaces/interface';

export class StateManager {
    mainObject: {
        currentData: ICurrentData;
        selectedCar: number;
        initialRender: number;
        objectCar: Array<IcreateCar>;
        objectColorName: {
            name: string;
            color: string;
        };
        updateColorName: {
            name: string;
            color: string;
        };
        winners: [
            {
                id: number;
                wins: number;
                time: number;
            }
        ];
    };
    brandsCars: Array<string>;
    modelsCars: Array<string>;
    constructor() {
        this.mainObject = {
            currentData: {
                garageCount: 4,
                pageCount: 1,
                cars: [],
                winnerState: '',
            },
            selectedCar: 0,
            initialRender: 0,
            objectCar: [],
            objectColorName: {
                color: '',
                name: '',
            },
            updateColorName: {
                color: '',
                name: '',
            },
            winners: [
                {
                    id: 1,
                    wins: 1,
                    time: 10,
                },
            ],
        };
        this.brandsCars = [
            'Audi',
            'Alfa Romeo',
            'Alpina',
            'Aston Martin',
            'Axon',
            'Ford',
            'Ferrari',
            'Fiat',
            'GAZ',
            'GMC',
            'Honda',
            'Hummer',
            'Hyundai',
            'Infiniti',
            'Isuzu',
            'JAC',
            'Jaguar',
            'Jeep',
            'Kamaz',
            'Lada',
            'Lexus',
            'Lotus',
            'MAN',
            'Maybach',
            'MAZ',
            'Mazda',
            'McLaren',
            'Nissan',
            'Opel',
            'Paccar',
            'Pagani',
            'Pontiac',
            'Porsche',
            'Renault',
            'Å koda',
            'Smart',
            'Subaru',
            'Suzuki',
            'Tesla',
            'Toyota',
            'UAZ',
            'Volvo',
            'ZAZ',
            'XPeng',
            'TVR',
            'Saab',
            'RAM',
            'Chevrolet',
            'Mazzanti',
            'Daewoo',
        ];
        this.modelsCars = [
            'Roadster',
            'S',
            'X',
            '3',
            'Y',
            'Cybertruck',
            'X5',
            'X7',
            'X3',
            'X6',
            'GT4',
            'FXX',
            '599 GTO',
            'Enzo',
            '458 Italia',
            '250 GTO',
            'Priora',
            '4x4',
            'Rio',
            'Focus',
            'Kalina',
            'Vesta',
            'Spark',
            'Lacetti',
            'Nexia',
            'Matiz',
            'Cobalt',
            'Captiva',
            'A7',
            'A5',
            'A3',
            'A8',
            'TT',
            'Corolla',
            'Camry',
            'RAV4',
            'Impreza',
            'WRX',
            'ES',
            'LS',
            'RX',
            'GX',
            'LX',
            'GS',
            'LC500',
            'Gallardo',
            'Aventador',
            '911',
            'Cayenne',
            'FX37',
        ];
    }
}

export class SingletonReproducer {
    static instance = new StateManager();

    private constructor() {
        if (SingletonReproducer.instance) {
            throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
        }
    }

    static getInstance() {
        return SingletonReproducer.instance;
    }
}
