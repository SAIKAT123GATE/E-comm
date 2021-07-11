const express=require("express");
const asyncHandler=require("express-async-handler");
const User=require("../Database/Userschema");
const mongoose=require("mongoose");

const signup=asyncHandler(async(req,res)=>{
    const{name,email,password}=req.body;
    //console.log(name,email,password);
    var exist=await User.findOne({email:email});
    if(exist){
        
         res.status(401).json({
            status:"User Already Exists"
        })
        
    }
    else{
        var user= await User.create({
            email:email,
            name:name,
            password:password
        });
        //console.log(user);
        if(user){
            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
              });
        }
        else{
            throw new Error("invalid user data");
        }
    }
    //console.log("Hitting here");
})

module.exports={
    signup:signup
}