const express=require("express");
const router=express.Router();
const User=require('../model/scehma');
const bcrypt=require('bcryptjs');
const generatetoken=require('../utile/index')

router.get('/test',async(req,res)=>{
    res.json({message:"u get successfully"});
})
router.post('/user',async(req,res)=>{
    const {email,password}=req.body;
  const user=await User.findOne({email});

  if(!user){
    const hasedpassword=await bcrypt.hash(password,10);

    const newuser= new User({email,password:hasedpassword})
    await newuser.save();
    return res.status(201).json({message:"created successfully"});
  }
  res.status(404).json({message:"user already exist"})
})
router.post('/aurth',async(req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(!user){
        return res.status(404).json({message:"cannot find the user"})
    }

    ismatch=await bcrypt.compare(password,user.password);
    if(!ismatch){
        return res.json({message:"incorrect password"});
    } 
    const token=generatetoken(user);
   res.json({token})
})
module.exports=router;