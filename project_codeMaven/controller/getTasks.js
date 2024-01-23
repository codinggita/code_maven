
const todoList = require("../model/todoList");

exports.getTasks = async(req, res)=>{

    try{
    const tasks = await todoList.find();

    res.status(200).json(
        {
            success: true,
            data:tasks,
            message:`Tasks fetched successfully`
        }
    )}
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

exports.getTasksbyId= async (req, res)=>{
    try{
        const id = req.params.id;

        const todo = await todoList.findById({_id:id}) ;
        
        if(!todo)
        {
            return res.status(404).json({
                success:false,
                message:"no data found with given id"});
        }
        res.status(200).json({
            success:true,
            data : todo,
            message:"task with given id found"
        });
         
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