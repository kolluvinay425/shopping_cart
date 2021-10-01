import sequelize from "../db.js";
import all from "sequelize";

const { DataTypes } = all;

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
export default Cart;
