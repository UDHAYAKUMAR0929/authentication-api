const mongoose=require('mongoose');
 const dotenv=require('dotenv');

dotenv.config();

const dbcon=async()=>{
    try{
      await mongoose.connect(process.env.SECRET_KEY_CON);
      console.log('database connected succesfully');
    }
    catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

module.exports=dbcon;


