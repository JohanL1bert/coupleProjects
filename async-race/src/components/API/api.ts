import { IcreateCar, IWinner, TVelocity } from '../interfaces/interface';
import { StateManager } from '../state';

class API {
    baseUrl: string;
    garage: string;
    engine: string;
    winners: string;
    state: StateManager;
    constructor(state: StateManager) {
        this.baseUrl = `http://127.0.0.1:3000`;
        this.garage = `${this.baseUrl}/garage`;
        this.engine = `${this.baseUrl}/engine`;
        this.winners = `${this.baseUrl}/winners`;
        this.state = state;
    }
    //Переписать. Добавить енумы. Возвращать что-то явно

    public errorHandlerUndefined(res: IcreateCar | undefined): IcreateCar {
        if (res === undefined) {
            throw new Error('object is undefined');
        } else {
            return res;
        }
    }

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
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'PUT',
                cache: 'no-cache',
                body: JSON.stringify(carObj),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as IcreateCar; //Переписать
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async getCars(page: number) {
        try {
            const response = await fetch(`${this.garage}?_id=&_limit=${page}`, {
                method: 'GET',
                cache: 'no-cache',
            });
            const res = (await this.errorHandler(response)) as IcreateCar[]; //Переписать
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async raceResetCar() {
        try {
            console.log(await '123');
        } catch (err) {}
    }

    public async generateCar() {
        /* const response = await fetch(`${this.baseUrl}`); */
    }

    public async getStartEngined(id: number) {
        try {
            const response = await fetch(`${this.engine}/?id=${id}&status=started`, {
                method: 'PATCH',
                cache: 'no-cache',
            });
            const res = (await this.errorHandler(response)) as TVelocity; //Переписать
            return res;
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
            });
            return response.status != 200 ? { success: false } : response.json();
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async getStopEngined(id: number) {
        try {
            const response = await fetch(`${this.engine}?id=${id}&status=stopped`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as IcreateCar; //Переписать
            console.log('update', res);
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public async getCar(id: number) {
        try {
            const response = await fetch(`${this.garage}/${id}`, {
                method: 'GET',
            });
            const res = (await this.errorHandler(response)) as IcreateCar; //Переписать
            return res;
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
            const res = (await this.errorHandler(response)) as IcreateCar; //Переписать
            return res;
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

    public async getWinners(sort: string, order: string) {
        try {
            const response = await fetch(`${this.winners}?_sort${sort}=&_order${order}`, {
                method: 'GET',
            });
            const res = (await this.errorHandler(response)) as IWinner[];
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }

    public getWinner() {}

    public async createWinner({ id, wins, time }: IWinner) {
        try {
            const response = await fetch(`${this.winners}`, {
                method: 'POST',
                body: JSON.stringify({ id, wins, time }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as IWinner;
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }
    public deleteWinner() {}

    public async updateWinner({ id, wins, time }: IWinner) {
        try {
            const response = await fetch(`${this.winners}/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ wins, time }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = (await this.errorHandler(response)) as IWinner;
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                err.message;
            } else {
                throw new Error('err');
            }
        }
    }
}
