const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLenght: 100,
  },
  description: {
    type: String,
    required: true,
    maxLenght: 250,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  upadtedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
