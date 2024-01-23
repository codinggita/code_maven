const mongoose = require('mongoose');

const notes = mongoose.Schema(
    {
        _id:{
                type:'string',
                required: true,
                unique: true
            
        },
        description:{
            type:'string',
            required:false,
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

module.exports = mongoose.model('notes', notes);

