
const todoList = require("../model/todoList.js");

exports.postTodoList = async (req,res)=>{
    try{
        const {_id,title,task} = req.body;
        const response = await todoList.create({_id,title, task});
        res.status(200).json(
            {
                success: true,
                data:response,
                message:`Successfully created`
            }
        );
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json(
        {
            success: false,
            data:`internal server error`,
            message: err.message,
        }
        );       
    }
}

