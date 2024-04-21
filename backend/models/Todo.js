const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
