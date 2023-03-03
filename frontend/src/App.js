import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Register} from './Account/Register/Register';
import {Landing} from './Landing/Landing'
import { Login } from './Account/Login/Login';
import {Dashboard} from './Components/Dashboard_components/Dashboard'
import InfoForm from './PreQuiz/InfoForm';
import useToken from './Hooks/useToken';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Attempt from './Attempt'
import About from './About';
import {QuizPage} from './PreQuiz/QuizPage'


function logout() {
  useEffect(()=>{
    localStorage.clear()
    },[])
}

function App() {

  const { token, setToken } = useToken()

  useEffect(() => {console.log(token)}, [token])

  console.log(token)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/dashboard" element={!token ? <Landing setToken={ setToken }/> : <Dashboard name="John"/> }/>
        <Route exact path="/prequiz" element={!token ? <Landing setToken={ setToken }/> : <QuizPage/> }/>
        <Route exact path='/' element={!token ? <Landing setToken={ setToken }/> : <Dashboard name="John"/> }/>

        <Route path='/login'
          element= {<Login setToken={ setToken }  /> } />

        <Route path='/logout'
          onEnter={logout()}
          element= {token ? <Landing setToken={ null }/> : <Navigate to ="/" />} />

        <Route path='/logout/login'
          element= {!token ? <Login setToken={ setToken }  /> : <Navigate to ="/" />} />

        <Route exact path='/attempt' element={ <Attempt /> }/>
          
        <Route path='/register' element= {<Register setToken={ setToken }  /> } />

        <Route exact path='/about' element={ <About /> }/>


        <Route exact path='/post-quiz' element={<InfoForm />}/>


      </Routes>
    </div>
  );
}

export default App;
