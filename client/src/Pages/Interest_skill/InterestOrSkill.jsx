import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InterestOrSkill.module.css';

function InterestOrSkill() {
  const navigate = useNavigate();
  return (
    <div className={styles.page_container}>
        <div className={styles.note_content}>
            <p>Note:-</p><br />
            <ul>
                <li>In the next step you are going to answer few questions which will help us to predict the best career</li><br />
                <li>Don't make wrong answers just choose what you think</li><br />
                <li>Make Sure you answer all the questions by your own</li><br />
                <li>If you have no skills or wanna learn from scratch go with "Predict On my Interest"</li><br />
                <li>If you have skills then go with "Predict On my Skills"</li><br />
            </ul>
        </div>
        <div className={styles.preferences}>
            <button className={styles.buttons} onClick={()=>navigate('/quiz-on-interest')}>Predict On my Interest</button>
            <button className={styles.buttons} onClick={()=>navigate('/quiz-on-skills')}>Predict On my Skills</button>
        </div>
    </div>
  )
}

export default InterestOrSkill