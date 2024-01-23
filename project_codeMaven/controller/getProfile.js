
const profile = require('../model/profile');
exports.getProfile= async (req, res)=>{
    try{
        const id = req.params.id;

        const todo = await profile.findById({_id:id}) ;
        
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