const express = require("express");
const router = express.Router();

const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoId } = require("../controller/getTodo.js");
const { updatedTodo } = require("../controller/updatedTodo.js");
const { deleteTodo } = require("../controller/deleteTodo.js");
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoId);
router.put("/updatedTodo/:id", updatedTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
