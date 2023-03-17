import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../../Navbar'


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
                navigate("/prequiz/")
            }
          })
          .catch(function (error) {
            alert("Error. Username or email likely exist.")
          });

    }



    return(

        <div>

            <Navbar />


            <div className="container">

                <div className="auth-form-container mt-4">
                <h1 className="fw-bold">Register</h1>

                <form className="register-form" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input value={username} onChange={(e) => setUserName(e.target.value)}
                            type="name"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Enter your username here">
                        </input>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email here"
                            id="email"
                            className="form-control"
                            name="email">
                        </input>
                    </div>


                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Password</label>

                        <input value={pass} onChange={(e) => setPass(e.target.value)}
                            type="password"
                            placeholder="Enter your password here"
                            className="form-control"
                            id="password"
                            name="password">
                        </input>
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary pe-4 ps-4" id="register-button">register</button>
                    </div>
                </form>


                </div>

            </div>

        </div>

    )
}

export default Register; 