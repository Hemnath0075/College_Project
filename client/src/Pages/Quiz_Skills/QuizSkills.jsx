import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './QuizSkills.module.css'

function QuizSkills() {
    const navigate=useNavigate();
  return (
    <div className={styles.page_container}>
    <div className={styles.note_content}>
        <h3 className={styles.Title}>Predict on Skills</h3>
        <p>Note:-</p><br />
        <ul>
            <li>In the next step you are going to answer few questions which will help us to predict the best career</li><br />
            <li>Don't make wrong answers just choose what you think</li><br />
            <li>Make Sure you answer all the questions by your own</li><br />
        </ul>
    </div>
    <div className={styles.preferences}>
        <button className={styles.buttons} onClick={()=>navigate('/quiz-on-interest')}>Start Quiz</button>
    </div>
</div>
  )
}

export default QuizSkills