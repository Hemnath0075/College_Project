import express from 'express';
import { UserModel } from "../Models/User";
import bcrypt from 'bcrypt';

const Router = express.Router();


//signup
Router.post('/signup',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const CheckEmail=await UserModel.find({email:email});
        if(CheckEmail.length!==0)
            throw new Error("Email Already Exists!!")
        const hashedPassword=await bcrypt.hash(password,10);
        req.body.password=hashedPassword;
        const createUser = await UserModel.create(req.body);
        if(createUser)
            return res.status(200).json({user:createUser,message:"Success"});
        else    
            throw new Error("something wrong :(")
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
})

//login
Router.post('/login',async(req,res)=>{
    try{
        const {email}=req.body;
        const checkUser = await UserModel.findOne({email:email});
        console.log(checkUser);
        if(!checkUser)
            throw new Error("User Does not Exists with this Email!!!")
        
        const checkPassword = await bcrypt.compare(req.body.password,checkUser.password)
        if(!checkPassword)
            throw new Error("Entered Password is Wrong :(")
        return res.status(200).json({user:checkUser,message:"Success"})
    }
    catch(err){
        return res.status(500).json({error:err.message})
    }
})

// Router.post('/update/career',async(req,res)=>{
//     try{
//         const findUser=await 
//     }
//     catch(err){
//         return res.status(500).json({error:err})
//     }
// })

//forgotpassword


//resetpassword

export default Router;