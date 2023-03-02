import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Register} from './Account/Register/Register';
import {Landing} from './Landing/Landing'
import { Login } from './Account/Login/Login';
import {Dashboard} from './Components/Dashboard_components/Dashboard'
import useToken from './Hooks/useToken';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Attempt from './Attempt'
import {QuizPage} from './PreQuiz/QuizPage'


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
          element= {!token ? <Login setToken={ setToken }  /> : <Navigate to ="/" />} />

        <Route exact path='/attempt' element={ <Attempt /> }/>


          <Route path='/register'
          element= {!token ? <Register/> : <Navigate to ="/" />} />
      </Routes>
    </div>
  );
}

export default App;
