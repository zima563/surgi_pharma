const express = require("express");
const {
  addMessage,
  getMessages,
  getMessage,
  updateMessage,
  deleteMessage,
} = require("./message.controller.js");
const { addMessageVal, updateMessageVal } = require("./message.validation.js");
const { validation } = require("../../middlewares/validation.js");
const { idVal } = require("../../utils/idVal.js");

const messageRouter = express.Router();

messageRouter.route("/add").post(validation(addMessageVal), addMessage);
messageRouter.route("/all").get(getMessages);

messageRouter
  .route("/:id")
  .get(validation(idVal), getMessage)
  .put(validation(updateMessageVal), updateMessage)
  .delete(validation(idVal), deleteMessage);

module.exports = messageRouter;
