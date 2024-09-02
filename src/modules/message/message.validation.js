const joi = require("joi");

const addMessageVal = joi.object({
  name: joi.string().required().min(2).max(100),
  email: joi.string().required().email(),
  subject: joi.string().required().min(5).max(500),
  message: joi.string().required().min(10).max(3000),
  
});

const updateMessageVal = joi.object({
  id: joi.string().required(),

  name: joi.string().min(2).max(100),
  email: joi.string().email(),
  subject: joi.string().min(5).max(500),
  message: joi.string().min(10).max(3000),
});

module.exports = { addMessageVal, updateMessageVal };
