const jwt=require('jsonwebtoken'); 

const generatetoken=(user)=>jwt.sign({id:user.id}, process.env.SECRET_KEY,{expiresIn:'2m'})

module.exports=generatetoken;