import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Register} from './Account/Register/Register';
import {Landing} from './Landing/Landing'
import { Login } from './Account/Login/Login';
import useToken from './Hooks/useToken';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
console.log("test")

function App() {

  const { token, setToken } = useToken()

  useEffect(() => {console.log(token)}, [token])

  console.log(token)

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={!token ? <Login setToken={ setToken }/> : <Landing setToken={ setToken }/>}/>

        <Route path='/login'
          element= {!token ? <Login setToken={ setToken }  /> : <Navigate to ="/" />} />


          <Route exact path="/register" element={ <Register/> } />
      </Routes>
    </div>
  );
}

export default App;
