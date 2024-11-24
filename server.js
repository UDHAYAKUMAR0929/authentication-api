const express=require('express');
const dbcon = require('./lib/database');
const app=express();
const PORT=1000;

   
app.use(express.json());
app.use('/api',require('./routes/router.js'))



dbcon(); 
app.listen(PORT,()=>{
    console.log(`the ${PORT} is running`);
})  