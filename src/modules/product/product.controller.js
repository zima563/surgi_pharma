const productModel = require("../../../DB/models/product.model.js");
const {
  addOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} = require("../handlers/handler.js");

const addProduct = addOne(productModel);

const getProduct = getOne(productModel);

const getProducts = getAll(productModel, "product");

const updateProduct = updateOne(productModel);

const deleteProduct = deleteOne(productModel);

module.exports = {
  addProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
