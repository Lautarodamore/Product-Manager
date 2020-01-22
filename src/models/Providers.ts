import Sequelize, { Model, BuildOptions } from "sequelize";
import { sequelize } from "../database";

interface Iprovider extends Model {
  readonly id?: number;
  nombre: string;
  email: string;
  dni: number;
  empresa?: string;
  created_at?: Date;
}

type ProviderStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Iprovider;
};

const Provider = <ProviderStatic>sequelize.define(
  "providers",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    dni: {
      type: Sequelize.INTEGER
    },
    empresa: {
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

export default Provider;
