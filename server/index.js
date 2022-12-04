import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import AuthRoute from './Routes/AuthRoutes';

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

const port =process.env.PORT||9000
app.listen(port,()=>console.log(`server is running at ${port}`))
