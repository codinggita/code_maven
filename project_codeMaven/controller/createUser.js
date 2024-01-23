const userBase = require('../model/userBase');

exports.createUser = async(req, res)=>{

    try{
        const {userName, password, email}=req.body;

        const response = await userBase.create({userName, password, email});
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