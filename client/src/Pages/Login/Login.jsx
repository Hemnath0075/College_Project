import React, { useState } from 'react'
import styles from './Login.module.css'
import image from '../../assets/6cp5X4yEi 1.png'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const {register,handleSubmit}=useForm();
  const submit = async(data) =>{
    try{
      const response = await axios.post('http://localhost:5001/login',{
      email:data.email,
      password:data.password
    })
    if(response.data.message==="Success")
        toast.success("Logged In Successfully")
        navigate('/step-1')
    }
    catch(err){
      toast.error(err.response.data.error)
    }
  }
  return (
   <div className={styles.container}>
    <div className={styles.left_container}>
      <div className={styles.main_text}>
        <p className={styles.large_text}>Predict<br></br> Your <br></br>Career <br></br>Over Here...</p>
      </div>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
    </div>
    <div className={styles.right_container}>
      <div className={styles.form_container}>
      <p className={styles.heading_text}>Login</p>
      <form className={styles.form} onSubmit={handleSubmit((data)=>submit(data))}>
        <input type="email" placeholder='Email'{...register("email")} required/>
        <input type="password" placeholder='Password'{...register("password")}  required/>
        <button className={styles.login_button} type="submit">Login</button>
        <p className={styles.signup_text}>Don't have an Account <a href='/signup'>Signup Here</a></p>
      </form>
      </div>
    </div>
    <ToastContainer />
   </div>
  )
}

export default Login