import Sequelize, { Model, BuildOptions } from "sequelize";
import { sequelize } from "../database";
import Provider from "./Providers";
import TypeProduct from "./TypeProducts";

interface IProduct extends Model {
  readonly id: number;
  tip_pro: number;
  descripcion?: string;
  precio: number;
  proveedor: number;
  created_at?: Date;
}

type ProducStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IProduct;
};

const Product = <ProducStatic>sequelize.define(
  "products",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    tip_pro: {
      type: Sequelize.INTEGER
    },
    descripcion: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.FLOAT
    },
    proveedor: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

// Defino relaciones entre modelos
Product.hasMany(Provider, { foreignKey: "nro_padre", sourceKey: "id" });
Provider.belongsTo(Product, { foreignKey: "nro_padre" });
Product.hasOne(TypeProduct, { foreignKey: "tip_pro" });

export default Product;
