import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:{
        type:String,
        createdAt:{type:Date,required:true},
    },
    predictedCareer:{
        type:String
    }
})

export const UserModel = mongoose.model("users",UserSchema);