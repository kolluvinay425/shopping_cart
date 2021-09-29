import sequelize from "../db.js";
import datatypes from "sequelize";
const { DataTypes } = datatypes;
const Review = sequelize.define("review", {
  review_id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Review;
