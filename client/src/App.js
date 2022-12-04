import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Quiz from './Pages/QuizPage/Quiz';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/predict-career' element={<Quiz/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
