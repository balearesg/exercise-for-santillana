import { ReactiveModel } from '@beyond-js/reactive/model';
import { Products } from '@santillana/web/products';
import { v4 as uuidv4 } from 'uuid';

export class Manager extends ReactiveModel<{}> {
	#products: Products = new Products();
	get products() {
		return this.#products;
	}
	#error;
	get error() {
		return this.#error;
	}

	#isCreating: boolean;
	get isCreating() {
		return this.#isCreating;
	}

	#id

	load = async (id: string) => {
		this.#isCreating = id === 'create';
		this.#id = id
		this.fetching = true;

		try {
			if (!!this.#isCreating) {
				this.ready = true;
				this.fetching = false;
				return
			}
			await this.#products.loadItem(id);

		} catch (error) {
			console.error(error);
		} finally {
			this.ready = true;
			this.fetching = false;
		}
	};

	clean: () => void = (): void => { };


	edit = async (params) => {

	}

	create = async (params) => {
		this.#error = '';
		this.triggerEvent();
		try {

		} catch (error) {

			this.triggerEvent();
			return { error };
		} finally {
			this.fetching = false;
		}
	};

	publish = (params) => {
		const specs = { ...params, id: this.#isCreating ? uuidv4() : this.#id }
		return this.#isCreating ? this.#products.new(specs) : this.#products.edit(specs)
	}

	hide = async () => {

	};
}
