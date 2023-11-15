import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProductsAttributes {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  creatorUserId?: number;
  modifierUserId?: number;
  timeCreated?: Date;
  timeUpdated?: Date;
}

export type ProductsPk = "id";
export type ProductsId = Products[ProductsPk];
export type ProductsOptionalAttributes = "name" | "description" | "price" | "creatorUserId" | "modifierUserId" | "timeCreated" | "timeUpdated";
export type ProductsCreationAttributes = Optional<ProductsAttributes, ProductsOptionalAttributes>;

export class Products extends Model<ProductsAttributes, ProductsCreationAttributes> implements ProductsAttributes {
  id!: string;
  name?: string;
  description?: string;
  price?: number;
  creatorUserId?: number;
  modifierUserId?: number;
  timeCreated?: Date;
  timeUpdated?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Products {
    return Products.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    creatorUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'creator_user_id'
    },
    modifierUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'modifier_user_id'
    },
    timeCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'time_created'
    },
    timeUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'time_updated'
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
