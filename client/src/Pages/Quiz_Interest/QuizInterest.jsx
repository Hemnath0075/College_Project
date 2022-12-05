import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './QuizInterest.module.css'


function QuizInterest() {
    const navigate = useNavigate();
    const [currentQuiz,setCurrentQuiz]=useState(0);
  return (
    <>
    {currentQuiz ===0 && <div className={styles.page_container}>
        <div className={styles.note_content}>
            <h3 className={styles.Title}>Predict on Interest</h3>
            <p>Note:-</p><br />
            <ul>
                <li>In the next step you are going to answer few questions which will help us to predict the best career</li><br />
                <li>Don't make wrong answers just choose what you think</li><br />
                <li>Make Sure you answer all the questions by your own</li><br />
            </ul>
        </div>
        <div className={styles.preferences}>
            <button className={styles.buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Start Quiz</button>
        </div>
    </div>}
    {currentQuiz === 1 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>1. Are you Intrested In Designing ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}>Yes</button>
                <button className={styles.answer_btn}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 2 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>2. Are you Intrested In Creating the Web Pages?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}>Yes</button>
                <button className={styles.answer_btn}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 3 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>3. Are you Intrested In Programming ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}>Yes</button>
                <button className={styles.answer_btn}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 4 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>4. Are you Intrested In  ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}>Yes</button>
                <button className={styles.answer_btn}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 5 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>5. Are you Intrested In Designing ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}>Yes</button>
                <button className={styles.answer_btn}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>console.log("finshed")}>Finish</button>
        </div>
    </div>}
    </>
  )
}

export default QuizInterest