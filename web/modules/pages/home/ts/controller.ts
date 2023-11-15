import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import { View } from './views';
import { Manager } from './manager';

export /*bundle*/
	class Controller extends PageReactWidgetController {
	#store;
	createStore() {
		this.#store = new Manager();
		return this.#store;
	}
	get Widget() {
		return View;
	}

	/**
	 * this method is executed when the widget is showd
	 */
	show() {
		if (!this.#store) return;
		this.#store.products.loadItems();
	}

	/**
	 * this method is executed when the widget is hidden
	 */
	hide() { }
}
