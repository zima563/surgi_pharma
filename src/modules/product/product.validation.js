const joi = require("joi");

const addProductVal = joi.object({
  title: joi.string().min(3).max(255).required(),
  description: joi.string().min(10).max(500).required(),
  specification: joi.string().min(10).max(500).required(),
  imgCover: joi.array()
    .items(
      joi.object({
        fieldname: joi.string().required(),
        originalname: joi.string().required(),
        encoding: joi.string().required(),
        mimetype: joi.string()
          .valid("image/png", "image/jpg", "image/jpeg")
          .required(),
        destination: joi.string().required(),
        filename: joi.string().required(),
        path: joi.string().required(),
        size: joi.number().max(5242880).required(),
      })
    )
    .required(),
  images: joi
    .array()
    .items(
      joi.object({
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
        size: joi.number().max(5242880).required(),
      })
    )
    .required(),
    category: joi.number().integer().required(),
});

const updateProductVal = joi.object({
  id: joi.string().required(),

  title: joi.string().min(3).max(255),
  description: joi.string().min(10).max(500),
  specification: joi.string().min(10).max(500),
  imgCover: joi.array()
    .items(
      joi.object({
        fieldname: joi.string().required(),
        originalname: joi.string().required(),
        encoding: joi.string().required(),
        mimetype: joi.string()
          .valid("image/png", "image/jpg", "image/jpeg")
          .required(),
        destination: joi.string().required(),
        filename: joi.string().required(),
        path: joi.string().required(),
        size: joi.number().max(5242880).required(),
      })
    ),
  images: joi
    .array()
    .items(
      joi.object({
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
        size: joi.number().max(5242880).required(),
      })
    )
    ,
    category: joi.number().integer(),
});

module.exports = { addProductVal, updateProductVal};
