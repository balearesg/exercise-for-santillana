import { Request, Router, Application, Response } from "express";
import { DataModel } from '@santillana/api/models';
import { actions } from 'data-model/db';

export /*bundle*/
  class Controller {
  #router: Router;
  #model = DataModel.models.Products;
  constructor(router: Router, app: Application) {
    this.#router = router;
    this.#router.get("/products", this.list);
    this.#router.get("/products/:id", this.data);
    this.#router.delete("/products/:id", this.remove);
    this.#router.post("/products", this.create);
    this.#router.put("/products/:id", this.update);
    app.use(this.#router);
  }

  list = async (req: Request, res: Response) => {
    let { start, limit, ...query } = req.query;
    const params = {
      start,
      limit,
      where: query,
    }
    try {
      const response = await actions.list(this.#model, params, '/products/list');

      if (!response.status) throw response.error;
      return res.status(200).send(response);
    } catch (exc) {
      console.error('Error products list', exc);
      return res.status(500).send({ status: false, error: exc });
    }
  }

  data = async (req: Request, res: Response) => {

    const params = req.params

    try {
      const response = await actions.data(this.#model, params, '/products/data');
      if (!response.status) throw response.error;
      return res.status(200).send(response);
    } catch (exc) {
      console.error('Error products data', exc);
      return res.status(500).send({ status: false, error: exc });
    }
  }

  remove = async (req: Request, res: Response) => {
    const params = req.params
    try {
      const response = await actions.remove(this.#model, params, '/products/remove');
      if (!response.status) throw response.error;
      return res.status(200).send(response);
    } catch (exc) {
      console.error('Error products remove', exc);
      return res.status(500).send({ status: false, error: exc });
    }
  }

  create = async (req: Request, res: Response) => {
    const params = req.body
    try {
      if (!params) throw 'EMPTY_PARAMS';

      const response = await actions.create(this.#model, params, '/products/publish');

      if (!response.status) throw response.error;
      return res.status(200).send(response);
    } catch (exc) {
      console.error('Error products create', exc);
      return res.status(500).send({ status: false, error: exc });
    }
  }

  update = async (req: Request, res: Response) => {
    const params = { ...req.body, ...req.params }

    try {
      if (!params) throw 'EMPTY_PARAMS';
      const response = await actions.update(this.#model, params, '/products/update');
      if (!response.status) throw response.error;
      return res.status(200).send(response);
    } catch (exc) {
      console.error('Error products update', exc);
      return res.status(500).send({ status: false, error: exc });
    }
  }
}
