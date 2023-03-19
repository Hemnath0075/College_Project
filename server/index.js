import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import AuthRoute from './Routes/AuthRoutes';
import { RoadmapModel } from "./Models/Roadmap";

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.get('/testing',(req,res)=>{
  res.status(200).json({message:"server is running Successfully"})
})

app.use('/',AuthRoute);

app.post('/roadmap/post',async(req,res)=>{
  try{
    const postRoadmap=await RoadmapModel.create(req.body);
    console.log(postRoadmap)
    return res.status(201).json({success:"Roadmap Posted Successfully!.."});
  }
  catch(err){
    return res.status(500).json({error:err})
  }
})

app.get('/roadmap/:name',async(req,res)=>{
  try{
    const roadmapName = req.params.name.toLocaleUpperCase();
    const getRoadmapData=await RoadmapModel.findOne({roadmap:roadmapName});
    return res.status(200).json({success:"Got the Roadmap",getRoadmapData})
  }
  catch(err){
    return res.status(500).json({error:err})
  }
})

const port =process.env.PORT||5001
app.listen(port,()=>console.log(`server is running at ${port}`))
