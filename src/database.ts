import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "product-manager",
  "lautidamo",
  "la12papa",
  {
    dialect: "postgres",
    host: "database"
  }
);
