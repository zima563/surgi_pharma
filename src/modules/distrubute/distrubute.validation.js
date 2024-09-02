const joi = require("joi");

const addDistrubuteVal = joi.object({
  name: joi.string().required().min(2).max(100),
  email: joi.string().required().pattern(/[A-Za-z0-9]{3,50}@(gmail|yahoo).com$/),
  phone: joi
    .string()
    .pattern(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/)
    .required(),
  companyName: joi.string().required().min(5).max(500),
  country: joi.string().required().min(5).max(500),
  message: joi.string().required().min(10).max(3000),
  
});

const updateDistrubuteVal = joi.object({
  id: joi.string().required(),

  name: joi.string().required().min(2).max(100),
  email: joi.string().required().pattern(/[A-Za-z0-9]{3,50}@(gmail|yahoo).com$/),
  phone: joi
    .string()
    .pattern(/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/)
    .required(),
  companyName: joi.string().required().min(5).max(500),
  country: joi.string().required().min(5).max(500),
  message: joi.string().required().min(10).max(3000),
});

module.exports = { addDistrubuteVal, updateDistrubuteVal };
