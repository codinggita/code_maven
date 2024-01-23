const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        userName : {
            type : 'string',
            required: true,
            maxLength: 24
        },
        password:{
            type:'string',
            required: true,
            maxLength: 30
        },
        email:{
            type:'string',
            required:true,
            unique:true,
            maxLength: 32
        },
        createdAt: {
            type: 'Date',
            required: true,
            default: Date.now()
        },
        updatedAt: {
            type: 'Date',
            required: true,
            default: Date.now()
        }
    }
)

module.exports=mongoose.model('userBase',userSchema);