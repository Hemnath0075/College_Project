import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Quiz from './Pages/QuizPage/Quiz';
import { ToastContainer } from 'react-toastify';
import InterestOrSkill from './Pages/Interest_skill/InterestOrSkill';
import Home from './Pages/Home/Home';
import QuizInterest from './Pages/Quiz_Interest/QuizInterest';
import QuizSkills from './Pages/Quiz_Skills/QuizSkills';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/step-1' element={<Quiz/>}/>
        <Route path='/choose-your-quiztype' element={<InterestOrSkill/>}/>
        <Route path='/quiz-on-interest' element={<QuizInterest/>}/>
        <Route path='/quiz-on-skills' element={<QuizSkills/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
