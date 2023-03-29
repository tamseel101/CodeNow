import React, {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Register} from './pages/Register';
import {Landing} from './pages/Landing'
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard'
import useToken from './hooks/useToken';
import Attempt from './pages/Attempt'
import About from './pages/About';
import {QuizPage} from './pages/QuizPage'
import {BehavioralPage} from './pages/BehavioralPage'
import Navbar from "./components/Navbar";
import AllProblems from './pages/AllProblems';
import SingleProblem from './pages/SingleProblem';

function App() {

    const {token} = useToken()
    const [loggedIn, setLoggedIn] = useState(!!token);

    return (
        <div className="App">
            <Navbar onLogout={() => setLoggedIn(false)} />
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/' element={loggedIn ? <Navigate to={'/dashboard'} /> : <Landing/>}/>

                <Route exact path="/dashboard" element={loggedIn ? <Dashboard/> : <Navigate to={'/'} />}/>
                <Route exact path="/skill-assessment" element={loggedIn ? <QuizPage/> : <Navigate to={'/'} /> }/>
                <Route exact path="/behavioral" element={loggedIn ? <BehavioralPage/> : <Navigate to={'/'} />}/>
                <Route exact path='/attempt' element={loggedIn ? <Attempt/> : <Navigate to={'/'} />}/>
                <Route exact path='/problems' element={loggedIn ? <AllProblems/> : <Navigate to={'/'} />}/>
                <Route exact path='/problems/:id' element={loggedIn ? <SingleProblem /> : <Navigate to={'/'} />}/>
            </Routes>
        </div>
    );
}

export default App;
