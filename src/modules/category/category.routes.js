const express = require("express");
const {
  addCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("./category.controller.js");
const {
  addCategoryVal,
  updateCategoryVal,
} = require("./category.validation.js");
const { validation } = require("../../middlewares/validation.js");
const { idVal } = require("../../utils/idVal.js");
const { uploadSingleFile } = require("../../fileUpload/upload.js");

const categoryRouter = express.Router();

categoryRouter.route("/add").post(uploadSingleFile("img"),validation(addCategoryVal), addCategory);
categoryRouter.route("/all").get(getCategories);

categoryRouter
  .route("/:id")
  .get(validation(idVal), getCategory)
  .put(uploadSingleFile("img"),validation(updateCategoryVal), updateCategory)
  .delete(validation(idVal), deleteCategory);

module.exports = categoryRouter;
