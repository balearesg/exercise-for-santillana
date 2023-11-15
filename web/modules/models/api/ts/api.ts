import { JCall } from './jcall';
import config from '@santillana/web/config';

export  /*bundle*/
    class Api {

    async action(method = 'get', route: string, specs: object = {}): Promise<any> {
        console.log("🚀 ~ file: api.ts:8 ~ Api ~ action ~ specs:", specs)
        const call: void = new JCall();
        return call[method](this.getURL(route), specs)
    }

    getURL(route: string): string {
        const url = `${config.params.server}${route}`
        return url;
    }

    get(route: string, specs?: object): Promise<any> {
        return this.action('get', route, specs);
    };

    delete(route: string, specs?: object): Promise<any> {
        return this.action('delete', route, specs);
    }

    post(route: string, specs: object): Promise<any> {
        return this.action('post', route, specs);
    };

    put(route: string, specs: object): Promise<any> {
        return this.action('put', route, specs);
    };

}
