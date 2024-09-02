const joi = require("joi");

const addCategoryVal = joi.object({
  name: joi.string().required().min(2).max(100),
  image: joi
    .object({
      fieldname: joi.string().required(),
      originalname: joi.string().required(),
      encoding: joi.string().required(),
      mimetype: joi
        .string()
        .valid("image/png", "image/jpg", "image/jpeg")
        .required(),
      destination: joi.string().required(),
      filename: joi.string().required(),
      path: joi.string().required(),
      size: joi.number().max(524288000).required(),
    })
    .required(),
});

const updateCategoryVal = joi.object({
  id: joi.string().required(),

  name: joi.string().required().min(2).max(100),
  image: joi
    .object({
      fieldname: joi.string().required(),
      originalname: joi.string().required(),
      encoding: joi.string().required(),
      mimetype: joi
        .string()
        .valid("image/png", "image/jpg", "image/jpeg")
        .required(),
      destination: joi.string().required(),
      filename: joi.string().required(),
      path: joi.string().required(),
      size: joi.number().max(524288000).required(),
    }),
});

module.exports = { addCategoryVal, updateCategoryVal };
