import { IcreateCar } from '../interfaces/interface';
import { StateManager } from '../state';

class API {
    baseUrl: string;
    garage: string;
    engine: string;
    state: StateManager;
    constructor(state: StateManager) {
        this.baseUrl = `http://127.0.0.1:3000`;
        this.garage = `${this.baseUrl}/garage`;
        this.engine = `${this.baseUrl}/engine`;
        this.state = state;
    }
    //Переписать. Добавить енумы. Возвращать что-то явно
    public async errorHandler(res: Response) {
        if (res.ok) {
            return res.json();
        }

        if (res.status === 404) {
            throw new Error(res.statusText);
        }

        if (res.status === 400) {
            throw new Error(res.statusText);
        }

        if (res.status === 429) {
            throw new Error(res.statusText);
        }

        if (res.status === 500) {
            throw new Error(res.statusText);
        }
    }

    //Testins Нужно подумать куда лучше это вынести
    public async createCar(carObj: Pick<IcreateCar, 'name' | 'color'>) {
        try {
            const response = await fetch(`${this.garage}`, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify(carObj),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as IcreateCar; //Переписать
            const { name, color, id } = res;
            this.state.mainObject.objectCar.push({
                name: name,
                color: color,
                id: id,
            });
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async updateCar(id: number, carObj: Pick<IcreateCar, 'name' | 'color'>) {
        console.log(carObj);
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'PUT',
                cache: 'no-cache',
                body: JSON.stringify(carObj),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async raceAllCar() {
        await console.log('race all');
        try {
        } catch (err) {}
    }

    public async raceResetCar() {
        try {
        } catch (err) {}
    }

    public async generateCar() {
        /* const response = await fetch(`${this.baseUrl}`); */
    }

    public async startCar(id: number) {
        try {
            const response = await fetch(`${this.engine}?id=${id}&status=started`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async driveMode(id: number) {
        try {
            const response = await fetch(`${this.engine}?id=${id}&status=drive`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async removeCarToPreviousPos(id: number) {
        try {
            const response = await fetch(`${this.engine}?id=${id}&status=stopped`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async selectCar(id: number) {
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'GET',
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log(res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async removeCar(id: number) {
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'DELETE',
            });
            const res = (await this.errorHandler(response)) as unknown; //Переписать
            console.log(res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }
}

export class AdvancedApi extends API {
    constructor(state: StateManager) {
        super(state);
    }
}
