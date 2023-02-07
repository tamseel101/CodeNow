import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Register} from './Account/Register/Register';
import {Landing} from './Landing/Landing'
import { Login } from './Account/Login/Login';

function App() {


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
