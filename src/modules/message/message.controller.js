const messageModel = require("../../../DB/models/message.model.js");
const {
  addOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} = require("../handlers/handler.js");

const addMessage = addOne(messageModel);

const getMessage = getOne(messageModel);

const getMessages = getAll(messageModel, "message");

const updateMessage = updateOne(messageModel);

const deleteMessage = deleteOne(messageModel);

module.exports = {
  addMessage,
  getMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
