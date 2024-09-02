const distrubuteModel = require("../../../DB/models/distrubuted.model.js");
const {
  addOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} = require("../handlers/handler.js");

const addDistrubute = addOne(distrubuteModel);

const getDistrubute = getOne(distrubuteModel);

const getDistrubutes = getAll(distrubuteModel, "Distrubute");

const updateDistrubute = updateOne(distrubuteModel);

const deleteDistrubute = deleteOne(distrubuteModel);

module.exports = {
  addDistrubute,
  getDistrubute,
  getDistrubutes,
  updateDistrubute,
  deleteDistrubute,
};
