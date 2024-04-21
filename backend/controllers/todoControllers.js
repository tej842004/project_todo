const Todo = require("../models/Todo");

module.exports.todo_get = async (req, res) => {
  const user_id = req.user._id;
  const todos = await Todo.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

module.exports.todo_get_id = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById({ _id: id });
  res.status(200).json(todo);
};

module.exports.todo_post = async (req, res) => {
  const { text } = req.body;

  try {
    const user_id = req.user._id;
    const todo = await Todo.create({ text, user_id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.todo_delete = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndDelete({ _id: id });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mssg: error });
  }
};

module.exports.todo_update = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mssg: error });
  }
};
