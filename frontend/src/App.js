import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Register} from './pages/Register';
import {Landing} from './pages/Landing'
import {Login} from './pages/Login';
import {Stats} from './pages/Stats';
import {Dashboard} from './pages/Dashboard'
import useToken from './Hooks/useToken';
import Attempt from './pages/Attempt'
import About from './pages/About';
import {QuizPage} from './pages/QuizPage'
import {BehavioralPage} from './pages/BehavioralPage'
import Navbar from "./components/Navbar";

function App() {

    const {token} = useToken()
    const loggedIn = !!token;

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/tempstats' element={<Stats/>}/>
                <Route exact path='/' element={loggedIn ? <Navigate to={'/dashboard'} /> : <Landing/>}/>

                <Route exact path="/dashboard" element={loggedIn ? <Dashboard/> : <Navigate to={'/'} />}/>
                <Route exact path="/skill-assessment" element={loggedIn ? <QuizPage/> : <Navigate to={'/'} /> }/>
                <Route exact path="/behavioral" element={loggedIn ? <BehavioralPage/> : <Navigate to={'/'} />}/>
                {/* <Route exact path="/stats" element={loggedIn ? <Stats/> : <Navigate to={'/'} />}/> */}
                <Route exact path='/attempt' element={loggedIn ? <Attempt/> : <Navigate to={'/'} />}/>
            </Routes>
        </div>
    );
}

export default App;
