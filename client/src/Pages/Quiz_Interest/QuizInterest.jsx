import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './QuizInterest.module.css'
import Confetti from 'react-confetti'


function QuizInterest() {
    let width = window.innerWidth;
    let height=window.innerHeight;
    const navigate = useNavigate();
    const [currentQuiz,setCurrentQuiz]=useState(0);
    const [webDev,setWebDev]=useState(0);
    const [dataScience,setDataScience]=useState(0);
    const [quizSelected,setQuizSelected]=useState({
        quiz1:false,
        quiz2:false,
        quiz3:false,
        quiz4:false,
        quiz5:false,
    })
    const [showCareer,setShowCareer]=useState(false);
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
                <button className={styles.answer_btn} disabled={quizSelected.quiz1} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz1:true})}}>Yes</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz1} onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz1:true})}}>No</button>
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
                <button className={styles.answer_btn}  disabled={quizSelected.quiz2}onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz2:true})}}>Yes</button>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz2}onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz2:true})}}>No</button>
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
                <button className={styles.answer_btn}  disabled={quizSelected.quiz3}onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz3:true})}}>Yes</button>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz3}onClick={()=>{setDataScience(webDev+1);setQuizSelected({quiz3:true})}}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 4 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>4. Are you Intrested In AI(Artificial Intelligence)?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz4} onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz4:true})}}>Yes</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz4} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz4:true})}}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 5 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>5. Are you Intrested In Mathematics ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz5} onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz5:true})}}>Yes</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz5} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz5:true})}}>No</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>{setShowCareer(true);setCurrentQuiz(currentQuiz+1);console.log("the web dev and data science value are",webDev,dataScience)}}>Finish</button>
        </div>
    </div>}
    {showCareer &&  <div className={styles.page_container}>
    <Confetti
      width={width}
      height={height}
    />
        <div className={styles.Career_container}>
            <p className={styles.Career_text}>{webDev>dataScience?"Congrats Full Stack Web Developer Is your Career :)":"Congrats Data Scientist Is your Career :)"}</p>
        </div>
    </div>}
    </>
  )
}

export default QuizInterest