import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Login.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    // TODO: Refactor
    const handleSubmit = (e) => {
        e.preventDefault()

        // Send a request to the backend
        axios.post('http://localhost:8000/login', {
            "username": username,
            "password": password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(function (response) {
            if (response.data['error']) {
              alert("no")
            } else {
              props.setToken(response.data['token'])
            }
          })
          .catch(function (error) {
            alert(error);
          });

    }
    return(
        <div className="auth-form-container">
            <h2>Log in</h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>

                <input value={username} onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="enter your username here" 
                    id="email" 
                    name="email">
                </input>

                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="enter your password here" 
                    id="password" 
                    name="password">
                </input>

                <button
                    id="login-button"
                    type="button"
                    onClick={handleSubmit}>log in</button>
            </form>

            <Link to="/Register" className="link-button" onClick={() =>props.onFormSwitch('register')}>
                don't have an account? register here.
            </Link>

        </div>
    )
}