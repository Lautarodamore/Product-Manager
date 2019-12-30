import Sequelize, { Model, BuildOptions } from "sequelize";
import { sequelize } from "../database";

interface ITypeProduct extends Model {
  readonly id: number;
  descripcion?: string;
  created_at?: Date;
}

type TypeProductStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITypeProduct;
};

const TypeProduct = <TypeProductStatic>sequelize.define(
  "type_product",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    descripcion: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

export default TypeProduct;
