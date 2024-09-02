const express = require("express");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} = require("./product.controller.js");
const { addProductVal, updateProductVal } = require("./product.validation.js");
const { validation } = require("../../middlewares/validation.js");
const { idVal } = require("../../utils/idVal.js");
const { uploadFieldsOfFiles } = require("../../fileUpload/upload.js");

const ProductRouter = express.Router();

ProductRouter.route("/add").post(
  uploadFieldsOfFiles([
    { name: "imgCover", maxCounts: 1 },
    { name: "images", maxCounts: 10 },
  ]),
  validation(addProductVal),
  addProduct
);
ProductRouter.route("/all").get(getProducts);

ProductRouter.route("/:id")
  .get(validation(idVal), getProduct)
  .put(
    uploadFieldsOfFiles([
      { name: "imgCover", maxCounts: 1 },
      { name: "images", maxCounts: 10 },
    ]),
    validation(updateProductVal),
    updateProduct
  )
  .delete(validation(idVal), deleteProduct);

module.exports = ProductRouter;
