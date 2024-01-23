const express = require('express');
const app  = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;
app.use(express.json());
const userRoutes = require('./routes/route1');
app.use("/api/v1", userRoutes);
app.listen(PORT,(req,res)=>{
    console.log(`server started on port ${PORT}`);
});

const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send(`this is default homePage`);
});




