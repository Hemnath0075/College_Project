import React from 'react'
import { useRef } from 'react'
import styles from './Signup.module.css'
import image from '../../assets/6cp5X4yEi 1.png'

function Signup() {
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
        <input type="text" placeholder='Email'/>
        <input type="email" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button className={styles.login_button}>Signup</button>
        <p className={styles.signup_text}>Already have an Account <a href='/login'>Login Here</a></p>
      </form>
      </div>
    </div>
   </div>
  )
}

export default Signup