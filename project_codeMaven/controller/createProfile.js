const profile = require('../model/profile');

exports.createProfile = async(req, res)=>{

    try{
        const {_id,name, institute, graduationYear, about, email}=req.body;

        const response = await profile.create({_id, name, institute, graduationYear, about, email});
        res.status(200).json(
            {
                success: true,
                data:response,
                message:`Successfully created`
            }
        );
    }
    catch(err){
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
};