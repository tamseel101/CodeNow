import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Register} from './Account/Register/Register';
import {Landing} from './Landing/Landing'
import { Login } from './Account/Login/Login';
import {Dashboard} from './Components/Dashboard_components/Dashboard'
import {InfoForm} from './Pre-quiz/InfoForm';
import useToken from './Hooks/useToken';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Attempt from './Attempt'


function App() {

  const { token, setToken } = useToken()

  useEffect(() => {console.log(token)}, [token])

  console.log(token)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/dashboard" element={!token ? <Landing setToken={ setToken }/> : <Dashboard name="John"/> }/>

        <Route exact path='/' element={!token ? <Landing setToken={ setToken }/> : <Dashboard name="John"/> }/>

        <Route path='/login'
          element= {!token ? <Login setToken={ setToken }  /> : <Navigate to ="/" />} />

        <Route exact path='/attempt' element={ <Attempt /> }/>

        <Route path='/post-quiz'
          element= {!token ? <InfoForm setToken={ setToken }  /> : <Navigate to ="dashboard/" />} />

          <Route path='/register'
          element= {!token ? <Register/> : <Navigate to ="/" />} />
      </Routes>
    </div>
  );
}

export default App;
