import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "product-manager",
  "lautidamo",
  "la12papa",
  {
    // gimme postgres, please!
    dialect: "postgres",
    host: "localhost"
  }
);
