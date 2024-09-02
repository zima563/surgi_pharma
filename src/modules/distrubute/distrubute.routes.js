const express = require("express");
const { addDistrubute, getDistrubutes, getDistrubute, updateDistrubute, deleteDistrubute } = require("./distrubute.controller.js");
const { addDistrubuteVal, updateDistrubuteVal } = require("./distrubute.validation.js");
const { validation } = require("../../middlewares/validation.js");
const { idVal } = require("../../utils/idVal.js");

const DistrubuteRouter = express.Router();

DistrubuteRouter.route("/add").post(validation(addDistrubuteVal), addDistrubute);
DistrubuteRouter.route("/all").get(getDistrubutes);

DistrubuteRouter
  .route("/:id")
  .get(validation(idVal), getDistrubute)
  .put(validation(updateDistrubuteVal), updateDistrubute)
  .delete(validation(idVal), deleteDistrubute);

module.exports = DistrubuteRouter;
