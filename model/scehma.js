const {Schema,model} = require("mongoose");

const newschema=new Schema({
    email:String,
    password:String,
    resetpasswordtoken:String,
    resetpasswordexpires:Date
});

const User=model("User",newschema);

module.exports=User;