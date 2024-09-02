const joi = require("joi");

exports.idVal = joi.object({
  id: joi.string().required(),
});
