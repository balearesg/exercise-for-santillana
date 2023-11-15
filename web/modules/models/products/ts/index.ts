import { ReactiveModel } from '@beyond-js/reactive/model';
import { Api } from '@santillana/web/api';
import { IResponseLoad, TLoadItems } from './types';
import { routing } from '@beyond-js/kernel/routing';

export /*bundle*/ class Products extends ReactiveModel<Products> {
	#api = new Api();
	#items = [];
	get items() {
		return this.#items;
	}

	#limit: number = 5;
	get limit() {
		return this.#limit;
	}

	#total = 0;
	get total() {
		return this.#total;
	}

	#start: number = 0;

	#selected;
	get selected() {
		return this.#selected;
	}
	set selected(value) {
		this.#selected = value;
		this.triggerEvent();
	};

	#item = {};
	get item() {
		return this.#item;
	}
	set item(value) {
		this.#item = value;
		this.triggerEvent();
	};

	loadItems = async (params: TLoadItems = {}): Promise<void> => {
		const { page } = params;
		this.fetching = true;
		this.#start = page ? this.#limit * (page - 1) : 0;
		try {
			const response: IResponseLoad = await this.#api.get(
				`products?limit=${this.#limit}&start=${this.#start}`
			);
			if (!response.status) throw 'Error load requests';
			this.#total = response.data.total;
			this.#items = response.data.entries;
		} catch (error) {
			console.error(error);
		} finally {
			this.fetching = false;
			this.ready = true;
		}
	};

	next = (next, page) => this.loadItems({ page });

	delete = async (item): Promise<void> => {

		this.fetching = true;
		try {
			const response = await this.#api.delete(`products/${item.id}`);
			if (!response.status) throw 'Error delete requests';
			await this.loadItems();
		} catch (error) {
			console.error(error);
		} finally {
			this.fetching = false;
		}
	};

	edit = async (params) => {
		this.fetching = true;

		try {
			const response = await this.#api.put(`products/${params.id}`, params);
			if (!response.status) throw 'Error products requests';
			routing.pushState(`/`);
		} catch (error) {
			console.error(error);
		} finally {
			this.fetching = false;
		}
	}

	new = async (params): Promise<void> => {
		console.log("🚀 ~ file: index.ts:84 ~ Products ~ new= ~ params:", params)
		this.fetching = true;

		try {
			const response = await this.#api.post(`products`, params);
			if (!response.status) throw 'Error products requests';
			routing.pushState(`/`);
		} catch (error) {
			console.error(error);
		} finally {
			this.fetching = false;
		}
	};

	loadItem = async id => {
		this.fetching = true;
		try {
			const response = await this.#api.get(`products/${id}`);
			if (!response.status) throw new Error(response.error.message);

			this.#item = response.data;

		} catch (error) {
			console.error('error', error);
		} finally {
			this.fetching = false;
		}
	};

}
