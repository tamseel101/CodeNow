import { useState } from "react";
import axios from 'axios';
import './Login.css'
import Navbar from '../../Navbar'
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // TODO: Refactor
    const handleSubmit = () => {

        // Send a request to the backend
        axios.post('http://localhost:8000/login', {
            "username": username,
            "password": password
          })
          .then(function (response) {
            if (response.data['error']) {
              alert(response.data['error'])
            } else {
              props.setToken(response.data['token'], response.data['user_id'])
              navigate("/")
            }
          })
          .catch(function (error) {
            alert(error);
          });

    }
    return(

        <div>
        <Navbar />

        <div className="container mt-4">
        <div className="auth-form-container">
        <h1 className="fw-bold">Log in</h1>

        <form className="login-form" onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label" htmlFor="username">Username</label>

              <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your username here"
                  id="email"
                  name="email">
              </input>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password here"
                  id="password"
                  name="password">
              </input>
            </div>

            <div className="mb-3">
              <button
                  className="btn btn-primary pe-4 ps-4"
                  id="login-button"
                  type="button"
                  onClick={handleSubmit}>
                    Log in
              </button>
            </div>

        </form>

        </div>
      </div>

        </div>

    )
}