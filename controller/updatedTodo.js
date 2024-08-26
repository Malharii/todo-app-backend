const Todo = require("../models/Todo");

exports.updatedTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findOneAndUpdate(
      {
        _id: id,
      },
      { title, description, upadtedAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: "entery upadetd successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res
      .status(500)
      .json({ success: false, data: "internal server error,", message: err.message });
  }
};
