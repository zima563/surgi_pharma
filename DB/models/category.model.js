const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection.js");

const categoryModel = sequelize.define(
  "category",
  {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  { timestamps: true }
);

module.exports = categoryModel;
