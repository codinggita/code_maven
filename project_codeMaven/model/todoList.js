
const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema(
    {
        _id:{
            type: 'string',
            required: true,
            unique: true
        },
        title:{
            type: 'string',
            required: true,
            maxLength: 30,
        },
        task:{
            type : 'string',
            required:false,
            maxLength: 1000
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
);

module.exports= mongoose.model('todoList',todoListSchema);