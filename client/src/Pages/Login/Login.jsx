import React from 'react'
import { useRef } from 'react'
import styles from './Login.module.css'
import image from '../../assets/6cp5X4yEi 1.png'

function Login() {
  const username=useRef();
  const password=useRef();
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
      <form className={styles.form}>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button className={styles.login_button}>Login</button>
        <p className={styles.signup_text}>Don't have an Account <a href='/signup'>Signup Here</a></p>
      </form>
      </div>
    </div>
   </div>
  )
}

export default Login