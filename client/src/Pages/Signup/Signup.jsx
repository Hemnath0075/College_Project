import React, { useState } from "react";
import styles from "./Signup.module.css";
import image from "../../assets/6cp5X4yEi 1.png";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const submit = async(data) =>{
    try{
      const response = await axios.post('http://localhost:5001/signup',{
      email:data.email,
      password:data.password,
      username:data.username
    })
    console.log(response)
    if(response.data.message==="Success")
        toast.success("User Created Successfully",{
          autoClose:2000
        });
        navigate('/login');
    }
    catch(err){
      toast.error(err.response.data.error)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.main_text}>
          <p className={styles.large_text}>
            Predict<br></br> Your <br></br>Career <br></br>Over Here...
          </p>
        </div>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.form_container}>
          <p className={styles.heading_text}>Signup</p>
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => submit(data))}
          >
            <input type="email" placeholder="Email" {...register("email")} required/>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              required
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              required
            />
            <button
              className={styles.login_button}
              type="submit"
            >
              Signup
            </button>
            <p className={styles.signup_text}>
              Already have an Account <a href="/login">Login Here</a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
