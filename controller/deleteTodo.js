const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findOneAndDelete(id);
    res.status(200).json({
      success: true,

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
