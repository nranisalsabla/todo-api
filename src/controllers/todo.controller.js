const todoService = require("../services/todo.service");

async function createTodo(req, res) {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const todo = await todoService.createTodo({ title, description });

    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create todo",
      error: error.message,
    });
  }
}

async function getAllTodos(req, res) {
  try {
    const todos = await todoService.getAllTodos();

    return res.status(200).json({
      success: true,
      message: "Todos retrieved successfully",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve todos",
      error: error.message,
    });
  }
}

async function getTodoById(req, res) {
  try {
    const { id } = req.params;
    const todo = await todoService.getTodoById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo retrieved successfully",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve todo",
      error: error.message,
    });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const updatedTodo = await todoService.updateTodo(id, {
      title,
      description,
      completed,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update todo",
      error: error.message,
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const deletedTodo = await todoService.deleteTodo(id);

    if (!deletedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: deletedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete todo",
      error: error.message,
    });
  }
}

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};