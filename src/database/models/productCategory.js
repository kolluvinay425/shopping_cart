import sequelize from "../db.js";
import all from "sequelize";

const { DataTypes } = all;

const productCategory = sequelize.define("productCategory", {
  cat_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
// productCategory.sync({ force: true });
export default productCategory;
