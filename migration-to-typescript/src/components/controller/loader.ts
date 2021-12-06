import { Iloader, Callback } from '../template-types';


class Loader {
    baseLink: string;
    options: Iloader;
    constructor(baseLink: string, options: Iloader) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<NewData>(
        { endpoint, options = {} }: { endpoint: string; options?: Record<string, string> },
        callback: Callback<NewData> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<NewData>('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: Iloader, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load<Data>(method: string, endpoint: string, callback: Callback<Data>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json() as Promise<Data>)
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
