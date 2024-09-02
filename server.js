const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors")
const { sequelize } = require("./DB/dbConnection.js");
const { bootstrap } = require("./src/index.routes.js");

const app = express();
const port = 3000;
dotenv.config();

sequelize.sync();
app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/", express.static("uploads"));

bootstrap(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
