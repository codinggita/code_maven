const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(()=>{
        console.log(`database connection established`);
    })
    .catch((error)=>{
        console.error(`connection error: ${error}`);
        process.exit(1);
    })
    
}
module.exports = dbConnect;