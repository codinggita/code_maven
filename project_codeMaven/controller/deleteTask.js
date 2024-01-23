
const todoList = require('../model/todoList');

exports.deleteTask = async (req, res) => {
    try {
      // Extract the task ID from the request
      const taskId = req.params.taskId;
      
      const result = await todoList.deleteOne({ _id: taskId });
  
      // Check if the deletion was successful
      if (result.deletedCount > 0) {
        res.status(200).json({
          success: true,
          message: "Task deleted successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Task not found",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        data: "Internal server error",
        message: err.message,
      });
    }
  };
  