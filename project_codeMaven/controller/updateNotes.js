const notes = require("../model/todoList");

exports.updateNotes = async (req, res) => {
    try {
      // Extract task ID and updated data
      const title = req.params.title;
      const updatedTask = req.body;
      
      // Find and update the task
      const result = await notes.findByIdAndUpdate(title, {updatedTask ,updatedAt:Date.now()}, {
        new: true, // Return the updated document


      });
  
      if (result) {
        res.status(200).json({
          success: true,
          data: result,
          message: "Task updated successfully",
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
  