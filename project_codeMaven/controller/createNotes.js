
const notes = require("../model/notes.js");

exports.createNotes = async (req,res)=>{
    try{
        const {_id,description} = req.body;
        const response = await notes.create({_id, description});
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

