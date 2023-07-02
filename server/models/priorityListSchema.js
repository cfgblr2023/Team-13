const mongoose = require("mongoose");

const prioritize = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const Priority = mongoose.model("Priority", prioritize);

module.exports = Priority;
