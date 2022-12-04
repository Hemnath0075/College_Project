import React from 'react'
import styles from './Quiz.module.css';
import quizImage from '../../assets/undraw_online_test_re_kyfx.svg'

function Quiz() {
  return (
    <div className={styles.quiz_container}>
      <img src={quizImage} alt="" className={styles.quiz_image}/>
      <div className={styles.quiz_right_container}>
        <p className={styles.quiz_text}>Wanna predict Your Career Click Next</p>
        <button className={styles.quiz_next_btn}>Next</button>
        <p className={styles.quiz_text_small}>Already Know Your Career</p>
        <button className={styles.quiz_skip_btn}>Skip</button>
      </div>
    </div>
  )
}

export default Quiz