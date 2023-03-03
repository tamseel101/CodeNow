import { useState } from "react";
import axios from 'axios';
import './Login.css'
import Navbar from '../../Navbar'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            }
          })
          .catch(function (error) {
            alert(error);
          });

    }
    return(

        <div>
        <Navbar />

        <div class="container mt-4">
        <div className="auth-form-container">
        <h1 className="fw-bold">Log in</h1>

        <form className="login-form" onSubmit={handleSubmit}>

            <div class="mb-3">
              <label className="form-label" for="username">Username</label>

              <input class="form-control" value={username} onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter your username here"
                  id="email"
                  name="email">
              </input>
            </div>

            <div class="mb-3">
              <label className="form-label" htmlFor="password">Password</label>
              <input class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password here"
                  id="password"
                  name="password">
              </input>
            </div>

            <div class="mb-3">
              <button
                  class="btn btn-primary pe-4 ps-4"
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