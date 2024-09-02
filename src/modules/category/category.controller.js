const categoryModel = require("../../../DB/models/category.model.js");
const {
  addOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} = require("../handlers/handler.js");

const addCategory = addOne(categoryModel);

const getCategory = getOne(categoryModel);

const getCategories = getAll(categoryModel, "category");

const updateCategory = updateOne(categoryModel);

const deleteCategory = deleteOne(categoryModel);

module.exports = {
  addCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
