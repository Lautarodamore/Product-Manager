import Sequelize, { Model, BuildOptions } from "sequelize";
import { sequelize } from "../database";

interface Iprovider extends Model {
  readonly id: number;
  nro_padre: number;
  nombre: string;
  email: string;
  dni: number;
  empresa: string;
  created_at: Date;
}

type ProviderStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Iprovider;
};

const Provier = <ProviderStatic>sequelize.define("providers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  nro_padre: {
    type: Sequelize.INTEGER
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
});

export default Provier;
