const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection.js");
const categoryModel = require("./category.model.js");

const productModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgCover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON, // Use JSON to store an array of image URLs
      allowNull: true, // Allow null if no images are provided
    },
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: categoryModel,
        key: "id",
      },
    },
  },

  { timestamps: true, tableName: "products", engine: "InnoDB" }
);

module.exports = productModel;
