import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUserName] = useState('');
    const navigate = useNavigate();

    // TODO: Refactor
    const handleSubmit = (e) => {
        e.preventDefault()
        // Send a request to the backend
        axios.post('http://localhost:8000/users/', {
            "username": username,
            "password": pass,
            "email": email
          })
          .then(function (response) {
            if (response.data['error']) {
              alert(response.data['error'])
            } else {
                alert("User created! Please login.")
                navigate("/")
            }
          })
          .catch(function (error) {
            alert("Error. Username or email likely exist.")
          });

    }



    return(
        <div className="auth-form-container">
            <h2>Register</h2>

            <form className="register-form" onSubmit={handleSubmit}>

                <label>username</label>
                <input value={username} onChange={(e) => setUserName(e.target.value)}
                    type="name"  
                    name="name" 
                    id="name" 
                    placeholder="enter your username here">
                </input>

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="enter your email here" 
                    id="email" 
                    name="email">
                </input>

                <label htmlFor="password">password</label>

                <input value={pass} onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="enter your password here" 
                    id="password" 
                    name="password">
                </input>
                <button id="register-button">register</button>
            </form>

            <Link to="/login" className="link-button" onClick={() =>props.onFormSwitch('login')}>
                already have an account? login here.
            </Link>
        </div>
    )
}

export default Register; 