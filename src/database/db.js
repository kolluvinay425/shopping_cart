import { Sequelize } from "sequelize";

// const { Sequelize } = require('sequelize');
const { PG_PORT, PG_HOST, PG_PASSWORD, PG_USER, PG_DATABASE } = process.env;
const sequelize = new Sequelize(PG_DATABASE, PG_USER, PG_PASSWORD, {
  port: PG_PORT,
  host: PG_HOST,
  dialect: "postgres",
});

// export const test_db = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// test_db();
export const connectingDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default sequelize;
