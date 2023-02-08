import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import {Register} from './Account/Register/Register';
import {Landing} from './Landing/Landing'
import { Login } from './Account/Login/Login';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken
}


function App() {
  const token = getToken();


  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Landing/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/register" element={ <Register/> } />
      </Routes>
    </div>
  );
}

export default App;
