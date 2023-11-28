import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import { View } from "./views";
import type { IWidgetStore } from "@beyond-js/widgets/controller";
import { Manager } from "./manager";

export /*bundle*/
  class Controller extends PageReactWidgetController {
  get Widget() {
    return View;
  }

  #model;

  createStore(): IWidgetStore {
    this.#model = new Manager();
    return this.#model;
  }

  show(): void {
    if (!this.#model) return;
    const id = this.uri.vars.get("id");
    this.#model.load(id);
  }

}
