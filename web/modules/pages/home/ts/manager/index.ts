import { ReactiveModel } from '@beyond-js/reactive/model';
import { Products } from '@santillana/web/products';

export class Manager extends ReactiveModel<Manager> {

    #products = new Products();
    get products() {
        return this.#products
    };

    constructor() {
        super();
        this.#products = new Products();
    };
}
