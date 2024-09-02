const { Sequelize } =require("sequelize");
const dotenv =require("dotenv");

dotenv.config();

exports.sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);