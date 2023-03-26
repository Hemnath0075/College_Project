import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './QuizSkills.module.css'
import Confetti from 'react-confetti'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function QuizSkills() {
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
        quiz6:false,
        quiz7:false,
        quiz8:false,
        quiz9:false,
        quiz10:false,
    })
    const [showCareer,setShowCareer]=useState(false);
    useEffect(()=>{
        if(showCareer){
            const submit = async(data) =>{
                try{
                  const response = await axios.put('http://localhost:5001/update/career/',{
                  email:localStorage.getItem("email"),
                  predictedCareer:webDev>dataScience?"fswd":"ds"
                })
                if(response.data.message==="Success")
                    localStorage.setItem("career",response.data.user.predictedCareer)
                    setTimeout(()=>{
                        navigate('/home');
                    },5000)
                }
                catch(err){
                  toast.error(err.response.data.error)
                }
              }
              submit();
        }
    },[showCareer])
  return (
    <>
    {currentQuiz ===0 && <div className={styles.page_container}>
        <div className={styles.note_content}>
            <h3 className={styles.Title}>Predict on My Skills</h3>
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
            <p className={styles.question}>1. Data science is the process of diverse set of data through ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz1} onClick={()=>{setQuizSelected({quiz1:true})}}>Arranging Data</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz1} onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz1:true})}}>Organizing , Processing, Analyzing Data</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 2 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>2. Which of the following is correct skills for a Data Scientist ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz2}onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz2:true})}}>Probability and Statistics , Machine Learning & Deep Learning ,Data Wrangling</button>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz2}onClick={()=>{setQuizSelected({quiz2:true})}}>Programming in Python</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 3 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>3. Which of the following is not a part of data science process ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz3}onClick={()=>{setQuizSelected({quiz3:true})}}>Discovery</button>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz3}onClick={()=>{setQuizSelected({quiz3:true})}}>Model Planning</button>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz3}onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz3:true})}}> Communication Building</button>
                <button className={styles.answer_btn}  disabled={quizSelected.quiz3}onClick={()=>{setQuizSelected({quiz3:true})}}>Operationalize</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 4 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>4.Which of the following is not a application for data science ?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz4} onClick={()=>{setQuizSelected({quiz4:true})}}>Recommendation Systems</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz4} onClick={()=>{setQuizSelected({quiz4:true})}}>Image & Speech Recognition</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz4} onClick={()=>{setQuizSelected({quiz4:true})}}>Online Price Comparison</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz4} onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz4:true})}}>Privacy Checker</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 5 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>5. Point out the correct statement.</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz5} onClick={()=>{setDataScience(dataScience+1);setQuizSelected({quiz5:true})}}>Raw data is original source of data</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz5} onClick={()=>{setQuizSelected({quiz5:true})}}>Preprocessed data is original source of data</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz5} onClick={()=>{setQuizSelected({quiz5:true})}}>Raw data is the data obtained after processing steps</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz5} onClick={()=>{setQuizSelected({quiz5:true})}}>None of the above</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 6 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>6. What is JavaScript?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz6} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz6:true})}}> JavaScript is a scripting language used to make the website interactive</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz6} onClick={()=>{setQuizSelected({quiz6:true})}}>JavaScript is an assembly language used to make the website interactive</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz6} onClick={()=>{setQuizSelected({quiz6:true})}}>JavaScript is a compiled language used to make the website interactive</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz6} onClick={()=>{setQuizSelected({quiz6:true})}}>None of the above</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 7 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>7. What will be the output of the following JavaScript code snippet?</p><br></br><br></br>
            <code><p id="demo"></p>
var txt1 = "Sanfoundry_";<br></br>
var txt2 = "Javascriptmcq";<br></br>
document.getElementById("demo").innerHTML = txt1 + txt2;</code>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz7} onClick={()=>{setQuizSelected({quiz7:true})}}>error</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz7} onClick={()=>{setQuizSelected({quiz7:true})}}>Sanfoundry_ Javascriptmcq</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz7} onClick={()=>{setQuizSelected({quiz7:true})}}>undefined</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz7} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz7:true})}}>Sanfoundry_Javascriptmcq</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 8 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>8. Which of the following is the correct way to send mail in HTML?

</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz8} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz8:true})}}>{`<a href = "mailto: xy@y">`}</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz8} onClick={()=>{setQuizSelected({quiz8:true})}}>{`<a href = "xy@y">`}</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz8} onClick={()=>{setQuizSelected({quiz8:true})}}>{`<mail xy@y</mail>`}</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz8} onClick={()=>{setQuizSelected({quiz8:true})}}>None of the above</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 9 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>9. Which of the following CSS selectors are used to specify a group of elements?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz9} onClick={()=>{setQuizSelected({quiz9:true})}}>tag</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz9} onClick={()=>{setQuizSelected({quiz9:true})}}>id</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz9} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz9:true})}}>class</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz9} onClick={()=>{setQuizSelected({quiz9:true})}}>both class and tag</button>
            </div>
        </div>
        <div className={styles.quiz_buttons_section}>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz-1)}>Previous Question</button>
            <button className={styles.quiz_buttons} onClick={()=>setCurrentQuiz(currentQuiz+1)}>Next Question</button>
        </div>
    </div>}
    {currentQuiz === 10 && <div className={styles.page_container}>
        <div className={styles.quiz_section}>
            <p className={styles.question}>10. Which of the following CSS framework is used to create a responsive design?</p>
            <div className={styles.quiz_choices}>
                <button className={styles.answer_btn} disabled={quizSelected.quiz10} onClick={()=>{setQuizSelected({quiz10:true})}}>django</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz10} onClick={()=>{setQuizSelected({quiz10:true})}}>Rails</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz10} onClick={()=>{setQuizSelected({quiz10:true})}}>Larawell</button>
                <button className={styles.answer_btn} disabled={quizSelected.quiz10} onClick={()=>{setWebDev(webDev+1);setQuizSelected({quiz10:true})}}>Bootstrap</button>
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
    <ToastContainer />
    </>
  )
}

export default QuizSkills