const mongoose = require('mongoose');

const profile = mongoose.Schema({

    _id:{
        type:'string',
        required: true,
        unique: true
    },

    name:{
        type:'string',
        maxLength:32
    },
    institute: {
        type:'string',
        maxLength:32
    },
    graduationYear:{
        type:'string',
        maxLength:10
    },
    about:'string',
    email:{
        type:'string',
        maxLength:32,
        
    }
});

module.exports = mongoose.model('profile',profile);
