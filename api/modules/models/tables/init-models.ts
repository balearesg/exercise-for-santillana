import type { Sequelize } from "sequelize";
import { Products as _Products } from "./products";
import type { ProductsAttributes, ProductsCreationAttributes } from "./products";
import { Users as _Users } from "./users";
import type { UsersAttributes, UsersCreationAttributes } from "./users";

export {
  _Products as Products,
  _Users as Users,
};

export type {
  ProductsAttributes,
  ProductsCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Products = _Products.initModel(sequelize);
  const Users = _Users.initModel(sequelize);


  return {
    Products: Products,
    Users: Users,
  };
}
